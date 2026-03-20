# Payment API Integration Research: SePay & VietQR

**Date:** 2026-03-20
**Focus:** Vietnam bank transfer auto-verification via SePay webhooks + VietQR QR codes

---

## 1. SePay API Webhook

### Webhook Fields Sent
SePay POST payloads include:
- `id` (unique transaction ID — use for idempotency)
- `amount` (transfer amount in VND)
- `account_number` (receiver account)
- `transfer_date` (timestamp)
- `reference_code` (bank reference)
- `transaction_content` (memo/description)
- `code` (status code)
- `accumulated_amount` (running total)

### Authentication Method
Three options (configured in SePay dashboard):
1. **OAuth 2.0**: SePay calls token endpoint for Access Token; sends `Authorization: Bearer {token}` header
2. **API Key**: SePay sends `Authorization: Apikey YOUR_API_KEY` header
3. **No Auth**: Plain POST (IP whitelist recommended via SePay support)

### Webhook Signature Verification
SePay does NOT enforce HMAC by default. For security:
- Option A: IP whitelist SePay's IPs (contact support)
- Option B: Implement custom HMAC-SHA256 on your endpoint (not standard SePay)
- Option C: Use OAuth 2.0 client credentials for implicit trust

### Retry Policy
- SePay auto-retries if response HTTP status ≠ 200–299
- Retry intervals: typical exponential backoff (exact schedule not published)
- Your endpoint must return HTTP 200/201 with `{"success": true}` body

### Registration & Base URL
1. Log into SePay dashboard (sepay.vn)
2. Navigate: **Webhooks menu** → "Add webhooks" button
3. Configure:
   - Event type: "Money in" / "Money out" / both
   - Bank account conditions: filter which accounts trigger
   - Call URL: your Deno Edge Function endpoint
   - Content type: `application/json` (recommended)
4. API base: Webhooks are POST-only; no REST query required

---

## 2. VietQR API

### Dynamic QR URL Format
```
https://img.vietqr.io/image/{bankCode}-{accountNumber}-{template}?{params}
```

Or via API:
```
GET https://api.vietqr.vn/v2/generate
```

### Key Parameters
| Parameter | Type | Notes |
|-----------|------|-------|
| `bank_code` (acqId) | string | E.g., `970415` (VietinBank), `970422` (Vietcombank) |
| `account_no` | string | Receiver account number |
| `account_name` | string | Account holder (no diacritics, no special chars) |
| `amount` | integer | Optional; amount in VND |
| `addInfo` | string | Max 19 chars, no special chars, no diacritics |
| `template` | string | QR template: `compact`, `print`, etc. |

### Supported Banks List Format
VietQR provides bank list endpoint (not hardcoded):
```
GET https://api.vietqr.vn/v2/banks
```
Returns JSON array:
```json
[
  { "id": "970415", "name": "VietinBank", "code": "VTB", "bin": "970415" },
  { "id": "970422", "name": "Vietcombank", "code": "VCB", "bin": "970422" }
]
```

### Example Dynamic QR
```
https://img.vietqr.io/image/970415-123456789-compact?amount=50000&addInfo=RoKdBot
```

---

## 3. Integration Pattern: SePay + VietQR Auto-Verify Flow

### Architecture
```
User initiates payment
  ↓
Generate VietQR code (with order amount + ID in addInfo)
  ↓
User scans & transfers from bank app
  ↓
Bank processes → SePay detects transfer
  ↓
SePay POST webhook to Deno Edge Function
  ↓
Edge Function verifies:
  - Amount matches
  - addInfo contains order ID
  - Timestamp within window
  ↓
Mark order PAID; send confirmation
```

### Code Flow (Pseudo)
```typescript
// Edge Function receives SePay webhook
POST /functions/v1/sepay-webhook {
  amount: 50000,
  account_number: "1234567890",
  reference_code: "TRF20260320123456",
  transaction_content: "RoKdBot" // maps to order ID
}

// Validate against DB:
// SELECT orders WHERE amount=50000 AND order_id='RoKdBot' AND status='pending'
// UPDATE orders SET status='paid', transaction_ref=...
// Send confirmation email
```

---

## 4. Supabase Edge Functions (Deno) Implementation

### Receiving Webhooks
```typescript
// supabase/functions/sepay-webhook/index.ts
Deno.serve(async (req) => {
  if (req.method === 'POST') {
    const payload = await req.json();
    // Process SePay webhook
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
  return new Response('Method not allowed', { status: 405 });
});
```

### CORS Handling
Edge Functions do NOT auto-handle CORS. Manually add headers:
```typescript
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

if (req.method === 'OPTIONS') {
  return new Response(null, { status: 204, headers: corsHeaders });
}
```

### Secrets Management
1. Set secret locally:
   ```bash
   supabase secrets set SEPAY_API_KEY=your_key_here
   supabase secrets set VIETQR_API_KEY=your_key_here
   ```

2. Access in function:
   ```typescript
   const sepayKey = Deno.env.get('SEPAY_API_KEY');
   const vietqrKey = Deno.env.get('VIETQR_API_KEY');
   ```

3. Verify via dashboard: **Project Settings** → **Secrets**

---

## Key Takeaways

- **SePay webhook**: Register in dashboard, no HMAC required by default, HTTP 200 + `{"success": true}` response
- **VietQR dynamic**: Simple HTTPS image URL or API call; supports amount + metadata
- **Integration**: SePay webhook triggers order verification; VietQR generates payment QR
- **Edge Functions**: Manual CORS headers required; secrets via `supabase secrets set`
- **Idempotency**: Always validate `transaction_id` uniqueness to handle SePay retries

---

## References

- [SePay Webhooks Documentation](https://developer.sepay.vn/en/sepay-webhooks/tich-hop-webhook)
- [SePay OAuth2 API](https://docs.sepay.vn/oauth2/api-webhooks.html)
- [VietQR API Overview](https://api.vietqr.vn/en)
- [Supabase Edge Functions Guide](https://supabase.com/docs/guides/functions)
- [Supabase Secrets Management](https://supabase.com/docs/guides/functions/secrets)
- [Edge Functions CORS](https://supabase.com/docs/guides/functions/cors)

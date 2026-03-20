-- RokdBot V2: Server-side payment code generation
-- Generates unique 6-char alphanumeric code on order INSERT
-- Replaces client-side generatePaymentCode() from Order.tsx

CREATE OR REPLACE FUNCTION generate_payment_code()
RETURNS TRIGGER AS $$
DECLARE
  chars TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  code TEXT := '';
  i INTEGER;
  attempts INTEGER := 0;
  code_exists BOOLEAN;
BEGIN
  LOOP
    code := '';
    FOR i IN 1..6 LOOP
      code := code || substr(chars, floor(random() * length(chars) + 1)::int, 1);
    END LOOP;

    -- Check uniqueness against pending orders only
    SELECT EXISTS(
      SELECT 1 FROM public.orders
      WHERE payment_code = code AND status = 'pending'
    ) INTO code_exists;

    EXIT WHEN NOT code_exists OR attempts > 10;
    attempts := attempts + 1;
  END LOOP;

  NEW.payment_code := code;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attach trigger to orders table
DROP TRIGGER IF EXISTS set_payment_code ON public.orders;
CREATE TRIGGER set_payment_code
  BEFORE INSERT ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION generate_payment_code();

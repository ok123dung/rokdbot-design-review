-- Add payment_code column to orders table for SePay integration
ALTER TABLE public.orders 
ADD COLUMN payment_code TEXT UNIQUE;

-- Create index for faster lookup
CREATE INDEX idx_orders_payment_code ON public.orders(payment_code);
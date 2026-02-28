-- Protect balance field from user manipulation
-- Drop existing user update policy and replace with one that prevents balance changes
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (
    auth.uid() = user_id AND
    balance IS NOT DISTINCT FROM (SELECT balance FROM public.profiles WHERE user_id = auth.uid())
  );

-- Add length constraints on orders table
ALTER TABLE public.orders
  ADD CONSTRAINT orders_game_account_id_max_length CHECK (char_length(game_account_id) <= 100),
  ADD CONSTRAINT orders_game_server_max_length CHECK (char_length(game_server) <= 50),
  ADD CONSTRAINT orders_game_kingdom_max_length CHECK (char_length(game_kingdom) <= 50),
  ADD CONSTRAINT orders_notes_max_length CHECK (char_length(notes) <= 2000);
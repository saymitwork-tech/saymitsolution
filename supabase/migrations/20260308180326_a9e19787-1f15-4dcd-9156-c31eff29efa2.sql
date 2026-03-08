
-- Fix: scope the public insert to be more explicit (anon + authenticated)
DROP POLICY "Anyone can create leads" ON public.leads;
CREATE POLICY "Anyone can create leads" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (true);

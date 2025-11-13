-- Add status tracking fields to calculator_submissions table
CREATE TYPE public.lead_status AS ENUM ('new', 'contacted', 'qualified', 'negotiating', 'won', 'lost');

ALTER TABLE public.calculator_submissions 
ADD COLUMN status public.lead_status NOT NULL DEFAULT 'new',
ADD COLUMN follow_up_date timestamp with time zone,
ADD COLUMN last_contacted_at timestamp with time zone,
ADD COLUMN notes text;

-- Create index for efficient querying of follow-ups
CREATE INDEX idx_calculator_submissions_follow_up 
ON public.calculator_submissions(follow_up_date) 
WHERE status NOT IN ('won', 'lost');

-- Create index for status filtering
CREATE INDEX idx_calculator_submissions_status 
ON public.calculator_submissions(status);

-- Add RLS policy for updating submissions (for admin/sales team)
CREATE POLICY "Authenticated users can update submissions" 
ON public.calculator_submissions 
FOR UPDATE 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- Create a function to automatically set follow_up_date for new high-value leads
CREATE OR REPLACE FUNCTION public.set_initial_follow_up_date()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- For high-value leads (>=20% or €500), set follow-up for next business day
  IF (NEW.savings_percentage >= 20 OR NEW.total_savings >= 500) AND NEW.follow_up_date IS NULL THEN
    NEW.follow_up_date = (CURRENT_DATE + interval '1 day');
  END IF;
  RETURN NEW;
END;
$$;

-- Create trigger to set initial follow-up date
CREATE TRIGGER set_initial_follow_up_date_trigger
BEFORE INSERT ON public.calculator_submissions
FOR EACH ROW
EXECUTE FUNCTION public.set_initial_follow_up_date();
-- Create table for calculator submissions
CREATE TABLE public.calculator_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Contact information
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  
  -- Basic information
  employees INTEGER NOT NULL,
  monthly_costs DECIMAL(10,2) NOT NULL,
  international_minutes INTEGER NOT NULL,
  sms_volume INTEGER NOT NULL,
  
  -- Fixed telephony
  system_type TEXT NOT NULL,
  fixed_lines INTEGER NOT NULL,
  national_minutes INTEGER NOT NULL,
  
  -- Mobile telephony
  mobile_subscriptions INTEGER NOT NULL,
  data_usage_gb INTEGER NOT NULL,
  
  -- Contract & remote work
  contract_months INTEGER NOT NULL,
  home_workers INTEGER NOT NULL,
  
  -- Calculated savings
  total_savings DECIMAL(10,2) NOT NULL,
  savings_percentage DECIMAL(5,2) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.calculator_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for anonymous submissions)
CREATE POLICY "Anyone can insert calculator submissions"
ON public.calculator_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can view submissions (for future admin panel)
CREATE POLICY "Authenticated users can view all submissions"
ON public.calculator_submissions
FOR SELECT
TO authenticated
USING (true);

-- Create index on created_at for efficient querying
CREATE INDEX idx_calculator_submissions_created_at ON public.calculator_submissions(created_at DESC);

-- Create index on email for lookups
CREATE INDEX idx_calculator_submissions_email ON public.calculator_submissions(email);
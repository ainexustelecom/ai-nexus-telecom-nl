-- Allow admins to delete calculator submissions (GDPR compliance)
CREATE POLICY "Admins can delete submissions" 
ON public.calculator_submissions 
FOR DELETE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));
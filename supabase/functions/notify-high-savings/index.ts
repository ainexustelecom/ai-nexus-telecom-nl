import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CalculatorSubmission {
  id: string;
  company_name: string | null;
  email: string;
  phone: string | null;
  employees: number;
  monthly_costs: number;
  total_savings: number;
  savings_percentage: number;
  system_type: string;
  mobile_subscriptions: number;
  data_usage_gb: number;
  fixed_lines: number;
  national_minutes: number;
  international_minutes: number;
  sms_volume: number;
  contract_months: number;
  home_workers: number;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const submission: CalculatorSubmission = await req.json();
    
    console.log('Processing submission:', submission);

    // Drempelwaarde voor "hoge besparingen": minimaal 20% of €500 per maand
    const isHighSavings = submission.savings_percentage >= 20 || submission.total_savings >= 500;

    if (!isHighSavings) {
      console.log('Savings not high enough to send notification');
      return new Response(
        JSON.stringify({ message: 'Submission saved, but savings below threshold' }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Verstuur email notificatie
    const emailResponse = await resend.emails.send({
      from: "Calculator Notificaties <onboarding@resend.dev>", // Vervang met jouw gevalideerde domein
      to: ["info@jouwbedrijf.nl"], // Vervang met het email adres van het bedrijf
      subject: `🎯 Nieuwe Lead: ${submission.savings_percentage.toFixed(0)}% besparing mogelijk!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Nieuwe Calculator Submission met Hoog Besparingspotentieel!</h1>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #059669; margin-top: 0;">💰 Besparingspotentieel</h2>
            <p style="font-size: 24px; font-weight: bold; color: #059669; margin: 10px 0;">
              €${submission.total_savings.toFixed(2)} per maand
            </p>
            <p style="font-size: 18px; color: #059669;">
              ${submission.savings_percentage.toFixed(1)}% besparing
            </p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1f2937; margin-top: 0;">📋 Contactgegevens</h2>
            <p><strong>Bedrijfsnaam:</strong> ${submission.company_name || 'Niet opgegeven'}</p>
            <p><strong>Email:</strong> <a href="mailto:${submission.email}">${submission.email}</a></p>
            <p><strong>Telefoon:</strong> ${submission.phone || 'Niet opgegeven'}</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1f2937; margin-top: 0;">🏢 Bedrijfsgegevens</h2>
            <p><strong>Aantal medewerkers:</strong> ${submission.employees}</p>
            <p><strong>Huidige maandelijkse kosten:</strong> €${submission.monthly_costs.toFixed(2)}</p>
            <p><strong>Huidig systeem:</strong> ${submission.system_type}</p>
            <p><strong>Thuiswerkers:</strong> ${submission.home_workers}</p>
            <p><strong>Contractduur:</strong> ${submission.contract_months} maanden</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1f2937; margin-top: 0;">📞 Communicatiegebruik</h2>
            <h3 style="color: #4b5563;">Vast</h3>
            <p><strong>Vaste lijnen:</strong> ${submission.fixed_lines}</p>
            <p><strong>Nationale minuten:</strong> ${submission.national_minutes}</p>
            
            <h3 style="color: #4b5563;">Mobiel</h3>
            <p><strong>Mobiele abonnementen:</strong> ${submission.mobile_subscriptions}</p>
            <p><strong>Data gebruik:</strong> ${submission.data_usage_gb} GB</p>
            
            <h3 style="color: #4b5563;">Overig</h3>
            <p><strong>Internationale minuten:</strong> ${submission.international_minutes}</p>
            <p><strong>SMS volume:</strong> ${submission.sms_volume}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Deze email is automatisch gegenereerd door de besparingscalculator.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        message: 'High savings notification sent',
        emailId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in notify-high-savings function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

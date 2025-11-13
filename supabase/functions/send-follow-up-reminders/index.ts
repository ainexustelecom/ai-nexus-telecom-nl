import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const resendApiKey = Deno.env.get("RESEND_API_KEY");
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadSubmission {
  id: string;
  company_name: string | null;
  email: string;
  phone: string | null;
  total_savings: number;
  savings_percentage: number;
  status: string;
  follow_up_date: string;
  last_contacted_at: string | null;
  created_at: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client with service role key for admin access
    const supabase = createClient(supabaseUrl!, supabaseServiceKey!);

    // Get leads that need follow-up (overdue and not won/lost)
    const { data: overdueLeads, error } = await supabase
      .from('calculator_submissions')
      .select('*')
      .lte('follow_up_date', new Date().toISOString())
      .not('status', 'in', '("won","lost")')
      .order('follow_up_date', { ascending: true });

    if (error) {
      console.error('Error fetching overdue leads:', error);
      throw error;
    }

    if (!overdueLeads || overdueLeads.length === 0) {
      console.log('No overdue leads found');
      return new Response(
        JSON.stringify({ message: 'No overdue leads to follow up' }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log(`Found ${overdueLeads.length} overdue leads`);

    // Prepare email with all overdue leads
    const leadsHtml = overdueLeads.map((lead: LeadSubmission) => {
      const daysSinceCreated = Math.floor(
        (Date.now() - new Date(lead.created_at).getTime()) / (1000 * 60 * 60 * 24)
      );
      const daysOverdue = Math.floor(
        (Date.now() - new Date(lead.follow_up_date).getTime()) / (1000 * 60 * 60 * 24)
      );

      return `
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
            <h3 style="color: #1f2937; margin: 0;">${lead.company_name || 'Niet opgegeven'}</h3>
            <span style="background-color: ${getStatusColor(lead.status)}; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: bold;">
              ${getStatusLabel(lead.status)}
            </span>
          </div>
          
          <div style="background-color: #fef3c7; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
            <p style="margin: 0; color: #92400e; font-weight: bold;">
              ⏰ ${daysOverdue} ${daysOverdue === 1 ? 'dag' : 'dagen'} te laat • ${daysSinceCreated} ${daysSinceCreated === 1 ? 'dag' : 'dagen'} geleden aangemaakt
            </p>
          </div>

          <div style="background-color: #f3f4f6; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
            <p style="margin: 0 0 8px 0; font-size: 20px; font-weight: bold; color: #059669;">
              €${lead.total_savings.toFixed(2)}/maand besparing (${lead.savings_percentage.toFixed(1)}%)
            </p>
          </div>

          <div style="margin-bottom: 8px;">
            <p style="margin: 4px 0;"><strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a></p>
            ${lead.phone ? `<p style="margin: 4px 0;"><strong>Telefoon:</strong> <a href="tel:${lead.phone}">${lead.phone}</a></p>` : ''}
            <p style="margin: 4px 0; font-size: 12px; color: #6b7280;">
              <strong>Lead ID:</strong> ${lead.id}
            </p>
          </div>
        </div>
      `;
    }).join('');

    // Send reminder email
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Lead Follow-up <onboarding@resend.dev>", // Vervang met jouw gevalideerde domein
        to: ["info@jouwbedrijf.nl"], // Vervang met het email adres van het sales team
        subject: `🔔 ${overdueLeads.length} ${overdueLeads.length === 1 ? 'Lead' : 'Leads'} wacht${overdueLeads.length === 1 ? '' : 'en'} op follow-up`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
            <h1 style="color: #2563eb;">Follow-up Reminder: ${overdueLeads.length} ${overdueLeads.length === 1 ? 'Lead' : 'Leads'}</h1>
            
            <div style="background-color: #fee2e2; border-left: 4px solid #dc2626; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
              <p style="margin: 0; color: #991b1b; font-weight: bold;">
                ⚠️ De volgende leads hebben een follow-up datum die is verstreken
              </p>
            </div>

            ${leadsHtml}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                Deze reminder is automatisch gegenereerd door het lead follow-up systeem.
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      throw new Error(`Resend API error: ${JSON.stringify(errorData)}`);
    }

    const emailData = await emailResponse.json();
    console.log("Reminder email sent successfully:", emailData);

    return new Response(
      JSON.stringify({ 
        message: `Reminder sent for ${overdueLeads.length} leads`,
        emailId: emailData.id,
        leadsCount: overdueLeads.length
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-follow-up-reminders function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

function getStatusColor(status: string): string {
  const colors: { [key: string]: string } = {
    'new': '#3b82f6',
    'contacted': '#8b5cf6',
    'qualified': '#10b981',
    'negotiating': '#f59e0b',
    'won': '#059669',
    'lost': '#6b7280',
  };
  return colors[status] || '#6b7280';
}

function getStatusLabel(status: string): string {
  const labels: { [key: string]: string } = {
    'new': 'Nieuw',
    'contacted': 'Gecontacteerd',
    'qualified': 'Gekwalificeerd',
    'negotiating': 'Onderhandeling',
    'won': 'Gewonnen',
    'lost': 'Verloren',
  };
  return labels[status] || status;
}

serve(handler);

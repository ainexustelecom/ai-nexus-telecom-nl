import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, BarChart3, Zap, Users, Bell, CreditCard } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";

const SelfService = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={dashboardHero} alt="Self-Service Platform" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zelfbeheer Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Beheer al uw telecomdiensten vanuit één krachtig, intuïtief dashboard
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Dashboard Demo
                </Button>
              </Link>
              <Link to="/prijzen">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Gratis Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Alles Onder Controle
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete controle over uw telecom infrastructuur zonder technische kennis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Centraal Beheer",
                description: "Beheer nummers, diensten, gebruikers en instellingen vanuit één centrale locatie."
              },
              {
                icon: BarChart3,
                title: "Realtime Analytics",
                description: "Live dashboards met gebruik, kosten en performance metrics."
              },
              {
                icon: Zap,
                title: "Instant Provisioning",
                description: "Activeer nieuwe diensten en nummers met één klik zonder wachttijd."
              },
              {
                icon: Users,
                title: "Team Management",
                description: "Gebruikersrollen en rechten beheren met granulaire toegangscontrole."
              },
              {
                icon: Bell,
                title: "Smart Alerts",
                description: "Automatische waarschuwingen voor budgetlimieten, uitval en belangrijke events."
              },
              {
                icon: CreditCard,
                title: "Facturatie Inzicht",
                description: "Gedetailleerde kostenanalyse en voorspellingen voor budgetplanning."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-secondary rounded-lg p-3 w-fit mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dashboard Mogelijkheden
            </h2>
            <p className="text-xl text-muted-foreground">
              Alles wat u nodig heeft om uw telecomdiensten te beheren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Nummer Management",
                description: "Koop, porteer en beheer telefoonnummers in minuten. Configureer routing en forwarding regels."
              },
              {
                title: "Usage Monitoring",
                description: "Real-time overzicht van gesprekken, berichten en data gebruik met exporteerbare rapporten."
              },
              {
                title: "API Key Management",
                description: "Genereer en beheer API keys voor integraties met volledige toegangscontrole."
              },
              {
                title: "Billing & Invoices",
                description: "Geautomatiseerde facturering met downloadbare facturen en betaalgeschiedenis."
              },
              {
                title: "Service Configuration",
                description: "Configureer voicemail, call forwarding, IVR en andere diensten zonder technische kennis."
              },
              {
                title: "Support Tickets",
                description: "Ingebouwd ticketsysteem voor snelle en efficiënte support."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Voordelen van Zelfbeheer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bespaar Tijd",
                description: "Geen wachten op support - wijzigingen doorvoeren wanneer het u uitkomt."
              },
              {
                title: "Verlaag Kosten",
                description: "Elimineer onnodige diensten en optimaliseer gebruik met inzichtelijke analytics."
              },
              {
                title: "Verhoog Controle",
                description: "Volledige transparantie en controle over al uw telecomdiensten."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Neem Controle Over Uw Telecom
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ervaar de kracht van zelfbeheer met ons intuïtieve platform
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Gratis Account Aanmaken
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SelfService;
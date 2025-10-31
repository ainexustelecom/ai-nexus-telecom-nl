import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Send, BarChart3, Globe2, Clock, Shield } from "lucide-react";
import messagingHero from "@/assets/messaging-hero.jpg";

const Messaging = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={messagingHero} alt="Messaging Platform" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Berichten Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Wereldwijde SMS, MMS en programmeerbare berichtenoplossingen voor elke communicatiebehoefte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Gratis Demo Aanvragen
                </Button>
              </Link>
              <Link to="/prijzen">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Bekijk Prijzen
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
              Krachtige Berichtenoplossingen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bereik uw klanten overal ter wereld met betrouwbare en schaalbare berichtendiensten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "SMS & MMS Wereldwijd",
                description: "Verzend tekstberichten en multimedia-berichten naar meer dan 180 landen met hoge bezorgbaarheid."
              },
              {
                icon: Send,
                title: "Bulk Berichten",
                description: "Verstuur duizenden berichten tegelijk voor marketingcampagnes, notificaties en meer."
              },
              {
                icon: BarChart3,
                title: "Realtime Analytics",
                description: "Volg bezorgstatus, open rates en conversies met gedetailleerde rapportages."
              },
              {
                icon: Globe2,
                title: "Two-Way Messaging",
                description: "Communiceer bidirectioneel met klanten via SMS voor klantenservice en engagement."
              },
              {
                icon: Clock,
                title: "Geplande Verzending",
                description: "Plan berichten vooruit en verstuur op het optimale moment voor maximale impact."
              },
              {
                icon: Shield,
                title: "Veilig & Compliant",
                description: "GDPR-compliant met encryptie en veilige opslag van gegevens."
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

      {/* Use Cases Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Gebruik Cases
            </h2>
            <p className="text-xl text-muted-foreground">
              Ontdek hoe bedrijven onze berichtenoplossingen gebruiken
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Marketing Campagnes",
                description: "Verstuur promoties, aanbiedingen en updates naar uw klantenbestand met hoge open rates."
              },
              {
                title: "Transactionele Berichten",
                description: "Stuur orderbevestigingen, verzendnotificaties en betaalherinneringen automatisch."
              },
              {
                title: "Two-Factor Authenticatie",
                description: "Beveilig accounts met SMS-gebaseerde verificatiecodes voor extra beveiliging."
              },
              {
                title: "Afspraakherinneringen",
                description: "Verminder no-shows met geautomatiseerde afspraakbevestigingen en herinneringen."
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start met Berichten Versturen
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Bereik uw klanten waar ze ook zijn met onze betrouwbare berichtenoplossing
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

export default Messaging;
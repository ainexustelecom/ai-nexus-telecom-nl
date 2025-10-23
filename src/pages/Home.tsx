import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Globe, Wifi, Network, FileText, ArrowRight, CheckCircle2 } from "lucide-react";

const Home = () => {
  const stats = [
    { value: "99,999%", label: "Uptime" },
    { value: "180+", label: "Landen" },
    { value: "24/7", label: "Ondersteuning" },
    { value: "AI", label: "Gedreven" },
  ];

  const features = [
    { icon: Phone, title: "AI Spraakagenten", desc: "Natuurlijke gesprekken met AI" },
    { icon: MessageSquare, title: "Berichten", desc: "SMS & MMS wereldwijd" },
    { icon: Globe, title: "Wereldwijde Nummers", desc: "Lokale aanwezigheid overal" },
    { icon: Wifi, title: "Draadloos & IoT", desc: "Apparaten verbinden" },
    { icon: Network, title: "Netwerken", desc: "Betrouwbare infrastructuur" },
    { icon: FileText, title: "API's", desc: "Flexibele integraties" },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-secondary py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                AI-Gedreven Telecom voor <span className="text-primary">Naadloze Connecties</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transformeer uw communicatie met AI-geïntegreerde oplossingen, powered by AI Nexus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/diensten">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant w-full sm:w-auto">
                    Ontdek Onze Diensten
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Gratis Consult Aanvragen
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground italic pt-4">
                "Iedereen is klaar voor AI behalve uw data™"
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-3xl shadow-elegant flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Network className="h-32 w-32 mx-auto mb-4 opacity-90" />
                  <p className="text-xl font-semibold">Betrouwbare AI-Telecom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Telecomoplossingen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Van spraak tot data, van lokaal tot wereldwijd – alles wat u nodig heeft
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/diensten">
              <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                Bekijk Alle Diensten
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Waarom AI Nexus Telecom?
              </h2>
              <div className="space-y-4">
                {[
                  "AI-gedreven innovatie voor slimme communicatie",
                  "Veilig en compliant volgens GDPR-regelgeving",
                  "Snelle implementatie binnen enkele dagen",
                  "Superieure gesprekskwaliteit met lage latentie",
                  "Wereldwijd netwerk in meer dan 180 landen",
                  "24/7 expert ondersteuning in het Nederlands",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/waarom-wij" className="inline-block mt-8">
                <Button variant="default" className="bg-primary hover:bg-primary/90">
                  Meer Over Ons
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold text-foreground mb-6">Klaar om te starten?</h3>
              <p className="text-muted-foreground mb-6">
                Ontdek hoe AI Nexus Telecom uw bedrijfscommunicatie kan transformeren met onze innovatieve oplossingen.
              </p>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Neem Contact Op
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Begin vandaag nog met AI-gedreven telecom
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Sluit u aan bij toonaangevende bedrijven die AI Nexus Telecom vertrouwen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Gratis Consult
              </Button>
            </Link>
            <Link to="/prijzen">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                Bekijk Prijzen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

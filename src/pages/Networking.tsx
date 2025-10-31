import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Network, Globe, Shield, Zap, TrendingUp, Server } from "lucide-react";
import networkingHero from "@/assets/networking-hero.jpg";

const Networking = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={networkingHero} alt="Global Networking" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wereldwijde Netwerk Infrastructuur
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              High-performance privé netwerken met lage latentie en hoge betrouwbaarheid
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Netwerk Ontwerpen
                </Button>
              </Link>
              <Link to="/prijzen">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Bekijk Opties
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
              Enterprise-Grade Netwerken
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Betrouwbare, schaalbare netwerkinfrastructuur voor missiekritische communicatie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: "Privé Netwerken",
                description: "Dedicated netwerkverbindingen met gegarandeerde bandbreedte en prestaties."
              },
              {
                icon: Zap,
                title: "Lage Latentie",
                description: "Geoptimaliseerde routing voor minimale vertraging en maximale snelheid."
              },
              {
                icon: Globe,
                title: "Wereldwijde Backbone",
                description: "Eigen glasvezelnetwerk met punten van aanwezigheid op alle continenten."
              },
              {
                icon: Shield,
                title: "DDoS Bescherming",
                description: "Ingebouwde beveiliging tegen aanvallen voor ononderbroken connectiviteit."
              },
              {
                icon: TrendingUp,
                title: "99.99% Uptime",
                description: "Redundante infrastructuur en automatische failover voor maximale beschikbaarheid."
              },
              {
                icon: Server,
                title: "SD-WAN Ready",
                description: "Software-defined networking voor flexibel beheer en optimalisatie."
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

      {/* Solutions Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Netwerk Oplossingen
            </h2>
            <p className="text-xl text-muted-foreground">
              Op maat gemaakte netwerkoplossingen voor elke behoefte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "MPLS Netwerken",
                description: "Multi-Protocol Label Switching voor veilige site-to-site verbindingen met Quality of Service."
              },
              {
                title: "Cloud Connectivity",
                description: "Directe verbindingen naar AWS, Azure, Google Cloud en andere cloud providers."
              },
              {
                title: "Internet Breakout",
                description: "Geoptimaliseerde internet toegang met load balancing en redundantie."
              },
              {
                title: "Carrier Ethernet",
                description: "High-speed Ethernet diensten voor point-to-point en multipoint verbindingen."
              }
            ].map((solution, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upgrade Uw Netwerk Infrastructuur
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ontdek hoe onze netwerkoplossingen uw bedrijf naar het volgende level brengen
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Netwerk Assessment Aanvragen
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Networking;
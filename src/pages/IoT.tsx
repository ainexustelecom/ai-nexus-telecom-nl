import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wifi, Cpu, Globe, TrendingUp, Shield, Zap } from "lucide-react";
import iotHero from "@/assets/iot-hero.jpg";

const IoT = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={iotHero} alt="IoT Connectivity" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Draadloos & IoT
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              AI-geoptimaliseerde IoT-connectiviteit voor slimme apparaten wereldwijd
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  IoT Oplossing Starten
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
              IoT Connectiviteit op Schaal
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Verbind miljoenen apparaten met betrouwbare, wereldwijde draadloze oplossingen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: "IoT SIM-kaarten",
                description: "Multi-network SIM-kaarten die automatisch verbinden met het beste beschikbare netwerk."
              },
              {
                icon: Globe,
                title: "Wereldwijde Dekking",
                description: "Connectiviteit in meer dan 190 landen met één enkele SIM-kaart."
              },
              {
                icon: Cpu,
                title: "AI-Optimalisatie",
                description: "Machine learning optimaliseert netwerkprestaties en voorkomt uitval."
              },
              {
                icon: TrendingUp,
                title: "Schaalbaar Platform",
                description: "Van prototype tot miljoenen apparaten, onze oplossing schaalt mee."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "VPN, private APN en end-to-end encryptie voor veilige verbindingen."
              },
              {
                icon: Zap,
                title: "Lage Latentie",
                description: "Geoptimaliseerde routing voor real-time IoT toepassingen."
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
              IoT Toepassingen
            </h2>
            <p className="text-xl text-muted-foreground">
              Ontdek hoe bedrijven IoT-connectiviteit inzetten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Smart Cities",
                description: "Slimme verlichting, verkeersbeheer en afvalbeheer voor moderne steden."
              },
              {
                title: "Fleet Management",
                description: "Real-time tracking en monitoring van voertuigen en assets wereldwijd."
              },
              {
                title: "Industrial IoT",
                description: "Verbind machines en productiesystemen voor predictive maintenance."
              },
              {
                title: "Smart Meters",
                description: "Automatisch uitlezen van energie- en watermeters voor utilities."
              },
              {
                title: "Healthcare Devices",
                description: "Medische apparaten verbinden voor remote patient monitoring."
              },
              {
                title: "Agriculture",
                description: "Slimme irrigatie en crop monitoring voor precisielandbouw."
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
            Start Uw IoT Project
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Verbind uw apparaten wereldwijd met onze betrouwbare IoT-connectiviteit
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              IoT Consult Aanvragen
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IoT;
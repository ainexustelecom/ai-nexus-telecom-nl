import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, MapPin, Clock, Shield, TrendingUp, Users } from "lucide-react";
import globalNumbersHero from "@/assets/global-numbers-hero.jpg";

const GlobalNumbers = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={globalNumbersHero} alt="Global Numbers" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wereldwijde Telefoonnummers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Lokale aanwezigheid in meer dan 180 landen met directe activering en flexibel beheer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Nummers Bekijken
                </Button>
              </Link>
              <Link to="/prijzen">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Prijzen Vergelijken
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
              Waarom Wereldwijde Nummers?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bouw vertrouwen op en verhoog bereikbaarheid met lokale telefoonnummers wereldwijd
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "180+ Landen",
                description: "Verkrijg lokale nummers in meer dan 180 landen voor wereldwijde bereikbaarheid."
              },
              {
                icon: MapPin,
                title: "Lokale Aanwezigheid",
                description: "Creëer vertrouwen met lokale telefoonnummers in elke markt waar u actief bent."
              },
              {
                icon: Clock,
                title: "Directe Activering",
                description: "Activeer nieuwe nummers binnen minuten en begin direct met bellen."
              },
              {
                icon: Shield,
                title: "Nummer Portabiliteit",
                description: "Behoud uw bestaande nummers bij overstap naar ons platform."
              },
              {
                icon: TrendingUp,
                title: "Schaalbaar",
                description: "Voeg eenvoudig nummers toe naarmate uw bedrijf groeit en uitbreidt."
              },
              {
                icon: Users,
                title: "Flexibel Beheer",
                description: "Beheer al uw nummers centraal via één intuïtief dashboard."
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

      {/* Number Types Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Type Nummers
            </h2>
            <p className="text-xl text-muted-foreground">
              Kies het juiste nummer voor uw bedrijf
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lokale Nummers",
                description: "Nummers met lokale landcode voor specifieke steden of regio's.",
                features: ["Bouw lokaal vertrouwen", "Lagere belkosten", "Hoge beantwoordingsratio"]
              },
              {
                title: "Nationale Nummers",
                description: "Landelijke nummers zoals 0800 gratis nummers voor heel het land.",
                features: ["Gratis voor bellers", "Professionele uitstraling", "Landelijke dekking"]
              },
              {
                title: "Mobiele Nummers",
                description: "Mobiele nummers voor SMS en spraakdiensten wereldwijd.",
                features: ["SMS-enabled", "Wereldwijd bereikbaar", "Flexibel routing"]
              }
            ].map((type, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klaar voor Wereldwijde Bereikbaarheid?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Verkrijg lokale nummers in minuten en start met bouwen aan uw wereldwijde aanwezigheid
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Nummers Reserveren
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GlobalNumbers;
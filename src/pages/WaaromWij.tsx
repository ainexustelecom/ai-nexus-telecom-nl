import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Zap, Award, Phone, Globe, HeadphonesIcon, Lock, TrendingUp } from "lucide-react";

const WaaromWij = () => {
  const benefits = [
    {
      icon: Zap,
      title: "AI-gedreven Innovatie",
      description: "Gebruik AI om communicatie te optimaliseren, van spraakherkenning tot intelligente routing voor betere klantinteracties.",
    },
    {
      icon: Shield,
      title: "Veilig en Compliant",
      description: "Voldoet aan GDPR en andere Europese regelgeving. Uw data blijft veilig met enterprise-grade beveiliging.",
    },
    {
      icon: Zap,
      title: "Snelle Implementatie",
      description: "Diensten snel operationeel binnen enkele dagen. Geen langdurige installaties, direct aan de slag.",
    },
    {
      icon: Award,
      title: "Bewezen Expertise",
      description: "Onderdeel van AI Nexus, expert in AI en data. Profiteer van jaren ervaring in telecom en technologie.",
    },
    {
      icon: Phone,
      title: "Superieure Gesprekskwaliteit",
      description: "HD-spraak en lage latentie voor kristalheldere gesprekken. Wereldklasse infrastructuur voor optimale kwaliteit.",
    },
    {
      icon: Globe,
      title: "Wereldwijd Netwerk",
      description: "Dekking in 180+ landen met lokale aanwezigheid. Bereik uw klanten overal ter wereld met één platform.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Expert Ondersteuning",
      description: "Nederlandstalige support die altijd voor u klaarstaat. Technische experts beschikbaar wanneer u ze nodig heeft.",
    },
    {
      icon: TrendingUp,
      title: "Schaalbaarheid",
      description: "Groei moeiteloos van startup tot enterprise. Onze infrastructuur groeit mee met uw ambities.",
    },
  ];

  const stats = [
    { value: "99,999%", label: "Uptime Garantie", icon: Shield },
    { value: "<50ms", label: "Gemiddelde Latentie", icon: Zap },
    { value: "180+", label: "Landen Wereldwijd", icon: Globe },
    { value: "24/7", label: "Expert Ondersteuning", icon: HeadphonesIcon },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Waarom <span className="text-primary">AI Nexus Telecom</span>?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ontdek waarom toonaangevende bedrijven kiezen voor onze AI-gedreven telecomoplossingen
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-secondary border border-border hover:shadow-elegant transition-all duration-300"
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Onze Voordelen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Wat maakt AI Nexus Telecom de beste keuze voor uw bedrijf?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-secondary rounded-lg p-3 w-fit mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vertrouwd door Bedrijven Wereldwijd
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                AI Nexus Telecom is de keuze van innovatieve bedrijven die het beste verwachten 
                van hun communicatie-infrastructuur. Onze AI-gedreven aanpak zorgt voor:
              </p>
              <ul className="space-y-4">
                {[
                  "Lagere kosten door intelligente routing",
                  "Betere klantervaring met AI-assistenten",
                  "Verhoogde productiviteit door automatisering",
                  "Realtime inzichten in communicatiedata",
                  "Schaalbaarheid zonder compromissen",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block mt-8">
                <Button className="bg-primary hover:bg-primary/90">
                  Plan een Demo
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Lock, title: "Beveiliging", desc: "Enterprise-grade encryptie" },
                { icon: Shield, title: "Compliance", desc: "GDPR & ISO gecertificeerd" },
                { icon: Zap, title: "Performance", desc: "Lage latentie netwerk" },
                { icon: TrendingUp, title: "Groei", desc: "Onbeperkt schaalbaar" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-border hover:shadow-elegant transition-all duration-300"
                >
                  <item.icon className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ervaar het Verschil
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ontdek waarom AI Nexus Telecom de slimme keuze is voor uw bedrijf
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Gratis Consult
              </Button>
            </Link>
            <Link to="/aanpak">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                Bekijk Onze Aanpak
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaaromWij;

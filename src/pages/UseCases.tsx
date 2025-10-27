import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Headphones, Server, TrendingUp, Heart, Building, ShoppingCart, GraduationCap, Plane } from "lucide-react";
import contactCenterImage from "@/assets/contact-center.jpg";

const UseCases = () => {
  const useCases = [
    {
      icon: Headphones,
      title: "Contactcenters",
      description: "AI-spraakagenten voor efficiënte klantenservice met natuurlijke gesprekken en intelligente routing.",
      benefits: [
        "Lagere operationele kosten",
        "24/7 beschikbaarheid",
        "Kortere wachttijden",
        "Hogere klanttevredenheid",
      ],
      stats: { metric: "40%", label: "Kostenbesparing" },
    },
    {
      icon: Server,
      title: "Beheerde Dienstverleners",
      description: "Schaalbare telecomoplossingen voor MSP's die white-label diensten aanbieden aan hun klanten.",
      benefits: [
        "White-label oplossingen",
        "Multi-tenant architectuur",
        "Geautomatiseerde provisioning",
        "Partner portaal",
      ],
      stats: { metric: "10x", label: "Snellere Onboarding" },
    },
    {
      icon: TrendingUp,
      title: "Operationele Verbeteringen",
      description: "AI-geoptimaliseerde workflows voor betere bedrijfsprocessen en verhoogde productiviteit.",
      benefits: [
        "Procesautomatisering",
        "Realtime analytics",
        "Predictieve insights",
        "Workflow optimalisatie",
      ],
      stats: { metric: "60%", label: "Meer Efficiency" },
    },
    {
      icon: Heart,
      title: "Gezondheidszorg",
      description: "Veilige communicatie voor medische instellingen met GDPR-compliant opslag en versleuteling.",
      benefits: [
        "Patiënt communicatie",
        "Afspraken beheer",
        "Noodoproepen routing",
        "Compliance garantie",
      ],
      stats: { metric: "99.99%", label: "Betrouwbaarheid" },
    },
    {
      icon: Building,
      title: "Financiële Diensten",
      description: "Compliance-ready telecom voor banken en verzekeraars met geavanceerde beveiligingsfuncties.",
      benefits: [
        "Beveiligde gesprekken",
        "Call recording",
        "Compliance reporting",
        "Fraud detectie",
      ],
      stats: { metric: "100%", label: "Compliance" },
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Klantinteractie optimalisatie met AI-assistenten voor verkoop en klantenservice.",
      benefits: [
        "Order updates via SMS",
        "AI chatbots",
        "Klantenservice automation",
        "Conversie tracking",
      ],
      stats: { metric: "35%", label: "Meer Conversies" },
    },
    {
      icon: GraduationCap,
      title: "Onderwijs",
      description: "Communicatieplatformen voor scholen en universiteiten met ouder-leerkracht interacties.",
      benefits: [
        "Studenten notificaties",
        "Ouder communicatie",
        "Crisis alerts",
        "Event reminders",
      ],
      stats: { metric: "90%", label: "Betere Bereikbaarheid" },
    },
    {
      icon: Plane,
      title: "Logistiek & Transport",
      description: "Realtime tracking en communicatie voor transport en logistics operations.",
      benefits: [
        "Chauffeur communicatie",
        "Klant updates",
        "Route optimalisatie",
        "Delivery confirmaties",
      ],
      stats: { metric: "50%", label: "Snellere Levering" },
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gebruiksscenario's & <span className="text-primary">Industrieën</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ontdek hoe AI Nexus Telecom verschillende sectoren helpt met innovatieve communicatieoplossingen
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="bg-secondary rounded-lg p-3 w-fit mb-4">
                  <useCase.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{useCase.description}</p>
                
                <div className="space-y-2 mb-4">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 rounded-lg p-4 text-center mt-auto">
                  <div className="text-3xl font-bold text-primary">{useCase.stats.metric}</div>
                  <div className="text-xs text-muted-foreground">{useCase.stats.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <img 
              src={contactCenterImage} 
              alt="Contactcenter met AI spraakagenten" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-elegant mb-8"
            />
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-border shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Casestudy
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Hoe een Contactcenter 40% Kosten Bespaarde
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Een toonaangevend contactcenter in de financiële sector transformeerde hun klantenservice 
                  met AI Nexus Telecom's AI-spraakagenten.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Uitdaging:</h4>
                    <p className="text-muted-foreground">
                      Hoge operationele kosten door groot aantal human agents en lange wachttijden voor klanten.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Oplossing:</h4>
                    <p className="text-muted-foreground">
                      Implementatie van AI-spraakagenten voor tier-1 vragen en intelligente routing voor complexere cases.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Resultaat:</h4>
                    <p className="text-muted-foreground">
                      40% lagere kosten, 60% kortere wachttijden, en 25% hogere klanttevredenheid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "40%", label: "Kostenbesparing" },
                    { value: "60%", label: "Kortere Wachttijd" },
                    { value: "25%", label: "Hogere Tevredenheid" },
                    { value: "24/7", label: "Beschikbaarheid" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-secondary rounded-xl p-6 text-center border border-border">
                      <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Vraag Uw Eigen Casestudy Aan
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Specific Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Branche-specifieke Oplossingen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elke industrie heeft unieke behoeften. Wij leveren maatwerkoplossingen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Compliance & Beveiliging",
                desc: "GDPR, HIPAA, PCI-DSS compliant oplossingen",
                industries: ["Gezondheidszorg", "Financiën", "Overheid"],
              },
              {
                title: "Schaalbaarheid",
                desc: "Van enkele gesprekken tot miljoenen per dag",
                industries: ["Retail", "E-commerce", "Contactcenters"],
              },
              {
                title: "Integraties",
                desc: "Naadloze koppelingen met uw bestaande systemen",
                industries: ["Alle Industrieën"],
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.industries.map((industry, idx) => (
                    <span
                      key={idx}
                      className="bg-secondary text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klaar voor een Oplossing op Maat?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ontdek hoe AI Nexus Telecom uw industrie kan transformeren
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Bespreek Uw Use Case
              </Button>
            </Link>
            <Link to="/diensten">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                Bekijk Alle Diensten
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;

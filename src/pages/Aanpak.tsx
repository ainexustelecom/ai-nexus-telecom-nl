import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Code, Rocket, BarChart, ArrowRight } from "lucide-react";

const Aanpak = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Analyse & Strategie",
      description: "We beginnen met een grondige analyse van uw communicatiebehoeften en bedrijfsdoelen.",
      details: [
        "Intake gesprek met stakeholders",
        "Analyse van huidige infrastructuur",
        "Identificatie van verbeterpunten",
        "Strategisch advies op maat",
        "ROI calculatie en business case",
      ],
    },
    {
      number: "02",
      icon: Code,
      title: "Ontwikkeling",
      description: "Onze experts bouwen maatwerkoplossingen met naadloze AI-integraties die perfect aansluiten bij uw behoeften.",
      details: [
        "Configuratie van diensten",
        "API integraties",
        "Aanpassing AI-agents",
        "Testing in sandbox omgeving",
        "Kwaliteitscontroles",
      ],
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implementatie",
      description: "Snelle en betrouwbare uitrol van diensten met minimale verstoring van uw dagelijkse operaties.",
      details: [
        "Gefaseerde migratie",
        "Training van medewerkers",
        "Monitoring tijdens rollout",
        "Performance optimalisatie",
        "Go-live ondersteuning",
      ],
    },
    {
      number: "04",
      icon: BarChart,
      title: "Optimalisatie & Ondersteuning",
      description: "Continue verbetering en 24/7 support zorgen ervoor dat u optimaal profiteert van onze oplossingen.",
      details: [
        "24/7 technische support",
        "Proactieve monitoring",
        "Regelmatige rapportages",
        "Doorlopende optimalisatie",
        "Strategische consultancy",
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Onze <span className="text-primary">Aanpak</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van strategie tot succes: ons bewezen 4-stappenproces voor telecomtransformatie
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                    <div className="bg-primary rounded-xl p-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gradient-primary rounded-2xl p-12 text-center shadow-elegant">
                    <step.icon className="h-32 w-32 text-white mx-auto opacity-90" />
                    <p className="text-white text-xl font-semibold mt-6">Stap {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Typische Tijdlijn
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Van eerste contact tot volledig operationeel in recordtijd
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { week: "Week 1", phase: "Discovery", desc: "Intake en analyse" },
              { week: "Week 2", phase: "Design", desc: "Architectuur en configuratie" },
              { week: "Week 3", phase: "Development", desc: "Implementatie en testing" },
              { week: "Week 4", phase: "Deployment", desc: "Go-live en training" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-4 hover:shadow-elegant transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">{item.week}</div>
                  <div className="text-lg font-semibold text-foreground mb-1">{item.phase}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-primary mx-auto hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-2xl p-12 text-center border border-border">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Onze Garantie
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We garanderen een soepele implementatie en zorgen ervoor dat u binnen 4 weken 
              volledig operationeel bent met meetbare verbeteringen in uw communicatie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "99.999%", subtitle: "Uptime SLA" },
                { title: "< 4 weken", subtitle: "Time to Value" },
                { title: "24/7", subtitle: "Support" },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.subtitle}</div>
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
            Klaar om te Beginnen?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Laten we uw telecomtransformatie vandaag nog starten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Plan een Gesprek
              </Button>
            </Link>
            <Link to="/diensten">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                Bekijk Diensten
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aanpak;

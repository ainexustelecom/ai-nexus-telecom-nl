import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Lightbulb, Award, ExternalLink } from "lucide-react";

const OverOns = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Over <span className="text-primary">AI Nexus Telecom</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Onderdeel van AI Nexus - Uw partner in AI-gedreven communicatie
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Wie Zijn Wij?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                AI Nexus Telecom is de telecomdivisie van AI Nexus, gespecialiseerd in het leveren 
                van AI-geïntegreerde communicatieoplossingen voor moderne bedrijven.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Als onderdeel van AI Nexus profiteren we van jarenlange expertise in kunstmatige 
                intelligentie en data-analyse. Deze kennis combineren we met geavanceerde telecominfrastructuur 
                om onze klanten de beste communicatie-ervaring te bieden.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <p className="text-foreground font-semibold mb-2">Onze Missie</p>
                <p className="text-muted-foreground italic">
                  "Iedereen is klaar voor AI behalve uw data™" - Wij maken AI-gedreven communicatie 
                  toegankelijk voor elk bedrijf, ongeacht de grootte.
                </p>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-12 text-white shadow-elegant">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold mb-2">180+</div>
                  <p className="text-white/90">Landen Bereikbaar</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <p className="text-white/90">Tevreden Klanten</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">99.999%</div>
                  <p className="text-white/90">Uptime SLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Onze Kernwaarden
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Wat ons drijft en onderscheidt
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovatie",
                description: "We blijven voorop lopen met de nieuwste AI-technologieën en telecom-innovaties.",
              },
              {
                icon: Users,
                title: "Klantgericht",
                description: "Uw succes is ons succes. We denken in oplossingen, niet in problemen.",
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We streven naar perfectie in alles wat we doen, van product tot service.",
              },
              {
                icon: Award,
                title: "Betrouwbaar",
                description: "Onze 99.999% uptime en 24/7 support garanderen uw continuïteit.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-border hover:shadow-elegant transition-all duration-300 text-center"
              >
                <div className="bg-secondary rounded-full p-4 w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Nexus Connection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Onderdeel van AI Nexus
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                AI Nexus is een toonaangevend bedrijf gespecialiseerd in AI en data-oplossingen voor 
                bedrijven. Met AI Nexus Telecom brengen we deze expertise naar de telecommunicatie-industrie.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Bewezen AI-expertise sinds meerdere jaren",
                  "Focus op databeheer en -analyse",
                  "Innovatieve oplossingen voor moderne bedrijven",
                  "Commitment aan klantsucces",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://ainexus.nl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="group">
                  Bezoek AI Nexus
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <div className="lg:order-1">
              <div className="bg-gradient-primary rounded-2xl p-12 text-center shadow-elegant aspect-square flex flex-col items-center justify-center">
                <div className="text-white">
                  <h3 className="text-4xl font-bold mb-4">AI Nexus</h3>
                  <p className="text-xl mb-6 text-white/90">Ecosystem</p>
                  <div className="space-y-2">
                    <div className="bg-white/20 rounded-lg px-6 py-3">
                      <p className="font-semibold">AI Nexus Core</p>
                    </div>
                    <div className="bg-white/30 rounded-lg px-6 py-3">
                      <p className="font-semibold">AI Nexus Telecom</p>
                    </div>
                    <div className="bg-white/20 rounded-lg px-6 py-3">
                      <p className="font-semibold">AI Nexus Data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ons Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Een diverse groep experts in telecom, AI en klantservice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: "AI Engineers", count: "25+", desc: "Specialisten in machine learning" },
              { role: "Telecom Experts", count: "30+", desc: "Ervaren netwerkprofessionals" },
              { role: "Support Team", count: "24/7", desc: "Altijd beschikbaar voor u" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center border border-border hover:shadow-elegant transition-all duration-300"
              >
                <div className="text-5xl font-bold text-primary mb-3">{item.count}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.role}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klaar om met Ons te Werken?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ontdek hoe AI Nexus Telecom uw bedrijf kan helpen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Neem Contact Op
              </Button>
            </Link>
            <Link to="/diensten">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                Bekijk Onze Diensten
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverOns;

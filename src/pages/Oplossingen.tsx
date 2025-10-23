import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Users, Building2, CheckCircle2 } from "lucide-react";

const Oplossingen = () => {
  const solutions = [
    {
      icon: User,
      title: "ZZP & Freelancers",
      subtitle: "Professionele communicatie voor ondernemers",
      description: "Eenvoudige AI-spraakagenten voor leadgeneratie en klantcontact. Maak indruk op klanten met professionele telecomoplossingen.",
      features: [
        "AI-assistenten voor leadkwalificatie",
        "Professioneel zakelijk nummer",
        "Automatische voicemail naar e-mail",
        "SMS marketing voor kleine campagnes",
        "Betaalbaar en schaalbaar",
      ],
      benefits: "Perfect voor freelancers die een professionele uitstraling willen zonder complexe systemen.",
    },
    {
      icon: Users,
      title: "MKB Bedrijven",
      subtitle: "Complete communicatieoplossingen",
      description: "Berichten en spraak voor teamcollaboratie en klantenservice. Alles wat uw groeiende bedrijf nodig heeft.",
      features: [
        "Team collaboration tools",
        "IVR en call routing",
        "CRM integraties",
        "Analytics en rapportage",
        "Multi-channel communicatie",
      ],
      benefits: "Ideaal voor bedrijven met 10-250 medewerkers die hun communicatie willen professionaliseren.",
    },
    {
      icon: Building2,
      title: "Groot Zakelijk",
      subtitle: "Enterprise-grade telecomoplossingen",
      description: "Schaalbare netwerken, AI-analyses, en beveiligde connectiviteit voor grote ondernemingen met hoge eisen.",
      features: [
        "Dedicated infrastructuur",
        "Advanced AI analytics",
        "Enterprise security",
        "SLA garanties",
        "Priority support",
      ],
      benefits: "Voor enterprises met 250+ medewerkers die maximale controle en betrouwbaarheid eisen.",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Oplossingen per <span className="text-primary">Doelgroep</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Of u nu freelancer, MKB of enterprise bent, wij hebben de perfecte telecomoplossing voor uw organisatie
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary rounded-xl p-4">
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-primary mb-4">{solution.subtitle}</p>
                  <p className="text-lg text-muted-foreground mb-6">{solution.description}</p>
                  
                  <div className="bg-secondary rounded-xl p-6 mb-6 border border-border">
                    <h4 className="font-semibold text-foreground mb-4">Kenmerken:</h4>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Ideaal voor:</span> {solution.benefits}
                    </p>
                  </div>

                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary/90">
                      Ontdek Oplossingen
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gradient-primary rounded-2xl p-12 text-center shadow-elegant aspect-square flex flex-col items-center justify-center">
                    <solution.icon className="h-32 w-32 text-white mb-6 opacity-90" />
                    <h3 className="text-white text-2xl font-semibold">{solution.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vergelijk Oplossingen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vind snel de juiste oplossing voor uw organisatie
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden border border-border shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left">Functie</th>
                    <th className="px-6 py-4 text-center">ZZP</th>
                    <th className="px-6 py-4 text-center">MKB</th>
                    <th className="px-6 py-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { feature: "AI Spraakagenten", zzp: true, mkb: true, enterprise: true },
                    { feature: "Basis Spraak & SMS", zzp: true, mkb: true, enterprise: true },
                    { feature: "Team Collaboration", zzp: false, mkb: true, enterprise: true },
                    { feature: "CRM Integraties", zzp: false, mkb: true, enterprise: true },
                    { feature: "Advanced Analytics", zzp: false, mkb: false, enterprise: true },
                    { feature: "Dedicated Support", zzp: false, mkb: false, enterprise: true },
                    { feature: "Custom SLA", zzp: false, mkb: false, enterprise: true },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-secondary/30">
                      <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.zzp ? (
                          <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.mkb ? (
                          <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.enterprise ? (
                          <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welke Oplossing Past bij U?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Laat ons u helpen de perfecte telecomoplossing te vinden voor uw organisatie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Gratis Adviesgesprek
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

export default Oplossingen;

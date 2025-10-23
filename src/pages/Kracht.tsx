import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, TrendingUp, Brain, Zap, Database, PieChart } from "lucide-react";

const Kracht = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            De Kracht van <span className="text-primary">AI & Telecom</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformeer telecomdata in waardevolle inzichten en optimaliseer uw bedrijfsprocessen met AI
          </p>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                AI-gedreven Inzichten
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                AI Nexus Telecom analyseert automatisch uw communicatiedata om patronen te ontdekken, 
                klantgedrag te voorspellen en operationele efficiency te verhogen.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Brain,
                    title: "Intelligente Analyse",
                    desc: "Machine learning modellen analyseren gesprekken en berichten in real-time",
                  },
                  {
                    icon: TrendingUp,
                    title: "Voorspellende Insights",
                    desc: "Anticipeer klantbehoeften en voorkom problemen voordat ze ontstaan",
                  },
                  {
                    icon: Zap,
                    title: "Automatisering",
                    desc: "Automatisch routeren, prioriteren en afhandelen van communicatie",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-secondary rounded-lg p-3 flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-12 shadow-elegant">
              <Brain className="h-32 w-32 text-white mx-auto mb-6 opacity-90" />
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-4">AI Engine</h3>
                <p className="text-white/90">
                  Onze geavanceerde AI analyseert miljoenen gesprekken en berichten 
                  om uw communicatie continu te optimaliseren
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Insights */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Van Data naar Actie
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Concrete voordelen van AI-gedreven telecom analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Klantgedrag Analyse",
                description: "Begrijp welke kanalen uw klanten prefereren, wanneer ze contact opnemen en waarom.",
                benefits: ["Betere targeting", "Hogere conversie", "Meer tevredenheid"],
                impact: "25% meer conversies",
              },
              {
                icon: PieChart,
                title: "Netwerkoptimalisatie",
                description: "AI optimaliseert routing en capaciteit voor de beste prestaties tegen de laagste kosten.",
                benefits: ["Lagere latentie", "Kostenbesparing", "Betere kwaliteit"],
                impact: "30% kostenbesparing",
              },
              {
                icon: TrendingUp,
                title: "Voorspellende Onderhoud",
                description: "Voorkom problemen door proactieve monitoring en automatische escalatie.",
                benefits: ["Minder downtime", "Hogere uptime", "Proactief handelen"],
                impact: "99.999% uptime",
              },
            ].map((insight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-border hover:shadow-elegant transition-all duration-300"
              >
                <div className="bg-secondary rounded-lg p-4 w-fit mb-4">
                  <insight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{insight.title}</h3>
                <p className="text-muted-foreground mb-4">{insight.description}</p>
                <ul className="space-y-2 mb-4">
                  {insight.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/10 rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-primary">{insight.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Example */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-2xl p-12 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Praktijkvoorbeeld: Sentiment Analysis
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Onze AI analyseert automatisch de toon en sentiment van klantgesprekken om:
                </p>
                <ul className="space-y-4">
                  {[
                    "Ontevreden klanten direct te identificeren",
                    "Escalaties te voorkomen door proactief in te grijpen",
                    "Trends in klant feedback te spotten",
                    "Training materiaal te genereren voor medewerkers",
                    "Kwaliteit van service te monitoren",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <div className="h-2 w-2 bg-white rounded-full" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Positief Sentiment</span>
                    <span className="text-sm font-semibold text-green-600">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Neutraal Sentiment</span>
                    <span className="text-sm font-semibold text-gray-600">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gray-400 h-3 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Negatief Sentiment</span>
                    <span className="text-sm font-semibold text-red-600">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: "5%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Teaser */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Database className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bereken Uw Potentiële Besparing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            De gemiddelde klant bespaart 30-40% op communicatiekosten en verhoogt 
            de efficiency met 50% door onze AI-oplossingen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: "Kostenbesparing", value: "€50.000/jaar" },
              { label: "Tijdwinst", value: "500 uur/maand" },
              { label: "ROI", value: "< 6 maanden" },
            ].map((stat, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Vraag Uw Persoonlijke ROI Analyse Aan
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ontdek de Kracht van Uw Data
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Laat ons u laten zien welke inzichten in uw communicatiedata verborgen zitten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Plan een Demo
              </Button>
            </Link>
            <Link to="/diensten">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                Bekijk AI Diensten
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kracht;

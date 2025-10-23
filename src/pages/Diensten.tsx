import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Phone, 
  MessageSquare, 
  Globe, 
  Wifi, 
  Network, 
  FileText, 
  Cloud, 
  Settings,
  Mic,
  Send,
  Signal,
  Database 
} from "lucide-react";

const Diensten = () => {
  const services = [
    {
      icon: Mic,
      title: "AI Spraakagenten",
      subtitle: "Voice AI Agents",
      description: "AI-aangedreven spraakinteracties met natuurlijke, HD-gesprekken. Benadruk text-to-speech en spraakherkenning voor klantinteracties.",
      features: [
        "Natuurlijke AI-gesprekken",
        "Text-to-speech conversies",
        "Geavanceerde spraakherkenning",
        "Meertalige ondersteuning",
      ],
    },
    {
      icon: Phone,
      title: "Spraak & Spraak-API",
      subtitle: "Voice & Voice API",
      description: "Programmeerbare spraakoplossingen, SIP-trunking, en wereldwijde connectiviteit voor HD-gesprekken.",
      features: [
        "SIP-trunking oplossingen",
        "HD-spraakkwaliteit",
        "Wereldwijde dekking",
        "Flexibele API's",
      ],
    },
    {
      icon: MessageSquare,
      title: "Berichten",
      subtitle: "Messaging",
      description: "SMS, MMS, en programmeerbare berichten voor communicatie met klanten en teams.",
      features: [
        "SMS & MMS wereldwijd",
        "Bulk berichten verzenden",
        "Two-way messaging",
        "Realtime bezorgstatus",
      ],
    },
    {
      icon: Globe,
      title: "Wereldwijde Nummers",
      subtitle: "Global Numbers",
      description: "Levering van internationale telefoonnummers voor lokale aanwezigheid in meer dan 180 landen.",
      features: [
        "Nummers in 180+ landen",
        "Lokale aanwezigheid",
        "Directe activering",
        "Flexibel beheer",
      ],
    },
    {
      icon: Wifi,
      title: "Draadloos & IoT",
      subtitle: "Wireless & IoT",
      description: "Oplossingen voor het verbinden van apparaten via draadloze netwerken, met AI-optimalisatie.",
      features: [
        "IoT SIM-kaarten",
        "Wereldwijde connectiviteit",
        "AI-geoptimaliseerd",
        "Schaalbare oplossingen",
      ],
    },
    {
      icon: Network,
      title: "Netwerken",
      subtitle: "Networking",
      description: "Wereldwijde netwerkinfrastructuur voor betrouwbare connectiviteit met lage latentie.",
      features: [
        "Privé netwerken",
        "Lage latentie",
        "Hoge betrouwbaarheid",
        "Wereldwijde backbone",
      ],
    },
    {
      icon: FileText,
      title: "Fax-API's",
      subtitle: "Fax APIs",
      description: "Veilige, cloudgebaseerde faxoplossingen voor moderne bedrijven.",
      features: [
        "Cloud-based faxen",
        "Veilige verzending",
        "API-integratie",
        "Digitale archivering",
      ],
    },
    {
      icon: Database,
      title: "Opslag",
      subtitle: "Storage",
      description: "Cloudopslag voor telecomgegevens, zoals gesprekslogs en berichten.",
      features: [
        "Veilige opslag",
        "Gesprekslogs",
        "Backup & recovery",
        "Compliance-ready",
      ],
    },
    {
      icon: Settings,
      title: "Zelfbeheertools",
      subtitle: "Self-Service Tools",
      description: "Een portaal voor het kopen, beheren en monitoren van al uw telecomdiensten.",
      features: [
        "Centraal dashboard",
        "Realtime monitoring",
        "Eenvoudig beheer",
        "Gedetailleerde analytics",
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Onze <span className="text-primary">Diensten</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete AI-geïntegreerde telecomoplossingen voor elk bedrijf, van startup tot enterprise
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-secondary rounded-lg p-3 w-fit mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-primary mb-4">{service.subtitle}</p>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Meer Informatie
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                API's voor Ontwikkelaars
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Integreer onze krachtige telecomoplossingen naadloos in uw applicaties met onze 
                uitgebreide API's en SDK's.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "REST API's voor alle diensten",
                  "Realtime webhooks",
                  "Uitgebreide documentatie",
                  "Code voorbeelden in meerdere talen",
                  "Sandbox omgeving voor testen",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/ontwikkelaars">
                <Button className="bg-primary hover:bg-primary/90">
                  Bekijk Developer Docs
                </Button>
              </Link>
            </div>
            <div className="bg-foreground/5 rounded-2xl p-8 border border-border">
              <div className="bg-card rounded-lg p-6 font-mono text-sm">
                <div className="text-muted-foreground mb-2">// Spraak API voorbeeld</div>
                <div className="text-primary">const</div> <span className="text-foreground">call</span> = <span className="text-primary">await</span> nexus.voice.<span className="text-accent-foreground">create</span>({"{"}
                <div className="ml-4">
                  <div><span className="text-muted-foreground">to:</span> <span className="text-green-600">"+31612345678"</span>,</div>
                  <div><span className="text-muted-foreground">from:</span> <span className="text-green-600">"+31201234567"</span>,</div>
                  <div><span className="text-muted-foreground">ai_agent:</span> <span className="text-green-600">"support"</span></div>
                </div>
                {"}"});
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klaar om te starten?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ontdek hoe onze diensten uw bedrijfscommunicatie kunnen transformeren
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Gratis Consult Aanvragen
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

export default Diensten;

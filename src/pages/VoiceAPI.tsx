import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Network, 
  Globe, 
  Headphones, 
  CheckCircle, 
  Zap,
  Shield,
  BarChart,
  Code,
  PhoneCall,
  Users,
  ArrowRight,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Clock
} from "lucide-react";
import voiceApiHeroImage from "@/assets/voice-api-hero.jpg";
import sipTrunkingImage from "@/assets/sip-trunking.jpg";
import hdVoiceImage from "@/assets/hd-voice.jpg";
import globalVoiceImage from "@/assets/global-voice.jpg";
import voiceApiIntegrationImage from "@/assets/voice-api-integration.jpg";

const VoiceAPI = () => {
  const features = [
    {
      icon: Network,
      title: "SIP-trunking Oplossingen",
      description: "Enterprise-grade SIP-trunking voor betrouwbare, schaalbare spraakcommunicatie. Verbind uw bestaande telefoniesysteem met onze wereldwijde infrastructuur.",
      image: sipTrunkingImage,
      benefits: [
        "Onbeperkte gelijktijdige gesprekken",
        "Automatische failover",
        "QoS garanties",
        "Flexibele nummerportering"
      ]
    },
    {
      icon: Headphones,
      title: "HD-Spraakkwaliteit",
      description: "Kristalheldere audiokwaliteit met wideband audio codecs en geavanceerde noise cancellation voor de beste gespreks-ervaring.",
      image: hdVoiceImage,
      benefits: [
        "Wideband audio (G.722)",
        "Adaptive jitter buffering",
        "Echo cancellation",
        "Packet loss concealment"
      ]
    },
    {
      icon: Globe,
      title: "Wereldwijde Dekking",
      description: "Bereik klanten wereldwijd met lokale nummers in 180+ landen en hoogwaardige carrier-grade infrastructuur op alle continenten.",
      image: globalVoiceImage,
      benefits: [
        "Lokale nummers in 180+ landen",
        "99.99% uptime SLA",
        "Tier-1 carrier netwerk",
        "Lage latency (<100ms)"
      ]
    },
    {
      icon: Code,
      title: "Flexibele API's",
      description: "Developer-vriendelijke REST & WebSocket API's met uitgebreide documentatie, SDKs voor alle populaire talen en real-time webhooks.",
      image: voiceApiIntegrationImage,
      benefits: [
        "RESTful API design",
        "Real-time WebSocket events",
        "SDKs voor 10+ talen",
        "Uitgebreide code examples"
      ]
    }
  ];

  const useCases = [
    {
      icon: PhoneCall,
      title: "Cloud Contact Centers",
      description: "Bouw schaalbare contact centers met intelligente routing, IVR, call recording en real-time analytics."
    },
    {
      icon: Users,
      title: "Unified Communications",
      description: "Integreer spraak, video en messaging in één platform voor naadloze team-communicatie."
    },
    {
      icon: MessageSquare,
      title: "CPaaS Platforms",
      description: "Embed programmeerbare spraakfunctionaliteit in uw applicaties met onze flexibele API's."
    }
  ];

  const apiFeatures = [
    {
      title: "Inbound & Outbound Calls",
      description: "Ontvang en plaats gesprekken programmatisch"
    },
    {
      title: "Call Recording",
      description: "Automatische opname met cloud storage"
    },
    {
      title: "Real-time Transcription",
      description: "Live spraak-naar-tekst conversie"
    },
    {
      title: "Number Provisioning",
      description: "Activeer nummers on-demand via API"
    },
    {
      title: "Call Analytics",
      description: "Gedetailleerde metrics en rapportage"
    },
    {
      title: "Conference Bridges",
      description: "Multi-party audio conferencing"
    }
  ];

  const technicalSpecs = [
    { label: "Audio Codec", value: "G.722, Opus" },
    { label: "Max Bitrate", value: "64 kbps" },
    { label: "Latency", value: "<100ms" },
    { label: "Uptime SLA", value: "99.99%" },
    { label: "API Response", value: "<200ms" },
    { label: "Countries", value: "180+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Enterprise Voice Solutions</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Spraak & Spraak-API
                <span className="block text-primary mt-2">Voice & Voice API</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Programmeerbare spraakoplossingen, SIP-trunking, en wereldwijde connectiviteit voor HD-gesprekken. Bouw enterprise-grade spraakfunctionaliteit in uw applicaties.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gap-2">
                    Start Gratis Trial <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/ontwikkelaars">
                  <Button size="lg" variant="outline" className="gap-2">
                    API Documentatie
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <img 
                src={voiceApiHeroImage} 
                alt="Voice API Infrastructure" 
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Enterprise Voice Functionaliteit
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alles wat u nodig heeft voor professionele spraakcommunicatie
            </p>
          </div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {feature.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl" />
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="relative rounded-3xl shadow-xl w-full object-cover aspect-square"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Voice API Mogelijkheden
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bouw complexe spraakworkflows met onze krachtige API
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Veelvoorkomende Toepassingen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ontdek hoe bedrijven onze Voice API gebruiken
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div 
                key={useCase.title}
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Technische Specificaties
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Carrier-grade prestaties en betrouwbaarheid
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSpecs.map((spec) => (
              <div 
                key={spec.label}
                className="p-8 bg-card rounded-2xl border border-border text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{spec.value}</div>
                <div className="text-muted-foreground font-medium">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Eenvoudige Integratie
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Start binnen minuten met onze intuïtieve API's en uitgebreide documentatie. SDKs beschikbaar voor alle populaire programmeertalen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-foreground font-medium">End-to-end encryptie (TLS/SRTP)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-foreground font-medium">Binnen 5 minuten live</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span className="text-foreground font-medium">Auto-scaling infrastructuur</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart className="w-6 h-6 text-primary" />
                  <span className="text-foreground font-medium">Real-time analytics dashboard</span>
                </div>
              </div>
              <Link to="/ontwikkelaars">
                <Button variant="outline" size="lg" className="gap-2">
                  Bekijk Code Examples <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Voorbeeld: Outbound Call</span>
                <Code className="w-5 h-5 text-primary" />
              </div>
              <pre className="bg-muted p-6 rounded-xl overflow-x-auto text-sm">
                <code className="text-foreground">{`// Maak een uitgaand gesprek
const call = await voice.calls.create({
  to: '+31612345678',
  from: '+31207001234',
  url: 'https://example.com/voice.xml'
});

// Real-time call status updates
call.on('answered', () => {
  console.log('Call answered');
});

call.on('ended', (duration) => {
  console.log(\`Call duration: \${duration}s\`);
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Klaar om te Starten met Voice API?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Probeer onze Voice API gratis voor 30 dagen. €10 gratis beltegoed inbegrepen. Geen credit card vereist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                Start Gratis Trial <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/prijzen">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 gap-2">
                Bekijk Prijzen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceAPI;
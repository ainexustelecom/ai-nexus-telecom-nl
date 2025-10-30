import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Mic, 
  Volume2, 
  Ear, 
  Globe, 
  CheckCircle, 
  Brain,
  Zap,
  Shield,
  BarChart,
  Clock,
  Users,
  ArrowRight,
  Phone,
  MessageSquare,
  Sparkles
} from "lucide-react";
import aiVoiceHeroImage from "@/assets/ai-voice-hero.jpg";
import naturalConversationImage from "@/assets/natural-conversation.jpg";
import textToSpeechImage from "@/assets/text-to-speech.jpg";
import speechRecognitionImage from "@/assets/speech-recognition.jpg";
import multilingualImage from "@/assets/multilingual.jpg";

const VoiceAI = () => {
  const features = [
    {
      icon: Brain,
      title: "Natuurlijke AI-gesprekken",
      description: "Onze AI spraakagenten voeren authentieke gesprekken met natuurlijke spraakpatronen, context-begrip en emotionele intelligentie voor een menselijke ervaring.",
      image: naturalConversationImage,
      benefits: [
        "Contextbewuste conversaties",
        "Emotionele intelligentie",
        "Natuurlijke spraakpatronen",
        "Realtime begrip"
      ]
    },
    {
      icon: Volume2,
      title: "Text-to-Speech Conversies",
      description: "Transformeer tekst naar natuurlijk klinkende spraak in HD-kwaliteit met meerdere stemmen, accenten en talen voor professionele toepassingen.",
      image: textToSpeechImage,
      benefits: [
        "HD-stemkwaliteit",
        "Meerdere stem-opties",
        "Aanpasbare intonatie",
        "Snelle verwerking"
      ]
    },
    {
      icon: Ear,
      title: "Geavanceerde Spraakherkenning",
      description: "State-of-the-art spraakherkenning met 99%+ nauwkeurigheid, ondersteunt meerdere accenten, dialekten en achtergrondgeluid-filtering.",
      image: speechRecognitionImage,
      benefits: [
        "99%+ nauwkeurigheid",
        "Accent-herkenning",
        "Ruis-onderdrukking",
        "Realtime transcriptie"
      ]
    },
    {
      icon: Globe,
      title: "Meertalige Ondersteuning",
      description: "Communiceer met klanten wereldwijd in 60+ talen met automatische taaldetectie en realtime vertaling voor naadloze internationale service.",
      image: multilingualImage,
      benefits: [
        "60+ talen beschikbaar",
        "Auto-taaldetectie",
        "Realtime vertaling",
        "Regionale dialecten"
      ]
    }
  ];

  const useCases = [
    {
      icon: Phone,
      title: "Klantenservice Automatisering",
      description: "Behandel duizenden gesprekken tegelijk met AI-agents die vragen beantwoorden, problemen oplossen en escaleren wanneer nodig."
    },
    {
      icon: Users,
      title: "Sales & Lead Kwalificatie",
      description: "Kwalificeer leads automatisch, boek afspraken en verzamel essentiële informatie voordat je verkoopteam betrokken raakt."
    },
    {
      icon: MessageSquare,
      title: "Interactieve Voice Response",
      description: "Vervang traditionele IVR-systemen met intelligente conversaties die klanten snel naar de juiste oplossing leiden."
    }
  ];

  const technicalSpecs = [
    { label: "Spraakkwaliteit", value: "HD (24kHz+)" },
    { label: "Responstijd", value: "<500ms" },
    { label: "Nauwkeurigheid", value: "99%+" },
    { label: "Beschikbaarheid", value: "99.99%" },
    { label: "Concurrent gesprekken", value: "Onbeperkt" },
    { label: "Talen", value: "60+" }
  ];

  const integrationOptions = [
    "REST API",
    "WebSocket API",
    "SIP Integration",
    "WebRTC",
    "Telephony API",
    "Custom Webhooks"
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
                <span className="text-sm font-medium text-primary">AI-Powered Voice Technology</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                AI Spraakagenten
                <span className="block text-primary mt-2">Voice AI Agents</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI-aangedreven spraakinteracties met natuurlijke, HD-gesprekken. Transformeer uw klantinteracties met geavanceerde text-to-speech en spraakherkenning technologie.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gap-2">
                    Start Gratis Trial <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/prijzen">
                  <Button size="lg" variant="outline" className="gap-2">
                    Bekijk Prijzen
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <img 
                src={aiVoiceHeroImage} 
                alt="AI Voice Assistant Technology" 
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
              Krachtige Voice AI Functionaliteit
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alles wat u nodig heeft voor professionele AI-spraakinteracties
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

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Veelvoorkomende Toepassingen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ontdek hoe bedrijven Voice AI gebruiken om operaties te transformeren
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Technische Specificaties
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade prestaties en betrouwbaarheid
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

      {/* Integration Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Eenvoudige Integratie
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Integreer Voice AI in uw bestaande systemen met onze flexibele API's en SDKs. Binnen enkele uren live, niet weken.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {integrationOptions.map((option) => (
                  <div key={option} className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{option}</span>
                  </div>
                ))}
              </div>
              <Link to="/ontwikkelaars">
                <Button variant="outline" size="lg" className="gap-2">
                  Developer Documentatie <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-card rounded-2xl border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Enterprise Security</h3>
                    <p className="text-muted-foreground">
                      End-to-end encryptie, GDPR-compliant, en ISO 27001 gecertificeerd voor maximale data bescherming.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-card rounded-2xl border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <BarChart className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Real-time Analytics</h3>
                    <p className="text-muted-foreground">
                      Gedetailleerde inzichten in gesprekken, sentiment-analyse, en performance metrics in real-time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-card rounded-2xl border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Dedicated support team beschikbaar rond de klok voor technische hulp en integratie ondersteuning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Klaar om te Starten met Voice AI?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Probeer onze AI spraakagenten gratis voor 30 dagen. Geen credit card vereist. Start binnen 5 minuten.
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

export default VoiceAI;
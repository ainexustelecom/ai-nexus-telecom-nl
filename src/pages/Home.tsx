import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Globe, Wifi, Network, FileText, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SavingsCalculator from "@/components/SavingsCalculator";
import heroImage from "@/assets/hero-telecom.jpg";

const Home = () => {
  const stats = [
    { value: "99,999%", label: "Uptime" },
    { value: "180+", label: "Landen" },
    { value: "24/7", label: "Ondersteuning" },
    { value: "AI", label: "Gedreven" },
  ];

  const features = [
    { icon: Phone, title: "AI Spraakagenten", desc: "Natuurlijke gesprekken met AI" },
    { icon: MessageSquare, title: "Berichten", desc: "SMS & MMS wereldwijd" },
    { icon: Globe, title: "Wereldwijde Nummers", desc: "Lokale aanwezigheid overal" },
    { icon: Wifi, title: "Draadloos & IoT", desc: "Apparaten verbinden" },
    { icon: Network, title: "Netwerken", desc: "Betrouwbare infrastructuur" },
    { icon: FileText, title: "API's", desc: "Flexibele integraties" },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-secondary py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                AI-Gedreven Telecom voor <span className="text-primary">Naadloze Connecties</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transformeer uw communicatie met AI-geïntegreerde oplossingen, powered by AI Nexus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/diensten">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant w-full sm:w-auto">
                    Ontdek Onze Diensten
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Gratis Consult Aanvragen
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground italic pt-4">
                "Iedereen is klaar voor AI behalve uw data™"
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl shadow-elegant overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="AI-gedreven telecom technologie met netwerk verbindingen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Telecomoplossingen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Van spraak tot data, van lokaal tot wereldwijd – alles wat u nodig heeft
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/diensten">
              <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                Bekijk Alle Diensten
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hoeveel Kunt U Besparen?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ontdek in 30 seconden wat AI Nexus Telecom u kan besparen op uw telecomkosten
            </p>
          </div>
          <SavingsCalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ontdek waarom bedrijven vertrouwen op AI Nexus Telecom
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "AI Nexus heeft onze klantenservice getransformeerd. De AI-spraakagenten werken 24/7 en onze klanten zijn enthousiast over de snelle responstijd.",
                name: "Maria van den Berg",
                role: "CEO",
                company: "TechVision B.V.",
                rating: 5
              },
              {
                quote: "De implementatie was verrassend snel en eenvoudig. Binnen 3 dagen hadden we ons complete telefoonsysteem operationeel. Geweldige service!",
                name: "Jan Bakker",
                role: "CTO",
                company: "InnovateNL",
                rating: 5
              },
              {
                quote: "De kwaliteit van de spraakverbindingen is uitstekend en de API integratie met ons CRM verliep naadloos. Een echte aanrader voor ieder bedrijf.",
                name: "Sophie Jansen",
                role: "Operations Manager",
                company: "CloudFirst Solutions",
                rating: 5
              },
              {
                quote: "Dankzij de wereldwijde nummers kunnen we nu een lokale aanwezigheid hebben in meer dan 50 landen. Dit heeft onze internationale groei enorm versneld.",
                name: "Ahmed El-Sayed",
                role: "Director International",
                company: "GlobalConnect",
                rating: 5
              },
              {
                quote: "De GDPR-compliance en beveiliging waren voor ons cruciaal. AI Nexus overtreft alle verwachtingen op het gebied van data privacy en security.",
                name: "Linda de Vries",
                role: "Chief Privacy Officer",
                company: "SecureData NL",
                rating: 5
              },
              {
                quote: "De kosten zijn transparant en veel lager dan onze vorige provider. De ROI was binnen 2 maanden al zichtbaar. Uitstekende prijs-kwaliteit verhouding.",
                name: "Robert Smit",
                role: "CFO",
                company: "SmartBusiness Group",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Waarom AI Nexus Telecom?
              </h2>
              <div className="space-y-4">
                {[
                  "AI-gedreven innovatie voor slimme communicatie",
                  "Veilig en compliant volgens GDPR-regelgeving",
                  "Snelle implementatie binnen enkele dagen",
                  "Superieure gesprekskwaliteit met lage latentie",
                  "Wereldwijd netwerk in meer dan 180 landen",
                  "24/7 expert ondersteuning in het Nederlands",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/waarom-wij" className="inline-block mt-8">
                <Button variant="default" className="bg-primary hover:bg-primary/90">
                  Meer Over Ons
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold text-foreground mb-6">Klaar om te starten?</h3>
              <p className="text-muted-foreground mb-6">
                Ontdek hoe AI Nexus Telecom uw bedrijfscommunicatie kan transformeren met onze innovatieve oplossingen.
              </p>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Neem Contact Op
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veelgestelde Vragen
            </h2>
            <p className="text-xl text-muted-foreground">
              Antwoorden op de meest gestelde vragen over AI Nexus Telecom
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Wat maakt AI Nexus Telecom anders dan andere telecombedrijven?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                AI Nexus Telecom integreert geavanceerde AI-technologie in alle communicatieoplossingen. Onze AI-spraakagenten kunnen natuurlijke gesprekken voeren, onze systemen leren van elke interactie, en we bieden real-time analyse van communicatiepatronen. Dit zorgt voor betere klantervaringen, hogere efficiëntie en lagere kosten.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Hoe lang duurt de implementatie van AI Nexus diensten?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                De meeste implementaties zijn binnen 3-5 werkdagen volledig operationeel. Voor basisdiensten zoals telefoonnummers en SMS kunnen we zelfs binnen 24 uur starten. Complexere AI-integraties en maatwerk oplossingen kunnen 1-2 weken in beslag nemen, afhankelijk van uw specifieke vereisten.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Is mijn data veilig bij AI Nexus Telecom?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absoluut. We zijn volledig GDPR-compliant en gebruiken enterprise-grade encryptie voor alle data. Uw gegevens worden opgeslagen in EU datacenters met ISO 27001 certificering. We voeren regelmatig beveiligingsaudits uit en hebben strikte toegangscontroles. Uw data is en blijft van u.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Kan ik AI Nexus integreren met mijn bestaande systemen?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ja, onze oplossingen zijn ontworpen voor naadloze integratie. We bieden REST API's, webhooks en kant-en-klare integraties voor populaire CRM-systemen, helpdesk software en bedrijfsapplicaties. Ons ontwikkelaarsteam staat klaar om u te helpen bij maatwerk integraties indien nodig.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Wat zijn de kosten en zijn er verborgen kosten?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We hanteren transparante pay-as-you-go prijzen zonder verborgen kosten. U betaalt alleen voor wat u gebruikt: per minuut voor spraak, per bericht voor SMS, per nummer voor telefoonnummers. Er zijn geen opstartkosten of langetermijncontracten vereist. Bekijk onze prijzenpagina voor gedetailleerde tarieven of neem contact op voor een gepersonaliseerde offerte.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Bieden jullie ondersteuning in het Nederlands?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ja, we bieden 24/7 support in het Nederlands via telefoon, e-mail en chat. Ons supportteam bestaat uit telecom-experts die u kunnen helpen met technische vragen, implementatie en optimalisatie van uw communicatie-infrastructuur. Voor enterprise klanten bieden we ook dedicated account managers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Begin vandaag nog met AI-gedreven telecom
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Sluit u aan bij toonaangevende bedrijven die AI Nexus Telecom vertrouwen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Gratis Consult
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

export default Home;

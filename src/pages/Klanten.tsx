import { Quote } from "lucide-react";

const Klanten = () => {
  const testimonials = [
    {
      quote: "AI Nexus Telecom heeft onze klantenservice getransformeerd met AI-spraakagenten. We kunnen nu 24/7 service bieden zonder extra personeel.",
      author: "Dr. Sarah van der Berg",
      role: "CTO",
      company: "MediCare Nederland",
      industry: "Gezondheidszorg",
    },
    {
      quote: "De implementatie was razendsnel en binnen 3 weken waren we volledig operationeel. De ROI was zichtbaar binnen de eerste maand.",
      author: "Mark Jansen",
      role: "Operations Director",
      company: "LogiFlow BV",
      industry: "Logistiek",
    },
    {
      quote: "Als MSP kunnen we nu white-label telecomdiensten aanbieden aan al onze klanten. De API's zijn excellent en de ondersteuning is top.",
      author: "Lisa de Vries",
      role: "CEO",
      company: "CloudTech Solutions",
      industry: "Managed Services",
    },
    {
      quote: "De gesprekskwaliteit is superieur en de wereldwijde dekking stelt ons in staat om klanten in alle markten te bereiken.",
      author: "Ahmed El-Sayed",
      role: "Head of Sales",
      company: "GlobalConnect",
      industry: "Financiële Diensten",
    },
    {
      quote: "We hebben onze operationele kosten met 40% verlaagd en tegelijkertijd de klanttevredenheid verhoogd. Een win-win situatie.",
      author: "Sophie Vermeulen",
      role: "Customer Experience Manager",
      company: "RetailPro",
      industry: "Retail",
    },
    {
      quote: "De AI-analyses geven ons waardevolle inzichten in klantgedrag. We kunnen nu proactief handelen in plaats van reactief.",
      author: "Jan Pieters",
      role: "Data Analyst",
      company: "InsightBank",
      industry: "Banking",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wat Onze <span className="text-primary">Klanten</span> Zeggen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ontdek waarom toonaangevende bedrijven AI Nexus Telecom vertrouwen voor hun communicatie
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Tevreden Klanten" },
              { value: "4.9/5", label: "Gemiddelde Score" },
              { value: "99%", label: "Retention Rate" },
              { value: "40%", label: "Gem. Kostenbesparing" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <Quote className="h-10 w-10 text-primary mb-4" />
                <p className="text-foreground mb-6 flex-grow italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                  <span className="inline-block mt-2 bg-secondary text-primary text-xs px-3 py-1 rounded-full">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Succesverhalen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Inspirerende resultaten van bedrijven die de overstap maakten
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Contactcenter Revolutie",
                company: "CustomerFirst BV",
                result: "60% kortere wachttijden",
                description: "Door AI-spraakagenten te implementeren konden ze hun klantenservice drastisch verbeteren.",
              },
              {
                title: "Internationale Expansie",
                company: "TechGrow International",
                result: "Lokale nummers in 45 landen",
                description: "Binnen 2 weken operationeel in nieuwe markten zonder fysieke aanwezigheid.",
              },
              {
                title: "Kostenoptimalisatie",
                company: "SmartRetail Group",
                result: "€150.000 jaarlijkse besparing",
                description: "Migratie naar AI Nexus resulteerde in significante kostenbesparing.",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-border hover:shadow-elegant transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{story.title}</h3>
                <p className="text-sm text-primary mb-4">{story.company}</p>
                <div className="bg-primary/10 rounded-lg p-4 mb-4">
                  <p className="text-2xl font-bold text-primary text-center">{story.result}</p>
                </div>
                <p className="text-muted-foreground text-sm">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Vertrouwd door Bedrijven in Diverse Sectoren
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            {[
              "Gezondheidszorg",
              "Financiële Diensten",
              "Retail",
              "Logistiek",
              "E-commerce",
              "Onderwijs",
              "MSP's",
              "Overheid",
            ].map((industry, index) => (
              <span
                key={index}
                className="bg-secondary text-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Word de Volgende Successtory
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Sluit u aan bij honderden tevreden bedrijven die AI Nexus Telecom vertrouwen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
                Start Uw Transformatie
              </button>
            </a>
            <a href="/use-cases">
              <button className="bg-white/10 text-white border border-white/30 hover:bg-white/20 px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
                Bekijk Use Cases
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Klanten;

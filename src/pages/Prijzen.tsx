import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, HelpCircle } from "lucide-react";

const Prijzen = () => {
  const pricingPlans = [
    {
      name: "Starter",
      subtitle: "Voor ZZP en Freelancers",
      price: "Vanaf €49",
      period: "/maand",
      features: [
        "AI Spraakagent basis",
        "1 zakelijk nummer",
        "100 minuten spraak/maand",
        "500 SMS berichten/maand",
        "Basis analytics",
        "E-mail support",
      ],
      cta: "Start Gratis Trial",
      popular: false,
    },
    {
      name: "Professional",
      subtitle: "Voor MKB Bedrijven",
      price: "Vanaf €149",
      period: "/maand",
      features: [
        "Alles van Starter, plus:",
        "AI Spraakagenten advanced",
        "Onbeperkte nummers",
        "1000 minuten spraak/maand",
        "2500 SMS/MMS berichten/maand",
        "CRM integraties",
        "Advanced analytics",
        "Chat & telefoon support",
      ],
      cta: "Meest Gekozen",
      popular: true,
    },
    {
      name: "Enterprise",
      subtitle: "Voor Grote Organisaties",
      price: "Op maat",
      period: "",
      features: [
        "Alles van Professional, plus:",
        "Dedicated infrastructuur",
        "Onbeperkt spraak & berichten",
        "Custom AI agents",
        "White-label optie",
        "SLA garanties",
        "24/7 priority support",
        "Dedicated account manager",
      ],
      cta: "Neem Contact Op",
      popular: false,
    },
  ];

  const payAsYouGo = [
    { service: "Spraak (per minuut)", price: "€0,015" },
    { service: "SMS (per bericht)", price: "€0,05" },
    { service: "MMS (per bericht)", price: "€0,12" },
    { service: "Zakelijk nummer (per maand)", price: "€5" },
    { service: "Wereldwijd nummer (per maand)", price: "€10" },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transparante <span className="text-primary">Prijzen</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexibele tarieven die meegroeien met uw bedrijf. Geen verrassingen, alleen eerlijke prijzen
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border-2 ${
                  plan.popular
                    ? "border-primary bg-primary/5 shadow-elegant scale-105"
                    : "border-border bg-card"
                } transition-all duration-300 hover:shadow-elegant relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Meest Gekozen
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-secondary text-primary hover:bg-secondary/80"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pay as You Go */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Betaal per Gebruik
            </h2>
            <p className="text-xl text-muted-foreground">
              Liever geen vast contract? Gebruik onze pay-as-you-go tarieven
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Dienst</th>
                  <th className="px-6 py-4 text-right">Prijs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {payAsYouGo.map((item, index) => (
                  <tr key={index} className="hover:bg-secondary/30">
                    <td className="px-6 py-4 text-foreground">{item.service}</td>
                    <td className="px-6 py-4 text-right font-semibold text-primary">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              * Alle prijzen zijn exclusief BTW. Volume kortingen beschikbaar.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Vraag Offerte Aan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wat Zit er in Elk Plan?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Gedetailleerd overzicht van alle features per plan
            </p>
          </div>

          <div className="bg-card rounded-2xl overflow-hidden border border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left text-foreground">Feature</th>
                    <th className="px-6 py-4 text-center text-foreground">Starter</th>
                    <th className="px-6 py-4 text-center text-foreground">Professional</th>
                    <th className="px-6 py-4 text-center text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { feature: "AI Spraakagenten", starter: "Basis", pro: "Advanced", enterprise: "Custom" },
                    { feature: "Zakelijke Nummers", starter: "1", pro: "Onbeperkt", enterprise: "Onbeperkt" },
                    { feature: "Spraakminuten", starter: "100", pro: "1000", enterprise: "Onbeperkt" },
                    { feature: "SMS Berichten", starter: "500", pro: "2500", enterprise: "Onbeperkt" },
                    { feature: "Analytics", starter: "Basis", pro: "Advanced", enterprise: "Custom" },
                    { feature: "CRM Integraties", starter: "—", pro: "✓", enterprise: "✓" },
                    { feature: "API Toegang", starter: "—", pro: "✓", enterprise: "✓" },
                    { feature: "SLA Garantie", starter: "—", pro: "—", enterprise: "99.999%" },
                    { feature: "Support", starter: "E-mail", pro: "Chat & Tel", enterprise: "24/7 Priority" },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-secondary/30">
                      <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{row.starter}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{row.pro}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veelgestelde Vragen
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Kan ik mijn plan later wijzigen?",
                a: "Ja, u kunt altijd upgraden of downgraden. Wijzigingen gaan direct in en worden pro-rata verrekend.",
              },
              {
                q: "Zijn er setup kosten?",
                a: "Nee, er zijn geen setup kosten of verborgen kosten. U betaalt alleen voor het plan dat u kiest.",
              },
              {
                q: "Hoe werkt facturering?",
                a: "We factureren maandelijks vooraf voor uw abonnement en achteraf voor pay-as-you-go gebruik.",
              },
              {
                q: "Is er een minimum contract periode?",
                a: "Voor Starter en Professional is er geen minimum looptijd. Enterprise plans hebben meestal een 12-maands overeenkomst.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-border hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
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
            Nog Vragen over Prijzen?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ons team helpt u graag het juiste plan te kiezen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Neem Contact Op
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

export default Prijzen;

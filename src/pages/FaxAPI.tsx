import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Cloud, Shield, Zap, Archive, Code } from "lucide-react";
import faxHero from "@/assets/fax-hero.jpg";

const FaxAPI = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={faxHero} alt="Cloud Fax API" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud Fax API's
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Moderne, veilige faxoplossingen zonder hardware - volledig via de cloud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Start Gratis Trial
                </Button>
              </Link>
              <Link to="/ontwikkelaars">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  API Documentatie
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Waarom Cloud Faxing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alle voordelen van faxen zonder de nadelen van traditionele faxmachines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Cloud-Based",
                description: "Verstuur en ontvang faxen vanuit elke applicatie zonder fysieke faxmachine."
              },
              {
                icon: Shield,
                title: "Veilig & Encrypted",
                description: "End-to-end encryptie en HIPAA/GDPR-compliant voor gevoelige documenten."
              },
              {
                icon: Code,
                title: "API-First",
                description: "Eenvoudige integratie in uw bestaande systemen met RESTful API."
              },
              {
                icon: Archive,
                title: "Digitale Archivering",
                description: "Automatisch opslaan en doorzoekbaar maken van alle fax communicatie."
              },
              {
                icon: Zap,
                title: "Instant Delivery",
                description: "Snellere verzending dan traditionele fax met real-time statusupdates."
              },
              {
                icon: FileText,
                title: "Multi-Format",
                description: "Verstuur PDF, DOCX, en andere documenten als fax met automatische conversie."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-secondary rounded-lg p-3 w-fit mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Toepassingen
            </h2>
            <p className="text-xl text-muted-foreground">
              Cloud fax voor compliance-gevoelige sectoren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Gezondheidszorg",
                description: "HIPAA-compliant faxen van medische dossiers, recepten en patiëntinformatie."
              },
              {
                title: "Juridisch",
                description: "Veilig versturen van contracten, aktes en andere juridische documenten."
              },
              {
                title: "Financieel",
                description: "Beveiligde verzending van banktransacties, leningdocumenten en handtekeningen."
              },
              {
                title: "Overheid",
                description: "Compliant communicatie voor overheidsdocumenten en formulieren."
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Example */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Eenvoudige Integratie
            </h2>
            <p className="text-xl text-muted-foreground">
              Verstuur een fax met slechts enkele regels code
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="bg-foreground/5 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <div className="text-muted-foreground mb-2">// Verstuur fax via API</div>
              <div><span className="text-primary">const</span> response = <span className="text-primary">await</span> nexus.fax.<span className="text-accent-foreground">send</span>({"{"}
              </div>
              <div className="ml-4">
                <div><span className="text-muted-foreground">to:</span> <span className="text-green-600">"+31201234567"</span>,</div>
                <div><span className="text-muted-foreground">document:</span> <span className="text-green-600">"document.pdf"</span>,</div>
                <div><span className="text-muted-foreground">quality:</span> <span className="text-green-600">"high"</span></div>
              </div>
              <div>{"}"});</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Moderniseer Uw Fax Infrastructuur
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Stap over naar cloud faxing en elimineer hardware kosten
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Start Gratis Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FaxAPI;
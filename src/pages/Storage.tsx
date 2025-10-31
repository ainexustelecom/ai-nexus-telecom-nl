import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Shield, Archive, Clock, TrendingUp, FileCheck } from "lucide-react";
import storageHero from "@/assets/storage-hero.jpg";

const Storage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={storageHero} alt="Secure Cloud Storage" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Telecom Data Opslag
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Veilige cloudopslag voor gesprekslogs, berichten en telecomgegevens
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Opslag Configureren
                </Button>
              </Link>
              <Link to="/prijzen">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Prijzen Bekijken
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
              Enterprise Storage Oplossingen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compliance-ready opslag voor al uw telecomdata
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Veilige Opslag",
                description: "Encrypted-at-rest opslag voor gesprekslogs, voicemails, faxen en berichten."
              },
              {
                icon: Shield,
                title: "Compliance Ready",
                description: "GDPR, HIPAA en SOC 2 compliant met audit logs en toegangscontrole."
              },
              {
                icon: Archive,
                title: "Lange Termijn Archivering",
                description: "Automatische archivering met configureerbare retentieperiodes."
              },
              {
                icon: Clock,
                title: "Instant Retrieval",
                description: "Snelle toegang tot historische data met krachtige zoekfunctionaliteit."
              },
              {
                icon: TrendingUp,
                title: "Schaalbaar",
                description: "Van gigabytes tot petabytes - onze opslag schaalt automatisch mee."
              },
              {
                icon: FileCheck,
                title: "Backup & Recovery",
                description: "Geautomatiseerde backups met point-in-time recovery opties."
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

      {/* Data Types Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wat Bewaren We?
            </h2>
            <p className="text-xl text-muted-foreground">
              Alle telecomdata veilig opgeslagen en toegankelijk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Call Detail Records (CDR)",
                description: "Gedetailleerde logs van alle gesprekken inclusief duur, kosten en metadata."
              },
              {
                title: "Voicemail & Opnames",
                description: "Voicemails en gesprekopnames met transcripties en zoekfunctionaliteit."
              },
              {
                title: "Berichten Archief",
                description: "Volledige historie van SMS, MMS en andere berichten met attachments."
              },
              {
                title: "Fax Documenten",
                description: "Alle verzonden en ontvangen faxen digitaal gearchiveerd en doorzoekbaar."
              }
            ].map((dataType, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{dataType.title}</h3>
                <p className="text-muted-foreground">{dataType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Waarom Onze Opslag?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kostenefficiënt",
                description: "Betaal alleen voor wat u gebruikt zonder upfront investeringen in hardware."
              },
              {
                title: "Altijd Beschikbaar",
                description: "99.99% uptime garantie met geografisch gedistribueerde data centers."
              },
              {
                title: "Eenvoudig Beheer",
                description: "Intuïtief dashboard voor het beheren van opslag en retentiebeleid."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Beveilig Uw Telecom Data
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start vandaag nog met veilige, compliance-ready opslag voor al uw telecomdata
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Opslag Activeren
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Storage;
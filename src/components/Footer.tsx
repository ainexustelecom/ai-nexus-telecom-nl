import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">AI Nexus Telecom</h3>
            <p className="text-sm text-muted-foreground">
              AI-gedreven telecomoplossingen voor naadloze connecties
            </p>
            <p className="text-xs text-muted-foreground italic">
              "Iedereen is klaar voor AI behalve uw data™"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Diensten</h4>
            <ul className="space-y-2">
              <li><Link to="/diensten" className="text-sm text-muted-foreground hover:text-primary">AI Spraakagenten</Link></li>
              <li><Link to="/diensten" className="text-sm text-muted-foreground hover:text-primary">Spraak & API</Link></li>
              <li><Link to="/diensten" className="text-sm text-muted-foreground hover:text-primary">Berichten</Link></li>
              <li><Link to="/diensten" className="text-sm text-muted-foreground hover:text-primary">Draadloos & IoT</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Bedrijf</h4>
            <ul className="space-y-2">
              <li><Link to="/over-ons" className="text-sm text-muted-foreground hover:text-primary">Over Ons</Link></li>
              <li><Link to="/klanten" className="text-sm text-muted-foreground hover:text-primary">Klanten</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><a href="https://ainexus.nl" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">AI Nexus Hoofdsite</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +31 123 456 789
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                info@telecom.ainexus.nl
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                Nederland
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} AI Nexus Telecom. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacybeleid
              </Link>
              <Link to="/algemene-voorwaarden" className="text-sm text-muted-foreground hover:text-primary">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

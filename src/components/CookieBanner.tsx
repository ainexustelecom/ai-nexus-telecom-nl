import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-elegant z-50 animate-slide-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground">
              Wij gebruiken cookies om uw ervaring te verbeteren en onze diensten te optimaliseren. 
              Door deze website te gebruiken, gaat u akkoord met ons{" "}
              <a href="/privacy" className="text-primary hover:underline">
                privacybeleid
              </a>
              .
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="whitespace-nowrap"
            >
              Weigeren
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={acceptCookies}
              className="bg-primary hover:bg-primary/90 whitespace-nowrap"
            >
              Accepteren
            </Button>
            <button
              onClick={declineCookies}
              className="p-1 hover:bg-secondary rounded-md text-muted-foreground hover:text-foreground"
              aria-label="Sluiten"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

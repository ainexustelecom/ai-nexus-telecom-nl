import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pagina Niet Gevonden
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            De pagina die u zoekt bestaat niet of is verplaatst.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="gap-2">
              <Home className="h-4 w-4" />
              Terug naar Home
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Ga Terug
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

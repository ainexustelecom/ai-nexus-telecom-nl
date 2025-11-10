import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { TrendingDown, Calculator, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SavingsCalculator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    employees: "",
    monthlySpend: "",
    internationalMinutes: "",
    smsVolume: ""
  });
  const [showResults, setShowResults] = useState(false);
  const [savings, setSavings] = useState({
    monthly: 0,
    yearly: 0,
    percentage: 0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Only allow numbers
    if (value === "" || /^\d+$/.test(value)) {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const calculateSavings = () => {
    const employees = parseInt(formData.employees) || 0;
    const monthlySpend = parseInt(formData.monthlySpend) || 0;
    const internationalMinutes = parseInt(formData.internationalMinutes) || 0;
    const smsVolume = parseInt(formData.smsVolume) || 0;

    if (employees === 0 || monthlySpend === 0) {
      toast({
        title: "Vul alle verplichte velden in",
        description: "Aantal medewerkers en huidige maandelijkse kosten zijn verplicht.",
        variant: "destructive"
      });
      return;
    }

    // Calculate estimated savings (30-40% savings on average)
    const baseSavings = monthlySpend * 0.35;
    
    // Additional savings for international calls (up to 50% savings)
    const internationalSavings = (internationalMinutes * 0.15) * 0.5;
    
    // SMS volume savings (up to 40% savings)
    const smsSavings = (smsVolume * 0.08) * 0.4;
    
    const totalMonthlySavings = baseSavings + internationalSavings + smsSavings;
    const yearlysSavings = totalMonthlySavings * 12;
    const savingsPercentage = ((totalMonthlySavings / monthlySpend) * 100);

    setSavings({
      monthly: Math.round(totalMonthlySavings),
      yearly: Math.round(yearlysSavings),
      percentage: Math.round(savingsPercentage)
    });

    setShowResults(true);

    toast({
      title: "Berekening voltooid!",
      description: "Bekijk hieronder uw potentiële besparingen.",
    });
  };

  const resetCalculator = () => {
    setFormData({
      employees: "",
      monthlySpend: "",
      internationalMinutes: "",
      smsVolume: ""
    });
    setShowResults(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Calculator Form */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Bereken Uw Besparing</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="employees" className="text-foreground">
              Aantal medewerkers <span className="text-primary">*</span>
            </Label>
            <Input
              id="employees"
              name="employees"
              type="text"
              inputMode="numeric"
              placeholder="bijv. 50"
              value={formData.employees}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="monthlySpend" className="text-foreground">
              Huidige maandelijkse telecomkosten (€) <span className="text-primary">*</span>
            </Label>
            <Input
              id="monthlySpend"
              name="monthlySpend"
              type="text"
              inputMode="numeric"
              placeholder="bijv. 2500"
              value={formData.monthlySpend}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="internationalMinutes" className="text-foreground">
              Internationale belminuten per maand (optioneel)
            </Label>
            <Input
              id="internationalMinutes"
              name="internationalMinutes"
              type="text"
              inputMode="numeric"
              placeholder="bijv. 500"
              value={formData.internationalMinutes}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="smsVolume" className="text-foreground">
              Aantal SMS berichten per maand (optioneel)
            </Label>
            <Input
              id="smsVolume"
              name="smsVolume"
              type="text"
              inputMode="numeric"
              placeholder="bijv. 1000"
              value={formData.smsVolume}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              onClick={calculateSavings} 
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Bereken Besparing
            </Button>
            {showResults && (
              <Button 
                onClick={resetCalculator} 
                variant="outline"
              >
                Reset
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Results */}
      <div className="space-y-6">
        {!showResults ? (
          <Card className="p-8 bg-gradient-secondary border-border">
            <div className="text-center">
              <TrendingDown className="h-16 w-16 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Ontdek Uw Besparingspotentieel
              </h4>
              <p className="text-muted-foreground">
                Vul het formulier in om uw gepersonaliseerde besparing te berekenen
              </p>
            </div>
          </Card>
        ) : (
          <>
            <Card className="p-6 bg-gradient-primary text-white border-0 shadow-elegant">
              <div className="text-center">
                <p className="text-white/80 mb-2">Geschatte Maandelijkse Besparing</p>
                <p className="text-5xl font-bold mb-1">€{savings.monthly.toLocaleString()}</p>
                <p className="text-white/90 text-lg">
                  Tot {savings.percentage}% besparing op uw huidige kosten
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="text-center mb-6">
                <p className="text-muted-foreground mb-2">Jaarlijkse Besparing</p>
                <p className="text-4xl font-bold text-primary">€{savings.yearly.toLocaleString()}</p>
              </div>
              
              <div className="space-y-3 border-t border-border pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    Geen opstartkosten of langetermijncontracten
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    Pay-as-you-go tarieven zonder verborgen kosten
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    Gratis migratie van uw huidige systeem
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    24/7 support in het Nederlands inbegrepen
                  </p>
                </div>
              </div>

              <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                Neem Contact Op Voor Een Offerte
              </Button>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default SavingsCalculator;

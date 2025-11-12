import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingDown, Calculator, CheckCircle2, Phone, Smartphone, Building2, Users, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SavingsCalculator = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Contact info
    email: "",
    companyName: "",
    phone: "",
    
    // Basis informatie
    employees: "",
    monthlySpend: "",
    
    // Telefonie details
    systemType: "",
    fixedLines: "",
    nationalMinutes: "",
    internationalMinutes: "",
    
    // Mobiel
    mobileSubscriptions: "",
    mobileDataGB: "",
    smsVolume: "",
    
    // Contract & Extra
    contractDuration: "",
    homeWorkers: "",
    currentProvider: ""
  });
  const [showResults, setShowResults] = useState(false);
  const [savings, setSavings] = useState({
    monthly: 0,
    yearly: 0,
    percentage: 0,
    breakdown: {
      voip: 0,
      mobile: 0,
      international: 0,
      features: 0
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Allow numbers for numeric fields, allow text for contact fields
    const numericFields = ['employees', 'monthlySpend', 'fixedLines', 'nationalMinutes', 
                          'internationalMinutes', 'mobileSubscriptions', 'mobileDataGB', 
                          'smsVolume', 'homeWorkers'];
    
    if (numericFields.includes(name)) {
      if (value === "" || /^\d+$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateSavings = async () => {
    // Validate email
    if (!formData.email) {
      toast({
        title: "Email vereist",
        description: "Vul alstublieft uw email adres in om de resultaten te bekijken.",
        variant: "destructive"
      });
      setCurrentStep("contact");
      return;
    }

    const employees = parseInt(formData.employees) || 0;
    const monthlySpend = parseInt(formData.monthlySpend) || 0;

    if (employees === 0 || monthlySpend === 0) {
      toast({
        title: "Vul de basisgegevens in",
        description: "Aantal medewerkers en huidige maandelijkse kosten zijn verplicht.",
        variant: "destructive"
      });
      setCurrentStep("basis");
      return;
    }

    setIsSubmitting(true);

    // Get all input values
    const fixedLines = parseInt(formData.fixedLines) || 0;
    const nationalMinutes = parseInt(formData.nationalMinutes) || 0;
    const internationalMinutes = parseInt(formData.internationalMinutes) || 0;
    const mobileSubscriptions = parseInt(formData.mobileSubscriptions) || 0;
    const mobileDataGB = parseInt(formData.mobileDataGB) || 0;
    const smsVolume = parseInt(formData.smsVolume) || 0;
    const homeWorkers = parseInt(formData.homeWorkers) || 0;
    const systemType = formData.systemType;

    // Calculate VoIP savings (traditional vs VoIP)
    let voipSavings = 0;
    if (systemType === "traditional") {
      const estimatedFixedCosts = fixedLines * 35;
      voipSavings = estimatedFixedCosts * 0.4;
    } else if (systemType === "voip") {
      const estimatedFixedCosts = fixedLines * 20;
      voipSavings = estimatedFixedCosts * 0.15;
    }

    const mobileSavings = mobileSubscriptions * 12;
    const internationalSavings = (internationalMinutes * 0.15) * 0.5;
    const smsSavings = (smsVolume * 0.08) * 0.4;
    const featureSavings = employees * 8;
    const homeWorkerSavings = homeWorkers * 5;

    const totalMonthlySavings = voipSavings + mobileSavings + internationalSavings + 
                                 smsSavings + featureSavings + homeWorkerSavings;
    
    const yearlysSavings = totalMonthlySavings * 12;
    const savingsPercentage = ((totalMonthlySavings / monthlySpend) * 100);

    const calculatedSavings = {
      monthly: Math.round(totalMonthlySavings),
      yearly: Math.round(yearlysSavings),
      percentage: Math.min(Math.round(savingsPercentage), 50),
      breakdown: {
        voip: Math.round(voipSavings),
        mobile: Math.round(mobileSavings),
        international: Math.round(internationalSavings + smsSavings),
        features: Math.round(featureSavings + homeWorkerSavings)
      }
    };

    // Save to database
    try {
      const { error } = await supabase.from('calculator_submissions').insert({
        email: formData.email,
        company_name: formData.companyName || null,
        phone: formData.phone || null,
        employees: employees,
        monthly_costs: monthlySpend,
        international_minutes: internationalMinutes,
        sms_volume: smsVolume,
        system_type: systemType || 'unknown',
        fixed_lines: fixedLines,
        national_minutes: nationalMinutes,
        mobile_subscriptions: mobileSubscriptions,
        data_usage_gb: mobileDataGB,
        contract_months: formData.contractDuration === "1year" ? 12 : 
                         formData.contractDuration === "2year" ? 24 : 
                         formData.contractDuration === "3year" ? 36 : 0,
        home_workers: homeWorkers,
        total_savings: calculatedSavings.monthly,
        savings_percentage: calculatedSavings.percentage,
      });

      if (error) {
        console.error('Error saving submission:', error);
        toast({
          title: "Fout bij opslaan",
          description: "Er ging iets mis bij het opslaan, maar u kunt de resultaten wel bekijken.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Succesvol opgeslagen!",
          description: "We nemen binnenkort contact met u op.",
        });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSavings(calculatedSavings);
      setShowResults(true);
      setIsSubmitting(false);
    }
  };

  const resetCalculator = () => {
    setFormData({
      email: "",
      companyName: "",
      phone: "",
      employees: "",
      monthlySpend: "",
      systemType: "",
      fixedLines: "",
      nationalMinutes: "",
      internationalMinutes: "",
      mobileSubscriptions: "",
      mobileDataGB: "",
      smsVolume: "",
      contractDuration: "",
      homeWorkers: "",
      currentProvider: ""
    });
    setShowResults(false);
    setCurrentStep("contact");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Calculator Form */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Bereken Uw Besparing</h3>
        </div>
        
        <Tabs value={currentStep} onValueChange={setCurrentStep} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="contact" className="text-xs sm:text-sm">
              <Mail className="h-4 w-4 mr-1" />
              Contact
            </TabsTrigger>
            <TabsTrigger value="basis" className="text-xs sm:text-sm">
              <Users className="h-4 w-4 mr-1" />
              Basis
            </TabsTrigger>
            <TabsTrigger value="telefonie" className="text-xs sm:text-sm">
              <Phone className="h-4 w-4 mr-1" />
              Vast
            </TabsTrigger>
            <TabsTrigger value="mobiel" className="text-xs sm:text-sm">
              <Smartphone className="h-4 w-4 mr-1" />
              Mobiel
            </TabsTrigger>
            <TabsTrigger value="extra" className="text-xs sm:text-sm">
              <Building2 className="h-4 w-4 mr-1" />
              Extra
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contact" className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-foreground">
                Email adres <span className="text-primary">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="uw.email@bedrijf.nl"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="companyName" className="text-foreground">
                Bedrijfsnaam
              </Label>
              <Input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Uw bedrijfsnaam"
                value={formData.companyName}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground">
                Telefoonnummer
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+31 6 12345678"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <Button 
              onClick={() => setCurrentStep("basis")} 
              className="w-full bg-primary hover:bg-primary/90"
            >
              Volgende Stap
            </Button>
          </TabsContent>

          <TabsContent value="basis" className="space-y-4">
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
              <Label htmlFor="currentProvider" className="text-foreground">
                Huidige provider (optioneel)
              </Label>
              <Input
                id="currentProvider"
                name="currentProvider"
                type="text"
                placeholder="bijv. KPN, Vodafone"
                value={formData.currentProvider}
                onChange={(e) => setFormData(prev => ({ ...prev, currentProvider: e.target.value }))}
                className="mt-1"
              />
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={() => setCurrentStep("contact")} 
                variant="outline"
                className="flex-1"
              >
                Vorige
              </Button>
              <Button 
                onClick={() => setCurrentStep("telefonie")} 
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Volgende
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="telefonie" className="space-y-4">
            <div>
              <Label htmlFor="systemType" className="text-foreground">
                Type telefoonsysteem
              </Label>
              <Select value={formData.systemType} onValueChange={(value) => handleSelectChange("systemType", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecteer type systeem" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="traditional">Traditioneel (ISDN/PSTN)</SelectItem>
                  <SelectItem value="voip">VoIP</SelectItem>
                  <SelectItem value="hybrid">Hybride</SelectItem>
                  <SelectItem value="unknown">Weet ik niet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="fixedLines" className="text-foreground">
                Aantal vaste telefoonlijnen
              </Label>
              <Input
                id="fixedLines"
                name="fixedLines"
                type="text"
                inputMode="numeric"
                placeholder="bijv. 20"
                value={formData.fixedLines}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="nationalMinutes" className="text-foreground">
                Nationale belminuten per maand
              </Label>
              <Input
                id="nationalMinutes"
                name="nationalMinutes"
                type="text"
                inputMode="numeric"
                placeholder="bijv. 5000"
                value={formData.nationalMinutes}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="internationalMinutes" className="text-foreground">
                Internationale belminuten per maand
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

            <div className="flex gap-3">
              <Button 
                onClick={() => setCurrentStep("basis")} 
                variant="outline"
                className="flex-1"
              >
                Vorige
              </Button>
              <Button 
                onClick={() => setCurrentStep("mobiel")} 
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Volgende
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="mobiel" className="space-y-4">
            <div>
              <Label htmlFor="mobileSubscriptions" className="text-foreground">
                Aantal mobiele abonnementen
              </Label>
              <Input
                id="mobileSubscriptions"
                name="mobileSubscriptions"
                type="text"
                inputMode="numeric"
                placeholder="bijv. 50"
                value={formData.mobileSubscriptions}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="mobileDataGB" className="text-foreground">
                Gemiddeld data verbruik per maand (GB)
              </Label>
              <Input
                id="mobileDataGB"
                name="mobileDataGB"
                type="text"
                inputMode="numeric"
                placeholder="bijv. 100"
                value={formData.mobileDataGB}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="smsVolume" className="text-foreground">
                Aantal SMS berichten per maand
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

            <div className="flex gap-3">
              <Button 
                onClick={() => setCurrentStep("telefonie")} 
                variant="outline"
                className="flex-1"
              >
                Vorige
              </Button>
              <Button 
                onClick={() => setCurrentStep("extra")} 
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Volgende
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="extra" className="space-y-4">
            <div>
              <Label htmlFor="contractDuration" className="text-foreground">
                Contract duur met huidige provider
              </Label>
              <Select value={formData.contractDuration} onValueChange={(value) => handleSelectChange("contractDuration", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecteer contract duur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Maand-tot-maand</SelectItem>
                  <SelectItem value="1year">1 jaar</SelectItem>
                  <SelectItem value="2year">2 jaar</SelectItem>
                  <SelectItem value="3year">3 jaar</SelectItem>
                  <SelectItem value="unknown">Weet ik niet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="homeWorkers" className="text-foreground">
                Aantal thuiswerkers
              </Label>
              <Input
                id="homeWorkers"
                name="homeWorkers"
                type="text"
                inputMode="numeric"
                placeholder="bijv. 25"
                value={formData.homeWorkers}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary inline mr-2" />
                Hoe meer details u invult, hoe nauwkeuriger uw besparingsberekening
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <Button 
                onClick={() => setCurrentStep("mobiel")} 
                variant="outline"
                className="flex-1"
              >
                Vorige
              </Button>
              <Button 
                onClick={calculateSavings} 
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Bezig met opslaan..." : "Bereken Besparing"}
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {showResults && (
          <Button 
            onClick={resetCalculator} 
            variant="outline"
            className="w-full mt-4"
          >
            Nieuwe Berekening
          </Button>
        )}
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

              <div className="space-y-3">
                <h5 className="font-semibold text-foreground mb-3">Besparingsopbouw:</h5>
                
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm text-muted-foreground">VoIP & Infrastructuur</span>
                  <span className="font-semibold text-foreground">€{savings.breakdown.voip}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm text-muted-foreground">Mobiele Abonnementen</span>
                  <span className="font-semibold text-foreground">€{savings.breakdown.mobile}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm text-muted-foreground">Internationaal & SMS</span>
                  <span className="font-semibold text-foreground">€{savings.breakdown.international}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm text-muted-foreground">AI Features & Efficiency</span>
                  <span className="font-semibold text-foreground">€{savings.breakdown.features}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h5 className="font-semibold text-foreground mb-3">Wat u krijgt:</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Moderne VoIP telefonie met AI-assistentie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Geïntegreerde mobiele en vaste telefonie oplossing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>24/7 Nederlandse klantenservice</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Flexibele contracten zonder lange bindingsperiodes</span>
                </li>
              </ul>
            </Card>

            <Button 
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
            >
              <Link to="/contact">
                Neem Contact Op
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default SavingsCalculator;

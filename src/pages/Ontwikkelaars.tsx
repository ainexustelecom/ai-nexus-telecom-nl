import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Terminal, Book, Zap, FileCode, Settings, Users, Headphones } from "lucide-react";

const Ontwikkelaars = () => {
  const apiFeatures = [
    {
      icon: Code,
      title: "REST API's",
      description: "Volledige REST API's voor alle diensten met JSON responses",
    },
    {
      icon: Terminal,
      title: "Webhooks",
      description: "Realtime notificaties voor events via webhooks",
    },
    {
      icon: Book,
      title: "Documentatie",
      description: "Uitgebreide docs met voorbeelden en tutorials",
    },
    {
      icon: Zap,
      title: "SDK's",
      description: "Officiële SDK's voor populaire programmeertalen",
    },
    {
      icon: FileCode,
      title: "Code Examples",
      description: "Ready-to-use voorbeelden in meerdere talen",
    },
    {
      icon: Settings,
      title: "Sandbox",
      description: "Test omgeving voor development en testing",
    },
  ];

  const codeExamples = [
    {
      language: "JavaScript",
      title: "Spraak API - Maak een Uitgaand Gesprek",
      code: `const nexus = require('@ainexus/telecom');

// Initialiseer client
const client = new nexus.Client({
  apiKey: process.env.NEXUS_API_KEY
});

// Maak een uitgaand gesprek
const call = await client.voice.create({
  to: '+31612345678',
  from: '+31201234567',
  ai_agent: 'support',
  webhook_url: 'https://yourdomain.com/webhook'
});

console.log('Call ID:', call.id);
console.log('Status:', call.status);`,
    },
    {
      language: "Python",
      title: "SMS API - Verstuur Bericht",
      code: `from ainexus import TelecomClient

# Initialiseer client
client = TelecomClient(api_key='your_api_key')

# Verstuur SMS
message = client.sms.send(
    to='+31612345678',
    from_='+31201234567',
    body='Hallo van AI Nexus Telecom!',
    webhook_url='https://yourdomain.com/webhook'
)

print(f"Message ID: {message.id}")
print(f"Status: {message.status}")`,
    },
    {
      language: "cURL",
      title: "Webhook Configuratie",
      code: `curl -X POST https://api.ainexus-telecom.nl/v1/webhooks \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://yourdomain.com/webhook",
    "events": ["call.started", "call.ended", "sms.delivered"],
    "active": true
  }'`,
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Developer</span> Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Krachtige API's en tools om telecom in uw applicaties te integreren
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Book className="h-5 w-5 mr-2" />
              Bekijk Documentatie
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Vraag API Key Aan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Alles wat Ontwikkelaars Nodig Hebben
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Van complete API's tot ready-to-use code examples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-secondary rounded-lg p-3 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Code Voorbeelden
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Begin direct met deze ready-to-use voorbeelden
            </p>
          </div>

          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="bg-foreground px-6 py-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                    <p className="text-sm text-white/70">{example.language}</p>
                  </div>
                  <Button variant="secondary" size="sm">
                    <FileCode className="h-4 w-4 mr-2" />
                    Copy Code
                  </Button>
                </div>
                <div className="p-6 bg-foreground/95">
                  <pre className="overflow-x-auto">
                    <code className="text-sm text-green-400 font-mono whitespace-pre">
                      {example.code}
                    </code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beschikbare API's
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Volledige set van RESTful API's voor al onze diensten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Voice API",
                endpoint: "/v1/voice",
                description: "Maak en beheer spraakgesprekken",
                methods: ["GET", "POST", "DELETE"],
              },
              {
                name: "Messaging API",
                endpoint: "/v1/messages",
                description: "Verstuur en ontvang SMS/MMS berichten",
                methods: ["GET", "POST"],
              },
              {
                name: "Numbers API",
                endpoint: "/v1/numbers",
                description: "Beheer telefoonnummers",
                methods: ["GET", "POST", "PUT", "DELETE"],
              },
              {
                name: "AI Agents API",
                endpoint: "/v1/ai-agents",
                description: "Configureer en train AI spraakagenten",
                methods: ["GET", "POST", "PUT"],
              },
              {
                name: "Analytics API",
                endpoint: "/v1/analytics",
                description: "Toegang tot analytics en rapportages",
                methods: ["GET"],
              },
              {
                name: "Webhooks API",
                endpoint: "/v1/webhooks",
                description: "Configureer event notificaties",
                methods: ["GET", "POST", "PUT", "DELETE"],
              },
            ].map((api, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{api.name}</h3>
                    <code className="text-sm text-primary bg-secondary px-2 py-1 rounded">
                      {api.endpoint}
                    </code>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{api.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {api.methods.map((method, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary px-3 py-1 rounded text-xs font-mono font-semibold"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Zelfbeheerportaal
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Beheer al uw diensten, API keys en analytics in één centraal dashboard
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Realtime monitoring van al uw diensten",
                    "API key management en regeneratie",
                    "Gebruik en facturering inzichten",
                    "Webhook configuratie en logs",
                    "Test tools en sandbox omgeving",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <div className="h-2 w-2 bg-white rounded-full" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary hover:bg-primary/90" size="lg">
                  <Settings className="h-5 w-5 mr-2" />
                  Open Portal
                </Button>
              </div>
              <div className="bg-gradient-primary rounded-2xl p-12 shadow-elegant">
                <div className="space-y-6 text-white">
                  <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                    <div className="text-sm mb-2">Active Services</div>
                    <div className="text-3xl font-bold">12</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                    <div className="text-sm mb-2">API Calls (24h)</div>
                    <div className="text-3xl font-bold">24,521</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                    <div className="text-sm mb-2">Uptime</div>
                    <div className="text-3xl font-bold">99.99%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Developer Support
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Hulp nodig bij integratie? Ons developer support team staat voor u klaar
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Documentatie", desc: "Uitgebreide docs en guides", icon: Book },
              { title: "Community", desc: "Developer forum en discussions", icon: Users },
              { title: "Support", desc: "Direct contact met engineers", icon: Headphones },
            ].map((item, index) => (
              <div key={index} className="bg-secondary rounded-xl p-6 border border-border">
                <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klaar om te Bouwen?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Begin vandaag nog met het integreren van onze API's
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Book className="h-5 w-5 mr-2" />
              Start met Docs
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Vraag API Key Aan
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ontwikkelaars;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Diensten from "./pages/Diensten";
import WaaromWij from "./pages/WaaromWij";
import Aanpak from "./pages/Aanpak";
import Oplossingen from "./pages/Oplossingen";
import UseCases from "./pages/UseCases";
import Klanten from "./pages/Klanten";
import Kracht from "./pages/Kracht";
import Contact from "./pages/Contact";
import OverOns from "./pages/OverOns";
import Prijzen from "./pages/Prijzen";
import Ontwikkelaars from "./pages/Ontwikkelaars";
import VoiceAI from "./pages/VoiceAI";
import VoiceAPI from "./pages/VoiceAPI";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diensten" element={<Diensten />} />
            <Route path="/waarom-wij" element={<WaaromWij />} />
            <Route path="/aanpak" element={<Aanpak />} />
            <Route path="/oplossingen" element={<Oplossingen />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/klanten" element={<Klanten />} />
            <Route path="/kracht" element={<Kracht />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/over-ons" element={<OverOns />} />
            <Route path="/prijzen" element={<Prijzen />} />
            <Route path="/ontwikkelaars" element={<Ontwikkelaars />} />
            <Route path="/voice-ai" element={<VoiceAI />} />
            <Route path="/voice-api" element={<VoiceAPI />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

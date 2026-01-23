import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs"; // New
import WebsiteDesign from "./pages/WebsiteDesign"; // New
import AIVoiceAgents from "./pages/AIVoiceAgents"; // New
import AIChatbots from "./pages/AIChatbots"; // New
import AISolutions from "./pages/AISolutions"; // New
import CaseStudies from "./pages/CaseStudies"; // New
import Pricing from "./pages/Pricing"; // New
import Blog from "./pages/Blog"; // New
import PrivacyPolicy from "./pages/PrivacyPolicy"; // New
import TermsAndConditions from "./pages/TermsAndConditions"; // New

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} /> {/* New route */}
            <Route path="/services" element={<Services />} />
            <Route path="/website-design-development" element={<WebsiteDesign />} /> {/* New route */}
            <Route path="/ai-voice-agents" element={<AIVoiceAgents />} /> {/* New route */}
            <Route path="/ai-chatbots" element={<AIChatbots />} /> {/* New route */}
            <Route path="/ai-solutions" element={<AISolutions />} /> {/* New route */}
            <Route path="/case-studies" element={<CaseStudies />} /> {/* New route */}
            <Route path="/pricing" element={<Pricing />} /> {/* New route */}
            <Route path="/blog" element={<Blog />} /> {/* New route */}
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* New route */}
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> {/* New route */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
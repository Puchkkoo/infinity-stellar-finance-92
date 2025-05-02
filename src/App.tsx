
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Flamingo from "./pages/Flamingo";
import Synapse from "./pages/Synapse";
import Sponge from "./pages/Sponge";
import IndianStreet from "./pages/IndianStreet";
import Markets from "./pages/Markets";
import Mission from "./pages/Mission";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Service Pages
import Equity from "./pages/services/Equity";
import FuturesOptions from "./pages/services/FuturesOptions";

// Feature Pages
import AlgoTrading from "./pages/features/AlgoTrading";
import Security from "./pages/features/Security";

// Additional routes for Sponge product
const SpongeForums = () => <div>Forums Coming Soon</div>;
const SpongeResources = () => <div>Resources Coming Soon</div>;
const SpongeMentors = () => <div>Mentors Coming Soon</div>;
const SpongeEvents = () => <div>Events Coming Soon</div>;
const SpongeAbout = () => <div>About Sponge Coming Soon</div>;

// Additional routes for Synapse product
const SynapseTaskManagement = () => <div>Task Management Coming Soon</div>;
const SynapseCalendar = () => <div>Calendar Coming Soon</div>;
const SynapseDocuments = () => <div>Documents Coming Soon</div>;

// Additional routes for Flamingo product
const StockScreener = () => <div>Stock Screener Coming Soon</div>;
const PortfolioAnalytics = () => <div>Portfolio Analytics Coming Soon</div>;
const AdvancedCharting = () => <div>Advanced Charting Coming Soon</div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flamingo" element={<Flamingo />} />
          <Route path="/synapse" element={<Synapse />} />
          <Route path="/sponge" element={<Sponge />} />
          <Route path="/indian-street" element={<IndianStreet />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Service Pages */}
          <Route path="/services/equity" element={<Equity />} />
          <Route path="/services/fno" element={<FuturesOptions />} />
          
          {/* Feature Pages */}
          <Route path="/features/algo-trading" element={<AlgoTrading />} />
          <Route path="/features/security" element={<Security />} />
          
          {/* Sponge Routes */}
          <Route path="/sponge/forums" element={<SpongeForums />} />
          <Route path="/sponge/resources" element={<SpongeResources />} />
          <Route path="/sponge/mentors" element={<SpongeMentors />} />
          <Route path="/sponge/events" element={<SpongeEvents />} />
          <Route path="/sponge/about" element={<SpongeAbout />} />
          
          {/* Synapse Routes */}
          <Route path="/synapse/task-management" element={<SynapseTaskManagement />} />
          <Route path="/synapse/calendar" element={<SynapseCalendar />} />
          <Route path="/synapse/documents" element={<SynapseDocuments />} />
          
          {/* Flamingo Routes */}
          <Route path="/features/stock-screener" element={<StockScreener />} />
          <Route path="/features/portfolio-analytics" element={<PortfolioAnalytics />} />
          <Route path="/features/advanced-charting" element={<AdvancedCharting />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

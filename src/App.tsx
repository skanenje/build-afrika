import { Toaster } from "./app/components/ui/toaster";
import { Toaster as Sonner } from "./app/components/ui/sonner";
import { TooltipProvider } from "./app/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import TechIgnite from "./pages/tech-ignite";
import Communities from "./pages/communities";
import Contact from "./pages/contact";

const queryClient = new QueryClient();

const App = () => {
  console.log('%c[App] Initializing application...', 'color: #4CAF50; font-weight: bold');
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tech-ignite" element={<TechIgnite />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

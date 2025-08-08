import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/layout/navigation";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import DailyCheckin from "./pages/DailyCheckin";
import WeeklyReview from "./pages/WeeklyReview";
import Progress from "./pages/Progress";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={
              <>
                <Navigation />
                <Dashboard />
              </>
            } />
            <Route path="/daily" element={
              <>
                <Navigation />
                <DailyCheckin />
              </>
            } />
            <Route path="/weekly" element={
              <>
                <Navigation />
                <WeeklyReview />
              </>
            } />
            <Route path="/monthly" element={
              <>
                <Navigation />
                <div className="min-h-screen bg-background p-6 ml-64 flex items-center justify-center">
                  <p className="text-muted-foreground">Monthly check-ins coming soon!</p>
                </div>
              </>
            } />
            <Route path="/yearly" element={
              <>
                <Navigation />
                <div className="min-h-screen bg-background p-6 ml-64 flex items-center justify-center">
                  <p className="text-muted-foreground">Yearly reviews coming soon!</p>
                </div>
              </>
            } />
            <Route path="/progress" element={
              <>
                <Navigation />
                <Progress />
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

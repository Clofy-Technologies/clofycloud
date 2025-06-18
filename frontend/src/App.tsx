
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SolutionGenerator from "./pages/SolutionGenerator";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserManagement from "./pages/UserManagement";
import ProfileSection from './components/ProfileSection';
import SubscriptionSection from './components/SubscriptionSection';
import SavedSolutionsSection from './components/SavedSolutionsSection';
import UpgradeSection from './components/UpgradeSection';
import SupportSection from './components/SupportSection';
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
          <Route path="/solution-generator" element={<SolutionGenerator />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user-management" element={<UserManagement />}>
            <Route index element={<ProfileSection />} />
            <Route path="profile" element={<ProfileSection />} />
            <Route path="subscription" element={<SubscriptionSection />} />
            <Route path="saved-solutions" element={<SavedSolutionsSection />} />
            <Route path="upgrade" element={<UpgradeSection />} />
            <Route path="support" element={<SupportSection />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

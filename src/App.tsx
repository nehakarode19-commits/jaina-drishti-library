import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GlobalSearch from "./pages/GlobalSearch";
import AgamSearch from "./pages/AgamSearch";
import AdvancedSearch from "./pages/AdvancedSearch";
import BookDetail from "./pages/BookDetail";
import Bookstore from "./pages/Bookstore";
import Donate from "./pages/Donate";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import RequestBook from "./pages/RequestBook";
import RequestUpload from "./pages/RequestUpload";
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
          <Route path="/search" element={<GlobalSearch />} />
          <Route path="/agam-search" element={<AgamSearch />} />
          <Route path="/advanced-search" element={<AdvancedSearch />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/bookstore" element={<Bookstore />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/request-book" element={<RequestBook />} />
          <Route path="/request-upload" element={<RequestUpload />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

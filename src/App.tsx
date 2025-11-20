import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GlobalSearch from "./pages/GlobalSearch";
import SearchResults from "./pages/SearchResults";
import AgamSearch from "./pages/AgamSearch";
import AgamSearchResults from "./pages/AgamSearchResults";
import AgamDetail from "./pages/AgamDetail";
import AdvancedSearch from "./pages/AdvancedSearch";
import BookDetail from "./pages/BookDetail";
import Bookstore from "./pages/Bookstore";
import Donate from "./pages/Donate";
import DonateForm from "./pages/DonateForm";
import DonateFillForm from "./pages/DonateFillForm";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import About from "./pages/About";
import Committee from "./pages/Committee";
import ContactUs from "./pages/ContactUs";
import Feedback from "./pages/Feedback";
import RequestBook from "./pages/RequestBook";
import RequestUpload from "./pages/RequestUpload";
import BookCategory from "./pages/BookCategory";
import Cart from "./pages/Cart";
import CatalogueDetail from "./pages/CatalogueDetail";
import MagazineList from "./pages/MagazineList";
import MagazineDetail from "./pages/MagazineDetail";
import AuthorsList from "./pages/AuthorsList";
import PublishersList from "./pages/PublishersList";
import LatestDownloads from "./pages/LatestDownloads";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/search" element={<GlobalSearch />} />
        <Route path="/global-search" element={<GlobalSearch />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/search/agam" element={<AgamSearch />} />
        <Route path="/search/agam/results" element={<AgamSearchResults />} />
        <Route path="/search/agam/:id" element={<AgamDetail />} />
        <Route path="/agam/:id" element={<AgamDetail />} />
        <Route path="/advanced-search" element={<AdvancedSearch />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/bookstore" element={<Bookstore />} />
        <Route path="/buy-books" element={<Bookstore />} />
        <Route path="/buy-books/:slug" element={<BookCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/form" element={<DonateForm />} />
        <Route path="/donate/fill-form" element={<DonateFillForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/request-book" element={<RequestBook />} />
        <Route path="/request-upload" element={<RequestUpload />} />
        <Route path="/catalogue/:catalogueId" element={<CatalogueDetail />} />
        <Route path="/magazines" element={<MagazineList />} />
        <Route path="/magazines/detail" element={<MagazineDetail />} />
        <Route path="/authors" element={<AuthorsList />} />
        <Route path="/publishers" element={<PublishersList />} />
        <Route path="/latest-downloads" element={<LatestDownloads />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

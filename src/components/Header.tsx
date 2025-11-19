import { Link } from "react-router-dom";
import { Search, Book, Home, ShoppingCart, Heart, User, MessageSquare, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2">
            <Book className="h-8 w-8 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold font-serif tracking-tight text-white">Jain eLibrary</span>
            <span className="text-xs text-white/80 font-medium">जैन ई-पुस्तकालय</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-white hover:text-gold transition-colors">
            Home
          </Link>
          <Link to="/search" className="text-sm font-medium text-white hover:text-gold transition-colors">
            Search
          </Link>
          <Link to="/bookstore" className="text-sm font-medium text-white hover:text-gold transition-colors">
            Bookstore
          </Link>
          <Link to="/about" className="text-sm font-medium text-white hover:text-gold transition-colors">
            About
          </Link>
          <Link to="/feedback" className="text-sm font-medium text-white hover:text-gold transition-colors">
            Feedback
          </Link>
          <Link to="/donate" className="text-sm font-medium text-white hover:text-gold transition-colors">
            Donate
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="text-white hover:text-gold hover:bg-white/10">
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="dark">
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { Search, Book, Home, ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b glass-effect shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-teal to-primary shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
            <Book className="h-6 w-6 text-white" />
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold font-serif tracking-tight text-foreground group-hover:text-primary transition-colors">Jain eLibrary</span>
            <span className="text-xs text-muted-foreground font-medium">जैन ई-पुस्तकालय</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link to="/" className="px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-primary hover:bg-primary-light rounded-lg flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link to="/search" className="px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-primary hover:bg-primary-light rounded-lg flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search
          </Link>
          <Link to="/bookstore" className="px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-primary hover:bg-primary-light rounded-lg flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Bookstore
          </Link>
          <Link to="/donate" className="px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-burgundy hover:bg-burgundy/5 rounded-lg flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Donate
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="hover:bg-primary-light hover:text-primary">
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild className="hidden md:flex bg-gradient-to-r from-primary to-teal hover:from-teal hover:to-primary shadow-md hover:shadow-lg transition-all duration-300">
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

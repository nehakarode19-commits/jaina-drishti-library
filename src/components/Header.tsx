import { Link } from "react-router-dom";
import { Search, Book, Home, ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Book className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">Jain eLibrary</span>
            <span className="text-xs text-muted-foreground">जैन ई-पुस्तकालय</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link to="/search" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search
          </Link>
          <Link to="/bookstore" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Bookstore
          </Link>
          <Link to="/donate" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Donate
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild className="hidden md:flex">
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

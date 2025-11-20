import { Link } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check initial auth state
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };
    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img src={logo} alt="Jain eLibrary Logo" className="h-12 w-auto" />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link to="/" className="text-sm font-medium text-white hover:text-gold transition-colors">
                Home
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:text-gold hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-gold">
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-lg border border-border z-[100]">
                <div className="w-48 p-2">
                  <NavigationMenuLink asChild>
                    <Link to="/about" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors">
                      About us
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/committee" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors">
                      Committee
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/contact" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors">
                      Contact us
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:text-gold hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-gold">
                Donation
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-lg border border-border z-[100]">
                <div className="w-48 p-2">
                  <NavigationMenuLink asChild>
                    <Link to="/donate" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors">
                      Donate Now
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:text-gold hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-gold">
                Request
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-lg border border-border z-[100]">
                <div className="w-48 p-2">
                  <NavigationMenuLink asChild>
                    <Link to="/request-book" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors">
                      New Book Request
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/request-upload" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors">
                      Upload Request
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/feedback" className="text-sm font-medium text-white hover:text-gold transition-colors">
                Feedback
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/bookstore" className="text-sm font-medium text-white hover:text-gold transition-colors">
                Buy Books
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="text-white hover:text-gold hover:bg-white/10 relative">
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </Button>
          {isLoggedIn ? (
            <Button variant="ghost" size="icon" asChild className="text-white hover:text-gold hover:bg-white/10">
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" className="text-white hover:text-gold hover:bg-white/10">
                <Link to="/login?tab=login">Sign In</Link>
              </Button>
              <Button asChild variant="dark">
                <Link to="/login?tab=signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

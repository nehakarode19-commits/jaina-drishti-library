import { Link } from "react-router-dom";
import { Book, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
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
              <NavigationMenuContent className="bg-white shadow-lg border border-border">
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
              <NavigationMenuContent className="bg-white shadow-lg border border-border">
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
              <NavigationMenuContent className="bg-white shadow-lg border border-border">
                <div className="w-48 p-2">
                  <NavigationMenuLink asChild>
                    <Link to="/request-book" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors">
                      Request New Book
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

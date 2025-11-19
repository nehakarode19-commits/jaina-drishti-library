import { Link } from "react-router-dom";
import { Book, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-b from-secondary/30 to-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal shadow-md">
                <Book className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold font-serif text-lg">Jain eLibrary</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Preserving and sharing the profound wisdom of Jain scriptures and literature for seekers worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-semibold font-serif text-lg mb-5">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/search" className="text-muted-foreground hover:text-primary transition-colors font-medium">Global Search</Link></li>
              <li><Link to="/agam-search" className="text-muted-foreground hover:text-primary transition-colors font-medium">Agam Search</Link></li>
              <li><Link to="/advanced-search" className="text-muted-foreground hover:text-primary transition-colors font-medium">Advanced Search</Link></li>
              <li><Link to="/bookstore" className="text-muted-foreground hover:text-primary transition-colors font-medium">Buy Books</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-serif text-lg mb-5">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link to="/feedback" className="text-muted-foreground hover:text-primary transition-colors font-medium">Feedback</Link></li>
              <li><Link to="/request-book" className="text-muted-foreground hover:text-primary transition-colors font-medium">Request New Book</Link></li>
              <li><Link to="/request-upload" className="text-muted-foreground hover:text-primary transition-colors font-medium">Upload Request</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-serif text-lg mb-5">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground group">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                <span className="font-medium">contact@jainelibrary.org</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground group">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground group">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                <span className="font-medium">Jain Heritage Center<br />123 Spiritual Way</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground font-medium">© {new Date().getFullYear()} Jain eLibrary. All rights reserved. | <span className="text-primary">Jai Jinendra 🙏</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

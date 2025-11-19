import { Link } from "react-router-dom";
import { Book, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Book className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold">Jain eLibrary</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Preserving and sharing the profound wisdom of Jain scriptures and literature for seekers worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/search" className="text-muted-foreground hover:text-primary transition-colors">Global Search</Link></li>
              <li><Link to="/agam-search" className="text-muted-foreground hover:text-primary transition-colors">Agam Search</Link></li>
              <li><Link to="/advanced-search" className="text-muted-foreground hover:text-primary transition-colors">Advanced Search</Link></li>
              <li><Link to="/bookstore" className="text-muted-foreground hover:text-primary transition-colors">Buy Books</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/feedback" className="text-muted-foreground hover:text-primary transition-colors">Feedback</Link></li>
              <li><Link to="/request-book" className="text-muted-foreground hover:text-primary transition-colors">Request New Book</Link></li>
              <li><Link to="/request-upload" className="text-muted-foreground hover:text-primary transition-colors">Upload Request</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>contact@jainelibrary.org</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Jain Heritage Center<br />123 Spiritual Way</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Jain eLibrary. All rights reserved. | Jai Jinendra 🙏</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

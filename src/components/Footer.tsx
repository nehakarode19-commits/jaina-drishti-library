import { Link } from "react-router-dom";
import { Book, MessageCircle, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-[#3D4A3A] text-white">
      <div className="container py-12">
        {/* Logo and Text */}
        <div className="flex flex-col items-center mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Book className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl block">Jain eLibrary</span>
              <span className="text-sm text-white/70">जैन ई लाइब्रेरी</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link>
          <Link to="/donate" className="text-white/80 hover:text-white transition-colors">Donation</Link>
          <Link to="/request-book" className="text-white/80 hover:text-white transition-colors">Request</Link>
          <Link to="/feedback" className="text-white/80 hover:text-white transition-colors">Feedback</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5 text-white" />
          </a>
          <a 
            href="mailto:info@jainelibrary.org"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 text-white" />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5 text-white" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-white" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-white -mx-8 -mb-12 mt-8 px-8 py-6 bg-[#8B9B7A]">
          <p>Copyright © Jain Education International. All rights reserved. | <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

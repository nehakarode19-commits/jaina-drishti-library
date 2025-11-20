import { Link } from "react-router-dom";
import { MessageCircle, Youtube, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#4A5843] text-white">
      <div className="container py-8">
        {/* Logo and Text */}
        <div className="flex flex-col items-center mb-6 space-y-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Jain eLibrary" className="h-12 w-auto" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-6 text-sm">
          <Link to="/" className="text-white hover:text-white/80 transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-white/80 transition-colors">About Us</Link>
          <Link to="/donate" className="text-white hover:text-white/80 transition-colors">Donation</Link>
          <Link to="/request-book" className="text-white hover:text-white/80 transition-colors">Request</Link>
          <Link to="/feedback" className="text-white hover:text-white/80 transition-colors">Feedback</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-3 mb-6">
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6B7C5E] hover:bg-[#7A8C6D] transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4 text-white" />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6B7C5E] hover:bg-[#7A8C6D] transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="h-4 w-4 text-white" />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6B7C5E] hover:bg-[#7A8C6D] transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4 text-white" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6B7C5E] hover:bg-[#7A8C6D] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4 text-white" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-white -mx-8 -mb-8 mt-6 px-8 py-4 bg-[#8FA878]">
          <p>Copyright © Jain Education International. All rights reserved. | <Link to="/about" className="hover:text-white/80 transition-colors">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

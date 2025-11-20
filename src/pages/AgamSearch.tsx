import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const AgamSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/agam/results?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Global Search for JAIN Agam & Scriptures
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Welcome to the Jain Elibrary: Worlds largest Free Library of JAIN Books, Manuscript, Scriptures, Agam, Literature, Seminar, Memorabilia, Dictionary, Magazines & Articles
            </p>
          </div>

          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="अचरंग"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 h-14 text-lg border-2 rounded-lg"
              />
            </div>
          </form>

          <p className="text-center text-sm text-muted-foreground mb-8">
            Frequently Searched: 4/43 , Jai aagam in हिन्दी इलेक्ट्रॉनिक , Gujarati aagam , lagas
          </p>

          <div className="flex justify-end">
            <Button 
              variant="link" 
              className="text-primary hover:text-primary/80"
              onClick={() => navigate('/search/agam/results?advanced=true')}
            >
              Scriptures in Agam Search
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgamSearch;

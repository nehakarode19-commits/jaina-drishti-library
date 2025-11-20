import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const GlobalSearch = () => {
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const filter = searchParams.get("filter") || "all";

  const filterTitles: Record<string, string> = {
    title: "Title",
    author: "Author",
    category: "Category",
    keyword: "Keyword",
    publisher: "Publisher",
    all: "All fields",
    quantum: "Quantum",
    agam: "Agam & Scriptures",
    ocr: "OCR Content"
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(query.trim())}&filter=${filter}`);
    }
  };

  useEffect(() => {
    // If there's a query in URL, trigger search
    const urlQuery = searchParams.get("q");
    if (urlQuery) {
      setQuery(urlQuery);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Global Search for JAIN Agam & Scriptures
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Welcome to the Jain Elibrary: Worlds largest Free Library of JAIN Books, Manuscript, Scriptures, Agam, Literature, Seminar, Memorabilia, Dictionary, Magazines & Articles
            </p>
          </div>

          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={filter === "agam" ? "अचरंग" : `Search by ${filterTitles[filter]}...`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 h-14 text-lg border-2 rounded-lg bg-background"
              />
            </div>
          </form>

          <p className="text-center text-sm text-muted-foreground mb-8">
            Frequently Searched: 4/43 , Jai aagam in हिन्दी इलेक्ट्रॉनिक , Gujarati aagam , lagas
          </p>

          {filter === "agam" && (
            <div className="flex justify-end">
              <button 
                className="text-primary hover:text-primary/80 text-sm underline"
                onClick={() => navigate('/search/agam')}
              >
                Scriptures in Agam Search
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GlobalSearch;

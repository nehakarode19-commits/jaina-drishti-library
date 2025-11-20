import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BookOpen, Grid, List, Download } from "lucide-react";

// Sample data - replace with actual API call
const sampleResults = [
  {
    id: "1",
    title: "Aayashyakasutra",
    titleNative: "आचाश्यक सूत्र",
    language: "Hindi",
    moolId: "Mool-01",
    moolLanguage: "Ardha-Magadhi",
    sutraNo: "32",
    type: "Sutra",
    section: "Section-1 शुद्धशास्त्र",
    snippet: "शुद्धशास्त्र-4 वहिल्लासम"
  },
  {
    id: "2",
    title: "Acharang",
    titleNative: "आचारांग सूत्र",
    language: "Sanskrit",
    moolId: "Mool-02",
    moolLanguage: "Prakrit",
    sutraNo: "10",
    type: "Sutra",
    section: "Section-6 शास्त्र जातरी",
    snippet: "शास्त्र-6 शास्त्र जातरी"
  },
  {
    id: "3",
    title: "Acharang",
    titleNative: "आचारांग सूत्र",
    language: "Hindi",
    moolId: "Mool-03",
    moolLanguage: "Ardha-Magadhi",
    sutraNo: "57",
    type: "Sutra",
    section: "Section-2 शुद्धशास्त्र",
    snippet: "शास्त्र-2 शुद्धशास्त्र"
  }
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [results, setResults] = useState(sampleResults);
  const [showCount, setShowCount] = useState(20);
  const filter = searchParams.get("filter") || "all";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(query.trim())}&filter=${filter}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-7xl">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
              Global Search for JAIN Agam & Scriptures
            </h1>
            <p className="text-sm md:text-base text-muted-foreground text-center max-w-3xl mx-auto mb-6">
              Welcome to the Jain Elibrary: Worlds largest Free Library of JAIN Books, Manuscript, Scriptures, Agam, Literature, Seminar, Memorabilia, Dictionary, Magazines & Articles
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="अचरंग"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-12 h-12 text-base border-2 rounded-lg bg-background"
                />
              </div>
            </form>

            <p className="text-center text-xs text-muted-foreground">
              Frequently Searched: 4/43 , Jai aagam in हिन्दी इलेक्ट्रॉनिक , Gujarati aagam , lagas
            </p>
          </div>

          {/* Results Header */}
          <div className="bg-background border rounded-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-1">
                  Search Results ({results.length})
                </h2>
                <p className="text-sm text-muted-foreground">
                  Note: For quick details click on Scripture Name
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button 
                  size="sm" 
                  className="bg-[#5D4E37] hover:bg-[#4D3E27] text-white"
                >
                  Export Result
                </Button>

                <div className="flex items-center gap-2">
                  <span className="text-sm">Show</span>
                  <select 
                    value={showCount}
                    onChange={(e) => setShowCount(Number(e.target.value))}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>

                <div className="flex border rounded-md">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-muted" : ""}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-muted" : ""}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className={viewMode === "grid" ? "grid md:grid-cols-2 gap-6" : "space-y-4"}>
            {results.map((result) => (
              <Card key={result.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Book Icon */}
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 bg-[#5D4E37]/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-8 w-8 text-[#5D4E37]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">
                            {result.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-2">
                            {result.titleNative}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-muted-foreground">{result.language}</span>
                          <p className="text-sm font-medium">{result.moolId}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm mb-3">
                        <div>
                          <span className="text-muted-foreground">Mool Language: </span>
                          <span className="font-medium">{result.moolLanguage}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Ang-01</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Sutraff: </span>
                          <span className="font-medium">{result.sutraNo}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Type: </span>
                          <span className="font-medium">{result.type}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-muted-foreground">Section: </span>
                          <span className="font-medium">{result.section}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        {result.snippet}
                      </p>

                      <Button 
                        size="sm" 
                        className="bg-[#5D4E37] hover:bg-[#4D3E27] text-white"
                        onClick={() => navigate(`/agam/${result.id}`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;

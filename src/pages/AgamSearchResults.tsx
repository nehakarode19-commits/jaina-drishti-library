import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Grid3x3, List, Search } from "lucide-react";

const sampleResults = [
  {
    id: "1118558",
    title: "Aavashyakasutra",
    titleNative: "आवश्यक सूत्र",
    language: "Hindi",
    moolId: "Mool-01",
    moolLanguage: "Ardha-Magadhi",
    sutraNumber: "32",
    type: "Sutra",
    chapter: "आचरंग - 4 प्रतिक्रमण",
  },
  {
    id: "2",
    title: "Acharang",
    titleNative: "आचारांग सूत्र",
    language: "Sanskrit",
    moolId: "Mool-02",
    moolLanguage: "Prakrit",
    sutraNumber: "10",
    type: "Sutra",
    chapter: "आचरंग - 5 तत्त्व ज्ञान",
  },
  {
    id: "3",
    title: "Acharang",
    titleNative: "आचारांग",
    language: "Hindi",
    moolId: "Mool-03",
    moolLanguage: "Ardha-Magadhi",
    sutraNumber: "57",
    type: "Sutra",
    chapter: "आचरंग - 2 लोकायात",
  },
  {
    id: "4",
    title: "Acharang",
    titleNative: "आचारांग सूत्र",
    language: "Hindi",
    moolId: "Ang-01",
    moolLanguage: "Ardha-Magadhi",
    sutraNumber: "139",
    type: "Sutra",
    chapter: "सूत्रांक: 1 आचारांग - 4 परमाद्धत",
  },
];

const AgamSearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [resultsPerPage, setResultsPerPage] = useState("20");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/agam/results?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Global Search for JAIN Agam & Scriptures
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-4xl mx-auto">
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
                className="pl-12 h-12 text-base border-2 rounded-lg"
              />
            </div>
          </form>

          <p className="text-center text-sm text-muted-foreground mb-8">
            Frequently Searched: 4/43 , Jai aagam in हिन्दी इलेक्ट्रॉनिक , Gujarati aagam , lagas
          </p>

          <div className="bg-card rounded-lg shadow-sm border p-4 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-1">Search Results (275)</h2>
                <p className="text-sm text-muted-foreground">Note: For quick details Click on Scripture Name</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Button className="bg-black-btn hover:bg-black-btn/90 text-white">
                  Export Result
                </Button>
                <span className="text-sm text-muted-foreground">Show</span>
                <Select value={resultsPerPage} onValueChange={setResultsPerPage}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3x3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {sampleResults.map((result) => (
              <div key={result.id} className="bg-card rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-20 bg-primary/10 rounded flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{result.title}</h3>
                        <p className="text-muted-foreground">{result.titleNative}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          {result.language}
                        </span>
                        <p className="text-sm font-medium mt-1">{result.moolId}</p>
                      </div>
                    </div>

                    <div className="space-y-1 text-sm mb-3">
                      <p>
                        <span className="font-medium">Mool Language:</span> {result.moolLanguage}
                      </p>
                      <p>
                        <span className="font-medium">Sutra#:</span> {result.sutraNumber}
                      </p>
                      <p>
                        <span className="font-medium">Type:</span> {result.type}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{result.chapter}</p>

                    <Button 
                      className="w-full bg-black-btn hover:bg-black-btn/90 text-white"
                      onClick={() => navigate(`/search/agam/${result.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            <Button variant="outline" size="icon">&lt;</Button>
            <Button variant="default" size="icon">1</Button>
            <Button variant="outline" size="icon">2</Button>
            <Button variant="outline" size="icon">&gt;</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgamSearchResults;

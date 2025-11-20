import { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Search, Grid, List, Download, BookOpen } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sampleResults = [
  { id: "1", title: "Acharang", nativeTitle: "आचारांग सूत्र", language: "Hindi", moolId: "Ang-01", sutraNumber: "139", type: "Sutra", chapter: "सूत्रकृतांग-१ अयलयंग-४ अनुवोयसार" },
  { id: "2", title: "Acharang", nativeTitle: "आचारांग सूत्र", language: "Sanskrit", moolId: "Mool-02", sutraNumber: "10", type: "Sutra", chapter: "आचारांग-५ दसवें गाथा" },
  { id: "3", title: "Acharang", nativeTitle: "आचारांग सूत्र", language: "Hindi", moolId: "Mool-03", sutraNumber: "57", type: "Sutra", chapter: "आयारंग-२ प्रयाशरत" },
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
    <>
      <Header />
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Global Search for JAIN Agam & Scriptures</h1>
            <p className="text-sm text-muted-foreground mb-6">Welcome to the Jain Elibrary: Worlds largest Free Library of JAIN Books, Manuscript, Scriptures, Agam, Literature, Seminar, Memorabilia, Dictionary, Magazines & Articles</p>
            <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input type="text" placeholder="अचारंग" value={query} onChange={(e) => setQuery(e.target.value)} className="pl-10 h-10 rounded-lg border-2" />
              </div>
            </form>
          </div>
          <div className="bg-[#8B7355] text-white p-3 rounded-t-lg flex justify-between">
            <div className="flex gap-4"><h2 className="font-semibold">Search Results ({results.length})</h2><span className="text-xs">Note: For quick details Click on Scripture Name</span></div>
            <div className="flex gap-2">
              <Button size="sm" className="h-8 bg-[#6B5940] hover:bg-[#5B4930] text-white"><Download className="h-3 w-3 mr-1" />Export Result</Button>
              <Select value={showCount.toString()} onValueChange={(val) => setShowCount(Number(val))}><SelectTrigger className="w-16 h-8 bg-white text-foreground"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="20">20</SelectItem></SelectContent></Select>
              <Button variant={viewMode === "grid" ? "secondary" : "ghost"} size="icon" className="h-8 w-8 text-white" onClick={() => setViewMode("grid")}><Grid className="h-4 w-4" /></Button>
            </div>
          </div>
          <div className="bg-[#F5F1E8] p-4 rounded-b-lg"><div className="grid md:grid-cols-2 gap-4">{results.map((r) => (<Card key={r.id} className="p-4 bg-white"><div className="flex gap-3"><div className="w-12 h-16 bg-[#8B7355] rounded flex items-center justify-center"><BookOpen className="h-6 w-6 text-white" /></div><div className="flex-1"><Link to={`/catalogue/${r.id}`}><h3 className="font-semibold text-[#8B7355] hover:underline">{r.title}</h3></Link><p className="text-sm text-muted-foreground">{r.nativeTitle}</p><div className="text-xs space-y-1"><div className="flex gap-4"><span className="font-medium text-[#6B5940]">{r.language}</span><span>Mool-{r.moolId.split('-')[1]}</span></div><div className="flex gap-4"><span>Sutra: {r.sutraNumber}</span><span>Type: {r.type}</span></div><p className="mt-2">{r.chapter}</p></div><Button asChild size="sm" className="mt-3 bg-[#6B5940] hover:bg-[#5B4930] text-white h-7 text-xs"><Link to={`/catalogue/${r.id}`}>View Details</Link></Button></div></div></Card>))}</div></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;

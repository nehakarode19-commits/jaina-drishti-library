import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Grid3x3, List } from "lucide-react";

interface Author {
  name: string;
  nameNative: string;
  language: string;
  mool: string;
  sutrat: string;
  type: string;
  section?: string;
  agam: string;
}

const authorsData: Author[] = [
  { name: "Aavashyakasutra", nameNative: "आवश्यक सूत्र", language: "Hindi", mool: "Mool-01", sutrat: "32", type: "Sutra", agam: "आवश्यक - 4 प्रतिक्रमण" },
  { name: "Acharang", nameNative: "आचारांग सूत्र", language: "Hindi", mool: "Ang-01", sutrat: "139", type: "Sutra", section: "अंक्षेप - 1 अध्यायन", agam: "सूत्रकृतांग - 1 अध्यायन - 4 सूत्रकृतांग" },
  { name: "Acharang", nameNative: "तन्नमुइज", language: "Sanskrit", mool: "Mool-02", sutrat: "10", type: "Sutra", agam: "आयारंग - 5 तत्त्व ज्ञान" },
  { name: "Acharang", nameNative: "आचारांग सूत्र", language: "Hindi", mool: "Ang-01", sutrat: "139", type: "Sutra", section: "अंक्षेप - 1 अध्यायन", agam: "सूत्रकृतांग - 1 अध्यायन - 4 सूत्रकृतांग" },
  { name: "Acharang", nameNative: "एकनायग", language: "Hindi", mool: "Mool-03", sutrat: "57", type: "Sutra", agam: "आयारंग - 2 जलनयत" },
  { name: "Acharang", nameNative: "आचारांग सूत्र", language: "Hindi", mool: "Ang-01", sutrat: "139", type: "Sutra", section: "अंक्षेप - 1 अध्यायन", agam: "सूत्रकृतांग - 1 अध्यायन - 4 सूत्रकृतांग" },
  { name: "Acharang", nameNative: "युवक्रायन", language: "Sanskrit", mool: "Mool-04", sutrat: "12", type: "Sutra", agam: "आयारंग - 3 चूल ज्ञान" },
  { name: "Acharang", nameNative: "आचारांग सूत्र", language: "Hindi", mool: "Ang-01", sutrat: "139", type: "Sutra", section: "अंक्षेप - 1 अध्यायन", agam: "सूत्रकृतांग - 1 अध्यायन - 4 सूत्रकृतांग" },
  { name: "Acharang", nameNative: "अनुशूतजर", language: "Hindi", mool: "Mool-05", sutrat: "21", type: "Sutra", agam: "आयारंग - 1 अनुलंघत" },
  { name: "Acharang", nameNative: "आचारांग सूत्र", language: "Hindi", mool: "Ang-01", sutrat: "139", type: "Sutra", section: "अंक्षेप - 1 अध्यायन", agam: "सूत्रकृतांग - 1 अध्यायन - 4 सूत्रकृतांग" },
];

const AuthorsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            List of Authors
          </h1>

          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="क्यायसह"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Frequently Searched: 4443 , Jai aagam in हिन्दी स्त्रोत्री , Gujarati aagam , logas
            </p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="text-sm">
              <span className="font-semibold">Showing 1 to 100</span> of 38,047 entries
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="default" className="bg-[#7C3E1C] hover:bg-[#6B3517]">
                Export Result
              </Button>
              <span className="text-sm">Show</span>
              <select className="border rounded px-3 py-1">
                <option>20</option>
                <option>50</option>
                <option>100</option>
              </select>
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

          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}>
            {authorsData.map((author, index) => (
              <div 
                key={index}
                className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-20 bg-muted rounded flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{author.name}</h3>
                        <p className="text-sm text-muted-foreground">{author.nameNative}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-primary">{author.language}</span>
                        <p className="text-sm text-muted-foreground">{author.mool}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1 text-sm mb-3">
                      <div className="flex gap-4">
                        <span>Sutrat#: <span className="font-semibold">{author.sutrat}</span></span>
                        <span>Type: <span className="font-semibold">{author.type}</span></span>
                        {author.section && <span>Section: <span className="font-semibold">{author.section}</span></span>}
                      </div>
                      <p className="text-muted-foreground">{author.agam}</p>
                    </div>

                    <Button 
                      variant="default"
                      size="sm"
                      className="bg-[#7C3E1C] hover:bg-[#6B3517] text-white"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            <Button variant="outline" size="sm">« First</Button>
            <Button variant="outline" size="sm">‹ Back</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="default" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">4</Button>
            <span>...</span>
            <Button variant="outline" size="sm">62</Button>
            <Button variant="outline" size="sm">Next ›</Button>
            <Button variant="outline" size="sm">Last »</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthorsList;

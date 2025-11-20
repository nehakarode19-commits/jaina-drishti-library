import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Grid3x3, List } from "lucide-react";

interface Book {
  title: string;
  titleNative: string;
  language: string;
  mool: string;
  sutrat: string;
  type: string;
  section?: string;
  agam: string;
  downloads: number;
}

const latestBooksData: Book[] = [
  { title: "Aavashyakasutra", titleNative: "आवश्यक सूत्र", language: "Hindi", mool: "Mool-01", sutrat: "32", type: "Sutra", agam: "आवश्यक - 4 प्रतिक्रमण", downloads: 245 },
  { title: "Acharang", titleNative: "आचारांग सूत्र", language: "Hindi", mool: "Ang-01", sutrat: "139", type: "Sutra", section: "अंक्षेप - 1 अध्यायन", agam: "सूत्रकृतांग - 1 अध्यायन - 4 सूत्रकृतांग", downloads: 189 },
  { title: "Acharang", titleNative: "तन्नमुइज", language: "Sanskrit", mool: "Mool-02", sutrat: "10", type: "Sutra", agam: "आयारंग - 5 तत्त्व ज्ञान", downloads: 156 },
  { title: "Acharang", titleNative: "आचारांग सूत्र", language: "Hindi", mool: "Ang-01", sutrat: "139", type: "Sutra", section: "अंक्षेप - 1 अध्यायन", agam: "सूत्रकृतांग - 1 अध्यायन - 4 सूत्रकृतांग", downloads: 142 },
  { title: "Acharang", titleNative: "एकनायग", language: "Hindi", mool: "Mool-03", sutrat: "57", type: "Sutra", agam: "आयारंग - 2 जलनयत", downloads: 128 },
  { title: "Acharang", titleNative: "आचारांग सूत्र", language: "Hindi", mool: "Ang-01", sutrat: "139", type: "Sutra", section: "अंक्षेप - 1 अध्यायन", agam: "सूत्रकृतांग - 1 अध्यायन - 4 सूत्रकृतांग", downloads: 115 },
  { title: "Acharang", titleNative: "युवक्रायन", language: "Sanskrit", mool: "Mool-04", sutrat: "12", type: "Sutra", agam: "आयारंग - 3 चूल ज्ञान", downloads: 98 },
  { title: "Acharang", titleNative: "आचारांग सूत्र", language: "Hindi", mool: "Ang-01", sutrat: "139", type: "Sutra", section: "अंक्षेप - 1 अध्यायन", agam: "सूत्रकृतांग - 1 अध्यायन - 4 सूत्रकृतांग", downloads: 87 },
  { title: "Acharang", titleNative: "अनुशूतजर", language: "Hindi", mool: "Mool-05", sutrat: "21", type: "Sutra", agam: "आयारंग - 1 अनुलंघत", downloads: 76 },
  { title: "Acharang", titleNative: "आचारांग सूत्र", language: "Hindi", mool: "Ang-01", sutrat: "139", type: "Sutra", section: "अंक्षेप - 1 अध्यायन", agam: "सूत्रकृतांग - 1 अध्यायन - 4 सूत्रकृतांग", downloads: 65 },
];

const LatestDownloads = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Latest Downloaded Books
          </h1>

          <div className="flex items-center justify-between mb-6">
            <div className="text-sm">
              <span className="font-semibold">Showing top 100</span> most downloaded books
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="default" className="bg-[#7C3E1C] hover:bg-[#6B3517]">
                Export Result
              </Button>
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
            {latestBooksData.map((book, index) => (
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
                        <h3 className="font-semibold text-lg">{book.title}</h3>
                        <p className="text-sm text-muted-foreground">{book.titleNative}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-primary">{book.language}</span>
                        <p className="text-sm text-muted-foreground">{book.mool}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1 text-sm mb-3">
                      <div className="flex gap-4">
                        <span>Sutrat#: <span className="font-semibold">{book.sutrat}</span></span>
                        <span>Type: <span className="font-semibold">{book.type}</span></span>
                        {book.section && <span>Section: <span className="font-semibold">{book.section}</span></span>}
                      </div>
                      <p className="text-muted-foreground">{book.agam}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {book.downloads} downloads
                        </span>
                      </div>
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
            <Button variant="outline" size="sm">10</Button>
            <Button variant="outline" size="sm">Next ›</Button>
            <Button variant="outline" size="sm">Last »</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LatestDownloads;

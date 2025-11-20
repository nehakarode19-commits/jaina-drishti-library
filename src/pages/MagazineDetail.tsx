import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Grid3x3, List } from "lucide-react";
import { useState } from "react";

interface Magazine {
  title: string;
  titleNative: string;
  sku: string;
  pages: number;
  downloadCount: number;
}

const magazineIssues: Record<string, Magazine[]> = {
  "All_Magazine_Canada": [
    { title: "Jinamanjari 1995 09 No 12", titleNative: "Jinamanjari 1995 09 No 12", sku: "524012", pages: 88, downloadCount: 0 },
    { title: "Jinamanjari 1996 04 No 13", titleNative: "Jinamanjari 1996 04 No 13", sku: "031001", pages: 92, downloadCount: 0 },
    { title: "Jinamanjari 1996 09 No 14", titleNative: "Jinamanjari 1996 09 No 14", sku: "524014", pages: 96, downloadCount: 1 },
    { title: "Jinamanjari 1998 04 No 17", titleNative: "Jinamanjari 1998 04 No 17", sku: "031001", pages: 96, downloadCount: 2 },
    { title: "Jinamanjari 1998 09 No 18", titleNative: "Jinamanjari 1998 09 No 18", sku: "524014", pages: 76, downloadCount: 1 },
    { title: "Jinamanjari 1999 09 No 20", titleNative: "Jinamanjari 1999 09 No 20", sku: "031001", pages: 96, downloadCount: 2 },
    { title: "Jinamanjari 1998 09 No 18", titleNative: "Jinamanjari 1998 09 No 18", sku: "524014", pages: 76, downloadCount: 1 },
    { title: "Jinamanjari 1999 09 No 20", titleNative: "Jinamanjari 1999 09 No 20", sku: "031001", pages: 96, downloadCount: 2 },
    { title: "Jinamanjari 1998 09 No 18", titleNative: "Jinamanjari 1998 09 No 18", sku: "524014", pages: 76, downloadCount: 1 },
    { title: "Jinamanjari 1999 09 No 20", titleNative: "Jinamanjari 1999 09 No 20", sku: "031001", pages: 96, downloadCount: 2 },
    { title: "Jinamanjari 1998 09 No 18", titleNative: "Jinamanjari 1998 09 No 18", sku: "524014", pages: 76, downloadCount: 1 },
    { title: "Jinamanjari 1999 09 No 20", titleNative: "Jinamanjari 1999 09 No 20", sku: "031001", pages: 96, downloadCount: 2 },
    { title: "Jinamanjari 1998 09 No 18", titleNative: "Jinamanjari 1998 09 No 18", sku: "524014", pages: 76, downloadCount: 1 },
  ],
  "Canada_Jhamanjari": [
    { title: "Jinamanjari 1995 09 No 12", titleNative: "Jinamanjari 1995 09 No 12", sku: "524012", pages: 88, downloadCount: 0 },
    { title: "Jinamanjari 1996 04 No 13", titleNative: "Jinamanjari 1996 04 No 13", sku: "031001", pages: 92, downloadCount: 0 },
    { title: "Jinamanjari 1996 09 No 14", titleNative: "Jinamanjari 1996 09 No 14", sku: "524014", pages: 96, downloadCount: 1 },
    { title: "Jinamanjari 1998 04 No 17", titleNative: "Jinamanjari 1998 04 No 17", sku: "031001", pages: 96, downloadCount: 2 },
    { title: "Jinamanjari 1998 09 No 18", titleNative: "Jinamanjari 1998 09 No 18", sku: "524014", pages: 76, downloadCount: 1 },
    { title: "Jinamanjari 1999 09 No 20", titleNative: "Jinamanjari 1999 09 No 20", sku: "031001", pages: 96, downloadCount: 2 },
    { title: "Jinamanjari 1998 09 No 18", titleNative: "Jinamanjari 1998 09 No 18", sku: "524014", pages: 76, downloadCount: 1 },
    { title: "Jinamanjari 1999 09 No 20", titleNative: "Jinamanjari 1999 09 No 20", sku: "031001", pages: 96, downloadCount: 2 },
    { title: "Jinamanjari 1998 09 No 18", titleNative: "Jinamanjari 1998 09 No 18", sku: "524014", pages: 76, downloadCount: 1 },
    { title: "Jinamanjari 1999 09 No 20", titleNative: "Jinamanjari 1999 09 No 20", sku: "031001", pages: 96, downloadCount: 2 },
    { title: "Jinamanjari 1998 09 No 18", titleNative: "Jinamanjari 1998 09 No 18", sku: "524014", pages: 76, downloadCount: 1 },
    { title: "Jinamanjari 1999 09 No 20", titleNative: "Jinamanjari 1999 09 No 20", sku: "031001", pages: 96, downloadCount: 2 },
  ],
  "Canada_Souvenir Jain Center ONT Toronto": [
    { title: "Souvenir Jain Center Toronto 2020", titleNative: "Souvenir Jain Center Toronto 2020", sku: "524012", pages: 120, downloadCount: 5 },
  ],
};

const MagazineDetail = () => {
  const [searchParams] = useSearchParams();
  const region = searchParams.get("region") || "canada";
  const magazine = searchParams.get("magazine") || "All_Magazine_Canada";
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const issues = magazineIssues[magazine] || [];
  const displayName = magazine.replace(/_/g, " ");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              List of all {region.charAt(0).toUpperCase() + region.slice(1)} Magazine
            </h1>
            <p className="text-muted-foreground mb-4">Available Books</p>
            
            <div className="flex justify-center gap-2">
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
            {issues.map((issue, index) => (
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
                    <h3 className="font-semibold text-lg mb-1">{issue.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{issue.titleNative}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>Total Pages: <span className="font-semibold text-foreground">{issue.pages}</span></span>
                      <span>Down Count: <span className="font-semibold text-foreground">{issue.downloadCount}</span></span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">{issue.sku}</span>
                      <Button 
                        variant="default"
                        size="sm"
                        className="bg-[#7C3E1C] hover:bg-[#6B3517] text-white"
                      >
                        View More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MagazineDetail;

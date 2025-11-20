import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const magazineData = {
  canada: {
    title: "Canada Magazine",
    items: [
      { name: "All_Magazine_Canada", files: 13 },
      { name: "Canada_Jhamanjari", files: 12 },
      { name: "Canada_Souvenir Jain Center ONT Toronto", files: 1 },
    ],
  },
  india: {
    title: "India Magazine",
    items: [
      { name: "All_Magazine_India", files: 25 },
      { name: "India_Jain_Digest", files: 18 },
      { name: "India_Jain_World", files: 15 },
    ],
  },
  usa: {
    title: "USA Magazine",
    items: [
      { name: "All_Magazine_USA", files: 20 },
      { name: "USA_Jain_Monthly", files: 16 },
      { name: "USA_Jain_Times", files: 12 },
    ],
  },
  uk: {
    title: "UK Magazine",
    items: [
      { name: "All_Magazine_UK", files: 10 },
      { name: "UK_Jain_Bulletin", files: 8 },
      { name: "UK_Jain_Newsletter", files: 5 },
    ],
  },
};

const MagazineList = () => {
  const [searchParams] = useSearchParams();
  const region = searchParams.get("region") || "canada";
  const data = magazineData[region as keyof typeof magazineData] || magazineData.canada;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              {data.title}
            </h1>
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="hover:bg-black-btn hover:text-white hover:border-black-btn"
              >
                Export Result
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
            <div className="bg-muted/50 border-b">
              <div className="grid grid-cols-[1fr,auto] gap-4 p-4">
                <div className="font-semibold text-sm uppercase text-muted-foreground">
                  {region.toUpperCase()} MAGAZINE
                </div>
                <div className="font-semibold text-sm uppercase text-muted-foreground">
                  NO. OF FILES
                </div>
              </div>
            </div>
            
            <div className="divide-y">
              {data.items.map((item, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-[1fr,auto] gap-4 p-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="text-sm">{item.name}</div>
                  <div className="text-sm font-medium text-primary">{item.files}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MagazineList;

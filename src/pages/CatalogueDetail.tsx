import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Eye, ArrowLeft, FileText } from "lucide-react";

// Sample catalogue data
const catalogues: { [key: string]: any } = {
  "031001": {
    code: "031001",
    title: "Parshvanath Vidyapith Catalogue",
    subtitle: "Parshvanath Vidyapith",
    publisher: "Parshvanath Vidyapith",
    pages: 88,
    downloads: 0,
    description: "Complete catalogue of books and manuscripts available at Parshvanath Vidyapith library. This comprehensive collection includes rare texts, scriptures, and educational materials related to Jain philosophy and practice.",
    categories: ["Catalogues", "Educational Resources", "Reference Materials"],
    language: "English, Hindi",
    publicationYear: "2024",
  },
  "031002": {
    code: "031002",
    title: "Prochya Vidyapith Catalogue",
    subtitle: "Parshvanath Vidyapith",
    publisher: "Parshvanath Vidyapith",
    pages: 92,
    downloads: 0,
    description: "Detailed listing of resources available at Prochya Vidyapith. Includes ancient manuscripts, modern translations, and scholarly works on Jainism.",
    categories: ["Catalogues", "Educational Resources", "Reference Materials"],
    language: "English, Hindi",
    publicationYear: "2024",
  },
};

const CatalogueDetail = () => {
  const { catalogueId } = useParams();
  const catalogue = catalogues[catalogueId || ""];

  if (!catalogue) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="container max-w-4xl text-center">
            <h1 className="text-3xl font-bold mb-4">Catalogue Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The catalogue you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (<><Header /><div className="min-h-screen bg-background py-8"><div className="container mx-auto px-4 max-w-6xl"><Card className="p-6 bg-white"><div className="border-b pb-4 mb-6"><h1 className="text-2xl font-bold text-[#8B7355] mb-2">Agvashyakasutra (1118558)</h1><p className="text-lg text-muted-foreground">आगवश्यक सूत्र</p></div><div className="grid md:grid-cols-4 gap-6 mb-6"><div><h3 className="font-semibold text-sm text-muted-foreground mb-1">Mool Language</h3><p className="text-sm font-medium">Ardha-Magadhi</p></div><div><h3 className="font-semibold text-sm text-muted-foreground mb-1">Translated Language</h3><p className="text-sm font-medium">Gujarati</p></div><div><h3 className="font-semibold text-sm text-muted-foreground mb-1">Sutra Number</h3><p className="text-sm font-medium">58</p></div></div><div className="mb-8"><h3 className="font-semibold text-lg mb-3">Mool Sutra</h3><div className="bg-[#F5F1E8] p-4 rounded-lg border border-[#D4C5B0]"><p className="text-sm leading-relaxed">[Sample Jain scripture text in original language...]</p></div></div><div><h3 className="font-semibold text-lg mb-3">Sutra Meaning</h3><div className="bg-[#F5F1E8] p-4 rounded-lg border border-[#D4C5B0]"><p className="text-sm leading-relaxed">[Sample translated meaning text...]</p></div></div></Card></div></div><Footer /></>);
};

export default CatalogueDetail;

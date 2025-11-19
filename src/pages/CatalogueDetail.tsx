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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container max-w-6xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6 hover:bg-primary/10">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <BookOpen className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Code: {catalogue.code}</div>
                        <h1 className="text-3xl font-bold">{catalogue.title}</h1>
                      </div>
                    </div>
                    {catalogue.subtitle && (
                      <p className="text-xl text-muted-foreground">{catalogue.subtitle}</p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">Description</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {catalogue.description}
                    </p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 border-y">
                    <div>
                      <p className="text-sm font-medium mb-1">Publisher</p>
                      <p className="text-muted-foreground">{catalogue.publisher}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Total Pages</p>
                      <p className="text-muted-foreground">{catalogue.pages}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Language</p>
                      <p className="text-muted-foreground">{catalogue.language}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Publication Year</p>
                      <p className="text-muted-foreground">{catalogue.publicationYear}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Downloads</p>
                      <p className="text-muted-foreground">{catalogue.downloads}</p>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mt-6">
                    <p className="text-sm font-medium mb-2">Categories</p>
                    <div className="flex flex-wrap gap-2">
                      {catalogue.categories.map((category: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">About This Catalogue</h2>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      This catalogue provides a comprehensive listing of all resources available at the institution's library.
                      It serves as a valuable reference for scholars, students, and researchers interested in Jain literature.
                    </p>
                    <p>
                      The catalogue is organized systematically to help users locate specific texts, manuscripts, or reference materials efficiently.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Action Card */}
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center mb-4">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-3">
                      <FileText className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">PDF Document Available</p>
                  </div>

                  <Button className="w-full h-12 bg-burgundy hover:bg-burgundy/90 text-burgundy-foreground font-semibold">
                    <Download className="mr-2 h-5 w-5" />
                    Download Catalogue
                  </Button>

                  <Button variant="outline" className="w-full h-12 border-burgundy/30 hover:bg-burgundy/10 hover:text-burgundy font-semibold">
                    <Eye className="mr-2 h-5 w-5" />
                    Preview Online
                  </Button>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold mb-4">Document Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-muted-foreground">Total Pages</span>
                      <span className="font-semibold">{catalogue.pages}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-muted-foreground">Downloads</span>
                      <span className="font-semibold">{catalogue.downloads}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-muted-foreground">Format</span>
                      <span className="font-semibold">PDF</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Help Card */}
              <Card className="bg-gradient-to-br from-accent/10 to-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you have questions about this catalogue or need assistance accessing the materials, please contact us.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/feedback">Contact Support</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogueDetail;

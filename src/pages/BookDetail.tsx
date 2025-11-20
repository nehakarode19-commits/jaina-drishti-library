import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, ShoppingCart, Heart, BookOpen, Calendar, FileText, Languages, User, Building } from "lucide-react";

// Sample book data - will be replaced with actual data from backend
const bookData = {
  id: "1",
  titleEn: "Tattvartha Sutra",
  titleNative: "तत्त्वार्थ सूत्र",
  description: "The Tattvartha Sutra is a foundational text of Jain philosophy, written by Acharya Umasvati. It systematically presents the fundamental principles of Jainism in 357 sutras (aphorisms) across 10 chapters. This sacred text covers the nature of reality, karma, the path to liberation, and the essential practices for spiritual development.",
  author: "Acharya Umasvati",
  translators: ["Nathmal Tatia"],
  editors: ["K.K. Dixit"],
  publisher: "Jain Vishva Bharati Institute",
  publicationYear: 2015,
  edition: "3rd Edition",
  pages: 456,
  languages: ["Sanskrit", "Hindi", "English"],
  script: "Devanagari",
  category1: "Agam",
  category2: "Philosophy",
  category3: "Foundational Texts",
  classification: "Primary Scripture",
  downloads: 12543,
  agam: {
    sutraNo: "1-357",
    chapter: "10 Chapters",
    section: "Complete",
    sect: "Both Svetambara and Digambara"
  }
};

const BookDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Book Cover and Actions */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-24 w-24 text-primary/40" />
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full bg-black-btn hover:bg-black-btn/90 text-white" size="lg">
                      <Download className="mr-2 h-5 w-5" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Download DOCX
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Buy
                      </Button>
                      <Button variant="outline">
                        <Heart className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Download className="h-4 w-4" />
                      <span>{bookData.downloads.toLocaleString()} downloads</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span>{bookData.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{bookData.publicationYear}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Book Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge>{bookData.category1}</Badge>
                  <Badge variant="secondary">{bookData.category2}</Badge>
                  <Badge variant="outline">{bookData.classification}</Badge>
                </div>
                <h1 className="text-4xl font-bold mb-2">{bookData.titleEn}</h1>
                {bookData.titleNative && (
                  <p className="text-2xl text-muted-foreground mb-4">{bookData.titleNative}</p>
                )}
              </div>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h2 className="font-semibold mb-2">Description</h2>
                    <p className="text-muted-foreground leading-relaxed">{bookData.description}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="font-semibold mb-4">Book Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <User className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Author</p>
                          <p className="text-sm text-muted-foreground">{bookData.author}</p>
                        </div>
                      </div>

                      {bookData.translators.length > 0 && (
                        <div className="flex gap-3">
                          <Languages className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Translators</p>
                            <p className="text-sm text-muted-foreground">{bookData.translators.join(", ")}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <Building className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Publisher</p>
                          <p className="text-sm text-muted-foreground">{bookData.publisher}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Languages</p>
                        <div className="flex flex-wrap gap-2">
                          {bookData.languages.map((lang, idx) => (
                            <Badge key={idx} variant="outline">{lang}</Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-1">Script</p>
                        <p className="text-sm text-muted-foreground">{bookData.script}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-1">Edition</p>
                        <p className="text-sm text-muted-foreground">{bookData.edition}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {bookData.agam && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-semibold mb-4">Agam Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Sutra Number</p>
                        <p className="text-sm text-muted-foreground">{bookData.agam.sutraNo}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Chapters</p>
                        <p className="text-sm text-muted-foreground">{bookData.agam.chapter}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Section</p>
                        <p className="text-sm text-muted-foreground">{bookData.agam.section}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Sect</p>
                        <p className="text-sm text-muted-foreground">{bookData.agam.sect}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookDetail;

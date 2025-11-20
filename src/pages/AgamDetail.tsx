import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileDown } from "lucide-react";

const AgamDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 px-4 bg-background">
        <div className="container max-w-7xl">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Global Search for JAIN Aagam & Scriptures
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-4xl mx-auto">
              Welcome to the Jain Elibrary: Worlds largest Free Library of JAIN Books, Manuscript, Scriptures, Aagam, Literature, Seminar, Memorabilia, Dictionary, Magazines & Articles
            </p>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            <Button variant="outline" size="sm">&lt;&lt; First</Button>
            <Button variant="outline" size="sm">&lt; Back</Button>
            <Button variant="default" size="sm" className="bg-black-btn hover:bg-black-btn/90 text-white">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">4</Button>
            <Button variant="outline" size="sm">...</Button>
            <Button variant="outline" size="sm">103</Button>
            <Button variant="outline" size="sm">Next &gt;</Button>
            <Button variant="outline" size="sm">Last &gt;&gt;</Button>
          </div>

          {/* Main Content Card */}
          <Card className="p-8 mb-6 bg-white">
            {/* Title and Icon */}
            <div className="flex items-start gap-4 mb-6">
              <div className="h-16 w-16 bg-[#8FA878] rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-1">Aavashyakasutra (1118558)</h2>
                <p className="text-lg text-muted-foreground">आवश्यक सूत्र</p>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="hindi" className="w-full mb-8">
              <TabsList className="mb-6">
                <TabsTrigger value="hindi" className="data-[state=active]:bg-black-btn data-[state=active]:text-white">Hindi 58</TabsTrigger>
                <TabsTrigger value="mool">
                  Mool File Details
                  <FileDown className="h-4 w-4 ml-2" />
                </TabsTrigger>
                <TabsTrigger value="anuvad">
                  Anuvad File Details
                  <FileDown className="h-4 w-4 ml-2" />
                </TabsTrigger>
              </TabsList>

              <TabsContent value="hindi" className="space-y-8">
                {/* Metadata Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 pb-6 border-b">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Mool Language</p>
                    <p className="text-base font-medium">Ardha-Magadhi</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Translated Language</p>
                    <p className="text-base font-medium">Gujarati</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Gratha or Sutra</p>
                    <p className="text-base font-medium">Sutra</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Sutra Number</p>
                    <p className="text-base font-medium">58</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Chapter</p>
                    <p className="text-base font-medium">आचरंग - 4 प्रतिक्रमण</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Translated Chapter</p>
                    <p className="text-base font-medium">આચરંગ - 4 પ્રતિક્રમણ</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Section</p>
                    <p className="text-base font-medium">आचरंग - 4 प्रतिक्रमण</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Translated Section</p>
                    <p className="text-base font-medium">આચરંગ - 4 પ્રતિક્રમણ</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Category</p>
                    <p className="text-base font-medium">Mool-01</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Sutra Anvay</p>
                    <p className="text-base font-medium">Sutra Anvay</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Author</p>
                    <p className="text-base font-medium">Deepratnasagar</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Original Author</p>
                    <p className="text-base font-medium">Gandhar</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Century</p>
                    <p className="text-base font-medium">Svetambarat</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Source</p>
                    <p className="text-base font-medium">Source</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Sect</p>
                    <p className="text-base font-medium">Svetambarat</p>
                  </div>
                </div>

                {/* Mool Sutra Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Mool Sutra</h3>
                    <Button size="sm" variant="outline" className="rounded-full border-black-btn text-black-btn hover:bg-black-btn hover:text-white">
                      See Translation
                      <FileDown className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg border">
                    <p className="text-base leading-relaxed text-justify">
                      जस जो दोस करेज्जा दुव्वत्ति मेहुणा पोसेइ मणसा वायाइ कायाइ अणुमन्नेज्जा वो धम्म बाराहइ परिवट्टेइ अलोयाइ तम्म सिक्षामाणस्स तित्थया- बेचलस्स सिव्वामणस्स आयाणे अलोइयं उल्लंघणसामन्त-कर उल्लुम्पणसामन्त संकाए कालेण आलोचितं होज्जा अलोइयाई
                    </p>
                  </div>
                </div>

                {/* Sutra Meaning Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Sutra Meaning</h3>
                    <Button size="sm" variant="outline" className="rounded-full border-black-btn text-black-btn hover:bg-black-btn hover:text-white">
                      See Translation
                      <FileDown className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg border">
                    <p className="text-base leading-relaxed text-justify">
                      जिस जो दोष करता है, मूर्ति या डब को स्वीकार करता है, उसे मन को बहां, कौन कोगो, करायो, मंजूर, सभयाज, रीना, मवल्या, नाना-एवम हुए-दूसराे को प्राने ई हुई दोष करा मया दिनराएन-उवर करान को प्रयन्त करे हुई थे अल्ल हुई है-मान ले मन का उलाप्पणा करे उसा को काल में वुधार करना चाहिए। और एक अलोयणाओ
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mool">
                <div className="text-center py-12 text-muted-foreground">
                  <p>Mool file details will be displayed here</p>
                </div>
              </TabsContent>

              <TabsContent value="anuvad">
                <div className="text-center py-12 text-muted-foreground">
                  <p>Anuvad file details will be displayed here</p>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgamDetail;

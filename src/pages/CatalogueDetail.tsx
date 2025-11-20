import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Eye, ArrowLeft, FileText } from "lucide-react";

// Sample catalogue data
const catalogues: { [key: string]: any } = {
  "1": {
    id: "1",
    title: "Aavashyakasutra",
    nativeTitle: "आवश्यक सूत्र",
    code: "1118558",
    moolLanguage: "Ardha-Magadhi",
    translatedLanguage: "Gujarati",
    sutraNumber: "32",
    chapter: "आयलयंग-४ प्रतिक्रमण",
    translatedChapter: "आचारांग-४ प्रतिक्रमण",
    section: "Svetambarai",
    translatedSection: "आचारांग-४ प्रतिक्रमण",
    category: "Mool-01",
    sutraAnuyog: "Sutra Anuyog",
    author: "Deerpranasagar",
    originalAuthor: "Gandhar",
    century: "Svetambarai",
    source: "Source",
    sect: "Svetambarai",
    moolSutra: "[सूत्र] से हम्मो कावस्सायं सोयेणं पुश्हेणं अनभिग्गहीणं दोक्ख अदुखय सयड़वंग जावाणोवज़तं सिया...",
    sutraMeaning: "यथा हमारी ही कदाम कुत्सार है, मान्यो में स्वर के ओपाशरणों से अधिकार हैं, ऐ कृत्यों को तीन में आती है..."
  },
  "2": {
    id: "2",
    title: "Acharang",
    nativeTitle: "आचारांग सूत्र",
    code: "1118559",
    moolLanguage: "Prakrit",
    translatedLanguage: "Sanskrit",
    sutraNumber: "10",
    chapter: "आचारांग-५ दसवें गाथा",
    translatedChapter: "आचारांग-५ दसम गाथा",
    section: "Svetambarai",
    translatedSection: "श्वेतांबर",
    category: "Mool-02",
    sutraAnuyog: "Sutra Anuyog",
    author: "Deerpranasagar",
    originalAuthor: "Gandhar",
    century: "Svetambarai",
    source: "Source",
    sect: "Svetambarai",
    moolSutra: "[मूल सूत्र पाठ यहाँ...]",
    sutraMeaning: "[सूत्र का अर्थ यहाँ...]"
  },
  "3": {
    id: "3",
    title: "Acharang",
    nativeTitle: "आचारांग सूत्र",
    code: "1118560",
    moolLanguage: "Ardha-Magadhi",
    translatedLanguage: "Hindi",
    sutraNumber: "57",
    chapter: "आयारंग-२ प्रयाशरत",
    translatedChapter: "आचारांग-२ प्रयाशरत",
    section: "Svetambarai",
    translatedSection: "श्वेतांबर",
    category: "Mool-03",
    sutraAnuyog: "Sutra Anuyog",
    author: "Deerpranasagar",
    originalAuthor: "Gandhar",
    century: "Svetambarai",
    source: "Source",
    sect: "Svetambarai",
    moolSutra: "[मूल सूत्र पाठ यहाँ...]",
    sutraMeaning: "[सूत्र का अर्थ यहाँ...]"
  },
  "4": {
    id: "4",
    title: "Acharang",
    nativeTitle: "आचारांग सूत्र",
    code: "1118561",
    moolLanguage: "Prakrit",
    translatedLanguage: "Sanskrit",
    sutraNumber: "12",
    chapter: "आयलयंग-३ सूत्र ज्ञान",
    translatedChapter: "आचारांग-३ सूत्र ज्ञान",
    section: "Svetambarai",
    translatedSection: "श्वेतांबर",
    category: "Mool-04",
    sutraAnuyog: "Sutra Anuyog",
    author: "Deerpranasagar",
    originalAuthor: "Gandhar",
    century: "Svetambarai",
    source: "Source",
    sect: "Svetambarai",
    moolSutra: "[मूल सूत्र पाठ यहाँ...]",
    sutraMeaning: "[सूत्र का अर्थ यहाँ...]"
  },
  "5": {
    id: "5",
    title: "Acharang",
    nativeTitle: "आचारांग सूत्र",
    code: "1118562",
    moolLanguage: "Ardha-Magadhi",
    translatedLanguage: "Hindi",
    sutraNumber: "21",
    chapter: "आयलयंग-१ अनुवोयन",
    translatedChapter: "आचारांग-१ अनुवोयन",
    section: "Svetambarai",
    translatedSection: "श्वेतांबर",
    category: "Mool-05",
    sutraAnuyog: "Sutra Anuyog",
    author: "Deerpranasagar",
    originalAuthor: "Gandhar",
    century: "Svetambarai",
    source: "Source",
    sect: "Svetambarai",
    moolSutra: "[मूल सूत्र पाठ यहाँ...]",
    sutraMeaning: "[सूत्र का अर्थ यहाँ...]"
  },
  "6": {
    id: "6",
    title: "Sutrakritanga",
    nativeTitle: "सूत्रकृतांग सूत्र",
    code: "1118563",
    moolLanguage: "Ardha-Magadhi",
    translatedLanguage: "Hindi",
    sutraNumber: "45",
    chapter: "सूत्रकृतांग-२ धर्म विचार",
    translatedChapter: "सूत्रकृतांग-२ धर्म विचार",
    section: "Svetambarai",
    translatedSection: "श्वेतांबर",
    category: "Ang-02",
    sutraAnuyog: "Sutra Anuyog",
    author: "Deerpranasagar",
    originalAuthor: "Gandhar",
    century: "Svetambarai",
    source: "Source",
    sect: "Svetambarai",
    moolSutra: "[मूल सूत्र पाठ यहाँ...]",
    sutraMeaning: "[सूत्र का अर्थ यहाँ...]"
  },
  "7": {
    id: "7",
    title: "Sthananga",
    nativeTitle: "स्थानांग सूत्र",
    code: "1118564",
    moolLanguage: "Prakrit",
    translatedLanguage: "Sanskrit",
    sutraNumber: "89",
    chapter: "स्थानांग-१ प्रथम स्थान",
    translatedChapter: "स्थानांग-१ प्रथम स्थान",
    section: "Svetambarai",
    translatedSection: "श्वेतांबर",
    category: "Ang-03",
    sutraAnuyog: "Sutra Anuyog",
    author: "Deerpranasagar",
    originalAuthor: "Gandhar",
    century: "Svetambarai",
    source: "Source",
    sect: "Svetambarai",
    moolSutra: "[मूल सूत्र पाठ यहाँ...]",
    sutraMeaning: "[सूत्र का अर्थ यहाँ...]"
  },
  "8": {
    id: "8",
    title: "Samavayanga",
    nativeTitle: "समवायांग सूत्र",
    code: "1118565",
    moolLanguage: "Ardha-Magadhi",
    translatedLanguage: "Hindi",
    sutraNumber: "34",
    chapter: "समवायांग-३ त्रिविध समवाय",
    translatedChapter: "समवायांग-३ त्रिविध समवाय",
    section: "Svetambarai",
    translatedSection: "श्वेतांबर",
    category: "Ang-04",
    sutraAnuyog: "Sutra Anuyog",
    author: "Deerpranasagar",
    originalAuthor: "Gandhar",
    century: "Svetambarai",
    source: "Source",
    sect: "Svetambarai",
    moolSutra: "[मूल सूत्र पाठ यहाँ...]",
    sutraMeaning: "[सूत्र का अर्थ यहाँ...]"
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
    <>
      <Header />
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Global Search for JAIN Agam & Scriptures</h1>
            <p className="text-sm text-muted-foreground">
              Welcome to the Jain Elibrary: Worlds largest Free Library of JAIN Books, Manuscript, Scriptures, Agam, Literature, Seminar, Memorabilia, Dictionary, Magazines & Articles
            </p>
          </div>

          <div className="flex justify-between items-center mb-6 bg-[#8B7355] text-white px-4 py-3 rounded-t-lg">
            <div className="flex gap-4">
              <button className="px-3 py-1 bg-white text-[#8B7355] rounded">First</button>
              <button className="px-3 py-1 bg-white text-[#8B7355] rounded">Book</button>
              <button className="px-3 py-1 bg-white text-[#8B7355] rounded">1</button>
              <button className="px-3 py-1 bg-[#6B5940] text-white rounded">2</button>
              <button className="px-3 py-1 bg-white text-[#8B7355] rounded">3</button>
              <button className="px-3 py-1 bg-white text-[#8B7355] rounded">4</button>
              <span className="px-2">...</span>
              <button className="px-3 py-1 bg-white text-[#8B7355] rounded">120</button>
              <button className="px-3 py-1 bg-white text-[#8B7355] rounded">Next</button>
              <button className="px-3 py-1 bg-white text-[#8B7355] rounded">Last</button>
            </div>
          </div>

          <Card className="p-6 bg-white rounded-b-lg">
            <div className="border-b pb-4 mb-6">
              <h2 className="text-2xl font-bold text-[#8B7355] mb-2">
                {catalogue.title} ({catalogue.code})
              </h2>
              <p className="text-lg text-muted-foreground">{catalogue.nativeTitle}</p>
              <div className="flex gap-3 mt-4">
                <Button variant="outline" size="sm" className="bg-[#8B7355] text-white hover:bg-[#7A6449] border-0">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Mool File Details
                </Button>
                <Button variant="outline" size="sm" className="bg-[#8B7355] text-white hover:bg-[#7A6449] border-0">
                  <FileText className="h-4 w-4 mr-2" />
                  Anuvad File Details
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-6 bg-[#F5F1E8] p-4 rounded-lg">
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Mool Language</h3>
                <p className="text-sm font-medium">{catalogue.moolLanguage}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Translated Language</h3>
                <p className="text-sm font-medium">{catalogue.translatedLanguage}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Gatha or Sutra</h3>
                <p className="text-sm font-medium">Sutra</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Sutra Number</h3>
                <p className="text-sm font-medium">{catalogue.sutraNumber}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Chapter</h3>
                <p className="text-sm font-medium">{catalogue.chapter}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Translated Chapter</h3>
                <p className="text-sm font-medium">{catalogue.translatedChapter}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Section</h3>
                <p className="text-sm font-medium">{catalogue.section}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Translated Section</h3>
                <p className="text-sm font-medium">{catalogue.translatedSection}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Category</h3>
                <p className="text-sm font-medium">{catalogue.category}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Sutra Anuyog</h3>
                <p className="text-sm font-medium">{catalogue.sutraAnuyog}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Author</h3>
                <p className="text-sm font-medium">{catalogue.author}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Original Author</h3>
                <p className="text-sm font-medium">{catalogue.originalAuthor}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Century</h3>
                <p className="text-sm font-medium">{catalogue.century}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Source</h3>
                <p className="text-sm font-medium">{catalogue.source}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#6B5940] mb-1">Sect</h3>
                <p className="text-sm font-medium">{catalogue.sect}</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-3 bg-[#E8DCC8] px-4 py-2 rounded border-l-4 border-[#8B7355]">
                <h3 className="font-semibold text-lg text-[#6B5940]">Mool Sutra</h3>
                <Button variant="ghost" size="sm" className="text-[#8B7355] hover:text-[#6B5940]">
                  <Eye className="h-4 w-4 mr-2" />
                  See Translation
                </Button>
              </div>
              <div className="bg-[#F5F1E8] p-4 rounded-lg border border-[#D4C5B0]">
                <p className="text-sm leading-relaxed">{catalogue.moolSutra}</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3 bg-[#E8DCC8] px-4 py-2 rounded border-l-4 border-[#8B7355]">
                <h3 className="font-semibold text-lg text-[#6B5940]">Sutra Meaning</h3>
                <Button variant="ghost" size="sm" className="text-[#8B7355] hover:text-[#6B5940]">
                  <Eye className="h-4 w-4 mr-2" />
                  See Translation
                </Button>
              </div>
              <div className="bg-[#F5F1E8] p-4 rounded-lg border border-[#D4C5B0]">
                <p className="text-sm leading-relaxed">{catalogue.sutraMeaning}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CatalogueDetail;

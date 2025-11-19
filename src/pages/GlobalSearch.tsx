import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import SearchBar from "@/components/SearchBar";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

// Sample search results
const sampleBooks = [
  {
    id: "1",
    titleEn: "Tattvartha Sutra",
    titleNative: "तत्त्वार्थ सूत्र",
    author: "Acharya Umasvati",
    category: "Agam",
    language: "Sanskrit",
    downloads: 12543
  },
  {
    id: "2",
    titleEn: "Samayasara",
    titleNative: "समयसार",
    author: "Acharya Kundakunda",
    category: "Philosophy",
    language: "Prakrit",
    downloads: 8932
  },
];

const GlobalSearch = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-3xl font-bold mb-6">Global Search</h1>
            <SearchBar placeholder="Search by title, author, publisher, keywords..." />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:hidden mb-4">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>

              <Card className={`${showFilters ? "block" : "hidden lg:block"}`}>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Filters</h3>
                  </div>

                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="agam">Agam</SelectItem>
                        <SelectItem value="philosophy">Philosophy</SelectItem>
                        <SelectItem value="practice">Practice & Rituals</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Languages" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Languages</SelectItem>
                        <SelectItem value="sanskrit">Sanskrit</SelectItem>
                        <SelectItem value="prakrit">Prakrit</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="gujarati">Gujarati</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Document Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="docx">DOCX</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Author</Label>
                    <Input placeholder="Enter author name" />
                  </div>

                  <div className="space-y-2">
                    <Label>Publisher</Label>
                    <Input placeholder="Enter publisher name" />
                  </div>

                  <div className="space-y-2">
                    <Label>Publication Year</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="From" type="number" />
                      <Input placeholder="To" type="number" />
                    </div>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </CardContent>
              </Card>
            </aside>

            {/* Results */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  {query ? `Showing results for "${query}"` : "All books"}
                  <span className="ml-2 font-medium text-foreground">({sampleBooks.length} results)</span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sampleBooks.map((book) => (
                  <BookCard key={book.id} {...book} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GlobalSearch;

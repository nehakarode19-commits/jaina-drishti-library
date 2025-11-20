import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const sampleResults = [
  {
    id: "1",
    titleEn: "Tattvartha Sutra",
    titleNative: "तत्त्वार्थ सूत्र",
    author: "Acharya Umasvati",
    category: "Agam",
    language: "Sanskrit",
    downloads: 12543
  }
];

const AdvancedSearch = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold mb-3">Advanced Search</h1>
            <p className="text-muted-foreground">Use detailed filters to find exactly what you're looking for</p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title-en">Book Title (English)</Label>
                    <Input id="title-en" placeholder="Enter English title" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title-native">Book Title (Native)</Label>
                    <Input id="title-native" placeholder="Enter native title" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select>
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
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
                    <Label htmlFor="category1">Category 1</Label>
                    <Select>
                      <SelectTrigger id="category1">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="agam">Agam</SelectItem>
                        <SelectItem value="philosophy">Philosophy</SelectItem>
                        <SelectItem value="practice">Practice & Rituals</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category2">Category 2</Label>
                    <Select>
                      <SelectTrigger id="category2">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="ethics">Ethics</SelectItem>
                        <SelectItem value="meditation">Meditation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="classification">Classification</Label>
                    <Select>
                      <SelectTrigger id="classification">
                        <SelectValue placeholder="Select classification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primary">Primary Scripture</SelectItem>
                        <SelectItem value="secondary">Secondary Text</SelectItem>
                        <SelectItem value="commentary">Commentary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="authors">Authors</Label>
                    <Input id="authors" placeholder="Enter author name(s)" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="editors">Editors</Label>
                    <Input id="editors" placeholder="Enter editor name(s)" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="translators">Translators</Label>
                    <Input id="translators" placeholder="Enter translator name(s)" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="publishers">Publishers</Label>
                    <Input id="publishers" placeholder="Enter publisher name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input id="keywords" placeholder="Enter keywords (comma-separated)" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="year-from">Publication Year From</Label>
                    <Input id="year-from" type="number" placeholder="e.g., 1950" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year-to">Publication Year To</Label>
                    <Input id="year-to" type="number" placeholder="e.g., 2024" />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-black-btn hover:bg-black-btn/90 text-white">
                    <Search className="mr-2 h-4 w-4" />
                    Search Books
                  </Button>
                  <Button variant="outline">Reset All Filters</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Search Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleResults.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdvancedSearch;

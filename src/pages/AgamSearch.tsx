import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const sampleAgamBooks = [
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

const AgamSearch = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-5xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent text-white mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold mb-3">Agam Scripture Search</h1>
            <p className="text-muted-foreground">Search sacred Jain Agam texts by specific scriptural criteria</p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="scripture-name">Scripture Name</Label>
                  <Input id="scripture-name" placeholder="Enter scripture name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mool-language">Mool Language</Label>
                  <Select>
                    <SelectTrigger id="mool-language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sanskrit">Sanskrit</SelectItem>
                      <SelectItem value="prakrit">Prakrit</SelectItem>
                      <SelectItem value="ardhamagadhi">Ardhamagadhi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="translated-language">Translated Language</Label>
                  <Select>
                    <SelectTrigger id="translated-language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="gujarati">Gujarati</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sutra-number">Sutra Number</Label>
                  <Input id="sutra-number" placeholder="Enter sutra number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="chapter">Chapter</Label>
                  <Input id="chapter" placeholder="Enter chapter" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="section">Section</Label>
                  <Input id="section" placeholder="Enter section" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sect">Sect</Label>
                  <Select>
                    <SelectTrigger id="sect">
                      <SelectValue placeholder="Select sect" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sects</SelectItem>
                      <SelectItem value="svetambara">Svetambara</SelectItem>
                      <SelectItem value="digambara">Digambara</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="anga">Anga</SelectItem>
                      <SelectItem value="upanga">Upanga</SelectItem>
                      <SelectItem value="prakirna">Prakirna</SelectItem>
                      <SelectItem value="cheda">Cheda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Button className="flex-1">Search Agam Texts</Button>
                <Button variant="outline">Reset Filters</Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Search Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleAgamBooks.map((book) => (
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

export default AgamSearch;

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

const RequestBook = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Book request submitted successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent text-white mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold mb-3">Request a New Book</h1>
            <p className="text-muted-foreground">
              Can't find a book? Let us know and we'll try to add it to our library.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Book Request Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email *</Label>
                  <Input id="email" type="email" placeholder="email@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="book-name">Book Name *</Label>
                  <Input id="book-name" placeholder="Enter book title" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">Author *</Label>
                  <Input id="author" placeholder="Enter author name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publisher">Publisher</Label>
                  <Input id="publisher" placeholder="Enter publisher name" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="year">Publication Year</Label>
                    <Input id="year" type="number" placeholder="e.g., 2020" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pages">Number of Pages</Label>
                    <Input id="pages" type="number" placeholder="e.g., 250" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Input id="language" placeholder="e.g., Sanskrit, Hindi, English" />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting Request..." : "Submit Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestBook;

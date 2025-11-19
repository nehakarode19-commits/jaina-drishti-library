import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

const RequestUpload = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Upload request submitted successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent text-white mb-4">
              <Upload className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold mb-3">Request to Upload</h1>
            <p className="text-muted-foreground">
              Contribute to our library by uploading Jain literature
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload Request Form</CardTitle>
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
                  <Label htmlFor="author-translator">Author/Translator *</Label>
                  <Input id="author-translator" placeholder="Enter author or translator name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publisher">Publisher *</Label>
                  <Input id="publisher" placeholder="Enter publisher name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pdf-upload">PDF File *</Label>
                  <Input id="pdf-upload" type="file" accept=".pdf" required />
                  <p className="text-xs text-muted-foreground">Maximum file size: 20MB</p>
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
                  <Label htmlFor="language">Language *</Label>
                  <Input id="language" placeholder="e.g., Sanskrit, Hindi, English" required />
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> By submitting this form, you confirm that you have the right to share 
                    this material and that it complies with copyright laws. Our team will review your submission 
                    and contact you if we need more information.
                  </p>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Upload Request"}
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

export default RequestUpload;

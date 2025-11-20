import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const bookRequestSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255),
  bookName: z.string().trim().min(1, "Book name is required").max(500),
  author: z.string().trim().min(1, "Author/Translator/Editor is required").max(500),
  publisher: z.string().trim().max(200).optional(),
  year: z.string().trim().max(100).optional(),
  pages: z.string().trim().optional(),
  language: z.enum(["English", "Hindi", "Gujarati", "Other"]),
});

const RequestBook = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        email: formData.get("email") as string,
        bookName: formData.get("bookName") as string,
        author: formData.get("author") as string,
        publisher: formData.get("publisher") as string,
        year: formData.get("year") as string,
        pages: formData.get("pages") as string,
        language,
      };

      const validated = bookRequestSchema.parse(data);

      const { data: session } = await supabase.auth.getSession();
      
      const { error } = await supabase.from("book_requests").insert({
        user_id: session.session?.user?.id || null,
        email: validated.email,
        book_name: validated.bookName,
        author: validated.author,
        publisher: validated.publisher || null,
        year: validated.year || null,
        pages: validated.pages ? parseInt(validated.pages) : null,
        language: validated.language,
      });

      if (error) throw error;

      toast({
        title: "Request Submitted!",
        description: "Your book request has been submitted successfully. We'll review it soon.",
      });

      e.currentTarget.reset();
      setLanguage("English");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "Failed to submit request. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-[hsl(var(--primary))]">
            Request for Jain Literature
          </h1>

          <div className="bg-[#FEF7E7] rounded-lg p-8 md:p-12 shadow-sm">
            <div className="text-center mb-8 space-y-2">
              <p className="text-[#6B5D3F] text-lg">
                Request form for the new Book, Manuscript or Literature that you would like to see on our
                website.
              </p>
              <p className="text-[#6B5D3F] font-medium">
                (Please provide separate request for each book)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#6B5D3F] font-medium">
                    Your Email ID
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email ID"
                    required
                    className="bg-white border-[#D4C5A0]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bookName" className="text-[#6B5D3F] font-medium">
                    Name of the Book
                  </Label>
                  <Input
                    id="bookName"
                    name="bookName"
                    placeholder="Name of the Book"
                    required
                    className="bg-white border-[#D4C5A0]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="author" className="text-[#6B5D3F] font-medium">
                    Name of Author / Translator / Editor
                  </Label>
                  <Input
                    id="author"
                    name="author"
                    placeholder="Name of Author / Translator / Editor"
                    required
                    className="bg-white border-[#D4C5A0]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publisher" className="text-[#6B5D3F] font-medium">
                    Publisher
                  </Label>
                  <Input
                    id="publisher"
                    name="publisher"
                    placeholder="Publisher"
                    className="bg-white border-[#D4C5A0]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year" className="text-[#6B5D3F] font-medium">
                  Year of first publishing / Original work
                </Label>
                <Input
                  id="year"
                  name="year"
                  placeholder="Year of first publishing / Original work"
                  className="bg-white border-[#D4C5A0]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pages" className="text-[#6B5D3F] font-medium">
                  Approximate number of Pages in that Book
                </Label>
                <Input
                  id="pages"
                  name="pages"
                  type="number"
                  placeholder="Approximate number of Pages in that Book"
                  className="bg-white border-[#D4C5A0]"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-[#6B5D3F] font-medium">Language</Label>
                <RadioGroup value={language} onValueChange={setLanguage} className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="English" id="english" />
                    <Label htmlFor="english" className="text-[#6B5D3F] font-normal cursor-pointer">
                      English
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Hindi" id="hindi" />
                    <Label htmlFor="hindi" className="text-[#6B5D3F] font-normal cursor-pointer">
                      Hindi
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Gujarati" id="gujarati" />
                    <Label htmlFor="gujarati" className="text-[#6B5D3F] font-normal cursor-pointer">
                      Gujarati
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Other" id="other" />
                    <Label htmlFor="other" className="text-[#6B5D3F] font-normal cursor-pointer">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full max-w-md bg-[#5C5133] hover:bg-[#4A4129] text-white rounded-full py-6 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestBook;

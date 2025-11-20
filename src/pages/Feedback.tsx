import { useState } from "react";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const feedbackSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  location: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, "Feedback must be at least 10 characters").max(2000),
});

const Feedback = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        location: formData.get("location") as string,
        message: formData.get("message") as string,
      };

      const validated = feedbackSchema.parse(data);

      const { data: session } = await supabase.auth.getSession();
      
      const { error } = await supabase.from("feedback").insert({
        user_id: session.session?.user?.id || null,
        name: validated.name,
        email: validated.email,
        location: validated.location || null,
        message: validated.message,
      });

      if (error) throw error;

      toast({
        title: "Thank You!",
        description: "Your feedback has been submitted successfully. We appreciate your input!",
      });

      e.currentTarget.reset();
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
          description: "Failed to submit feedback. Please try again.",
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
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
            User Feedback / Suggestions
          </h1>

          <div className="bg-[#FEF7E7] rounded-lg p-8 md:p-12 shadow-sm">
            <div className="bg-[#F5E6C8] rounded-lg p-6 mb-8 text-center">
              <p className="text-[#6B5D3F] text-base">
                Any other information we could add in the eLibrary website. If you notice any error in the search
                result, please indicate and send us the correct information.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#6B5D3F] font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-white border-[#D4C5A0]"
                  />
                </div>

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
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-[#6B5D3F] font-medium">
                  Location
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Location"
                  className="bg-white border-[#D4C5A0]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#6B5D3F] font-medium">
                  Feedback
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Feedback"
                  rows={8}
                  required
                  className="bg-white border-[#D4C5A0] resize-none"
                />
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

export default Feedback;

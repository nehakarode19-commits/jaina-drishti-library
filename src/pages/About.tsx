import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Jain eLibrary</h1>
            <p className="text-lg text-muted-foreground">
              Preserving and sharing the profound wisdom of Jain scriptures and literature
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Jain eLibrary is dedicated to making the sacred texts and philosophical works of Jainism 
                  accessible to seekers worldwide. We preserve ancient manuscripts, provide modern translations, 
                  and create a comprehensive digital repository that serves scholars, practitioners, and anyone 
                  interested in Jain philosophy and teachings.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Digital Preservation</h3>
                  <p className="text-muted-foreground">
                    Digitizing ancient manuscripts and rare texts to ensure they remain accessible for future generations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Global Access</h3>
                  <p className="text-muted-foreground">
                    Providing free access to Jain literature in multiple languages to seekers around the world.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Community Driven</h3>
                  <p className="text-muted-foreground">
                    Built and maintained by scholars, practitioners, and volunteers passionate about Jain wisdom.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Non-Profit</h3>
                  <p className="text-muted-foreground">
                    Operated as a service to humanity, funded entirely by donations and community support.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> contact@jainelibrary.org</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> Jain Heritage Center, 123 Spiritual Way</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

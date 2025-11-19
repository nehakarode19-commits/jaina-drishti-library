import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const ContactUs = () => {
  const contacts = [
    {
      name: "Virendra Shah",
      email: "jcflag@yahoo.com",
      role: "President - North America - eBooks, DVDs & Literature Distribution",
      address: "821E. Artesia, Blvd, Carson CA 90746-1203 USA",
    },
    {
      name: "Pravin K Shah",
      email: "jcflag@yahoo.com",
      role: "Vice President - Jain eLibrary Operations & Management",
      address: "821E. Artesia, Blvd, Carson CA 90746-1203 USA",
    },
    {
      name: "Ramesh C Doshi",
      email: "rcdoshi@yahoo.com",
      role: "Vice President - Jain eLibrary Operations",
      address: "2265 Busa Lane, Tustin, CA 92782",
    },
    {
      name: "Virendra Shah",
      email: "jcflag@yahoo.com",
      role: "President - North America - eBooks, DVDs & Literature Distribution",
      address: "821E. Artesia, Blvd, Carson CA 90746-1203 USA",
    },
  ];

  const directors = [
    {
      name: "Pratiksha Shah",
      email: "Pratiksha Shah@yahoo.com",
      role: "Blog Director - Blog and Q&A",
      location: "Ashburn, VA - USA",
    },
    {
      name: "Sejal Shah",
      email: "jainworkshopusa@gmail.com",
      role: "Workshop Director - Online Workshops",
      location: "Cary, NC - USA",
    },
    {
      name: "Kailash Mutha",
      email: "Pratiksha Shah@yahoo.com",
      role: "Database Director - Agam & Literature DB",
      location: "Chicago, IL - USA",
    },
    {
      name: "Anish Visaria",
      email: "quantum@jainelibrary.org",
      role: "Innovation Director - New Technology",
      location: "New York City - USA",
    },
    {
      name: "Raj Salecha",
      email: "contact@jainelibrary.org",
      role: "Technology Director - Communication & Social Media",
      location: "Los Angeles, CA - USA",
    },
    {
      name: "Shruti Doshi",
      email: "shruti@jainelibrary.org",
      role: "Content Director - Content Management",
      location: "San Francisco, CA - USA",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 px-4">
        <div className="container max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

          {/* Main Contacts */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{contact.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{contact.email}</p>
                    <p className="text-sm mb-2">{contact.role}</p>
                    <p className="text-sm text-muted-foreground">{contact.address}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Directors Section */}
          <div>
            <h2 className="text-2xl font-semibold text-center mb-8 text-primary">
              Directors
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {directors.map((director, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{director.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{director.email}</p>
                      <p className="text-sm mb-2">{director.role}</p>
                      <p className="text-sm text-primary">{director.location}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;

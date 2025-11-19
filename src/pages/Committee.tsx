import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Committee = () => {
  const advisors = [
    {
      name: "P.P. Acharya Shri AjayasagarjiShri Mahavir Jain Aradhana Kendra",
      email: "kobatirth@kobatirth.org",
      role: "Principle advisor & primary supporter -eLibrary project and Technical Support",
      location: "Koba Ahmedabad, India",
    },
    {
      name: "Dr. Sagarmal JainShri Prachya Vidyapith",
      email: "sagarmal.jain@gmail.com",
      role: "Principle advisor & Primary supporter -eLibrary Project, Book selection, Permission etc.",
      location: "Sojpur MP, India",
    },
  ];

  const committeeMembers = [
    {
      name: "Virendra Shah",
      email: "sagarmal.jain@gmail.com",
      role: "President-Jain Education International",
      location: "Los Angeles, CA",
    },
    {
      name: "Pravin K Shah",
      email: "jainaedu@gmail.com",
      role: "Vice President, USA",
      location: "Cary, NC",
    },
    {
      name: "Ramesh Doshi",
      email: "rcdoshi@yahoo.com",
      role: "Vice President, India",
      location: "Los Angeles, CA & Ahmedabad, India",
    },
    {
      name: "Saket Singhi",
      email: "saketejvsgroup.com",
      role: "President-Shree Gyanvandhak Charitable Trust (India Operations)",
      location: "Ahmedabad, India",
    },
    {
      name: "Pratiksha Shah",
      email: "jainaedu@gmail.com",
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
      email: "sagarmal.jain@gmail.com",
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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 px-4">
        <div className="container max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-12">
            Committee Members and Supporters
          </h1>

          {/* Advisors Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-8 text-primary">
              Advisors
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {advisors.map((advisor, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{advisor.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{advisor.email}</p>
                      <p className="text-sm mb-2">{advisor.role}</p>
                      <p className="text-sm text-primary">{advisor.location}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Committee Members Section */}
          <div>
            <h2 className="text-2xl font-semibold text-center mb-8 text-primary">
              Jain eLibrary Key Committee Members and Supporters
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {committeeMembers.map((member, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{member.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{member.email}</p>
                      <p className="text-sm mb-2">{member.role}</p>
                      <p className="text-sm text-primary">{member.location}</p>
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

export default Committee;

import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Search, Users, Download, Heart, TrendingUp, Building2, Info, ExternalLink, X } from "lucide-react";

// Sample featured books data
const featuredBooks = [
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
  {
    id: "3",
    titleEn: "Kalpa Sutra",
    titleNative: "कल्पसूत्र",
    author: "Acharya Bhadrabahu",
    category: "Agam",
    language: "Sanskrit",
    downloads: 10234
  },
  {
    id: "4",
    titleEn: "Yogashastra",
    titleNative: "योगशास्त्र",
    author: "Acharya Hemachandra",
    category: "Practice",
    language: "Sanskrit",
    downloads: 7621
  }
];

const categories = [
  { name: "Agam Literature", count: 450, icon: BookOpen },
  { name: "Philosophy", count: 320, icon: TrendingUp },
  { name: "Practice & Rituals", count: 215, icon: Heart },
  { name: "History", count: 180, icon: Users },
];

const stats = [
  { label: "Registered Users", value: "76,282", icon: Users },
  { label: "From Countries", value: "234", icon: TrendingUp },
  { label: "Total Visits", value: "3,046,881", icon: Search },
  { label: "Files Downloaded", value: "1,786,547", icon: Download },
  { label: "Files on Website", value: "38,571", icon: BookOpen },
];

const educationBooks = [
  { title: "Ship Jaina Education Books – in USA", link: "/bookstore?region=usa" },
  { title: "Ship Jaina Education Books – in India", link: "/bookstore?region=india" },
  { title: "Ship Jaina Education Books – in Other Countries", link: "/bookstore?region=other" },
  { title: "Ship Jaina Education Books – Special Books for USA only", link: "/bookstore?region=usa-special" },
];

const collectionBooks = [
  { title: "Swetambar Agams", link: "/search?collection=swetambar-agams" },
  { title: "Panch-Param Agams", link: "/search?collection=panch-param" },
  { title: "Tattvarth Sutra", link: "/search?collection=tattvarth" },
  { title: "List based on Purav-Acharyas", link: "/search?collection=purav-acharyas" },
];

const magazines = [
  { title: "Canada Magazines", link: "/search?type=magazine&region=canada" },
  { title: "India Magazines", link: "/search?type=magazine&region=india" },
  { title: "USA Magazines", link: "/search?type=magazine&region=usa" },
  { title: "UK Magazines", link: "/search?type=magazine&region=uk" },
];

const catalogues = [
  {
    title: "Parshvanath Vidyapith Catalogue",
    subtitle: "Parshvanath Vidyapith",
    code: "031001",
    pages: 88,
    downloads: 0,
    link: "/catalogue/031001"
  },
  {
    title: "Prochya Vidyapith Catalogue",
    subtitle: "Parshvanath Vidyapith",
    code: "031002",
    pages: 92,
    downloads: 0,
    link: "/catalogue/031002"
  },
];

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Notice Banner */}
      <div className="bg-accent/10 border-b border-accent/20 py-3 px-4">
        <div className="container">
          <div className="flex items-start gap-3 text-sm">
            <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-foreground/80">
              This site is a non-commercial website and is funded through contribution received from Jain community and others at large.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Welcome to the new Jain E -Library site.
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Publishers Global Search for JAIN Books, Manuscript, Literature, Seminar, Memorabilia, Dictionary, Magazines & Articles
            </p>

            <div className="max-w-2xl mx-auto pt-4">
              <SearchBar placeholder="Search books by category" />
            </div>

            {/* Search Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              <Button asChild size="sm" variant="outline" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Link to="/search?filter=title">Search By Title</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Link to="/search?filter=author">Search By Author</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Link to="/search?filter=category">Search By Category</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Link to="/search?filter=keyword">Search By Keyword</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Button asChild size="sm" variant="outline" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Link to="/search?filter=publisher">Search By Publisher</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Link to="/search?filter=all">Search by All fields</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Button asChild size="sm" variant="outline" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Link to="/search?filter=quantum">Search By Quantum</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Link to="/search/agam">Search Agam</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Link to="/search/agam">Scriptures in Agam Search</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Link to="/search?filter=ocr">Search OCR Content</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Button asChild size="lg" className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all">
              <Link to="/advanced-search">
                <Search className="mr-2 h-5 w-5" />
                Advanced E-library Search
              </Link>
            </Button>
            <Button asChild size="lg" className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all">
              <Link to="/search?filter=authors">
                <Users className="mr-2 h-5 w-5" />
                Search By All Authors
              </Link>
            </Button>
            <Button asChild size="lg" className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all">
              <Link to="/search?filter=publishers">
                <Building2 className="mr-2 h-5 w-5" />
                Search By All Publisher
              </Link>
            </Button>
            <Button asChild size="lg" className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all">
              <Link to="/search?sort=latest">
                <TrendingUp className="mr-2 h-5 w-5" />
                Latest Downloaded Books
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Buy Jain Education Books */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Buy Jain Education Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationBooks.map((book, index) => (
              <Link key={index} to={book.link}>
                <Card className="h-full hover:shadow-lg transition-shadow border-border/50 group">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base leading-tight group-hover:text-primary transition-colors">{book.title}</h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links to collections */}
      <section className="py-12 px-4 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Quick Links to collections</h2>
          <Tabs defaultValue="sandhya" className="w-full">
            <TabsList className="mb-6 flex-wrap h-auto">
              <TabsTrigger value="paryushan">Paryushan and Rituals</TabsTrigger>
              <TabsTrigger value="jaina">JAINA Education Books</TabsTrigger>
              <TabsTrigger value="sandhya" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Sandhya Books and Scriptures</TabsTrigger>
              <TabsTrigger value="jain-books">Jain Books in Unicode</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sandhya">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {collectionBooks.map((book, index) => (
                  <Link key={index} to={book.link}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 space-y-4">
                        <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                          <BookOpen className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-base">{book.title}</h3>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="paryushan">
              <div className="text-center py-12 text-muted-foreground">Content coming soon...</div>
            </TabsContent>
            <TabsContent value="jaina">
              <div className="text-center py-12 text-muted-foreground">Content coming soon...</div>
            </TabsContent>
            <TabsContent value="jain-books">
              <div className="text-center py-12 text-muted-foreground">Content coming soon...</div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Links to Elibrary by Type */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Quick Links to Elibrary by Type</h2>
          <Tabs defaultValue="magazines" className="w-full">
            <TabsList className="mb-6 flex-wrap h-auto">
              <TabsTrigger value="languages">eLibrary Books by Languages</TabsTrigger>
              <TabsTrigger value="dictionary">Dictionary Collection</TabsTrigger>
              <TabsTrigger value="articles">Jain Articles</TabsTrigger>
              <TabsTrigger value="manuscripts">Jain Manuscripts</TabsTrigger>
              <TabsTrigger value="magazines" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Jain Magazine</TabsTrigger>
              <TabsTrigger value="multimedia">Multimedia</TabsTrigger>
            </TabsList>
            
            <TabsContent value="magazines">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {magazines.map((magazine, index) => (
                  <Link key={index} to={magazine.link}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 space-y-4">
                        <div className="h-16 w-16 bg-accent/10 rounded-lg flex items-center justify-center">
                          <BookOpen className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="font-semibold text-base">{magazine.title}</h3>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="languages">
              <div className="text-center py-12 text-muted-foreground">Content coming soon...</div>
            </TabsContent>
            <TabsContent value="dictionary">
              <div className="text-center py-12 text-muted-foreground">Content coming soon...</div>
            </TabsContent>
            <TabsContent value="articles">
              <div className="text-center py-12 text-muted-foreground">Content coming soon...</div>
            </TabsContent>
            <TabsContent value="manuscripts">
              <div className="text-center py-12 text-muted-foreground">Content coming soon...</div>
            </TabsContent>
            <TabsContent value="multimedia">
              <div className="text-center py-12 text-muted-foreground">Content coming soon...</div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Other Links */}
      <section className="py-12 px-4 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Other Links</h2>
          <Tabs defaultValue="catalogues" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="catalogues">Publishers Catalogues</TabsTrigger>
              <TabsTrigger value="centers">Jain Centers of North America</TabsTrigger>
            </TabsList>
            
            <TabsContent value="catalogues">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {catalogues.map((catalogue, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BookOpen className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-lg">{catalogue.title}</h3>
                          <p className="text-sm text-muted-foreground">{catalogue.subtitle}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{catalogue.code}</span>
                            <span>Total Pages: {catalogue.pages}</span>
                            <span>Down Count: {catalogue.downloads}</span>
                          </div>
                        </div>
                        <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 self-start shadow-sm hover:shadow-md transition-all">
                          <Link to={catalogue.link}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">See more</Button>
              </div>
            </TabsContent>

            <TabsContent value="centers">
              <div className="text-center py-12 text-muted-foreground">Content coming soon...</div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Legal Text Sections */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container max-w-5xl space-y-8 text-sm text-foreground/80 leading-relaxed">
          <p>
            • Commercial use and general public distribution of the material is not permitted. You are free to download any literature for non-commercial personal use only. For most of the literature on this site, we have obtained the permission from authors/publishers for individual, private and non-commercial use only. In addition, we occasionally receive the eBooks without the written request to be offered to library address. We will remove the material from the website as soon as we evaluate it after receiving the full details of the intellectual property violation involved.
          </p>
          <p>
            • If you do not act on requests included via e-mail, bear the written request to be offered to library address. We will remove the material from the website as soon as we evaluate it after receiving the full details of the intellectual property violation involved. Our only intention is to spread the message of non-violence and other principles of Jain religion with respect to the rest of the world. All our intents are on spreading the literary treasures of the past throughout the world in a non-commercial and non-possessive way.
          </p>
        </div>
      </section>

      {/* Discover More from Us */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">Discover More from Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Button asChild size="lg" className="h-14 bg-primary hover:bg-primary/90 font-semibold text-base">
              <a href="https://jainqq.org" target="_blank" rel="noopener noreferrer">JainQQ</a>
            </Button>
            <Button asChild size="lg" className="h-14 bg-primary hover:bg-primary/90 font-semibold text-base">
              <a href="https://jainart.com" target="_blank" rel="noopener noreferrer">JainArt</a>
            </Button>
            <Button asChild size="lg" className="h-14 bg-primary hover:bg-primary/90 font-semibold text-base">
              <a href="https://jainsmsays.com" target="_blank" rel="noopener noreferrer">JainSm Says</a>
            </Button>
            <Button asChild size="lg" className="h-14 bg-primary hover:bg-primary/90 font-semibold text-base">
              <a href="https://jainacademicbowl.com" target="_blank" rel="noopener noreferrer">Jain Academic Bowl</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

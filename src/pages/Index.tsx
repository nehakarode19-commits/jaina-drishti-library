import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Search, Users, Download, Heart, TrendingUp } from "lucide-react";

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
  { label: "Total Books", value: "2,450+", icon: BookOpen },
  { label: "Active Users", value: "15,000+", icon: Users },
  { label: "Downloads", value: "500K+", icon: Download },
  { label: "Languages", value: "12", icon: Search },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDI1IDk1JSA1MyUgLyAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Digital Library of Jain Wisdom</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Explore the Sacred
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Jain Scriptures
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access thousands of sacred texts, scriptures, and philosophical works from the profound Jain tradition.
              Search, read, and download in multiple languages.
            </p>

            <div className="max-w-2xl mx-auto pt-4">
              <SearchBar />
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Button asChild size="lg" variant="outline">
                <Link to="/agam-search">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Agam Search
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/advanced-search">
                  <Search className="mr-2 h-4 w-4" />
                  Advanced Search
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Browse by Category</h2>
            <p className="text-muted-foreground">Discover sacred texts organized by tradition and purpose</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} to={`/search?category=${encodeURIComponent(category.name)}`}>
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
                    <CardContent className="p-6 space-y-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.count} books</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-3">Featured Books</h2>
              <p className="text-muted-foreground">Most accessed sacred texts from our collection</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/search">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Help us preserve and digitize ancient Jain texts for future generations. Your contribution makes a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/donate">
                <Heart className="mr-2 h-5 w-5" />
                Make a Donation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
              <Link to="/request-upload">
                <BookOpen className="mr-2 h-5 w-5" />
                Contribute Content
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

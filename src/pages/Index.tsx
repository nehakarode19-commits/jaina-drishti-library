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
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(180_45%_35%/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(40_70%_55%/0.08),transparent_50%)]" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 shadow-sm backdrop-blur-sm">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Digital Library of Jain Wisdom</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight leading-tight">
              Explore the Sacred
              <br />
              <span className="gradient-text animate-shimmer bg-[length:200%_auto]">
                Jain Scriptures
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Access thousands of sacred texts, scriptures, and philosophical works from the profound Jain tradition.
              Search, read, and download in multiple languages.
            </p>

            <div className="max-w-2xl mx-auto pt-6">
              <SearchBar />
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:text-primary hover:border-primary shadow-sm font-semibold">
                <Link to="/agam-search">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Agam Search
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10 hover:text-accent hover:border-accent shadow-sm font-semibold">
                <Link to="/advanced-search">
                  <Search className="mr-2 h-5 w-5" />
                  Advanced Search
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y glass-effect">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-3 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary mx-auto shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="text-4xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-4xl font-bold font-serif mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground">Discover sacred texts organized by tradition and purpose</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} to={`/search?category=${encodeURIComponent(category.name)}`} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="h-full card-hover border-border/50 group">
                    <CardContent className="p-8 space-y-5">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{category.count} books</p>
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
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container">
          <div className="flex items-center justify-between mb-14 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-4">Featured Books</h2>
              <p className="text-lg text-muted-foreground">Most accessed sacred texts from our collection</p>
            </div>
            <Button asChild variant="outline" size="lg" className="hidden md:flex hover:bg-primary/10 hover:text-primary border-primary/30 font-semibold">
              <Link to="/search">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book, index) => (
              <div key={book.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <BookCard {...book} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy via-burgundy/90 to-primary" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,white,transparent_70%)]" />
        
        <div className="container relative z-10 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm shadow-xl mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">Support Our Mission</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Help us preserve and digitize ancient Jain texts for future generations. Your contribution makes a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-white text-burgundy hover:bg-white/90 shadow-xl hover:shadow-2xl font-bold text-base px-8">
                <Link to="/donate">
                  <Heart className="mr-2 h-5 w-5" />
                  Make a Donation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20 text-white backdrop-blur-sm font-semibold text-base px-8">
                <Link to="/request-upload">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Contribute Content
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

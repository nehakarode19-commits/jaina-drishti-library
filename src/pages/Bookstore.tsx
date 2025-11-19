import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Search, BookOpen } from "lucide-react";

// Sample bookstore items
const bookstoreItems = [
  {
    id: "1",
    title: "Tattvartha Sutra (Hardcover)",
    titleNative: "तत्त्वार्थ सूत्र",
    price: 29.99,
    ageGroup: "Adult",
    availability: "In Stock",
    category: "Agam",
    image: null
  },
  {
    id: "2",
    title: "Samayasara Commentary",
    titleNative: "समयसार",
    price: 34.99,
    ageGroup: "Adult",
    availability: "In Stock",
    category: "Philosophy",
    image: null
  },
  {
    id: "3",
    title: "Jain Stories for Children",
    titleNative: "जैन बाल कथाएं",
    price: 15.99,
    ageGroup: "Children",
    availability: "In Stock",
    category: "Children's Literature",
    image: null
  },
  {
    id: "4",
    title: "Introduction to Jainism",
    price: 24.99,
    ageGroup: "All Ages",
    availability: "Limited Stock",
    category: "Introduction",
    image: null
  }
];

const Bookstore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const addToCart = (bookId: string) => {
    setCart(prev => ({
      ...prev,
      [bookId]: (prev[bookId] || 0) + 1
    }));
  };

  const cartItemCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        <div className="container">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Jain Bookstore</h1>
            <p className="text-lg text-muted-foreground">
              Purchase physical copies of sacred texts and Jain literature
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="agam">Agam</SelectItem>
                <SelectItem value="philosophy">Philosophy</SelectItem>
                <SelectItem value="children">Children's Books</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Age Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ages</SelectItem>
                <SelectItem value="children">Children</SelectItem>
                <SelectItem value="adult">Adult</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Cart Summary */}
          {cartItemCount > 0 && (
            <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                <span className="font-medium">
                  {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'} in cart
                </span>
              </div>
              <Button>View Cart & Checkout</Button>
            </div>
          )}

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bookstoreItems.map((book) => (
              <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  {book.image ? (
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                  ) : (
                    <BookOpen className="h-16 w-16 text-primary/40" />
                  )}
                </div>
                
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold line-clamp-2 mb-1">{book.title}</h3>
                    {book.titleNative && (
                      <p className="text-sm text-muted-foreground line-clamp-1">{book.titleNative}</p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">{book.category}</Badge>
                    <Badge variant="outline" className="text-xs">{book.ageGroup}</Badge>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">${book.price}</span>
                    <span className={`text-xs ${book.availability === 'In Stock' ? 'text-green-600' : 'text-orange-600'}`}>
                      {book.availability}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Button 
                    className="w-full" 
                    onClick={() => addToCart(book.id)}
                    disabled={book.availability === 'Out of Stock'}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bookstore;

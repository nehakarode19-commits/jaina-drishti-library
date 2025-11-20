import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, Grid, List } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

interface Book {
  id: string;
  title: string;
  sku: string;
  age_group: string;
  price: number;
  availability: string;
  stock_quantity: number;
}

interface Category {
  name: string;
  description: string;
}

const BookCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [category, setCategory] = useState<Category | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    if (slug) {
      fetchCategoryAndBooks();
    }
  }, [slug]);

  const fetchCategoryAndBooks = async () => {
    try {
      // Fetch category
      const { data: categoryData, error: categoryError } = await supabase
        .from("book_categories")
        .select("name, description")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      if (categoryError) throw categoryError;
      setCategory(categoryData);

      // Fetch books in this category
      const { data: booksData, error: booksError } = await supabase
        .from("books")
        .select("*")
        .eq("category_id", (await supabase
          .from("book_categories")
          .select("id")
          .eq("slug", slug)
          .single()).data?.id)
        .eq("is_active", true)
        .order("title");

      if (booksError) throw booksError;
      setBooks(booksData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error",
        description: "Failed to load books. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (book: Book) => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      sku: book.sku,
    });
    toast({
      title: "Added to Cart",
      description: "Book has been added to your cart.",
    });
    navigate("/cart");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Loading books...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
            <Button onClick={() => navigate("/buy-books")}>Back to Categories</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />

      <main className="flex-1 py-8 px-4">
        <div className="container max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 text-foreground">
              {category.name}
            </h1>
            <p className="text-lg text-[#6B5D3F]">Available Books</p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-end mb-6">
            <div className="flex gap-1 bg-white rounded-lg p-1 border border-[#8B7355]/20 shadow-sm">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-black-btn text-white hover:bg-black-btn/90 hover:text-white" : "hover:bg-black-btn/10"}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-black-btn text-white hover:bg-black-btn/90 hover:text-white" : "hover:bg-black-btn/10"}
              >
                <Grid className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Books Grid/List */}
          {books.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                  : "space-y-4"
              }
            >
              {books.map((book) => (
                <div
                  key={book.id}
                  className="bg-[#FEF7E7] rounded-lg border border-[#D4C5A0] p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-black-btn rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                        <BookOpen className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                        {book.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="font-medium">{book.sku}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span>Age: <span className="font-medium">{book.age_group || "8to9"}</span></span>
                        <span>Available: <span className="font-medium">{book.stock_quantity || 0}</span></span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-2xl font-bold text-black-btn">
                          Rs.{book.price.toFixed(2)}
                        </p>
                        <Button
                          onClick={() => handleAddToCart(book)}
                          className="bg-black-btn hover:bg-black-btn/90 text-white rounded-full px-6"
                          disabled={!book.stock_quantity || book.stock_quantity === 0}
                        >
                          Add To Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No books available in this category.
              </p>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Button
              onClick={() => navigate("/buy-books")}
              variant="outline"
              className="border-black-btn text-black-btn hover:bg-black-btn/10"
            >
              Back to Categories
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookCategory;

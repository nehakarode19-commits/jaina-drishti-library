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
          <div className="flex justify-end items-center gap-2 mb-6">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className="bg-[#8B7355] hover:bg-[#6B5D3F]"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
              className="bg-[#8B7355] hover:bg-[#6B5D3F]"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          {/* Books Grid/List */}
          {books.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {books.map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded-lg border border-[#D4C5A0] overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    {/* Book Icon */}
                    <div className="bg-[#8B7355] rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>

                    {/* Book Details */}
                    <div className="space-y-2 mb-4">
                      <h3 className="font-semibold text-lg text-foreground">
                        {book.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>SKU: {book.sku}</span>
                        <span className="text-right">{book.sku}</span>
                      </div>
                      {book.age_group && (
                        <p className="text-sm text-muted-foreground">
                          {book.age_group}
                        </p>
                      )}
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#D4C5A0]">
                      <div>
                        <p className="text-2xl font-bold text-[#4A4129]">
                          Rs.{book.price.toFixed(2)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {book.availability}
                        </p>
                      </div>
                      <Button
                        onClick={() => handleAddToCart(book)}
                        disabled={book.stock_quantity === 0}
                        className="bg-[#5C5133] hover:bg-[#4A4129] text-white rounded-full px-6"
                      >
                        Add to Cart
                      </Button>
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
              className="border-[#8B7355] text-[#8B7355] hover:bg-[#FEF7E7]"
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

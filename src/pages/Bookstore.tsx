import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, ChevronRight } from "lucide-react";

interface BookCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  display_order: number;
}

const Bookstore = () => {
  const [categories, setCategories] = useState<BookCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from("book_categories")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (slug: string) => {
    navigate(`/buy-books/${slug}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Loading categories...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 page-section">
        <div className="page-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              Buy Jaina Education Books
            </h1>
            <p className="text-lg text-[#6B5D3F]">
              Available Books
            </p>
          </div>

          <div className="grid-cards-2 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.slug)}
                className="card-interactive bg-[#FEF7E7] hover:bg-[#F5E6C8] border-[#D4C5A0]"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-[#8B7355] rounded-lg p-6 group-hover:scale-105 transition-transform duration-200">
                    <BookOpen className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-lg font-semibold text-[#4A4129] group-hover:text-[#2C2814] transition-colors">
                    {category.name}
                  </h2>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-[#8B7355] group-hover:border-[#6B5D3F] transition-colors">
                    <ChevronRight className="h-5 w-5 text-[#8B7355] group-hover:text-[#6B5D3F]" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {categories.length === 0 && !loading && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No book categories available at the moment.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bookstore;

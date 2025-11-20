import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ placeholder = "Search books, authors, categories...", className }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`flex gap-3 ${className}`}>
      <div className="relative flex-1 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-black-btn transition-colors" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 h-14 text-base border-2 border-border hover:border-black-btn/30 focus-visible:border-black-btn focus-visible:ring-black-btn/20 transition-all shadow-sm"
        />
      </div>
      <Button type="submit" size="lg" className="px-10 h-14 bg-black-btn hover:bg-black-btn/90 shadow-md hover:shadow-lg transition-all duration-300 font-semibold text-white">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;

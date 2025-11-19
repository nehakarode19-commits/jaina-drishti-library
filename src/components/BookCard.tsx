import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye, BookOpen } from "lucide-react";

interface BookCardProps {
  id: string;
  titleEn: string;
  titleNative?: string;
  author: string;
  category: string;
  language: string;
  downloads: number;
  coverImage?: string;
}

const BookCard = ({ id, titleEn, titleNative, author, category, language, downloads, coverImage }: BookCardProps) => {
  return (
    <Card className="overflow-hidden card-hover group border-border/50 shadow-md">
      <Link to={`/book/${id}`}>
        <div className="aspect-[3/4] bg-gradient-to-br from-primary-light to-accent-light relative overflow-hidden">
          {coverImage ? (
            <img src={coverImage} alt={titleEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-light to-gold-light">
              <BookOpen className="h-20 w-20 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-sm font-medium drop-shadow-lg">View Details →</span>
          </div>
        </div>
      </Link>
      
      <CardContent className="p-5 space-y-3">
        <div className="space-y-1.5">
          <Link to={`/book/${id}`}>
            <h3 className="font-serif font-semibold text-lg line-clamp-2 hover:text-primary transition-colors duration-200">{titleEn}</h3>
          </Link>
          {titleNative && (
            <p className="text-sm text-muted-foreground line-clamp-1 font-medium">{titleNative}</p>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground font-medium">{author}</p>
        
        <div className="flex flex-wrap gap-2 pt-1">
          <Badge className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">{category}</Badge>
          <Badge variant="outline" className="text-xs border-accent/30 text-accent hover:bg-accent/10">{language}</Badge>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex items-center justify-between border-t border-border/40 mt-1">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
          <Download className="h-3.5 w-3.5" />
          <span>{downloads.toLocaleString()}</span>
        </div>
        <Button size="sm" variant="ghost" asChild className="hover:bg-primary/10 hover:text-primary font-medium">
          <Link to={`/book/${id}`}>
            <Eye className="h-4 w-4 mr-1.5" />
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;

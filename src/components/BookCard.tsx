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
    <Card className="overflow-hidden transition-all hover:shadow-lg group">
      <Link to={`/book/${id}`}>
        <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
          {coverImage ? (
            <img src={coverImage} alt={titleEn} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <BookOpen className="h-16 w-16 text-primary/40" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
      
      <CardContent className="p-4 space-y-2">
        <div className="space-y-1">
          <Link to={`/book/${id}`}>
            <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">{titleEn}</h3>
          </Link>
          {titleNative && (
            <p className="text-sm text-muted-foreground line-clamp-1">{titleNative}</p>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground">{author}</p>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs">{category}</Badge>
          <Badge variant="outline" className="text-xs">{language}</Badge>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Download className="h-3 w-3" />
          <span>{downloads.toLocaleString()}</span>
        </div>
        <Button size="sm" variant="ghost" asChild>
          <Link to={`/book/${id}`}>
            <Eye className="h-4 w-4 mr-1" />
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;

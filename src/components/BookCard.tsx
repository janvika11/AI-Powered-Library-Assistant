
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book, User, Calendar, BookOpen } from 'lucide-react';
import { useLibrary } from '@/context/LibraryContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

interface BookCardProps {
  book: {
    id: string;
    title: string;
    author: string;
    coverImage?: string;
    category?: string[];
    rack?: string;
    academicYear?: string;
    semester?: string;
    chapters?: any[];
    copiesAvailable: number;
    description?: string;
    genre?: string;
    isEbook?: boolean;
  };
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { borrowBook, isBorrowed, openEbook } = useLibrary();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleBorrowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (book.isEbook) {
      openEbook(book);
    } else {
      if (book.copiesAvailable > 0) {
        borrowBook(book);
        toast({
          title: "Book Borrowed!",
          description: `You've successfully borrowed "${book.title}". Please return within 14 days.`,
        });
      } else {
        toast({
          title: "Sorry!",
          description: "This book is currently unavailable for borrowing.",
          variant: "destructive",
        });
      }
    }
  };

  const handleCardClick = () => {
    navigate(`/book/${book.id}`);
  };

  const isBookBorrowed = isBorrowed(book.id);

  return (
    <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow" onClick={handleCardClick}>
      <CardHeader className="p-3">
        <div className="aspect-[3/4] mb-3 overflow-hidden rounded-md">
          <img 
            src={book.coverImage || '/placeholder.svg'} 
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardTitle className="text-sm line-clamp-2">{book.title}</CardTitle>
        <p className="text-xs text-muted-foreground flex items-center">
          <User className="w-3 h-3 mr-1" />
          {book.author}
        </p>
      </CardHeader>
      
      <CardContent className="p-3 pt-0">
        {book.category && book.category.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {book.category.slice(0, 2).map((cat, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {cat}
              </Badge>
            ))}
            {book.category.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{book.category.length - 2}
              </Badge>
            )}
          </div>
        )}
        
        {book.chapters && book.chapters.length > 0 && (
          <div className="mb-2">
            <p className="text-xs text-muted-foreground mb-1 flex items-center">
              <BookOpen className="w-3 h-3 mr-1" />
              Chapters:
            </p>
            <div className="text-xs text-gray-600 max-h-16 overflow-y-auto">
              {book.chapters.slice(0, 3).map((chapter, index) => (
                <div key={index} className="truncate">
                  {typeof chapter === 'string' ? chapter : chapter.title || chapter.name}
                </div>
              ))}
              {book.chapters.length > 3 && (
                <div className="text-muted-foreground italic">
                  +{book.chapters.length - 3} more chapters
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          {book.academicYear && (
            <span className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {book.academicYear}
            </span>
          )}
          {!book.isEbook && (
            <span className="flex items-center">
              <Book className="w-3 h-3 mr-1" />
              {book.copiesAvailable} available
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-3 pt-0">
        <Button 
          onClick={handleBorrowClick}
          className="w-full text-xs h-8"
          disabled={!book.isEbook && (book.copiesAvailable === 0 || isBookBorrowed)}
          variant={book.isEbook ? "secondary" : "default"}
        >
          {book.isEbook 
            ? 'Read E-book' 
            : isBookBorrowed 
              ? 'Already Borrowed' 
              : book.copiesAvailable === 0 
                ? 'Out of Stock' 
                : 'Borrow Book'
          }
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen, User, Calendar, Book } from 'lucide-react';
import { useLibrary } from '@/context/LibraryContext';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { books, borrowedBooks, borrowBook, returnBook } = useLibrary();
  const { toast } = useToast();
  
  // Find the book by id
  const book = books.find(book => book.id === id);
  
  // Check if this book is already borrowed and get the borrowed copy info
  const borrowedCopy = borrowedBooks.find(borrowedBook => borrowedBook.id === id);
  const isBorrowed = !!borrowedCopy;
  
  // If book not found, redirect to 404 page
  useEffect(() => {
    if (!book) {
      navigate('/not-found', { replace: true });
    }
  }, [book, navigate]);

  if (!book) return null;

  // Handle borrow button click
  const handleBorrowClick = () => {
    if (book.copiesAvailable && book.copiesAvailable > 0) {
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
  };

  // Handle return button click
  const handleReturnClick = () => {
    returnBook(book.id);
    toast({
      title: "Book Returned!",
      description: `You've successfully returned "${book.title}". Thank you!`,
    });
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Book Cover */}
        <div className="md:w-1/3">
          <img 
            src={book.coverImage} 
            alt={book.title} 
            className="rounded-lg shadow-md w-full h-auto" 
          />
        </div>

        {/* Book Details */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-library-DEFAULT mb-2">{book.title}</h1>
          <p className="text-gray-700 mb-1">
            <User className="inline-block h-5 w-5 mr-1" />
            {book.author}
          </p>
          <p className="text-gray-600 italic mb-4">{book.genre}</p>

          {/* Show copy code if borrowed */}
          {isBorrowed && borrowedCopy?.copyCode && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-blue-800 font-medium">
                <BookOpen className="inline-block h-5 w-5 mr-1" />
                You have borrowed copy: {borrowedCopy.copyCode}
              </p>
            </div>
          )}

          {/* Additional Info */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-library-DEFAULT mb-2">Description</h2>
            <p className="text-gray-800">{book.description}</p>
          </div>

          {/* Additional Info */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-library-DEFAULT mb-2">Additional Information</h2>
            <p className="text-gray-800">
              <BookOpen className="inline-block h-5 w-5 mr-1" />
              Category: {book.category ? book.category.join(', ') : 'N/A'}
            </p>
            <p className="text-gray-800">
              Year: {book.academicYear || 'N/A'}
            </p>
            <p className="text-gray-800">
              Copies Available: {book.copiesAvailable}
            </p>
          </div>

          {/* Borrowing Options */}
          <div>
            {isBorrowed ? (
              <div className="flex items-center gap-4">
                <p className="text-green-600 font-semibold">
                  <Calendar className="inline-block h-5 w-5 mr-1" />
                  Borrowed - Due Date: {new Date(borrowedCopy?.dueDate || '').toLocaleDateString()}
                </p>
                <Button variant="destructive" onClick={handleReturnClick}>
                  Return Book
                </Button>
              </div>
            ) : (
              <Button onClick={handleBorrowClick} disabled={book.copiesAvailable === 0}>
                {book.copiesAvailable === 0 ? 'Out of Stock' : 'Borrow Book'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

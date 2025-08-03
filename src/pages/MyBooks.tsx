
import React from 'react';
import { useLibrary } from '@/context/LibraryContext';
import { BookCheck, Calendar, AlertTriangle, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import AssistantFloatingButton from '@/components/AssistantFloatingButton';
import BookChatbot from '@/components/BookChatbot';

const MyBooks = () => {
  const { borrowedBooks, returnBook } = useLibrary();
  const navigate = useNavigate();
  
  // Calculate days remaining until due date
  const getDaysRemaining = (dueDate: string | Date) => {
    const today = new Date();
    // Convert string date to Date object if it's not already
    const dueDateObject = dueDate instanceof Date ? dueDate : new Date(dueDate);
    const diffTime = dueDateObject.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  // Format date for display
  const formatDate = (date: string | Date) => {
    // Convert string date to Date object if it's not already
    const dateObject = date instanceof Date ? date : new Date(date);
    return dateObject.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-library-light pb-12 relative">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center mb-2">
            <BookCheck className="mr-2" />
            My Borrowed Books
          </h1>
          <p className="text-muted-foreground">
            Manage your borrowed books and see when they are due
          </p>
        </div>
        
        {/* Books list */}
        {borrowedBooks.length > 0 ? (
          <div className="space-y-6">
            {borrowedBooks.map((book) => {
              const daysRemaining = book.dueDate ? getDaysRemaining(book.dueDate) : 0;
              const isOverdue = daysRemaining < 0;
              const isDueSoon = daysRemaining >= 0 && daysRemaining <= 3;
              
              return (
                <Card key={`${book.id}-${book.copyCode}`} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Book cover */}
                      <div 
                        className="w-full md:w-48 h-48 shrink-0 bg-cover bg-center bg-no-repeat bg-gray-100"
                        style={{
                          backgroundImage: book.coverImage ? `url(${book.coverImage})` : 'none'
                        }}
                      >
                        {!book.coverImage && (
                          <div className="flex items-center justify-center h-full w-full">
                            <BookCheck className="h-12 w-12 text-gray-400" />
                          </div>
                        )}
                      </div>
                      
                      {/* Book details */}
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex-grow">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-xl mb-1">{book.title}</h3>
                              <p className="text-muted-foreground mb-2">{book.author}</p>
                              
                              {/* Copy Code */}
                              {book.copyCode && (
                                <div className="flex items-center text-sm text-blue-600 mb-2">
                                  <BookCheck className="h-4 w-4 mr-1" />
                                  <span className="font-medium">Copy: {book.copyCode}</span>
                                </div>
                              )}
                              
                              {/* Rack Number */}
                              {book.rack && (
                                <div className="flex items-center text-sm text-gray-600 mb-3">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span>Rack: {book.rack}</span>
                                </div>
                              )}
                            </div>
                            
                            {isOverdue && (
                              <Badge variant="destructive" className="ml-2">OVERDUE</Badge>
                            )}
                            {isDueSoon && !isOverdue && (
                              <Badge variant="outline" className="border-orange-500 text-orange-500 ml-2">
                                DUE SOON
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {book.category && book.category.map((cat, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {cat}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className={`flex items-center ${isOverdue ? 'text-red-500' : isDueSoon ? 'text-orange-500' : 'text-green-600'} mb-4`}>
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm font-medium">
                              {isOverdue ? (
                                <>Overdue by {Math.abs(daysRemaining)} days (Due: {book.dueDate && formatDate(book.dueDate)})</>
                              ) : (
                                <>Due in {daysRemaining} days ({book.dueDate && formatDate(book.dueDate)})</>
                              )}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex gap-3 mt-2">
                          <Button onClick={() => navigate(`/book/${book.id}`)}>
                            View Details
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => returnBook(book.id)}
                          >
                            Return Book
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <BookCheck className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No books borrowed yet</h2>
            <p className="text-muted-foreground mb-6">
              Browse our collection and borrow books to see them here
            </p>
            <Button onClick={() => navigate('/search')}>
              Browse Books
            </Button>
          </div>
        )}
        
        {/* Due date information */}
        {borrowedBooks.length > 0 && (
          <div className="mt-8 bg-library-warm p-5 rounded-lg flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Book Borrowing Policy</h3>
              <p className="text-sm">
                Books can be borrowed for 14 days. Please return them on time to avoid late fees. 
                You can renew books once if no one else has reserved them.
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Chatbot and Assistant - positioned at the end with proper z-index */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col-reverse gap-4">
        <AssistantFloatingButton />
        <BookChatbot />
      </div>
    </div>
  );
};

export default MyBooks;

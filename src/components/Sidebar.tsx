
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Star, Bell, BookOpen, Calendar } from 'lucide-react';
import { useLibrary } from '@/context/LibraryContext';

const Sidebar = () => {
  const location = useLocation();
  const { borrowedBooks } = useLibrary();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="h-full min-h-screen w-64 bg-white border-r border-gray-200 fixed top-0 left-0 pt-16">
      <div className="flex flex-col p-4">
        <Link 
          to="/"
          className={`flex items-center space-x-3 px-4 py-3 mb-2 rounded-lg ${
            isActive('/') ? 'bg-blue-50 text-blue-400' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Home className="h-5 w-5" />
          <span className="font-medium">Home</span>
        </Link>
        
        <Link 
          to="/search"
          className={`flex items-center space-x-3 px-4 py-3 mb-2 rounded-lg ${
            isActive('/search') ? 'bg-blue-50 text-blue-400' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Search className="h-5 w-5" />
          <span className="font-medium">Search</span>
        </Link>
        
        <Link 
          to="/recommendations"
          className={`flex items-center space-x-3 px-4 py-3 mb-2 rounded-lg ${
            isActive('/recommendations') ? 'bg-blue-50 text-blue-400' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Star className="h-5 w-5" />
          <span className="font-medium">Recommendations</span>
        </Link>
        
        <Link 
          to="/notifications"
          className={`flex items-center space-x-3 px-4 py-3 mb-2 rounded-lg ${
            isActive('/notifications') ? 'bg-blue-50 text-blue-400' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Bell className="h-5 w-5" />
          <span className="font-medium">Notifications</span>
        </Link>
      </div>
      
      <div className="mt-6">
        <div className="px-4 mb-2">
          <h3 className="uppercase text-xs font-semibold text-gray-500 tracking-wider">
            BORROWED BOOKS
          </h3>
        </div>
        
        {borrowedBooks.length > 0 ? (
          <div className="space-y-1 px-3">
            {borrowedBooks.map((book) => (
              <Link 
                key={book.id}
                to={`/book/${book.id}`}
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                <span className="truncate">{book.title}</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="px-4 py-2 text-sm text-gray-500">
            No books borrowed yet
          </div>
        )}
      </div>

      {/* Due Date Reminder Box */}
      {borrowedBooks.length > 0 && (
        <div className="mt-4 mx-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
          <div className="flex items-start gap-2">
            <Calendar className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-amber-800">Due Date Reminder</h4>
              <p className="text-xs text-amber-700 mt-1">
                Your next book is due in {calculateNextDueDate(borrowedBooks)} days
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to calculate the next due date - fixed type issue
const calculateNextDueDate = (books: any[]) => {
  if (books.length === 0) return 0;
  
  const today = new Date();
  let nextDue = Number.MAX_SAFE_INTEGER;
  
  books.forEach(book => {
    if (book.dueDate) {
      const dueDate = new Date(book.dueDate);
      // Fix: Ensure we're subtracting numbers, not Date objects
      const daysRemaining = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      if (daysRemaining > 0 && daysRemaining < nextDue) {
        nextDue = daysRemaining;
      }
    }
  });
  
  return nextDue === Number.MAX_SAFE_INTEGER ? 0 : nextDue;
};

export default Sidebar;

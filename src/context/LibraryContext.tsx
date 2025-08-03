import React, { createContext, useContext, useState, useEffect } from 'react';
import { books as initialBooks } from '../data/books';

// Define the Book type here since there's an issue with importing from global.d.ts
export type Book = {
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
  dueDate?: string;
  copyCode?: string; // Add copy code for borrowed books
};

type BookCopy = {
  copyCode: string;
  isAvailable: boolean;
  borrowedDate?: string;
  dueDate?: string;
};

type BookWithCopies = Book & {
  copies: BookCopy[];
};

type LibraryContextType = {
  books: Book[];
  borrowedBooks: Book[];
  borrowBook: (book: Book) => void;
  returnBook: (bookId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  filteredBooks: Book[];
  getAiRecommendations: () => Book[];
  isBorrowed: (bookId: string) => boolean;
  getDueDate: (bookId: string) => Date | null;
  openEbook: (book: Book) => void;
  userEmail: string;
  setUserEmail: (email: string) => void;
};

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Generate copies for each book with unique copy codes
  const generateBookCopies = (book: Book): BookWithCopies => {
    const copies: BookCopy[] = [];
    for (let i = 1; i <= book.copiesAvailable; i++) {
      copies.push({
        copyCode: `${book.id}-C${String(i).padStart(3, '0')}`,
        isAvailable: true
      });
    }
    
    return {
      ...book,
      rack: book.rack || `R${Math.floor(Math.random() * 50) + 1}-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
      copies
    };
  };

  const [booksWithCopies, setBooksWithCopies] = useState<BookWithCopies[]>(
    initialBooks.map(generateBookCopies)
  );
  
  // Convert books with copies to regular books for display
  const books: Book[] = booksWithCopies.map(book => ({
    ...book,
    copiesAvailable: book.copies.filter(copy => copy.isAvailable).length
  }));

  const [borrowedBooks, setBorrowedBooks] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string>('');

  // Load borrowed books and update copy availability on initial mount
  useEffect(() => {
    const storedBorrowedBooks = localStorage.getItem('borrowedBooks');
    if (storedBorrowedBooks) {
      const borrowed = JSON.parse(storedBorrowedBooks);
      setBorrowedBooks(borrowed);
      
      // Update copy availability based on borrowed books
      setBooksWithCopies(prev => 
        prev.map(book => ({
          ...book,
          copies: book.copies.map(copy => {
            const isBorrowed = borrowed.some((b: Book) => b.copyCode === copy.copyCode);
            return {
              ...copy,
              isAvailable: !isBorrowed
            };
          })
        }))
      );
    }
    
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  // Update localStorage when borrowedBooks changes
  useEffect(() => {
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
  }, [borrowedBooks]);
  
  // Update localStorage when userEmail changes
  useEffect(() => {
    localStorage.setItem('userEmail', userEmail);
  }, [userEmail]);

  // Filter books based on search query and category with improved search
  const filteredBooks = books.filter((book) => {
    const searchLower = searchQuery.toLowerCase();
    
    // Search in title, author, and chapters
    const matchesQuery = searchQuery === '' || 
      book.title.toLowerCase().includes(searchLower) ||
      book.author.toLowerCase().includes(searchLower) ||
      (book.category && book.category.some(cat => 
        cat && cat.toLowerCase().includes(searchLower)
      )) ||
      (book.chapters && book.chapters.some(chapter => {
        const chapterText = typeof chapter === 'string' 
          ? chapter 
          : chapter.title || chapter.name || '';
        return chapterText.toLowerCase().includes(searchLower);
      })) ||
      (book.description && book.description.toLowerCase().includes(searchLower)) ||
      (book.genre && book.genre.toLowerCase().includes(searchLower));
    
    const matchesCategory = !selectedCategory || 
                           (book.category && book.category.some(cat => 
                             cat && cat.toLowerCase().includes(selectedCategory.toLowerCase())
                           ));
    
    return matchesQuery && matchesCategory;
  });

  const borrowBook = (book: Book) => {
    // Find the book with copies
    const bookWithCopies = booksWithCopies.find(b => b.id === book.id);
    if (!bookWithCopies) return;
    
    // Find first available copy
    const availableCopy = bookWithCopies.copies.find(copy => copy.isAvailable);
    if (!availableCopy) return;
    
    // Check if the book is already borrowed (any copy)
    if (!borrowedBooks.find(b => b.id === book.id && b.copyCode === availableCopy.copyCode)) {
      // Add dueDate (2 weeks from now)
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 14);
      
      const bookWithDueDate = {
        ...book,
        dueDate: dueDate.toISOString(),
        copyCode: availableCopy.copyCode
      };
      
      setBorrowedBooks(prev => [...prev, bookWithDueDate]);
      
      // Mark copy as unavailable
      setBooksWithCopies(prev => 
        prev.map(b => 
          b.id === book.id 
            ? {
                ...b,
                copies: b.copies.map(copy => 
                  copy.copyCode === availableCopy.copyCode
                    ? { ...copy, isAvailable: false, borrowedDate: new Date().toISOString(), dueDate: dueDate.toISOString() }
                    : copy
                )
              }
            : b
        )
      );
    }
  };

  const returnBook = (bookId: string) => {
    // Find the borrowed book to get its copy code
    const borrowedBook = borrowedBooks.find(book => book.id === bookId);
    if (!borrowedBook || !borrowedBook.copyCode) return;
    
    // Remove book from borrowedBooks
    setBorrowedBooks(prev => prev.filter(book => !(book.id === bookId && book.copyCode === borrowedBook.copyCode)));
    
    // Mark copy as available
    setBooksWithCopies(prev => 
      prev.map(b => 
        b.id === bookId 
          ? {
              ...b,
              copies: b.copies.map(copy => 
                copy.copyCode === borrowedBook.copyCode
                  ? { ...copy, isAvailable: true, borrowedDate: undefined, dueDate: undefined }
                  : copy
              )
            }
          : b
      )
    );
  };
  
  // Function to check if a book is borrowed
  const isBorrowed = (bookId: string): boolean => {
    return borrowedBooks.some(book => book.id === bookId);
  };
  
  // Function to get the due date for a borrowed book
  const getDueDate = (bookId: string): Date | null => {
    const borrowedBook = borrowedBooks.find(book => book.id === bookId);
    return borrowedBook && borrowedBook.dueDate ? new Date(borrowedBook.dueDate) : null;
  };
  
  // Function to open an ebook
  const openEbook = (book: Book): void => {
    // For demonstration purposes only
    console.log(`Opening e-book: ${book.title}`);
    alert(`Opening e-book: ${book.title}`);
  };

  // Simple recommendation engine - suggests books in similar categories
  const getAiRecommendations = () => {
    // If user has borrowed books, recommend based on categories
    if (borrowedBooks.length > 0) {
      // Get all categories from borrowed books
      const borrowedCategories = borrowedBooks.flatMap(book => book.category || []);
      
      // Filter books that match these categories, but aren't already borrowed
      return books
        .filter(book => 
          !borrowedBooks.some(b => b.id === book.id) && 
          book.category?.some(cat => borrowedCategories.includes(cat))
        )
        .slice(0, 10); // Limit to 10 recommendations
    }
    
    // If no borrowed books, recommend popular books (just a sample)
    return books.filter(book => (book.copiesAvailable || 0) < 20).slice(0, 10);
  };

  const value = {
    books,
    borrowedBooks,
    borrowBook,
    returnBook,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredBooks,
    getAiRecommendations,
    isBorrowed,
    getDueDate,
    openEbook,
    userEmail,
    setUserEmail
  };

  return (
    <LibraryContext.Provider value={value}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
};

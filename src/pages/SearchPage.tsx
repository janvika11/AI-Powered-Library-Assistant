
import React, { useEffect } from 'react';
import { useLibrary } from '@/context/LibraryContext';
import BookCard from '@/components/BookCard';
import SearchBar from '@/components/SearchBar';
import BookChatbot from '@/components/BookChatbot';
import { Layers, Search } from 'lucide-react';
import AssistantFloatingButton from '@/components/AssistantFloatingButton';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const { filteredBooks, setSearchQuery, setSelectedCategory } = useLibrary();
  const [searchParams] = useSearchParams();
  
  // Apply search parameters from URL
  useEffect(() => {
    const query = searchParams.get('q');
    const category = searchParams.get('category');
    
    if (query) {
      setSearchQuery(query);
    }
    
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams, setSearchQuery, setSelectedCategory]);
  
  return (
    <div className="min-h-screen bg-white pb-12">
      <div className="container mx-auto px-4 py-8 pt-20">
        {/* Header with blue/black title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center mb-2">
            <Search className="mr-2 text-blue-400" />
            <span className="text-blue-400">Browse</span>
            <span className="text-black"> Books</span>
          </h1>
          <p className="text-muted-foreground">
            Find the perfect book from our extensive collection
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>
        
        {/* Search Results */}
        <div>
          {filteredBooks.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Layers className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No books found</h2>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking for
              </p>
            </div>
          )}
        </div>
      </div>
      
      <BookChatbot />
      <AssistantFloatingButton />
    </div>
  );
};

export default SearchPage;


import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { useLibrary } from '@/context/LibraryContext';
import { getAllCategories } from '@/data/books';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SearchBar: React.FC = () => {
  const { 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory, 
    filteredBooks
  } = useLibrary();
  
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const categories = getAllCategories();
  
  // Update local search query when context search query changes
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);
  
  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setLocalSearchQuery('');
    setSelectedCategory(null);
  };
  
  // Check if any filters are active
  const hasActiveFilters = searchQuery !== '' || selectedCategory !== null;
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search for books, authors..."
              className="pl-10"
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit">Search</Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-grow">
            <Select
              value={selectedCategory || ""}
              onValueChange={(value) => setSelectedCategory(value === "all-categories" ? null : value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-categories">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {hasActiveFilters && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={clearFilters}
              className="shrink-0"
            >
              <X size={18} />
            </Button>
          )}
        </div>
      </form>
      
      <div className="mt-3 text-sm text-muted-foreground">
        {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} found
      </div>
    </div>
  );
};

export default SearchBar;

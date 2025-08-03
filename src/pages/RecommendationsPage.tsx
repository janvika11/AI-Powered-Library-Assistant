
import React from 'react';
import { useLibrary } from '@/context/LibraryContext';
import BookCard from '@/components/BookCard';
import { Sparkles } from 'lucide-react';
import AssistantFloatingButton from '@/components/AssistantFloatingButton';

const RecommendationsPage = () => {
  const { borrowedBooks, getAiRecommendations } = useLibrary();
  
  // Get recommendations based on borrowed books
  const recommendations = getAiRecommendations();
  
  return (
    <div className="min-h-screen pb-12">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center mb-2">
            <Sparkles className="mr-2 text-blue-400" />
            <span className="text-blue-400">Recommended</span>
            <span className="text-black"> Books</span>
          </h1>
          <p className="text-muted-foreground">
            Books selected for you based on your interests and borrowing history
          </p>
        </div>
        
        {/* Recommendations */}
        {borrowedBooks.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">No borrowing history yet</h2>
            <p className="text-muted-foreground mb-6">
              Start borrowing books to get personalized recommendations based on your interests
            </p>
          </div>
        ) : recommendations.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">No recommendations available</h2>
            <p className="text-muted-foreground">
              Try borrowing books from different categories to get more recommendations
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recommendations.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
      
      <AssistantFloatingButton />
    </div>
  );
};

export default RecommendationsPage;

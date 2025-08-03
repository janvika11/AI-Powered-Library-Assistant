
import React, { createContext, useState, useContext, useCallback, ReactNode, useEffect } from 'react';
import { useVoiceAssistant } from '../hooks/useVoiceAssistant';
import { useLibrary } from './LibraryContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface AssistantContextProps {
  isAssistantActive: boolean;
  activateAssistant: () => void;
  deactivateAssistant: () => void;
  isListening: boolean;
  isSpeaking: boolean;
  transcript: string;
  askAssistant: (query: string) => void;
}

const AssistantContext = createContext<AssistantContextProps | undefined>(undefined);

export const AssistantProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAssistantActive, setIsAssistantActive] = useState(false);
  const navigate = useNavigate();
  const { 
    filteredBooks, 
    setSearchQuery, 
    borrowedBooks,
    setSelectedCategory
  } = useLibrary();
  
  // Handle voice assistant results
  const handleAssistantResult = useCallback((result: string) => {
    const query = result.toLowerCase();
    processQuery(query);
  }, []);

  const { 
    isListening, 
    transcript, 
    startListening, 
    stopListening,
    isSpeaking,
    speak, 
    stopSpeaking 
  } = useVoiceAssistant({
    onResult: handleAssistantResult,
    onError: (error) => {
      toast.error(`Voice recognition error: ${error}`);
    }
  });

  // Process queries
  const processQuery = useCallback((query: string) => {
    // Search for books
    if (query.includes('find') || query.includes('search for') || query.includes('look for')) {
      const searchTerms = query
        .replace(/find|search for|look for/gi, '')
        .trim();
      
      setSearchQuery(searchTerms);
      speak(`Searching for ${searchTerms}`);
      return;
    }
    
    // Show borrowed books
    if (query.includes('borrowed') || query.includes('my books')) {
      navigate('/my-books');
      
      if (borrowedBooks.length === 0) {
        speak('You haven\'t borrowed any books yet.');
      } else {
        speak(`You have borrowed ${borrowedBooks.length} books. Navigating to your borrowed books.`);
      }
      return;
    }

    // Filter by category
    if (query.includes('category') || query.includes('subject')) {
      const categories = [
        'physics', 'chemistry', 'mathematics', 'computer science', 'environmental science', 
        'mechanics', 'engineering', 'basic science'
      ];
      
      for (const category of categories) {
        if (query.includes(category)) {
          setSelectedCategory(category.charAt(0).toUpperCase() + category.slice(1));
          speak(`Showing books in the ${category} category`);
          return;
        }
      }
    }
    
    // Reset filters
    if (query.includes('clear') || query.includes('reset')) {
      setSearchQuery('');
      setSelectedCategory(null);
      speak('Cleared all filters');
      return;
    }
    
    // Go to home page
    if (query.includes('home')) {
      navigate('/');
      speak('Navigating to home page');
      return;
    }
    
    // If we can't understand the query
    speak("I'm not sure how to help with that. You can ask me to find books, show your borrowed books, filter by category, or navigate to the home page.");
    
  }, [navigate, setSearchQuery, setSelectedCategory, borrowedBooks.length, speak]);

  // Activate assistant
  const activateAssistant = useCallback(() => {
    setIsAssistantActive(true);
    startListening();
    speak("Library Assistant activated. How can I help you today?");
  }, [startListening, speak]);

  // Deactivate assistant
  const deactivateAssistant = useCallback(() => {
    setIsAssistantActive(false);
    stopListening();
    stopSpeaking();
  }, [stopListening, stopSpeaking]);

  // Ask assistant a question directly
  const askAssistant = useCallback((query: string) => {
    processQuery(query);
  }, [processQuery]);

  // Clean up when component unmounts
  useEffect(() => {
    return () => {
      stopListening();
      stopSpeaking();
    };
  }, [stopListening, stopSpeaking]);

  return (
    <AssistantContext.Provider
      value={{
        isAssistantActive,
        activateAssistant,
        deactivateAssistant,
        isListening,
        isSpeaking,
        transcript,
        askAssistant
      }}
    >
      {children}
    </AssistantContext.Provider>
  );
};

export const useAssistant = () => {
  const context = useContext(AssistantContext);
  if (context === undefined) {
    throw new Error('useAssistant must be used within an AssistantProvider');
  }
  return context;
};

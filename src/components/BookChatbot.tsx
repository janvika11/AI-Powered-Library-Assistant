
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { useLibrary } from '@/context/LibraryContext';
import { ebooks } from '@/data/ebooks';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const BookChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I can help you find books in our library or ebooks collection. Ask me about available books, authors, categories, or anything related to our library!',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const { books } = useLibrary();

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Improved search logic - extract meaningful words and search across all content
    const searchBooks = (searchTerms: string[]) => {
      const foundBooks = books.filter(book => {
        const searchText = `${book.title} ${book.author} ${book.category?.join(' ') || ''}`.toLowerCase();
        return searchTerms.some(term => searchText.includes(term));
      });
      
      const foundEbooks = ebooks.filter(ebook => {
        const searchText = `${ebook.title} ${ebook.author} ${ebook.category.join(' ')}`.toLowerCase();
        return searchTerms.some(term => searchText.includes(term));
      });
      
      return { foundBooks, foundEbooks };
    };

    // Author-specific queries
    if (message.includes('author') || message.includes('by ') || message.includes('written by')) {
      // Extract author names from the query
      const words = message.split(' ').filter(word => 
        word.length > 2 && 
        !['the', 'and', 'book', 'books', 'author', 'written', 'available', 'there', 'any', 'is', 'are', 'by'].includes(word)
      );
      
      const { foundBooks, foundEbooks } = searchBooks(words);
      
      if (foundBooks.length > 0 || foundEbooks.length > 0) {
        let response = `Yes! I found ${foundBooks.length + foundEbooks.length} book(s) by that author:\n\n`;
        
        if (foundBooks.length > 0) {
          response += "📚 Physical Books:\n";
          foundBooks.forEach(book => {
            response += `• "${book.title}" by ${book.author}\n`;
          });
        }
        
        if (foundEbooks.length > 0) {
          response += "\n💻 E-books:\n";
          foundEbooks.forEach(ebook => {
            response += `• "${ebook.title}" by ${ebook.author}\n`;
          });
        }
        
        return response;
      } else {
        const authorQuery = words.join(' ');
        return `I couldn't find any books by "${authorQuery}". Try checking the spelling or browse our collection to see all available authors.`;
      }
    }
    
    // General book search (find, search, look for)
    if (message.includes('find') || message.includes('search') || message.includes('look for') || message.includes('available')) {
      // Remove common words and extract search terms
      const words = message.split(' ').filter(word => 
        word.length > 2 && 
        !['find', 'search', 'look', 'for', 'book', 'books', 'available', 'there', 'any', 'is', 'are', 'the', 'and', 'can', 'you', 'help', 'me', 'please'].includes(word)
      );
      
      if (words.length > 0) {
        const { foundBooks, foundEbooks } = searchBooks(words);
        
        if (foundBooks.length > 0 || foundEbooks.length > 0) {
          let response = `I found ${foundBooks.length + foundEbooks.length} results:\n\n`;
          
          if (foundBooks.length > 0) {
            response += "📚 Physical Books:\n";
            foundBooks.slice(0, 5).forEach(book => {
              response += `• "${book.title}" by ${book.author}\n`;
            });
            if (foundBooks.length > 5) response += `... and ${foundBooks.length - 5} more\n`;
          }
          
          if (foundEbooks.length > 0) {
            response += "\n💻 E-books:\n";
            foundEbooks.slice(0, 5).forEach(ebook => {
              response += `• "${ebook.title}" by ${ebook.author}\n`;
            });
            if (foundEbooks.length > 5) response += `... and ${foundEbooks.length - 5} more\n`;
          }
          
          return response;
        } else {
          const searchQuery = words.join(' ');
          return `I couldn't find any books matching "${searchQuery}". Try different keywords or browse our categories.`;
        }
      }
    }
    
    // Category inquiries
    if (message.includes('category') || message.includes('subject') || message.includes('topics')) {
      const categories = [...new Set([
        ...books.flatMap(book => book.category || []),
        ...ebooks.flatMap(ebook => ebook.category)
      ])];
      
      return `We have books in these categories:\n${categories.slice(0, 15).map(cat => `• ${cat}`).join('\n')}\n${categories.length > 15 ? `... and ${categories.length - 15} more categories` : ''}`;
    }
    
    // Ebook inquiries
    if (message.includes('ebook') || message.includes('e-book') || message.includes('digital')) {
      return `We have ${ebooks.length} e-books available! These include subjects like Mathematics, Computer Science, Engineering, and more. You can access them through the E-books section.`;
    }
    
    // Library hours/location
    if (message.includes('hour') || message.includes('time') || message.includes('open') || message.includes('when')) {
      return 'Our library is open Monday-Friday: 8:00 AM - 8:00 PM, Saturday: 9:00 AM - 6:00 PM, Sunday: 12:00 PM - 6:00 PM.';
    }
    
    // How to borrow
    if (message.includes('borrow') || message.includes('checkout') || message.includes('how to')) {
      return 'To borrow a book, simply search for it in our catalog and click the "Borrow" button. You can keep physical books for 2 weeks. E-books can be accessed immediately online.';
    }
    
    // Count questions
    if (message.includes('how many') || message.includes('total')) {
      return `Our library has ${books.length} physical books and ${ebooks.length} e-books, totaling ${books.length + ebooks.length} items in our collection.`;
    }
    
    // If message contains any book-related keywords, try a general search
    if (message.includes('book') || message.includes('title') || message.includes('read')) {
      const words = message.split(' ').filter(word => 
        word.length > 2 && 
        !['book', 'books', 'title', 'read', 'the', 'and', 'can', 'you', 'help', 'me', 'please', 'want', 'need'].includes(word)
      );
      
      if (words.length > 0) {
        const { foundBooks, foundEbooks } = searchBooks(words);
        
        if (foundBooks.length > 0 || foundEbooks.length > 0) {
          let response = `Here's what I found related to your query:\n\n`;
          
          if (foundBooks.length > 0) {
            response += "📚 Physical Books:\n";
            foundBooks.slice(0, 3).forEach(book => {
              response += `• "${book.title}" by ${book.author}\n`;
            });
            if (foundBooks.length > 3) response += `... and ${foundBooks.length - 3} more\n`;
          }
          
          if (foundEbooks.length > 0) {
            response += "\n💻 E-books:\n";
            foundEbooks.slice(0, 3).forEach(ebook => {
              response += `• "${ebook.title}" by ${ebook.author}\n`;
            });
            if (foundEbooks.length > 3) response += `... and ${foundEbooks.length - 3} more\n`;
          }
          
          return response;
        }
      }
    }
    
    // Default helpful responses
    const defaultResponses = [
      'I can help you find books by title, author, or category. What specific book or author are you looking for?',
      'Try asking me about specific books, authors, or subjects you\'re interested in! For example: "Is there any book by [author name]?" or "Find books about [subject]"',
      'I can search our collection of physical books and e-books. You can ask about authors, titles, categories, or library information.',
      'Feel free to ask about any books in our collection! I can search by author names, book titles, or subjects.'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: generateResponse(inputMessage),
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-blue-50 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-blue-500" />
              <span className="font-medium text-blue-700">Library Assistant</span>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${message.isBot ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    {message.isBot ? <Bot className="h-3 w-3 text-blue-600" /> : <User className="h-3 w-3 text-gray-600" />}
                  </div>
                  <div
                    className={`px-3 py-2 rounded-lg text-sm whitespace-pre-line ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about books..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookChatbot;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, BookOpen, Bookmark, Home, Menu, Mic, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAssistant } from '@/context/AssistantContext';
import { useLibrary } from '@/context/LibraryContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAssistantActive, activateAssistant, deactivateAssistant, isListening } = useAssistant();
  const { borrowedBooks } = useLibrary();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAssistant = () => {
    if (isAssistantActive) {
      deactivateAssistant();
    } else {
      activateAssistant();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-library-DEFAULT text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <Link to="/" className="text-xl font-bold">LibraryAssist AI</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-library-accent transition">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/my-books" className="flex items-center space-x-1 hover:text-library-accent transition">
              <Bookmark className="h-5 w-5" />
              <span>My Books</span>
              {borrowedBooks.length > 0 && (
                <span className="bg-library-accent rounded-full px-2 py-0.5 text-xs ml-1">
                  {borrowedBooks.length}
                </span>
              )}
            </Link>
            <Link to="/search" className="flex items-center space-x-1 hover:text-library-accent transition">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </Link>
          </nav>

          {/* Assistant Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <Button
              onClick={toggleAssistant}
              variant={isAssistantActive ? "destructive" : "secondary"}
              size="sm"
              className={`rounded-full ${isAssistantActive && isListening ? 'animate-pulse-slow' : ''}`}
            >
              <Mic className="h-4 w-4 mr-2" />
              {isAssistantActive ? 'Stop' : 'Voice Assistant'}
            </Button>

            {/* Notifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Bell className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuItem>
                  <div className="flex flex-col">
                    <span className="font-medium">New Books Available!</span>
                    <span className="text-xs text-muted-foreground">5 new titles added today</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex flex-col">
                    <span className="font-medium">Book Due Soon</span>
                    <span className="text-xs text-muted-foreground">
                      Return "Engineering Physics" by May 25
                    </span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="md:hidden text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-3 pb-3">
            <Link 
              to="/" 
              className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/my-books" 
              className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <Bookmark className="h-5 w-5" />
              <span>My Books</span>
              {borrowedBooks.length > 0 && (
                <span className="bg-library-accent rounded-full px-2 py-0.5 text-xs ml-1">
                  {borrowedBooks.length}
                </span>
              )}
            </Link>
            <Link 
              to="/search" 
              className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-5 w-5" />
              <span>Search</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

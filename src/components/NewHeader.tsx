
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NewHeader: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const { user, signOut, loading } = useAuth();
  
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          {!isAuthPage && user && (
            <SidebarTrigger className="mr-4 text-gray-600">
              <Menu className="h-5 w-5" />
            </SidebarTrigger>
          )}
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-xl">
              <span className="text-blue-500">Library</span>
              <span className="text-black">AI</span>
            </span>
          </Link>
        </div>
        
        {/* Auth section */}
        {!isAuthPage && !loading && (
          <div className="flex items-center space-x-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {user.email}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">Log In</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600">Get Started</Button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default NewHeader;

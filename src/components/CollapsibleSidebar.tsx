
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Star, Bell, BookOpen, Monitor } from 'lucide-react';
import { useLibrary } from '@/context/LibraryContext';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar
} from "@/components/ui/sidebar";

const CollapsibleSidebar = () => {
  const location = useLocation();
  const { borrowedBooks } = useLibrary();
  const { state: sidebarState } = useSidebar();
  
  const isActive = (path: string) => location.pathname === path;
  const isCollapsed = sidebarState === 'collapsed';

  return (
    <>
      <Sidebar variant="sidebar" collapsible="icon" className="border-r border-gray-200 z-20 bg-white">
        <SidebarHeader className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
          {!isCollapsed && <h2 className="text-lg font-semibold text-gray-800">Menu</h2>}
        </SidebarHeader>
        
        <SidebarContent className="p-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                asChild 
                isActive={isActive('/')} 
                tooltip="Home"
                className={isActive('/') ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}
              >
                <Link to="/" className="flex items-center">
                  <Home className="h-5 w-5 mr-2" />
                  {!isCollapsed && <span>Home</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                asChild 
                isActive={isActive('/search')} 
                tooltip="Search"
                className={isActive('/search') ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}
              >
                <Link to="/search" className="flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  {!isCollapsed && <span>Search</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                asChild 
                isActive={isActive('/recommendations')} 
                tooltip="Recommendations"
                className={isActive('/recommendations') ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}
              >
                <Link to="/recommendations" className="flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  {!isCollapsed && <span>Recommendations</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                asChild 
                isActive={isActive('/notifications')} 
                tooltip="Notifications"
                className={isActive('/notifications') ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}
              >
                <Link to="/notifications" className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  {!isCollapsed && <span>Notifications</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                asChild 
                isActive={isActive('/my-books')} 
                tooltip="My Books"
                className={isActive('/my-books') ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}
              >
                <Link to="/my-books" className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  {!isCollapsed && <span>My Books</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                asChild 
                isActive={isActive('/ebooks')} 
                tooltip="E-books"
                className={isActive('/ebooks') ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}
              >
                <Link to="/ebooks" className="flex items-center">
                  <Monitor className="h-5 w-5 mr-2" />
                  {!isCollapsed && <span>E-books</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          
          {/* Borrowed Books Section */}
          {!isCollapsed && borrowedBooks.length > 0 && (
            <div className="mt-6 pl-2">
              <h3 className="uppercase text-xs font-semibold text-gray-500 tracking-wider mb-2">
                BORROWED BOOKS
              </h3>
              
              <div className="space-y-1">
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
              
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
                <div className="flex items-start gap-2">
                  <BookOpen className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-amber-800">Due Date Reminder</h4>
                    <p className="text-xs text-amber-700 mt-1">
                      Your next book is due in {calculateNextDueDate(borrowedBooks)} days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </SidebarContent>
      </Sidebar>
    </>
  );
};

// Helper function to calculate the next due date
const calculateNextDueDate = (books: any[]) => {
  if (books.length === 0) return 0;
  
  const today = new Date();
  let nextDue = Number.MAX_SAFE_INTEGER;
  
  books.forEach(book => {
    if (book.dueDate) {
      const dueDate = new Date(book.dueDate);
      const daysRemaining = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      if (daysRemaining > 0 && daysRemaining < nextDue) {
        nextDue = daysRemaining;
      }
    }
  });
  
  return nextDue === Number.MAX_SAFE_INTEGER ? 0 : nextDue;
};

export default CollapsibleSidebar;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";
import BookDetails from "./pages/BookDetails";
import MyBooks from "./pages/MyBooks";
import EbooksPage from "./pages/EbooksPage";
import NewHeader from "./components/NewHeader";
import { LibraryProvider } from "./context/LibraryContext";
import { AssistantProvider } from "./context/AssistantContext";
import { AuthProvider } from "./contexts/AuthContext";
import RecommendationsPage from "./pages/RecommendationsPage";
import NotificationsPage from "./pages/NotificationsPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";
import { useEffect } from "react";

// Define a type to make TypeScript happy with window.Capacitor
declare global {
  interface Window {
    Capacitor?: {
      isNativePlatform: () => boolean;
    };
  }
}

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize push notifications for mobile
    const initializePushNotifications = async () => {
      // Check if we're running in a Capacitor app
      if (window.Capacitor && window.Capacitor.isNativePlatform()) {
        try {
          // Import PushNotifications dynamically
          const { PushNotifications } = await import('@capacitor/push-notifications');
          
          // Request permission
          const permissionStatus = await PushNotifications.requestPermissions();
          
          if (permissionStatus.receive === 'granted') {
            // Register with FCM or APNS
            await PushNotifications.register();
            
            // Listen for push notifications
            PushNotifications.addListener('pushNotificationReceived', (notification) => {
              console.log('Push notification received:', notification);
            });
            
            PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
              console.log('Push notification action performed:', notification);
            });
          }
        } catch (error) {
          console.error('Error initializing push notifications:', error);
        }
      }
    };
    
    initializePushNotifications();

    // Schedule email notifications for due dates
    const scheduleEmailNotifications = () => {
      // This is a mock function - in a real application, 
      // this would be handled by a backend service
      console.log('Email notification system initialized');
    };

    scheduleEmailNotifications();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <LibraryProvider>
              <AssistantProvider>
                <Toaster />
                <Sonner />
                <Routes>
                  {/* Auth routes */}
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
                  
                  {/* Protected routes with layout */}
                  <Route element={<AppLayout />}>
                    <Route path="/" element={<Index />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/book/:id" element={<BookDetails />} />
                    <Route path="/my-books" element={<MyBooks />} />
                    <Route path="/ebooks" element={<EbooksPage />} />
                    <Route path="/recommendations" element={<RecommendationsPage />} />
                    <Route path="/notifications" element={<NotificationsPage />} />
                  </Route>
                  
                  {/* Catch-all route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AssistantProvider>
            </LibraryProvider>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

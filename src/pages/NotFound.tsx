
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookX, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-library-light flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-sm border">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-library-light mb-4">
            <BookX className="h-8 w-8 text-library-DEFAULT" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-library-DEFAULT">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
          <p className="text-muted-foreground mb-6">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Button onClick={() => navigate("/")} className="flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

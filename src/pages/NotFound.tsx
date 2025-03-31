
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 - Page Not Found | Noel Regis";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-terminal p-4">
      <div className="text-center max-w-md">
        <div className="font-pixel text-9xl mb-6 text-primary animate-flicker">404</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-6 font-montserrat">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <Link to="/">
          <Button className="pixel-button bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
            <Home size={16} />
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

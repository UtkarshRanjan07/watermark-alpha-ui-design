
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-20">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold mb-4">
          <span className="gold-gradient">404</span>
        </h1>
        <p className="text-xl text-zinc-300 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild className="gold-button rounded-md">
          <Link to="/">
            <ArrowLeft size={16} className="mr-2" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

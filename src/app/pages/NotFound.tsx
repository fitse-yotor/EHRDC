import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home, Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-8xl mb-4 text-primary">404</div>
        <h1 className="text-4xl mb-4">Page Not Found</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

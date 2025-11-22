import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  useDocumentMeta({
    title: "Page Not Found | Renovo Cape",
    description: "The page you're looking for doesn't exist. Return to Renovo Cape homepage for restoration and re-enameling services.",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans antialiased">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Page Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 bg-muted text-foreground hover:bg-muted/80 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
            <div className="mt-12 pt-12 border-t">
              <h3 className="font-semibold text-lg mb-4">Looking for something specific?</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/#services" className="text-sm text-primary hover:underline">
                  Services
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="/#gallery" className="text-sm text-primary hover:underline">
                  Gallery
                </a>
                <span className="text-muted-foreground">•</span>
                <Link to="/about-us" className="text-sm text-primary hover:underline">
                  About Us
                </Link>
                <span className="text-muted-foreground">•</span>
                <a href="/#contact" className="text-sm text-primary hover:underline">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;


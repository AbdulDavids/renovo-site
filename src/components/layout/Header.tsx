import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigation = [
  { name: "Services", href: "/#services" },
  { name: "Gallery", href: "/#gallery" },
  { name: "About Us", href: "/about-us" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const whatsAppUrl = "https://wa.me/27611990191?text=Hi%20Renovo%20Cape%2C%20I%27d%20like%20a%20free%20quote%20for%20restoration%20work.";

  const handleNavClick = (href: string) => {
    // If we're on a different page and clicking a hash link, navigate to home first
    if (href.startsWith("/#") && location.pathname !== "/") {
      window.location.href = href;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/renovo/logo-background-removed.png"
            alt="Renovo Cape Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold">Renovo Cape</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            item.href.startsWith("/#") ? (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            )
          ))}
          <a 
            aria-label="Chat on WhatsApp" 
            href={whatsAppUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105"
          >
            <img 
              alt="Chat on WhatsApp" 
              src="/renovo/ChatOnWhatsAppButton/WhatsAppButtonGreenMedium.svg" 
              className="h-9 w-auto"
            />
          </a>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <div className="flex items-center gap-2 px-6 py-4 border-b">
                <img
                  src="/renovo/logo-background-removed.png"
                  alt="Renovo Cape Logo"
                  className="h-8 w-auto"
                />
                <SheetTitle className="text-lg font-bold">Renovo Cape</SheetTitle>
              </div>
              <nav className="flex flex-col px-6 py-4">
                {navigation.map((item) => (
                  item.href.startsWith("/#") ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className="py-3 text-base font-medium border-b border-border/50 transition-colors hover:text-primary"
                      onClick={() => {
                        handleNavClick(item.href);
                        setIsOpen(false);
                      }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="py-3 text-base font-medium border-b border-border/50 transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <a
                  aria-label="Chat on WhatsApp"
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    alt="Chat on WhatsApp"
                    src="/renovo/ChatOnWhatsAppButton/WhatsAppButtonGreenMedium.svg"
                    className="h-10 w-auto"
                  />
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;


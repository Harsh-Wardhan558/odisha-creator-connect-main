import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              OdishaInfluence
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#influencers" className="text-foreground hover:text-primary transition-colors font-medium">
              Influencers
            </a>
            <a href="#brands" className="text-foreground hover:text-primary transition-colors font-medium">
              Brands
            </a>
            <a href="#success-stories" className="text-foreground hover:text-primary transition-colors font-medium">
              Success Stories
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="gradient">Join Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#influencers" className="text-foreground hover:text-primary transition-colors font-medium">
                Influencers
              </a>
              <a href="#brands" className="text-foreground hover:text-primary transition-colors font-medium">
                Brands
              </a>
              <a href="#success-stories" className="text-foreground hover:text-primary transition-colors font-medium">
                Success Stories
              </a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">
                Blog
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost">Sign In</Button>
                <Button variant="gradient">Join Now</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
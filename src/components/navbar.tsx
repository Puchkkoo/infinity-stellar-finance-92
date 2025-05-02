
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const products = [
    { name: "Flamingo", description: "Modern brokerage firm", path: "/flamingo" },
    { name: "Synapse", description: "Productivity app", path: "/synapse" },
    { name: "Sponge", description: "Community app", path: "/sponge" },
    { name: "The Indian Street", description: "News and articles", path: "/indian-street" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-infinity-600 to-infinity-800">
              Infinity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="nav-link">
              About
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center nav-link px-0">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {products.map((product) => (
                  <DropdownMenuItem key={product.path} asChild>
                    <Link to={product.path} className="flex flex-col">
                      <span className="font-medium">{product.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {product.description}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/markets" className="nav-link">
              Markets
            </Link>

            <Link to="/contact" className="nav-link">
              Contact
            </Link>

            <ThemeToggle />

            <Button asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t border-border bg-background animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/about" className="nav-link py-2" onClick={toggleMenu}>
              About
            </Link>
            
            <div className="space-y-3">
              <div className="nav-link py-2">Products</div>
              <div className="pl-4 space-y-3">
                {products.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block nav-link py-1"
                    onClick={toggleMenu}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/markets" className="nav-link py-2" onClick={toggleMenu}>
              Markets
            </Link>

            <Link to="/contact" className="nav-link py-2" onClick={toggleMenu}>
              Contact
            </Link>
            
            <Button asChild>
              <Link to="/login" onClick={toggleMenu}>Sign In</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

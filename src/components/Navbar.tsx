
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 md:py-6">
      <nav 
        className={cn(
          'max-w-6xl mx-auto transition-all duration-300 py-2 px-4 sm:px-6',
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md' 
            : 'bg-white/60 backdrop-blur-sm',
          className
        )}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-restaurant-blue-dark">
              GastroVision<span className="text-restaurant-teal">AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#vision">Computer Vision</NavLink>
            <NavLink href="#prediction">AI Prediction</NavLink>
            <NavLink href="#menu">Menu Optimization</NavLink>
            <NavLink href="#waste">Waste Analysis</NavLink>
            <div className="ml-2">
              <Button className="bg-restaurant-teal hover:bg-restaurant-blue-dark text-white transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-restaurant-blue-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full mt-2 left-4 right-4 bg-white/95 backdrop-blur-md shadow-md z-40 animate-fade-in">
            <div className="px-6 py-4 flex flex-col space-y-3">
              <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>Features</MobileNavLink>
              <MobileNavLink href="#vision" onClick={() => setIsMenuOpen(false)}>Computer Vision</MobileNavLink>
              <MobileNavLink href="#prediction" onClick={() => setIsMenuOpen(false)}>AI Prediction</MobileNavLink>
              <MobileNavLink href="#menu" onClick={() => setIsMenuOpen(false)}>Menu Optimization</MobileNavLink>
              <MobileNavLink href="#waste" onClick={() => setIsMenuOpen(false)}>Waste Analysis</MobileNavLink>
              <Button className="bg-restaurant-teal hover:bg-restaurant-blue-dark text-white w-full shadow-md transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-restaurant-teal px-3 py-2 hover:bg-gray-100/50 transition-colors duration-300 font-medium"
  >
    {children}
  </a>
);

const MobileNavLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({
  href,
  onClick,
  children,
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-700 hover:text-restaurant-teal transition-colors duration-300 py-2 block font-medium"
  >
    {children}
  </a>
);

export default Navbar;

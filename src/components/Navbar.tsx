
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={cn('w-full bg-white py-4 px-6 shadow-sm sticky top-0 z-50', className)}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-restaurant-blue-dark">
            GastroVision<span className="text-restaurant-teal">AI</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#vision">Computer Vision</NavLink>
          <NavLink href="#prediction">AI Prediction</NavLink>
          <NavLink href="#menu">Menu Optimization</NavLink>
          <NavLink href="#waste">Waste Analysis</NavLink>
        </div>

        <div className="hidden md:block">
          <Button className="bg-restaurant-teal hover:bg-restaurant-blue-dark text-white">
            Get Started
          </Button>
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-40 animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>Features</MobileNavLink>
            <MobileNavLink href="#vision" onClick={() => setIsMenuOpen(false)}>Computer Vision</MobileNavLink>
            <MobileNavLink href="#prediction" onClick={() => setIsMenuOpen(false)}>AI Prediction</MobileNavLink>
            <MobileNavLink href="#menu" onClick={() => setIsMenuOpen(false)}>Menu Optimization</MobileNavLink>
            <MobileNavLink href="#waste" onClick={() => setIsMenuOpen(false)}>Waste Analysis</MobileNavLink>
            <Button className="bg-restaurant-teal hover:bg-restaurant-blue-dark text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-restaurant-teal transition-colors duration-300 font-medium"
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

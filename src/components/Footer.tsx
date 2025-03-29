
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-restaurant-blue-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              GastroVision<span className="text-restaurant-teal">AI</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Revolutionizing restaurant management with AI and computer vision technology.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Features</h4>
            <ul className="space-y-3">
              <FooterLink href="#vision">Computer Vision</FooterLink>
              <FooterLink href="#prediction">AI Prediction</FooterLink>
              <FooterLink href="#menu">Menu Optimization</FooterLink>
              <FooterLink href="#waste">Waste Analysis</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-restaurant-teal" />
                <span>info@gastrovisionai.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-restaurant-teal" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GastroVisionAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return (
    <a 
      href="#" 
      className="bg-gray-700 hover:bg-restaurant-teal transition-colors duration-300 w-8 h-8 rounded-full flex items-center justify-center"
    >
      {icon}
    </a>
  );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-300 hover:text-restaurant-teal transition-colors duration-300"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;

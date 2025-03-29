
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CameraIcon, BarChart2, ChefHat, PieChart } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-restaurant-blue-dark via-restaurant-teal/90 to-restaurant-blue-dark text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Smart Restaurant Management
              <span className="text-restaurant-gold"> Powered by AI</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
              Revolutionize your restaurant operations with computer vision and AI. Reduce waste, optimize inventory, and maximize profits with our intelligent platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-restaurant-gold hover:bg-amber-600 text-white px-6 py-6 rounded-md text-lg">
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-6 rounded-md text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <FeatureCard 
                icon={<CameraIcon className="h-8 w-8 text-restaurant-teal" />}
                title="Computer Vision" 
                description="Real-time inventory tracking and monitoring"
              />
              <FeatureCard 
                icon={<BarChart2 className="h-8 w-8 text-restaurant-teal" />}
                title="Demand Prediction" 
                description="AI-powered sales forecasting and inventory optimization"
              />
              <FeatureCard 
                icon={<ChefHat className="h-8 w-8 text-restaurant-teal" />}
                title="Menu Optimization" 
                description="Data-driven recipe recommendations"
              />
              <FeatureCard 
                icon={<PieChart className="h-8 w-8 text-restaurant-teal" />}
                title="Waste Analysis" 
                description="Detailed waste reports and improvement strategies"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg hover:bg-white/20 transition-all duration-300 animate-fade-in">
      <div className="bg-white/90 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-100">{description}</p>
    </div>
  );
};

export default HeroSection;

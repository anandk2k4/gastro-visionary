
import React from 'react';
import { Camera, Eye, AlertTriangle, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  imageUrl: string;
  reverse?: boolean;
  bgColor?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  features,
  imageUrl,
  reverse = false,
  bgColor = 'bg-white',
}) => {
  return (
    <section id={id} className={cn('py-20', bgColor)}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-restaurant-teal font-semibold text-lg mb-2">{subtitle}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-restaurant-blue-dark mb-6">{title}</h3>
          <p className="max-w-2xl mx-auto text-gray-600">{description}</p>
        </div>

        <div className={cn('flex flex-col md:flex-row items-center gap-10', reverse && 'md:flex-row-reverse')}>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl bg-white p-2">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-auto rounded object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-restaurant-teal/10 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-restaurant-blue-dark">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ComputerVisionSection: React.FC = () => {
  const features = [
    {
      icon: <Camera className="h-6 w-6 text-restaurant-teal" />,
      title: "Visual Inventory Tracking",
      description: "Cameras automatically identify and log inventory items, eliminating manual counting and reducing human error."
    },
    {
      icon: <Eye className="h-6 w-6 text-restaurant-teal" />,
      title: "Real-Time Stock Detection",
      description: "Continuous monitoring alerts you when stock levels are running low, preventing shortages during peak hours."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-restaurant-teal" />,
      title: "Food Spoilage Detection",
      description: "Advanced algorithms detect early signs of food spoilage, helping you reduce waste and maintain quality standards."
    },
    {
      icon: <Layers className="h-6 w-6 text-restaurant-teal" />,
      title: "Automated Inventory Reports",
      description: "Generate detailed inventory reports automatically based on visual data, saving hours of manual work."
    }
  ];

  return (
    <FeatureSection
      id="vision"
      title="Computer Vision for Smart Inventory"
      subtitle="VISUAL INTELLIGENCE"
      description="Our computer vision technology transforms how restaurants track and manage inventory, reducing labor costs and improving accuracy."
      features={features}
      imageUrl="https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE4fHxmb29kJTIwaW52ZW50b3J5fGVufDB8fHx8MTYyMzg0NDU1Mg&ixlib=rb-1.2.1&q=80&w=2000"
      bgColor="bg-restaurant-gray-light"
    />
  );
};

export default FeatureSection;

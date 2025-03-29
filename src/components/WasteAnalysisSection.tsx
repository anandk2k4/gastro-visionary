
import React from 'react';
import { PieChart, Trash2, MapPin, TrendingUp } from 'lucide-react';
import FeatureSection from './FeatureSection';

const WasteAnalysisSection: React.FC = () => {
  const features = [
    {
      icon: <Trash2 className="h-6 w-6 text-restaurant-teal" />,
      title: "Food Waste Classification",
      description: "Automatically categorize waste by type, enabling targeted reduction strategies and better recycling practices."
    },
    {
      icon: <MapPin className="h-6 w-6 text-restaurant-teal" />,
      title: "Waste Heatmap",
      description: "Visualize waste patterns throughout your kitchen to identify problem areas and improvement opportunities."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-restaurant-teal" />,
      title: "Loss-to-Profit Dashboard",
      description: "Convert waste data into financial metrics that show the direct impact on your bottom line."
    },
    {
      icon: <PieChart className="h-6 w-6 text-restaurant-teal" />,
      title: "Sustainability Reporting",
      description: "Generate sustainability reports to share your progress with staff and customers, building your eco-friendly brand."
    }
  ];

  return (
    <FeatureSection
      id="waste"
      title="Vision-Powered Waste Analysis & Reporting"
      subtitle="SUSTAINABILITY METRICS"
      description="Gain unprecedented insights into your restaurant's waste patterns with our advanced visual analysis tools."
      features={features}
      imageUrl="https://images.unsplash.com/photo-1532696949360-61a4724de9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
      reverse={true}
    />
  );
};

export default WasteAnalysisSection;

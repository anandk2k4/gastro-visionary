
import React from 'react';
import { ChefHat, DollarSign, Cpu, Utensils } from 'lucide-react';
import FeatureSection from './FeatureSection';

const MenuOptimizationSection: React.FC = () => {
  const features = [
    {
      icon: <ChefHat className="h-6 w-6 text-restaurant-teal" />,
      title: "AI-Driven Recipe Recommendations",
      description: "Get creative recipe suggestions based on your current inventory, reducing waste and maximizing ingredient usage.",
      slug: "ai-recipe-recommendations"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-restaurant-teal" />,
      title: "Cost Optimization",
      description: "Analyze ingredient costs and menu pricing to improve profit margins while maintaining customer satisfaction.",
      slug: "cost-optimization"
    },
    {
      icon: <Cpu className="h-6 w-6 text-restaurant-teal" />,
      title: "Custom Dish Creation",
      description: "Use AI to develop unique dishes that set your restaurant apart and keep customers coming back for more.",
      slug: "custom-dish-creation"
    },
    {
      icon: <Utensils className="h-6 w-6 text-restaurant-teal" />,
      title: "Seasonal Menu Planning",
      description: "Automatically generate seasonal menu options based on ingredient availability, cost, and customer preferences.",
      slug: "seasonal-menu-planning"
    }
  ];

  return (
    <FeatureSection
      id="menu"
      title="Intelligent Menu Optimization"
      subtitle="CULINARY INNOVATION"
      description="Transform your menu with data-driven insights to increase profitability and enhance customer satisfaction."
      features={features}
      imageUrl="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
      bgColor="bg-restaurant-gray-light"
    />
  );
};

export default MenuOptimizationSection;

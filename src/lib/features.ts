
import React from 'react';
import { 
  Camera, Eye, AlertTriangle, Layers, 
  TrendingUp, ArrowDownCircle, RefreshCw, BarChart2,
  ChefHat, DollarSign, Cpu, Utensils,
  PieChart, Trash2, MapPin
} from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  category: 'vision' | 'prediction' | 'menu' | 'waste';
  imageUrl?: string;
}

export const getAllFeatures = (): Feature[] => {
  return [
    // Computer Vision Features
    {
      icon: <Camera className="h-6 w-6 text-restaurant-teal" />,
      title: "Visual Inventory Tracking",
      description: "Cameras automatically identify and log inventory items, eliminating manual counting and reducing human error.",
      slug: "visual-inventory-tracking",
      category: 'vision',
      imageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE4fHxmb29kJTIwaW52ZW50b3J5fGVufDB8fHx8MTYyMzg0NDU1Mg&ixlib=rb-1.2.1&q=80&w=2000"
    },
    {
      icon: <Eye className="h-6 w-6 text-restaurant-teal" />,
      title: "Real-Time Stock Detection",
      description: "Continuous monitoring alerts you when stock levels are running low, preventing shortages during peak hours.",
      slug: "real-time-stock-detection",
      category: 'vision',
      imageUrl: "https://images.unsplash.com/photo-1580913428023-02c695666d61?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-restaurant-teal" />,
      title: "Food Spoilage Detection",
      description: "Advanced algorithms detect early signs of food spoilage, helping you reduce waste and maintain quality standards.",
      slug: "food-spoilage-detection",
      category: 'vision',
      imageUrl: "https://images.unsplash.com/photo-1621062029248-e3c9403c6792?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      icon: <Layers className="h-6 w-6 text-restaurant-teal" />,
      title: "Automated Inventory Reports",
      description: "Generate detailed inventory reports automatically based on visual data, saving hours of manual work.",
      slug: "automated-inventory-reports",
      category: 'vision',
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    
    // AI Prediction Features
    {
      icon: <TrendingUp className="h-6 w-6 text-restaurant-teal" />,
      title: "Sales Forecasting",
      description: "Predict future sales with AI that analyzes historical data, seasonal trends, local events, and weather patterns.",
      slug: "sales-forecasting",
      category: 'prediction',
      imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      icon: <ArrowDownCircle className="h-6 w-6 text-restaurant-teal" />,
      title: "Waste Prediction",
      description: "Identify potential food waste before it happens by analyzing preparation patterns, shelf life, and sales velocities.",
      slug: "waste-prediction",
      category: 'prediction',
      imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-restaurant-teal" />,
      title: "Dynamic Inventory Replenishment",
      description: "Automatically generate optimal order quantities based on predicted demand and current inventory levels.",
      slug: "dynamic-inventory-replenishment",
      category: 'prediction',
      imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-restaurant-teal" />,
      title: "Demand Pattern Recognition",
      description: "Identify patterns in customer ordering behavior to optimize staffing and preparation schedules.",
      slug: "demand-pattern-recognition",
      category: 'prediction',
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    
    // Menu Optimization Features
    {
      icon: <ChefHat className="h-6 w-6 text-restaurant-teal" />,
      title: "AI-Driven Recipe Recommendations",
      description: "Get creative recipe suggestions based on your current inventory, reducing waste and maximizing ingredient usage.",
      slug: "ai-recipe-recommendations",
      category: 'menu',
      imageUrl: "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-restaurant-teal" />,
      title: "Cost Optimization",
      description: "Analyze ingredient costs and menu pricing to improve profit margins while maintaining customer satisfaction.",
      slug: "cost-optimization",
      category: 'menu',
      imageUrl: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      icon: <Cpu className="h-6 w-6 text-restaurant-teal" />,
      title: "Custom Dish Creation",
      description: "Use AI to develop unique dishes that set your restaurant apart and keep customers coming back for more.",
      slug: "custom-dish-creation",
      category: 'menu',
      imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      icon: <Utensils className="h-6 w-6 text-restaurant-teal" />,
      title: "Seasonal Menu Planning",
      description: "Automatically generate seasonal menu options based on ingredient availability, cost, and customer preferences.",
      slug: "seasonal-menu-planning",
      category: 'menu',
      imageUrl: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    
    // Waste Analysis Features
    {
      icon: <Trash2 className="h-6 w-6 text-restaurant-teal" />,
      title: "Food Waste Classification",
      description: "Automatically categorize waste by type, enabling targeted reduction strategies and better recycling practices.",
      slug: "food-waste-classification",
      category: 'waste',
      imageUrl: "https://images.unsplash.com/photo-1532696949360-61a4724de9db?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      icon: <MapPin className="h-6 w-6 text-restaurant-teal" />,
      title: "Waste Heatmap",
      description: "Visualize waste patterns throughout your kitchen to identify problem areas and improvement opportunities.",
      slug: "waste-heatmap",
      category: 'waste',
      imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-restaurant-teal" />,
      title: "Loss-to-Profit Dashboard",
      description: "Convert waste data into financial metrics that show the direct impact on your bottom line.",
      slug: "loss-to-profit-dashboard",
      category: 'waste',
      imageUrl: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      icon: <PieChart className="h-6 w-6 text-restaurant-teal" />,
      title: "Sustainability Reporting",
      description: "Generate sustainability reports to share your progress with staff and customers, building your eco-friendly brand.",
      slug: "sustainability-reporting",
      category: 'waste',
      imageUrl: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
  ];
};

export const getFeaturesByCategory = (category: 'vision' | 'prediction' | 'menu' | 'waste'): Feature[] => {
  return getAllFeatures().filter(feature => feature.category === category);
};

export const getFeatureBySlug = (slug: string): Feature | undefined => {
  return getAllFeatures().find(feature => feature.slug === slug);
};

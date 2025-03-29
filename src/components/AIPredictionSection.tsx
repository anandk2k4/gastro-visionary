
import React from 'react';
import { BarChart2, TrendingUp, ArrowDownCircle, RefreshCw } from 'lucide-react';
import FeatureSection from './FeatureSection';

const AIPredictionSection: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="h-6 w-6 text-restaurant-teal" />,
      title: "Sales Forecasting",
      description: "Predict future sales with AI that analyzes historical data, seasonal trends, local events, and weather patterns.",
      slug: "sales-forecasting"
    },
    {
      icon: <ArrowDownCircle className="h-6 w-6 text-restaurant-teal" />,
      title: "Waste Prediction",
      description: "Identify potential food waste before it happens by analyzing preparation patterns, shelf life, and sales velocities.",
      slug: "waste-prediction"
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-restaurant-teal" />,
      title: "Dynamic Inventory Replenishment",
      description: "Automatically generate optimal order quantities based on predicted demand and current inventory levels.",
      slug: "dynamic-inventory-replenishment"
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-restaurant-teal" />,
      title: "Demand Pattern Recognition",
      description: "Identify patterns in customer ordering behavior to optimize staffing and preparation schedules.",
      slug: "demand-pattern-recognition"
    }
  ];

  return (
    <FeatureSection
      id="prediction"
      title="AI-Powered Demand & Waste Prediction"
      subtitle="PREDICTIVE ANALYTICS"
      description="Our advanced machine learning algorithms analyze your historical data to predict future demand and minimize waste."
      features={features}
      imageUrl="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
      reverse={true}
    />
  );
};

export default AIPredictionSection;


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getAllFeatures } from '@/lib/features';

const FeatureDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const features = getAllFeatures();
  const feature = features.find(f => f.slug === slug);

  if (!feature) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-restaurant-blue-dark mb-6">Feature Not Found</h1>
            <p className="mb-8">The feature you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-restaurant-gray-light py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-restaurant-teal/10 p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-restaurant-blue-dark mb-6">{feature.title}</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">{feature.description}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-restaurant-blue-dark mb-4">How It Works</h2>
              <p className="text-gray-600 mb-6">
                Our {feature.title} technology uses advanced AI algorithms to analyze data from your restaurant's operations.
                This provides real-time insights and actionable recommendations to optimize your business.
              </p>
              <p className="text-gray-600">
                By implementing {feature.title}, restaurants typically see a 15-30% improvement in operational efficiency 
                and a significant reduction in costs associated with inventory management and food waste.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={feature.imageUrl || "https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE4fHxmb29kJTIwaW52ZW50b3J5fGVufDB8fHx8MTYyMzg0NDU1Mg&ixlib=rb-1.2.1&q=80&w=2000"} 
                alt={feature.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-restaurant-blue-dark mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl mb-3 text-restaurant-teal">Increased Efficiency</h3>
                <p className="text-gray-600">
                  Automate manual processes and reduce the time spent on inventory management by up to 75%.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl mb-3 text-restaurant-teal">Cost Reduction</h3>
                <p className="text-gray-600">
                  Minimize food waste and optimize purchasing to reduce overall food costs by 15-25%.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl mb-3 text-restaurant-teal">Better Decision Making</h3>
                <p className="text-gray-600">
                  Data-driven insights enable smarter business decisions backed by real operational data.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-between">
            <Button asChild variant="outline">
              <Link to="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <Button asChild className="bg-restaurant-teal hover:bg-restaurant-blue-dark">
              <Link to="/contact" className="flex items-center">
                Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeatureDetail;

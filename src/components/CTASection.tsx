
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-restaurant-blue-dark to-restaurant-teal text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Restaurant Operations?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join hundreds of restaurants that have reduced waste by up to 30% and increased profits by 20% with our AI-powered platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-restaurant-gold hover:bg-amber-600 text-white px-8 py-6 text-lg">
            Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

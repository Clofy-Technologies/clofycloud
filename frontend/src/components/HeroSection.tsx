import React from 'react';
import { Cloud, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import finalCloudHeroBg from '/final_cloud_hero_bg.svg';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
id="home"
className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-48 overflow-hidden bg-cover bg-center"
style={{ backgroundImage: `url(${finalCloudHeroBg})` }}
>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mt-[-2rem]">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-600 text-sm font-medium mb-6 animate-fade-in">
            <Cloud className="w-4 h-4" />
            <span>AI-Powered Cloud Solutions</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in animation-delay-200">
            Unlock Your Cloud Potential with 
            <span className="text-blue-600"> AI-Powered Solutions</span>
            <Cloud className="inline-block ml-4 text-blue-500" />
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 animate-fade-in animation-delay-400">
            Instantly get tailored cloud strategies, credits, and optimizations—no guesswork, just results for startups, SMEs, and enterprises alike.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-600">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-200"
              onClick={() => navigate('/signup')}
            >
              Start Free with 10 Credits
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg hover:scale-105 transition-all duration-200"
              onClick={() => navigate('/solution-generator')}
            >
              Explore Solution Generator
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    
      
    </section>
  );
};

export default HeroSection;

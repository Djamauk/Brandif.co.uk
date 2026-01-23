import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, Mic, Settings, TrendingUp } from "lucide-react";

const AIDifferentiationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
          AI That Works for Your Business — Not Just Buzzwords.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 animate-fade-in-up delay-200">
          We go beyond the hype to deliver practical, impactful AI solutions. From automating routine tasks with voice agents and chatbots to providing intelligent insights, our AI tools are designed to integrate seamlessly and drive tangible business value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center animate-fade-in-up delay-300">
            <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Discover</h3>
            <p className="text-gray-400 text-sm">Identify opportunities for AI integration.</p>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up delay-400">
            <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <p className="text-gray-400 text-sm">Craft tailored AI solutions and user flows.</p>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up delay-500">
            <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Build</h3>
            <p className="text-gray-400 text-sm">Develop, train, and integrate AI agents.</p>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up delay-600">
            <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">4</div>
            <h3 className="text-xl font-semibold mb-2">Optimise</h3>
            <p className="text-gray-400 text-sm">Monitor performance and continuously refine.</p>
          </div>
        </div>

        <Button asChild size="lg" className="animate-fade-in-up delay-700">
          <Link to="/ai-solutions">Explore Our AI Solutions</Link>
        </Button>
      </div>
    </section>
  );
};

export default AIDifferentiationSection;
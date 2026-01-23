import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic, Headset, Zap, CheckCircle2 } from "lucide-react";

const AIVoiceAgents = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up text-white">
            AI Voice Agents
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200 text-white">
            AI-Powered Experiences That Drive Results. Automate customer interactions and enhance service with intelligent, natural-sounding voice agents.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-gray-200 transition-colors animate-fade-in-up delay-400">
            <a href="https://example.com/booking" target="_blank" rel="noopener noreferrer">Book a Discovery Call</a>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">
            Problems We Solve
          </h2>
          <ul className="space-y-4 text-lg text-gray-700 animate-fade-in-up delay-100">
            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> High call volumes overwhelming human agents.</li>
            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> Inconsistent customer service quality.</li>
            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> Limited 24/7 support capabilities.</li>
            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> Costly and time-consuming manual call handling.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">
            Our Solution: Intelligent AI Voice Agents
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center animate-fade-in-up delay-100">
            We develop custom AI voice agents that seamlessly integrate with your systems, providing instant, accurate, and personalised support to your customers around the clock.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefits & Outcomes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> 24/7 availability for uninterrupted customer support.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Reduced staff costs and increased operational efficiency.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Improved customer satisfaction with instant support.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Scalable support for peak times and business growth.</li>
              </ul>
            </div>
            <div className="animate-fade-in-up delay-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Use Cases</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><Mic className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Lead qualification and outbound calls.</li>
                <li className="flex items-start"><Headset className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Appointment scheduling and reminders.</li>
                <li className="flex items-start"><Zap className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Automated customer service hotlines.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Order status updates and FAQs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
            Our AI Voice Agent Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center animate-fade-in-up delay-100">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover</h3>
              <p className="text-gray-700 text-sm">Identify automation opportunities and define agent scope.</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up delay-200">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-700 text-sm">Craft conversation flows and agent personality.</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up delay-300">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Build</h3>
              <p className="text-gray-700 text-sm">Develop, train, and integrate the AI voice agent.</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up delay-400">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimise</h3>
              <p className="text-gray-700 text-sm">Monitor performance and continuously refine for accuracy.</p>
            </div>
          </div>
          <Button asChild size="lg" className="mt-12 animate-fade-in-up delay-500">
            <Link to="/contact">Automate Your Calls</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceAgents;
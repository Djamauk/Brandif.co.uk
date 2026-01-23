import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Settings, CheckCircle2 } from "lucide-react";

const AIChatbots = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-blue-800 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            AI Chatbots
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Your Digital Partner for Smarter Growth. Deploy intelligent chatbots to provide instant support, generate leads, and streamline operations 24/7.
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
            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> Overwhelmed customer support teams.</li>
            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> Missed lead opportunities outside business hours.</li>
            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> Inefficient handling of repetitive customer queries.</li>
            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> Lack of personalised engagement on your website.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">
            Our Solution: Custom AI Chatbots
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center animate-fade-in-up delay-100">
            We design and deploy bespoke AI chatbots that provide instant, accurate, and engaging interactions, improving customer experience and driving business outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefits & Outcomes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> More leads and higher qualification rates.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Better engagement and improved customer satisfaction.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Reduced workload for human support teams.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> 24/7 instant customer support and query resolution.</li>
              </ul>
            </div>
            <div className="animate-fade-in-up delay-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Use Cases</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><MessageCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Website sales assistant and product recommendations.</li>
                <li className="flex items-start"><Bot className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Support automation and FAQ handling.</li>
                <li className="flex items-start"><Settings className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Lead capture and qualification forms.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Internal support for employees.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
            Our AI Chatbot Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center animate-fade-in-up delay-100">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover</h3>
              <p className="text-gray-700 text-sm">Analyse user needs and define chatbot objectives.</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up delay-200">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-700 text-sm">Map conversation flows and user journeys.</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up delay-300">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Build</h3>
              <p className="text-gray-700 text-sm">Develop, train, and integrate the chatbot into your platforms.</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up delay-400">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimise</h3>
              <p className="text-gray-700 text-sm">Monitor interactions and continuously improve performance.</p>
            </div>
          </div>
          <Button asChild size="lg" className="mt-12 animate-fade-in-up delay-500">
            <Link to="/contact">Deploy Your Chatbot</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIChatbots;
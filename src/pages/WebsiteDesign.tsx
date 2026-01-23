import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const WebsiteDesign = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up text-white">
            Website Design & Development
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200 text-white">
            Designed to Convert. Built to Scale. We craft high-performance websites that are not just visually stunning, but engineered for measurable business growth.
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
            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> Outdated websites that fail to engage visitors.</li>
            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> Poor conversion rates due to non-optimised user experiences.</li>
            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> Lack of mobile responsiveness, alienating a large audience.</li>
            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> Websites that are difficult to update or scale with business growth.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">
            Our Solution: High-Performance Web Development
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center animate-fade-in-up delay-100">
            We build bespoke websites that are fast, secure, SEO-friendly, and designed with your business objectives at their core. From initial concept to launch and beyond, we ensure your digital storefront is a powerful asset.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefits & Outcomes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Faster load times and improved user experience.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Higher conversion rates and increased lead generation.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Enhanced brand credibility and premium perception.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Scalable architecture for future growth.</li>
              </ul>
            </div>
            <div className="animate-fade-in-up delay-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Use Cases</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> E-commerce platforms for online sales.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Lead generation websites for service businesses.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Corporate sites for brand presence and information.</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> Portfolio sites for creatives and agencies.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
            Our Web Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center animate-fade-in-up delay-100">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover</h3>
              <p className="text-gray-700 text-sm">Understanding your vision, goals, and audience.</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up delay-200">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-700 text-sm">Crafting intuitive UX and stunning UI mockups.</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up delay-300">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Build</h3>
              <p className="text-gray-700 text-sm">Developing a robust, responsive, and scalable website.</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up delay-400">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimise</h3>
              <p className="text-gray-700 text-sm">Testing, launching, and continuous performance tuning.</p>
            </div>
          </div>
          <Button asChild size="lg" className="mt-12 animate-fade-in-up delay-500">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesign;
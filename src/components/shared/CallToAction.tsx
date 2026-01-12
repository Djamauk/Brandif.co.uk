import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-blue-800 text-white text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Ready to transform your brand's future?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Let's discuss how our tailored strategies can drive your growth and achieve your ambitious goals.
        </p>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-gray-200 transition-colors animate-fade-in-up delay-400">
          <a href="https://example.com/booking" target="_blank" rel="noopener noreferrer">Book Your Free Consultation Today</a>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
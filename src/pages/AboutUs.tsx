import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            About Brandif Agency
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            We are a UK-based agency dedicated to crafting high-performance websites and intelligent AI solutions that drive measurable growth for ambitious businesses.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in-up delay-100">
            At Brandif Agency, we believe in the power of intelligent design and strategic innovation. Our vision is to empower businesses to not just compete, but to lead in the digital age by leveraging cutting-edge web development and transformative AI technologies.
          </p>
          <p className="text-lg text-gray-700 mb-12 animate-fade-in-up delay-200">
            We combine deep industry expertise with a relentless focus on results, ensuring every project delivers tangible value and a significant return on investment.
          </p>
          <Button asChild size="lg" className="animate-fade-in-up delay-300">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
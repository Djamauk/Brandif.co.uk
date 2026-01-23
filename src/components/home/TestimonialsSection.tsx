import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Our brand's online presence has skyrocketed since partnering with Brandif Agency. Their strategic approach and creative execution are unparalleled!",
    author: "Sarah L., Tech Startup CEO",
  },
  {
    quote: "The team at Brandif Agency truly understands our vision. They delivered an ROI that exceeded all our expectations. Highly recommend!",
    author: "Mark T., E-commerce Founder",
  },
  {
    quote: "Exceptional service and brilliant results. Brandif Agency transformed our marketing efforts and helped us reach new audiences.",
    author: "Jessica R., Retail Brand Manager",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
          Trusted by brands that aim higher.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          We partner with ambitious brands, turning their challenges into triumphs and their goals into achievements.
        </p>
        <div className="flex items-center justify-center mb-8 animate-fade-in-up delay-400">
          <div className="flex text-yellow-500 mr-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" strokeWidth={0} className="h-6 w-6" />
            ))}
          </div>
          <span className="text-xl font-semibold text-gray-800">4.9/5</span>
          <span className="text-gray-600 ml-2">based on client reviews</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between animate-fade-in-up" style={{ animationDelay: `${200 * index}ms` }}>
              <CardContent className="p-0 mb-4">
                <p className="text-lg italic text-gray-800">"{testimonial.quote}"</p>
              </CardContent>
              <p className="text-primary font-semibold text-right">- {testimonial.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
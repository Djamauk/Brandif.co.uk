import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter Website",
    price: "£1,500",
    features: [
      "Responsive Design",
      "Up to 5 Pages",
      "Basic SEO Optimisation",
      "Contact Form Integration",
      "1 Month Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Advanced Website & AI",
    price: "£4,000",
    features: [
      "Custom Website Design",
      "Up to 15 Pages",
      "Advanced SEO Strategy",
      "AI Chatbot Integration",
      "CRM Integration",
      "3 Months Support",
    ],
    cta: "Choose Plan",
    highlight: true,
  },
  {
    name: "Enterprise AI Solutions",
    price: "Custom",
    features: [
      "Bespoke AI Voice Agent",
      "Complex AI Chatbot Flows",
      "Full Automation Integration",
      "Dedicated Project Manager",
      "Ongoing AI Optimisation",
      "Priority Support",
    ],
    cta: "Contact for Quote",
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Pricing & Packages
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Transparent pricing for high-performance websites and intelligent AI solutions. Find the perfect plan for your business.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 animate-fade-in-up">
            Our Flexible Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`flex flex-col justify-between p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up ${plan.highlight ? "border-2 border-primary" : ""}`} style={{ animationDelay: `${100 * index}ms` }}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                  <p className="text-5xl font-extrabold text-primary mb-4">{plan.price}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 text-gray-700 text-left">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" /> {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild size="lg" className="w-full">
                    <Link to={plan.cta === "Contact for Quote" ? "/contact" : "https://example.com/booking"}>
                      {plan.cta}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <p className="text-lg text-gray-700 mt-12 animate-fade-in-up delay-400">
            Need something more bespoke? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for a custom quote.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
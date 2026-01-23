import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const websitePricing = [
  {
    name: "Starter Website",
    price: "£2,500 – £3,500",
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
    name: "Growth Website",
    price: "£5,000 – £7,500",
    features: [
      "Custom Website Design",
      "Up to 15 Pages",
      "Advanced SEO Strategy",
      "Basic AI Integration (e.g., simple chatbot)",
      "CRM Integration",
      "3 Months Support",
    ],
    cta: "Choose Plan",
    highlight: true,
  },
  {
    name: "Premium Website",
    price: "£10,000+",
    features: [
      "Bespoke Design & Development",
      "Unlimited Pages",
      "Comprehensive SEO & Content Strategy",
      "Advanced AI Integration (Voice/Chat)",
      "E-commerce/Complex Functionality",
      "Dedicated Project Manager",
      "6 Months Priority Support",
    ],
    cta: "Contact for Quote",
  },
];

const aiVoiceAgentPricing = {
  setup: "£1,500 – £3,000",
  monthly: "£300 – £800",
  features: [
    "Custom Voice Agent Design",
    "Integration with existing systems",
    "Lead Qualification Flows",
    "Appointment Booking",
    "Basic Customer Support Automation",
    "Performance Monitoring",
  ],
};

const aiChatbotPricing = {
  setup: "£1,000 – £2,500",
  monthly: "£200 – £600",
  features: [
    "Custom Chatbot Design",
    "Website Integration",
    "Lead Generation & Qualification",
    "FAQ Automation",
    "Product Recommendations",
    "Conversation Flow Optimisation",
  ],
};

const Pricing = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up text-white">
            Pricing & Packages
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200 text-white">
            Transparent pricing for high-performance websites and intelligent AI solutions. Find the perfect plan for your business.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 animate-fade-in-up">
            Website Design & Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {websitePricing.map((plan, index) => (
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

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 animate-fade-in-up delay-400">
            AI Voice Agents
          </h2>
          <div className="max-w-2xl mx-auto mb-20">
            <Card className="flex flex-col justify-between p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-500">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Custom AI Voice Agent</CardTitle>
                <p className="text-xl font-semibold text-gray-700 mb-2">Setup: <span className="text-primary text-4xl font-extrabold">{aiVoiceAgentPricing.setup}</span></p>
                <p className="text-xl font-semibold text-gray-700">Monthly: <span className="text-primary text-4xl font-extrabold">{aiVoiceAgentPricing.monthly}</span></p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-gray-700 text-left">
                  {aiVoiceAgentPricing.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                  <Link to="/contact">Discuss Voice AI</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 animate-fade-in-up delay-600">
            AI Chatbots
          </h2>
          <div className="max-w-2xl mx-auto mb-20">
            <Card className="flex flex-col justify-between p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-700">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Custom AI Chatbot</CardTitle>
                <p className="text-xl font-semibold text-gray-700 mb-2">Setup: <span className="text-primary text-4xl font-extrabold">{aiChatbotPricing.setup}</span></p>
                <p className="text-xl font-semibold text-gray-700">Monthly: <span className="text-primary text-4xl font-extrabold">{aiChatbotPricing.monthly}</span></p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-gray-700 text-left">
                  {aiChatbotPricing.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" /> {feature}
                    </li >
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                  <Link to="/contact">Discuss Chatbot AI</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <p className="text-lg text-gray-700 mt-12 animate-fade-in-up delay-800">
            All prices are estimates and subject to a detailed discovery call. We offer custom quotes tailored to your specific needs and strategic goals.
            <Link to="/contact" className="text-primary hover:underline ml-2">Contact us</Link> for a personalized consultation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
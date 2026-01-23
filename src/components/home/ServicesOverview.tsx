import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard, Mic, Bot } from "lucide-react";

const services = [
  {
    title: "Website Design & Development",
    description: "Crafting high-performance, conversion-focused websites designed to scale with your business.",
    link: "/website-design-development",
    icon: LayoutDashboard,
  },
  {
    title: "AI Voice Agents",
    description: "Automate customer interactions and enhance service with intelligent, natural-sounding voice agents.",
    link: "/ai-voice-agents",
    icon: Mic,
  },
  {
    title: "AI Chatbots",
    description: "Deploy intelligent chatbots to provide instant support, generate leads, and streamline operations 24/7.",
    link: "/ai-chatbots",
    icon: Bot,
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 md:py-28 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
          Our Core Offerings
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          We combine cutting-edge web design with transformative AI solutions to deliver sustainable, impactful growth for ambitious brands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${200 * index}ms` }}>
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                <CardTitle className="text-2xl font-bold text-primary mb-3">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-primary hover:text-primary-foreground transition-colors mx-auto">
                  <Link to={service.link}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button asChild size="lg" className="mt-12 animate-fade-in-up delay-800">
          <Link to="/ai-solutions">Explore All Services</Link>
        </Button>
      </div>
    </section>
  );
};

export default ServicesOverview;
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, Mic, LayoutDashboard, Lightbulb } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const aiServices = [
  {
    icon: Mic,
    title: "AI Voice Agents",
    description: "Automate customer interactions and enhance service with intelligent, natural-sounding voice agents.",
    link: "/ai-voice-agents",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Deploy intelligent chatbots to provide instant support, generate leads, and streamline operations 24/7.",
    link: "/ai-chatbots",
  },
  {
    icon: LayoutDashboard,
    title: "Custom AI Solutions",
    description: "Beyond standard agents, we build bespoke AI tools tailored to your unique business challenges and opportunities.",
    link: "/contact", // Link to contact for custom solutions
  },
];

const AISolutions = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            AI Solutions That Drive Results
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Leverage the power of artificial intelligence to automate, optimise, and innovate your business operations.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-gray-200 transition-colors animate-fade-in-up delay-400">
            <a href="https://example.com/booking" target="_blank" rel="noopener noreferrer">Book a Discovery Call</a>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 animate-fade-in-up">
            Our AI Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Card key={service.title} className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${100 * index}ms` }}>
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-base">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="text-primary hover:text-primary-foreground transition-colors mx-auto">
                    <Link to={service.link}>
                      Learn more <Lightbulb className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
            AI That Works for Your Business — Not Just Buzzwords.
          </h2>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in-up delay-100">
            We go beyond the hype to deliver practical, impactful AI solutions. From automating routine tasks to providing intelligent insights, our AI agents are designed to integrate seamlessly and drive tangible business value.
          </p>
          <Button asChild size="lg" className="mt-8 animate-fade-in-up delay-200">
            <Link to="/contact">Discuss Your AI Strategy</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AISolutions;
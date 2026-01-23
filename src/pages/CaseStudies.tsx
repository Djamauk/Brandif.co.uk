import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce Conversion Boost",
    description: "Implemented a new website design and performance marketing strategy, resulting in a 45% increase in online sales.",
    image: "/placeholder.svg",
    link: "#", // Placeholder link
  },
  {
    title: "AI Voice Agent for Customer Support",
    description: "Developed and deployed an AI voice agent that reduced call centre volume by 30% and improved customer satisfaction scores.",
    image: "/placeholder.svg",
    link: "#", // Placeholder link
  },
  {
    title: "Lead Generation Chatbot Success",
    description: "Integrated an AI chatbot on a client's website, leading to a 20% increase in qualified leads within the first quarter.",
    image: "/placeholder.svg",
    link: "#", // Placeholder link
  },
];

const CaseStudies = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up text-white">
            Our Work & Case Studies
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200 text-white">
            See how we've helped ambitious brands achieve remarkable results through strategic web design and intelligent AI solutions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 animate-fade-in-up">
            Proven Impact, Tangible Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${100 * index}ms` }}>
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover rounded-t-lg" />
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 text-base">{study.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="text-primary hover:text-primary-foreground transition-colors">
                    <Link to={study.link}>
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button asChild size="lg" className="mt-12 animate-fade-in-up delay-400">
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Performance Marketing",
    description: "Driving measurable results through targeted campaigns on Google, Meta, and other key platforms.",
    link: "/services",
  },
  {
    title: "Brand Strategy & Development",
    description: "Crafting compelling brand narratives and visual identities that resonate with your audience.",
    link: "/services",
  },
  {
    title: "Creative Production",
    description: "Producing high-impact visuals, videos, and copy that capture attention and convert.",
    link: "/services",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 md:py-28 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
          Fueling smarter growth at every level.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          We combine cutting-edge performance marketing with strategic brand building to deliver sustainable, impactful growth for ambitious brands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${200 * index}ms` }}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary mb-3">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-primary hover:text-primary-foreground transition-colors">
                  <Link to={service.link}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
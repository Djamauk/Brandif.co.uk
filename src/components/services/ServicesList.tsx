import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Palette, Users, Megaphone, BarChart } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Maximize your ROI with data-driven campaigns across Google Ads, Meta, and other high-impact digital channels. We focus on measurable results and continuous optimization.",
  },
  {
    icon: Palette,
    title: "Brand Strategy & Development",
    description: "Build a powerful and memorable brand identity. From core messaging to visual guidelines, we craft strategies that resonate and differentiate you in the market.",
  },
  {
    icon: Lightbulb,
    title: "Creative Production",
    description: "Captivate your audience with stunning visuals, engaging video content, and compelling copy. Our creative team brings your brand story to life across all platforms.",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Cultivate a thriving online community and drive engagement with expert social media strategy, content creation, and community management across key platforms.",
  },
  {
    icon: Megaphone,
    title: "Content Marketing",
    description: "Establish thought leadership and attract organic traffic with high-quality, SEO-optimized content, including blog posts, articles, whitepapers, and case studies.",
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Gain clear insights into your marketing performance. We provide comprehensive analytics, custom dashboards, and actionable reports to inform future strategies.",
  },
];

const ServicesList = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${100 * index}ms` }}>
              <CardHeader className="pb-4">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
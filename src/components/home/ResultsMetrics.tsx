import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { title: "Avg. ROI Increase", value: "300%", description: "For our top-tier clients" },
  { title: "Industries Served", value: "25+", description: "Across diverse market segments" },
  { title: "Clients Empowered", value: "150+", description: "Achieving their growth ambitions" },
  { title: "Client Satisfaction", value: "4.9/5", description: "Based on independent reviews" },
];

const ResultsMetrics = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 animate-fade-in-up">
          Built for brands that aim higher. <br className="hidden sm:inline"/>Beyond vision. Within reach.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card key={metric.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${200 * index}ms` }}>
              <CardHeader>
                <CardTitle className="text-5xl font-extrabold text-primary mb-2">{metric.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{metric.title}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsMetrics;
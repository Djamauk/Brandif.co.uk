import React from "react";
import { Globe, Brain, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trustSignals = [
  { icon: Globe, text: "UK-based agency" },
  { icon: Brain, text: "AI-first approach" },
  { icon: Lightbulb, text: "Strategy-led delivery" },
];

const TrustSignals = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {trustSignals.map((signal, index) => (
            <Card key={index} className="p-6 shadow-md animate-fade-in-up" style={{ animationDelay: `${100 * index}ms` }}>
              <CardContent className="flex flex-col items-center p-0">
                <signal.icon className="h-10 w-10 text-primary mb-4" />
                <p className="text-lg font-semibold text-gray-800">{signal.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const teamMembers = [
  { name: "Alice Johnson", role: "Project Lead", avatar: "/placeholder.svg" },
  { name: "Bob Williams", role: "Creative Head", avatar: "/placeholder.svg" },
  { name: "Charlie Brown", role: "Sales & Support Manager", avatar: "/placeholder.svg" },
  { name: "Diana Miller", role: "Marketing Manager", avatar: "/placeholder.svg" },
];

const TeamTeaser = () => {
  return (
    <section className="py-20 md:py-28 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
          Meet the minds behind the strategy.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          Our diverse team of passionate marketers, strategists, analysts, and creatives are united by a common goal: to deliver exceptional results for your brand.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={member.name} className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${200 * index}ms` }}>
              <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="bg-gray-200 text-gray-600">
                  <User size={48} />
                </AvatarFallback>
              </Avatar>
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button asChild size="lg" className="animate-fade-in-up delay-800">
          <Link to="/our-team">Learn More About Our Team</Link>
        </Button>
      </div>
    </section>
  );
};

export default TeamTeaser;
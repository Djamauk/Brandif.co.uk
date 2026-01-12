import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const teamMembers = [
  {
    name: "Sam Anderson",
    role: "Chief Executive Officer (CEO)",
    avatar: "/placeholder.svg",
    bio: "Sam leads our vision, driving innovation and strategic growth for our clients.",
  },
  {
    name: "Alice Johnson",
    role: "Head of Performance Marketing",
    avatar: "/placeholder.svg",
    bio: "Alice specializes in data-driven campaigns, ensuring maximum ROI across all digital channels.",
  },
  {
    name: "Bob Williams",
    role: "Creative Director",
    avatar: "/placeholder.svg",
    bio: "Bob brings brands to life with captivating visuals and compelling storytelling.",
  },
  {
    name: "Charlie Brown",
    role: "Brand Strategist",
    avatar: "/placeholder.svg",
    bio: "Charlie crafts unique brand narratives and identities that resonate deeply with target audiences.",
  },
  {
    name: "Diana Miller",
    role: "Social Media Manager",
    avatar: "/placeholder.svg",
    bio: "Diana builds vibrant online communities and drives engagement through expert social media strategies.",
  },
  {
    name: "Eve Davis",
    role: "Content Marketing Lead",
    avatar: "/placeholder.svg",
    bio: "Eve develops high-quality, SEO-optimized content that establishes thought leadership and attracts organic traffic.",
  },
  {
    name: "Frank White",
    role: "Analytics Specialist",
    avatar: "/placeholder.svg",
    bio: "Frank provides deep insights into campaign performance, optimizing strategies for continuous improvement.",
  },
  {
    name: "Grace Taylor",
    role: "Client Relations Manager",
    avatar: "/placeholder.svg",
    bio: "Grace ensures seamless communication and strong partnerships, making sure client needs are always met.",
  },
];

const TeamMembersGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={member.name} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${100 * index}ms` }}>
              <Avatar className="w-28 h-28 mb-4 border-2 border-primary">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="bg-gray-200 text-gray-600 text-4xl">
                  <User size={56} />
                </AvatarFallback>
              </Avatar>
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersGrid;
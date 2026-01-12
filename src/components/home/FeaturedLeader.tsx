import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const FeaturedLeader = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-900 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/3 flex justify-center animate-fade-in-up">
          <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary-foreground shadow-xl">
            <AvatarImage src="/placeholder.svg" alt="Sam Anderson" />
            <AvatarFallback className="bg-gray-700 text-white text-6xl">
              <User size={96} />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="md:w-2/3 text-center md:text-left animate-fade-in-up delay-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sam Anderson – Chief Executive Officer (CEO)</h2>
          <blockquote className="text-xl md:text-2xl italic leading-relaxed text-gray-300">
            "We don't just build brands; we build momentum. Our mission is to unlock the full potential of every client, transforming vision into market dominance."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLeader;
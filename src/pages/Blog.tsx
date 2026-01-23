import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Web Design: AI Integration",
    description: "Explore how artificial intelligence is revolutionising website development and user experience.",
    date: "October 26, 2023",
    image: "/placeholder.svg",
    link: "#", // Placeholder link
  },
  {
    title: "5 Ways AI Chatbots Can Boost Your Sales",
    description: "Discover practical strategies for deploying chatbots to enhance lead generation and customer conversion.",
    date: "September 15, 2023",
    image: "/placeholder.svg",
    link: "#", // Placeholder link
  },
  {
    title: "Crafting a High-Performance Website: A Checklist",
    description: "A comprehensive guide to building a website that not only looks great but also delivers results.",
    date: "August 01, 2023",
    image: "/placeholder.svg",
    link: "#", // Placeholder link
  },
];

const Blog = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Insights & Blog
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Stay ahead with our expert articles on web design, AI solutions, digital marketing, and business growth strategies.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 animate-fade-in-up">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${100 * index}ms` }}>
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-gray-900">{post.title}</CardTitle>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 text-base">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="text-primary hover:text-primary-foreground transition-colors">
                    <Link to={post.link}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button asChild size="lg" className="mt-12 animate-fade-in-up delay-400">
            <Link to="#">View All Insights</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
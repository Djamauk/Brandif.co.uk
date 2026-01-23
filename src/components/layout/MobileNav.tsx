"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] flex flex-col">
        <Link to="/" className="text-2xl font-bold text-primary mb-8" onClick={closeSheet}>
          Brandif
        </Link>
        <nav className="flex flex-col gap-4 text-lg">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors" onClick={closeSheet}>Home</Link>
          <Link to="/about-us" className="text-gray-700 hover:text-primary font-medium transition-colors" onClick={closeSheet}>About Us</Link>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-gray-700 hover:text-primary font-medium transition-colors py-0">Services</AccordionTrigger>
              <AccordionContent className="pl-4 pt-2 pb-0">
                <div className="flex flex-col gap-2">
                  <Link to="/website-design-development" className="text-gray-600 hover:text-primary text-base" onClick={closeSheet}>Website Design & Development</Link>
                  <Link to="/ai-voice-agents" className="text-gray-600 hover:text-primary text-base" onClick={closeSheet}>AI Voice Agents</Link>
                  <Link to="/ai-chatbots" className="text-gray-600 hover:text-primary text-base" onClick={closeSheet}>AI Chatbots</Link>
                  <Link to="/ai-solutions" className="text-gray-600 hover:text-primary text-base" onClick={closeSheet}>AI Solutions Overview</Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link to="/case-studies" className="text-gray-700 hover:text-primary font-medium transition-colors" onClick={closeSheet}>Case Studies</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-primary font-medium transition-colors" onClick={closeSheet}>Pricing</Link>
          <Link to="/blog" className="text-gray-700 hover:text-primary font-medium transition-colors" onClick={closeSheet}>Insights</Link>
          <Link to="/our-team" className="text-gray-700 hover:text-primary font-medium transition-colors" onClick={closeSheet}>Our Team</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors" onClick={closeSheet}>Contact</Link>
        </nav>
        <Button asChild className="mt-auto w-full">
          <a href="https://example.com/booking" target="_blank" rel="noopener noreferrer" onClick={closeSheet}>Book a Discovery Call</a>
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
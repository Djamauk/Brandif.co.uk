"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
          [Agency Name]
        </Link>
        <nav className="flex flex-col gap-4 text-lg">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors" onClick={closeSheet}>Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-primary font-medium transition-colors" onClick={closeSheet}>Services</Link>
          <Link to="/our-team" className="text-gray-700 hover:text-primary font-medium transition-colors" onClick={closeSheet}>Our Team</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors" onClick={closeSheet}>Contact</Link>
        </nav>
        <Button asChild className="mt-auto w-full">
          <a href="https://example.com/booking" target="_blank" rel="noopener noreferrer" onClick={closeSheet}>Book a Free Consultation</a>
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
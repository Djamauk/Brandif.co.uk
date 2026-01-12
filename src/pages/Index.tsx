import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ResultsMetrics from "@/components/home/ResultsMetrics";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedLeader from "@/components/home/FeaturedLeader";
import TeamTeaser from "@/components/home/TeamTeaser";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactFormSection from "@/components/home/ContactFormSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-700 text-white py-24 md:py-32 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/placeholder.svg')" }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            We unlock bold ideas and turn them into brand-defining moves.
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Through strategic thinking, fearless creativity, and a relentless focus on measurable growth, we empower brands to dominate their markets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-400">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-gray-200 transition-colors">
              <a href="https://example.com/booking" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <ResultsMetrics />
      <ServicesOverview />
      <FeaturedLeader />
      <TeamTeaser />
      <TestimonialsSection />
      <ContactFormSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
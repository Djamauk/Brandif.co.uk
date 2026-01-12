import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/layout/MobileNav"; // Import the new MobileNav component
import { useIsMobile } from "@/hooks/use-mobile"; // Import the useIsMobile hook

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-primary">
        <Link to="/">[Agency Name]</Link>
      </div>
      {!isMobile && ( // Conditionally render desktop navigation
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-primary font-medium transition-colors">Services</Link>
          <Link to="/our-team" className="text-gray-700 hover:text-primary font-medium transition-colors">Our Team</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">Contact</Link>
        </nav>
      )}
      {!isMobile && ( // Conditionally render desktop button
        <Button asChild className="hidden md:inline-flex">
          <a href="https://example.com/booking" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
        </Button>
      )}
      {isMobile && <MobileNav />} {/* Render MobileNav on mobile */}
    </header>
  );
};

export default Header;
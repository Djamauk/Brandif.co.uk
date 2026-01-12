import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/shared/CallToAction"; // Import the new CallToAction component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <CallToAction /> {/* Add the CallToAction component here */}
      <Footer />
    </div>
  );
};

export default Layout;
import ServicesList from "@/components/services/ServicesList";

const Services = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up text-white">
            Our Services
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200 text-white">
            Discover how we can elevate your brand with our comprehensive marketing solutions, tailored to drive measurable growth and lasting impact.
          </p>
        </div>
      </section>
      <ServicesList />
    </div>
  );
};

export default Services;
import TeamMembersGrid from "@/components/team/TeamMembersGrid";

const OurTeam = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Meet Our Visionary Team
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Our diverse team of passionate experts is dedicated to transforming your brand's potential into market-leading success.
          </p>
        </div>
      </section>
      <TeamMembersGrid />
    </div>
  );
};

export default OurTeam;
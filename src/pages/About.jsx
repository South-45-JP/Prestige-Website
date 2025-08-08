const About = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-4xl font-bold text-yellow-600 text-center mb-8">About Prestige Shine Cleaning</h1>

      <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
        <p>
          At <span className="font-semibold text-yellow-500">Prestige Shine Cleaning</span>, our mission is simple:
          to provide our clients with the highest level of service, professionalism, and attention to detail. We
          understand that your home and workspace deserve nothing less than excellence.
        </p>

        <p>
          We proudly serve <span className="font-semibold">Galveston, Harris, and Fort Bend Counties</span> with
          a variety of customizable cleaning services tailored to your unique needs.
        </p>

        <p>
          Our highly trained and trustworthy staff ensure every project is completed to perfection. Whether it's
          regular home upkeep, deep cleaning, move-in/move-out services, office sanitation, or Airbnb turnovers,
          we deliver pristine results — every single time.
        </p>

        <p>
          Why choose us?
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>✅ Experienced and insured cleaning professionals</li>
          <li>✅ Eco-friendly products available upon request</li>
          <li>✅ Reliable and flexible scheduling</li>
          <li>✅ 100% satisfaction guaranteed</li>
        </ul>

        <p className="mt-6 font-semibold text-yellow-500 text-center">
          We don’t just clean — we bring prestige to your space.
        </p>
      </div>
    </div>
  );
};

export default About;
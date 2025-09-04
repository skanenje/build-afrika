import Navigation from "../../app/components/Navigation";

const Communities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Communities</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Join our vibrant tech communities and connect with like-minded individuals
            passionate about technology and innovation.
          </p>
        </div>
      </section>

      {/* Content will go here */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Coming Soon</h2>
            <p className="text-lg text-muted-foreground">
              Community details and join information will be available shortly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communities;

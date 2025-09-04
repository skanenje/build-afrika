import Navigation from "../../app/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Get in touch with us. We'd love to hear from you and answer any
            questions you might have.
          </p>
        </div>
      </section>

      {/* Content will go here */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Coming Soon</h2>
            <p className="text-lg text-muted-foreground">
              Contact form and details will be available shortly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

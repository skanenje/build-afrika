import Navigation from "../../app/components/Navigation";
import { Button } from "../../app/components/ui/button";
import { Bot, Palette, Share2, Blocks, ArrowRight, Target, Heart, Lightbulb } from "lucide-react";

const Communities = () => {
  const communities = [
    {
      title: "Web3 & Blockchain",
      description: "Explore decentralized technologies, smart contracts, and the future of digital finance. Learn to build on various blockchain platforms.",
      icon: Blocks,
      members: 127,
      gradient: "bg-gradient-hero"
    },
    {
      title: "AI & Machine Learning",
      description: "Dive into artificial intelligence, data science, and machine learning. Build intelligent applications that solve real-world problems.",
      icon: Bot,
      members: 89,
      gradient: "bg-gradient-tech"
    },
    {
      title: "Graphics & Product Design",
      description: "Master visual design, UX/UI principles, and product development. Create beautiful and functional digital experiences.",
      icon: Palette,
      members: 156,
      gradient: "bg-gradient-growth"
    },
    {
      title: "Social Media & Content",
      description: "Learn digital marketing strategies, content creation, and social media management for tech companies and startups.",
      icon: Share2,
      members: 134,
      gradient: "bg-gradient-hero"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-image.jpg)',
          backgroundColor: '#1a1a1a' // Fallback color
        }}
      >
        {/* Gradient overlay matching the original design - orange to purple */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-pink-500/70 to-purple-600/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Building Africa's{" "}
              <span className="text-orange-300">Tech</span>
              <br />
              <span className="text-pink-300">Future</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl opacity-90 leading-relaxed">
              Empowering young Africans through technology, creativity, and
              collaboration. Join our communities and ignite your potential at Tech
              Ignite.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Join Tech Ignite 2024 →
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Explore Communities
              </Button>
            </div>
          </div>
        </div>

        {/* Stats section at bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="flex justify-center space-x-8 md:space-x-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-2xl md:text-3xl font-bold">500+</span>
              </div>
              <p className="text-sm md:text-base opacity-80">Active Members</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                <span className="text-2xl md:text-3xl font-bold">4</span>
              </div>
              <p className="text-sm md:text-base opacity-80">Tech Communities</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <span className="text-2xl md:text-3xl font-bold">1</span>
              </div>
              <p className="text-sm md:text-base opacity-80">Annual Event</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">About Build Africa Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Based in Kisumu, Kenya, we're a non-profit organization dedicated to empowering
              young Africans through technology education, community building, and innovation
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To bridge the digital divide and create opportunities for African youth in technology.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Our Values</h3>
              <p className="text-muted-foreground">
                Collaboration, innovation, inclusivity, and sustainable development for all.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-growth rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                A thriving tech ecosystem where African talent leads global innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Join Our Tech Communities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with like-minded individuals, learn from industry experts, and build projects
              that make a difference in your community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((community) => {
              const IconComponent = community.icon;
              return (
                <div key={community.title} className="group bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-primary/20 hover:-translate-y-1">
                  <div className={`w-12 h-12 ${community.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{community.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{community.members} members</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {community.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Join Community
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Ignite CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Ignite Your Tech Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us at Tech Ignite 2024 - our flagship annual event where dreams meet opportunity.
            Network with industry leaders, attend workshops, and launch your tech career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-hero" size="lg" className="group">
              Register for Tech Ignite
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-hero" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-hero rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">BA</span>
            </div>
            <span className="font-bold text-xl">Build Africa Foundation</span>
          </div>
          <p className="text-primary-foreground/80 mb-6">Building Africa's Tech Future • Kisumu, Kenya</p>
          <p className="text-sm text-primary-foreground/60">© 2024 Build Africa Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Communities;

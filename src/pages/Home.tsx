import Navigation from "../app/components/Navigation";
import Hero from "../app/components/Hero";
import CommunityCard from "../app/components/CommunityCard";
import { Button } from "../app/components/ui/button";
import { Bot, Palette, Share2, Blocks, ArrowRight, Target, Heart, Lightbulb } from "lucide-react";

const Home = () => {
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
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">About Build Afrika Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Based in Kisumu, Kenya, we're a non-profit organization dedicated to empowering young 
              Africans through technology education, community building, and innovation opportunities.
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
              Connect with like-minded individuals, learn from industry experts, and build 
              projects that make a difference in your community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((community) => (
              <CommunityCard key={community.title} {...community} />
            ))}
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
          <p className="text-primary-foreground/80 mb-6">
            Building Africa's Tech Future • Kisumu, Kenya
          </p>
          <p className="text-sm text-primary-foreground/60">
            © 2024 Build Africa Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
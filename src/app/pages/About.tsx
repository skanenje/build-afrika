import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users, Target, Award, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About Build Africa Foundation</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Empowering the next generation of African tech leaders through 
            education, community, and innovation opportunities.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-8">Our Story</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Build Africa Foundation was born from a simple but powerful belief: that Africa's 
                youth have the potential to lead the next wave of global technological innovation. 
                Founded in Kisumu, Kenya, we recognized the gap between the abundance of talent 
                and the lack of structured opportunities for young people to enter the tech industry.
              </p>
              <p>
                Our journey began with a small group of passionate technologists and educators 
                who wanted to create a bridge between academic learning and real-world application. 
                We saw countless young Africans with brilliant ideas but limited access to mentorship, 
                resources, and networks that could help them succeed.
              </p>
              <p>
                Today, Build Africa Foundation has grown into a thriving ecosystem of learners, 
                creators, and innovators. Through our flagship Tech Ignite event and four 
                specialized communities, we've created pathways for hundreds of young people 
                to discover their passion and build meaningful careers in technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Community</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in the power of collective growth and peer-to-peer learning.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Excellence</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We strive for the highest standards in everything we do and teach.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-growth rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Impact</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our success is measured by the positive change our members create.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Innovation</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We embrace new ideas and encourage creative problem-solving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Young people trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects launched</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Industry partnerships</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-tech text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're an investor looking to support the next generation of African 
            innovators or a young person ready to start your tech journey, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-hero" size="lg">
              Partner With Us
            </Button>
            <Button variant="outline-hero" size="lg">
              Join Our Community
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

export default About;
import { Button } from "./ui/button";
import { ArrowRight, Users, Zap, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.jpg"
          alt="Young African professionals working with technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Building Africa's{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Tech Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Empowering young Africans through technology, creativity, and collaboration. 
              Join our communities and ignite your potential at Tech Ignite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="group">
                Join Tech Ignite 2024
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-hero" size="lg">
                Explore Communities
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-gray-300">Active Members</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-gray-300">Tech Communities</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-gray-300">Annual Event</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-hero rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-tech rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;
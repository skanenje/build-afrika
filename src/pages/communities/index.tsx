import React from "react";
import Navigation from "../../app/components/Navigation";
import { Button } from "../../app/components/ui/button";
import { Card, CardContent } from "../../app/components/ui/card";
import { Code, Brain, Palette, Megaphone, Users, BookOpen, Briefcase, ArrowRight } from "lucide-react";

const communities = [
  {
    title: "Web3 & Blockchain",
    description: "Dive deep into decentralized technologies and the future of digital finance",
    icon: Code,
    color: "from-purple-500 to-indigo-600",
    members: "120+ Members",
    projects: "25+ Projects",
    skills: ["Smart Contracts", "DeFi Development", "NFT Creation", "Cryptocurrency", "Solidity"],
    benefits: [
      "Weekly coding bootcamps with Ethereum developers",
      "Access to blockchain development tools and platforms",
      "Mentorship from leading Web3 entrepreneurs",
      "Collaboration on real DeFi and NFT projects"
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Explore artificial intelligence and machine learning applications for African markets",
    icon: Brain,
    color: "from-blue-500 to-cyan-600",
    members: "150+ Members",
    projects: "30+ Projects",
    skills: ["Python Programming", "TensorFlow", "Data Science", "Computer Vision", "NLP"],
    benefits: [
      "Hands-on ML workshops with industry datasets",
      "Access to GPU clusters for model training",
      "Mentorship from AI researchers and engineers",
      "Projects solving real African challenges"
    ]
  },
  {
    title: "Graphics & Product Design",
    description: "Master visual design, UX/UI, and product development for digital platforms",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    members: "100+ Members",
    projects: "40+ Projects",
    skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
    benefits: [
      "Design thinking workshops and critiques",
      "Access to premium design tools and software",
      "Portfolio reviews with senior designers",
      "Client projects with African startups"
    ]
  },
  {
    title: "Social Media & Content",
    description: "Learn digital marketing, content creation, and social media strategy",
    icon: Megaphone,
    color: "from-orange-500 to-red-600",
    members: "130+ Members",
    projects: "50+ Projects",
    skills: ["Content Strategy", "Video Editing", "Social Media Marketing", "SEO", "Analytics"],
    benefits: [
      "Content creation challenges and campaigns",
      "Access to professional editing software",
      "Mentorship from successful content creators",
      "Brand partnerships and collaboration opportunities"
    ]
  }
];

export default function Communities() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Join Our Tech Communities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with passionate peers, learn from industry experts, and build projects that make a real impact across Africa
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">145+</div>
                <div className="text-gray-600">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
                <div className="text-gray-600">Industry Mentors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {communities.map((community, index) => {
              const IconComponent = community.icon;
              const isReverse = index % 2 === 1;
              return (
                <div key={community.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isReverse ? 'lg:order-2' : ''}>
                    <Card className="border-0 shadow-2xl h-full">
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${community.color} flex items-center justify-center mb-6`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{community.title}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{community.description}</p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm font-medium">{community.members}</span>
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm font-medium">{community.projects}</span>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h3 className="font-semibold mb-3">Core Skills You'll Learn:</h3>
                          <div className="flex flex-wrap gap-2">
                            {community.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button className={`w-full bg-gradient-to-r ${community.color} hover:opacity-90 text-white`}>
                          Join {community.title} Community
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={isReverse ? 'lg:order-1' : ''}>
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Get</h3>
                      <div className="space-y-4">
                        {community.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start">
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${community.color} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                              <BookOpen className="w-3 h-3 text-white" />
                            </div>
                            <p className="text-gray-600 leading-relaxed">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How Our Communities Work</h2>
            <p className="text-xl text-gray-600">A structured approach to learning and building together</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2">Apply & Join</h3>
                <p className="text-sm text-gray-600">Submit your application and join the community that matches your interests</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2">Learn & Practice</h3>
                <p className="text-sm text-gray-600">Attend workshops, complete challenges, and build your skills with guidance</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2">Build Projects</h3>
                <p className="text-sm text-gray-600">Collaborate on real projects that solve African problems and build your portfolio</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">4</span>
                </div>
                <h3 className="font-semibold mb-2">Launch Career</h3>
                <p className="text-sm text-gray-600">Get connected with job opportunities, start your own venture, or freelance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of young Africans who are already building the future. Applications are open and communities are waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Apply to Join Communities
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Schedule a Call
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm opacity-80">
            <div>📚 Weekly learning sessions</div>
            <div>🤝 Peer collaboration projects</div>
            <div>💼 Direct path to opportunities</div>
          </div>
        </div>
      </section>
    </div>
  );
}
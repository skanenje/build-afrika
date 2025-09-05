import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Palette, Megaphone, ArrowRight } from "lucide-react";

const communities = [
  {
    title: "Web3 & Blockchain",
    description: "Explore decentralized technologies, smart contracts, and the future of digital finance",
    icon: Code,
    color: "from-purple-500 to-indigo-600",
    members: "120+ Members"
  },
  {
    title: "AI & Machine Learning",
    description: "Dive into artificial intelligence, data science, and machine learning applications",
    icon: Brain,
    color: "from-blue-500 to-cyan-600",
    members: "150+ Members"
  },
  {
    title: "Graphics & Product Design",
    description: "Master visual design, UX/UI, and product development for digital platforms",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    members: "100+ Members"
  },
  {
    title: "Social Media & Content",
    description: "Learn digital marketing, content creation, and social media strategy",
    icon: Megaphone,
    color: "from-orange-500 to-red-600",
    members: "130+ Members"
  }
];

export default function CommunitiesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Our Tech Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with like-minded individuals, learn from industry experts, and build projects that matter
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {communities.map((community) => {
            const IconComponent = community.icon;
            return (
              <Card key={community.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${community.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{community.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{community.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500">{community.members}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center">
          <Link to={createPageUrl("Communities")}>
            <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
              View All Communities
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
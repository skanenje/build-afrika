import React from "react";
import Navigation from "../app/components/Navigation";
import { Button } from "../app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../app/components/ui/card";
import { Input } from "../app/components/ui/input";
import { Textarea } from "../app/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../app/components/ui/select";
import { Badge } from "../app/components/ui/badge";
import { Mail, MapPin, Phone, Users, DollarSign, Lightbulb, Star, CheckCircle, ArrowRight } from "lucide-react";

export default function GetInvolved() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            Get Involved with Build Africa
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Whether you're an investor looking to support Africa's tech future or a young person ready to transform your career, we're here to help you make an impact.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* For Investors */}
                        <Card className="border-0 shadow-xl">
                            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-2xl font-bold flex items-center">
                                        <DollarSign className="w-6 h-6 mr-2" />
                                        For Investors
                                    </CardTitle>
                                    <Badge variant="secondary" className="bg-white text-blue-600">
                                        Partnership Opportunities
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8">
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Partner with us to fuel Africa's digital transformation. Your investment creates sustainable pathways for young talent while generating measurable social and economic impact.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-medium mb-1">Strategic Impact Investment</div>
                                            <div className="text-sm text-gray-600">Support scalable tech education programs across Africa</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-medium mb-1">Talent Pipeline Access</div>
                                            <div className="text-sm text-gray-600">First access to trained, job-ready African tech talent</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-medium mb-1">Brand Partnership</div>
                                            <div className="text-sm text-gray-600">Co-brand initiatives and thought leadership opportunities</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-medium mb-1">Impact Reporting</div>
                                            <div className="text-sm text-gray-600">Detailed metrics on community growth and career placements</div>
                                        </div>
                                    </div>
                                </div>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input placeholder="Full Name" />
                                        <Input placeholder="Company" />
                                    </div>
                                    <Input placeholder="Email Address" type="email" />
                                    <Input placeholder="Phone Number" type="tel" />
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Investment Interest" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="program-funding">Program Funding</SelectItem>
                                            <SelectItem value="scholarship-sponsor">Scholarship Sponsorship</SelectItem>
                                            <SelectItem value="tech-infrastructure">Tech Infrastructure</SelectItem>
                                            <SelectItem value="event-partnership">Event Partnership</SelectItem>
                                            <SelectItem value="corporate-training">Corporate Training Programs</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Textarea
                                        placeholder="Tell us about your investment goals and how you'd like to partner with Build Africa..."
                                        className="h-24"
                                    />
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                        Schedule Investment Discussion
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* For Young People */}
                        <Card className="border-0 shadow-xl">
                            <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-2xl font-bold flex items-center">
                                        <Users className="w-6 h-6 mr-2" />
                                        For Young Innovators
                                    </CardTitle>
                                    <Badge variant="secondary" className="bg-white text-orange-600">
                                        Join Our Community
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8">
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Ready to launch your tech career? Join our thriving community of innovators, learn cutting-edge skills, and build projects that make a real impact across Africa.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <Star className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-medium mb-1">Free Community Access</div>
                                            <div className="text-sm text-gray-600">Join any of our 4 specialized tech communities</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Star className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-medium mb-1">Expert Mentorship</div>
                                            <div className="text-sm text-gray-600">Learn from industry leaders and successful entrepreneurs</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Star className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-medium mb-1">Real Project Experience</div>
                                            <div className="text-sm text-gray-600">Build portfolio projects that solve African challenges</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Star className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-medium mb-1">Career Opportunities</div>
                                            <div className="text-sm text-gray-600">Direct connections to jobs, internships, and freelance work</div>
                                        </div>
                                    </div>
                                </div>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input placeholder="Full Name" />
                                        <Input placeholder="Age" />
                                    </div>
                                    <Input placeholder="Email Address" type="email" />
                                    <Input placeholder="Phone Number" type="tel" />
                                    <Input placeholder="Location (City, Country)" />
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Primary Interest" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="web3">Web3 & Blockchain</SelectItem>
                                            <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                                            <SelectItem value="design">Graphics & Product Design</SelectItem>
                                            <SelectItem value="content">Social Media & Content</SelectItem>
                                            <SelectItem value="multiple">Multiple Communities</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Textarea
                                        placeholder="Tell us about your background, what you want to learn, and your career goals..."
                                        className="h-24"
                                    />
                                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                                        Apply to Join Community
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                        <p className="text-xl text-gray-600">Have questions? We're here to help you take the next step</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-0 shadow-lg text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="font-semibold mb-2">Email Us</h3>
                                <p className="text-gray-600 text-sm mb-4">Get in touch for any inquiries</p>
                                <div className="space-y-1">
                                    <div className="text-sm">General: hello@buildafrica.org</div>
                                    <div className="text-sm">Investors: invest@buildafrica.org</div>
                                    <div className="text-sm">Communities: join@buildafrica.org</div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-0 shadow-lg text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="font-semibold mb-2">Visit Us</h3>
                                <p className="text-gray-600 text-sm mb-4">Come see our innovation hub</p>
                                <div className="space-y-1">
                                    <div className="text-sm">Build Africa Foundation</div>
                                    <div className="text-sm">Innovation Hub, Kisumu</div>
                                    <div className="text-sm">Kenya, East Africa</div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-0 shadow-lg text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Phone className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="font-semibold mb-2">Call Us</h3>
                                <p className="text-gray-600 text-sm mb-4">Speak directly with our team</p>
                                <div className="space-y-1">
                                    <div className="text-sm">Kenya: +254 700 123 456</div>
                                    <div className="text-sm">WhatsApp: +254 700 123 456</div>
                                    <div className="text-sm">Office Hours: 9AM - 6PM EAT</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join a Movement That's Making Impact</h2>
                    <p className="text-xl opacity-90 mb-12">
                        See how Build Africa is transforming lives and creating opportunities across the continent
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                            <div className="text-sm opacity-80">Community Members</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-500 mb-2">200+</div>
                            <div className="text-sm opacity-80">Career Placements</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-500 mb-2">50+</div>
                            <div className="text-sm opacity-80">Startups Launched</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-purple-500 mb-2">15</div>
                            <div className="text-sm opacity-80">African Countries</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
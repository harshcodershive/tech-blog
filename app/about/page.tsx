import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Mail, Award, Globe, BookOpen, Users, Target } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge variant="outline" className="mb-4 text-primary bg-primary/5 border-primary/20">About AI Connect</Badge>
                <h1 className="text-4xl font-bold tracking-tight mb-6">About Us</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    AI Connect is an independently operated AI and automation review website founded by <span className="text-foreground font-semibold">Harsh Sharma</span>, based in Jaipur, Rajasthan, India.
                </p>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                    The platform was created to simplify how people understand, compare, and adopt modern AI tools in real-world scenarios.
                </p>
            </div>

            {/* Our Background */}
            <div className="mb-24">
                <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-center">Our Background</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="prose prose-gray">
                                <p className="text-lg text-muted-foreground mb-4">
                                    AI Connect is managed by an individual publisher with a strong interest in:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-muted-foreground"><Globe className="h-4 w-4 mr-2 text-primary" /> Artificial intelligence</li>
                                    <li className="flex items-center text-muted-foreground"><Globe className="h-4 w-4 mr-2 text-primary" /> Automation technologies</li>
                                    <li className="flex items-center text-muted-foreground"><Globe className="h-4 w-4 mr-2 text-primary" /> Digital productivity systems</li>
                                    <li className="flex items-center text-muted-foreground"><Globe className="h-4 w-4 mr-2 text-primary" /> Emerging software platforms</li>
                                </ul>
                            </div>
                            <div>
                                <Card className="border-primary/10 shadow-sm">
                                    <CardContent className="pt-6">
                                        <p className="text-muted-foreground mb-4">
                                            While AI Connect is not a registered company, the website is operated with professional editorial standards, ethical publishing practices, and clear transparency.
                                        </p>
                                        <div className="flex items-center gap-4 pt-4 border-t">
                                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">HS</div>
                                            <div>
                                                <p className="font-bold">Harsh Sharma</p>
                                                <p className="text-xs text-muted-foreground">Founder & Publisher</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Mission */}
            <div className="mb-24 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                    Our mission is to:
                </p>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                        <BookOpen className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                        <div>
                            <h3 className="font-semibold">Break down complex AI tools into understandable insights</h3>
                            <p className="text-muted-foreground text-sm">We simplify technical jargon to help you understand what tools actually do.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <ShieldCheck className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                        <div>
                            <h3 className="font-semibold">Highlight real use-cases, benefits, and limitations</h3>
                            <p className="text-muted-foreground text-sm">Honest evaluations that show both strengths and weaknesses.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Target className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                        <div>
                            <h3 className="font-semibold">Help users choose tools based on suitability, not trends</h3>
                            <p className="text-muted-foreground text-sm">We focus on what works for your specific needs.</p>
                        </div>
                    </li>
                </ul>
                <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                    <p className="text-muted-foreground italic">
                        "We believe users deserve honest evaluations before investing time or money into any AI software."
                    </p>
                </div>
            </div>

            {/* What Sets Us Apart */}
            <div className="mb-24 text-center">
                <h2 className="text-3xl font-bold mb-12">What Sets Us Apart</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Independent", desc: "Independent and research-driven content", icon: ShieldCheck },
                        { title: "Unbiased", desc: "No sponsored or paid reviews", icon: Award },
                        { title: "Transparent", desc: "Clear disclosure of affiliate relationships", icon: Users },
                        { title: "Balanced", desc: "Balanced coverage of strengths and weaknesses", icon: Target },
                    ].map((item, i) => (
                        <Card key={i} className="pt-6 hover:shadow-md transition-shadow">
                            <CardContent>
                                <div className="w-16 h-16 bg-primary/5 rounded-full mx-auto mb-4 flex items-center justify-center text-primary">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <p className="font-medium text-lg">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <p className="mt-12 text-lg text-muted-foreground font-medium max-w-3xl mx-auto">
                    Every review published on AI Connect is written with the reader's interest as the top priority.
                </p>
            </div>

            {/* CTA */}
            <div className="bg-primary/5 rounded-3xl p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    Whether you have a specific question about a tool or just want to connect, we'd love to hear from you.
                </p>
                <Link href="/contact">
                    <Button size="lg" className="h-12 px-8">
                        <Mail className="mr-2 h-4 w-4" /> Contact Us
                    </Button>
                </Link>
            </div>
        </div>
    );
}

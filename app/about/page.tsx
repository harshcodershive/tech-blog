import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge variant="outline" className="mb-4 text-primary bg-primary/5 border-primary/20">About AI Connect</Badge>
                <h1 className="text-4xl font-bold tracking-tight mb-6">Empowering Your Workflow with Intelligence</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    We are a team of tech enthusiasts, developers, and automation experts dedicated to navigating the rapidly evolving landscape of Artificial Intelligence.
                </p>
            </div>

            {/* Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div>
                    <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                        <Target className="h-32 w-32 text-primary/40" />
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        To provide transparent, in-depth, and actionable intelligence on AI tools that help businesses and individuals work smarter, not harder.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <ShieldCheck className="h-6 w-6 text-primary mr-3 mt-1" />
                            <div>
                                <h3 className="font-semibold">Unbiased Testing</h3>
                                <p className="text-muted-foreground text-sm">We don't just read the landing page; we put tools through real-world scenarios.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Users className="h-6 w-6 text-primary mr-3 mt-1" />
                            <div>
                                <h3 className="font-semibold">Community First</h3>
                                <p className="text-muted-foreground text-sm">Our reviews are shaped by feedback from our active community of 15k+ professionals.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Team (Mock) */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold text-center mb-12">Meet the Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="text-center pt-6">
                            <CardContent>
                                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Users className="h-10 w-10 text-muted-foreground" />
                                </div>
                                <h3 className="font-bold text-lg">Alex Johnson</h3>
                                <p className="text-primary text-sm font-medium mb-3">AI Research Lead</p>
                                <p className="text-muted-foreground text-sm">Former Data Scientist with a passion for NLP and generative models.</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/5 rounded-3xl p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Have a Tool to Suggest?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    We are always looking for the next game-changer. If you've built something amazing, let us know.
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

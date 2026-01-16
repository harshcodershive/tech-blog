import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Network, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Contact About Your AI</h1>
                    <p className="text-lg text-muted-foreground">
                        We welcome questions, feedback, collaboration inquiries, and communication related to AI tools, automation platforms, and content published on this website.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <div className="space-y-12">
                            {/* General Inquiries */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <Mail className="h-6 w-6 text-primary mr-3" />
                                    <h2 className="text-2xl font-bold">General Inquiries</h2>
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    For questions related to website content, AI tool reviews, affiliate partnerships, or corrections, you can contact us via email.
                                </p>
                                <p className="font-semibold text-lg text-primary">📧 support@aboutyourai.com</p>
                            </div>

                            {/* Founder Info */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <MapPin className="h-6 w-6 text-primary mr-3" />
                                    <h2 className="text-2xl font-bold">Founder & Publisher</h2>
                                </div>
                                <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
                                    <p className="font-bold text-lg mb-1">Harsh Sharma</p>
                                    <p className="text-sm text-muted-foreground mb-4">Founder & Independent Publisher</p>
                                    <p className="text-sm font-medium">📍 Jaipur, Rajasthan, India</p>
                                </div>
                            </div>

                            {/* Partnerships */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <Network className="h-6 w-6 text-primary mr-3" />
                                    <h2 className="text-2xl font-bold">Partnerships & Affiliate Communication</h2>
                                </div>
                                <p className="text-muted-foreground mb-2">
                                    If you represent an AI tool, SaaS platform, or technology company and would like to:
                                </p>
                                <ul className="list-disc ml-6 text-muted-foreground space-y-1 mb-4">
                                    <li>Share product information</li>
                                    <li>Request a review consideration</li>
                                    <li>Discuss affiliate or partnership opportunities</li>
                                </ul>
                                <p className="text-sm text-foreground">
                                    Please include relevant details in your email, and we will respond as soon as possible.
                                </p>
                            </div>

                            {/* Response Time & Notice */}
                            <div className="flex gap-4 p-4 bg-primary/5 rounded-lg">
                                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold mb-1">Response Time</h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        We aim to respond to all genuine inquiries within 24–72 business hours.
                                    </p>
                                    <p className="text-xs text-muted-foreground italic">
                                        Unsolicited promotions may not receive a response.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <Card className="shadow-lg border-primary/10">
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                                <CardDescription>
                                    Communication through this page does not establish any formal business relationship unless explicitly agreed upon in writing.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name">First name</Label>
                                            <Input id="first-name" placeholder="Harsh" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name">Last name</Label>
                                            <Input id="last-name" placeholder="Sharma" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="harsh@example.com" type="email" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="Partnership Inquiry..." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your inquiry..."
                                            className="min-h-[150px]"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full text-lg h-12">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        <p className="text-xs text-center text-muted-foreground">
                            About Your AI is an independently operated informational website.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

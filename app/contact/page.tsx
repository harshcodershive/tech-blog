"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-6">Get in Touch</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Have a question about a review? Want to suggest a tool? Or just want to say hello? We'd love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-lg">Email Us</h3>
                                    <p className="text-muted-foreground">hello@aiconnect.com</p>
                                    <p className="text-muted-foreground">partners@aiconnect.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MessageSquare className="h-6 w-6 text-primary mt-1 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-lg">Community</h3>
                                    <p className="text-muted-foreground">Join our Discord server for real-time discussions.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-lg">Office</h3>
                                    <p className="text-muted-foreground">123 Innovation Dr, Suite 500</p>
                                    <p className="text-muted-foreground">San Francisco, CA 94103</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                                <CardDescription>We usually respond within 24 hours.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name">First name</Label>
                                            <Input id="first-name" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name">Last name</Label>
                                            <Input id="last-name" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="john@example.com" type="email" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="Review suggestion..." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us more..."
                                            className="min-h-[150px]"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

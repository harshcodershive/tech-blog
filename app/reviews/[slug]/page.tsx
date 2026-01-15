import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Star, ExternalLink, Info } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock Data for demonstration
const reviews: Record<string, any> = {
    "jasper-ai": {
        title: "Jasper AI",
        tagline: "The Enterprise AI Copilot",
        rating: 4.8,
        pricing: "Starts at $39/mo",
        summary: "Jasper is more than just a writing assistant; it's a comprehensive platform for enterprise content creation, offering brand voice consistency and collaboration tools that ChatGPT lacks.",
        pros: ["Excellent brand voice features", "Deep integration with SEO tools", "Enterprise-grade security", "Huge library of templates"],
        cons: ["More expensive than other options", "Steeper learning curve for advanced features"],
        verdict: "Best for Marketing Teams"
    },
    "notion-ai": {
        title: "Notion AI",
        tagline: "Your Connected Workspace AI",
        rating: 4.7,
        pricing: "$10/mo per user",
        summary: "Notion AI seamlessly integrates into your existing workspace, making it the most convenient option for teams already living in Notion. It excels at summarizing and expanding existing notes.",
        pros: ["Incredible convenience", "Great price point", "Good at context-aware writing"],
        cons: ["Not as powerful as standalone models", "Limited generation length"],
        verdict: "Best for Productivity"
    },
    "midjourney": {
        title: "Midjourney",
        tagline: "The Gold Standard for AI Art",
        rating: 4.9,
        pricing: "Starts at $10/mo",
        summary: "Midjourney continues to dominate the AI image generation space with superior aesthetic quality and realism, though its Discord-based interface remains a hurdle for some users.",
        pros: ["Unmatched image quality", "Specific control parameters", "Active community"],
        cons: ["Discord interface is clunky", "No free trial anymore"],
        verdict: "Best for Designers"
    }
};

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const review = reviews[slug] || reviews["jasper-ai"]; // Fallback for demo purposes

    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            {/* Hero Header */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                <div className="lg:col-span-2">
                    <Badge className="mb-4">Official Review</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{review.title} Review: Is it Worth It in 2025?</h1>
                    <p className="text-xl text-muted-foreground mb-6">{review.summary}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                        <div className="flex items-center">
                            <Info className="h-4 w-4 mr-1" /> Updated: Oct 2024
                        </div>
                        <div>•</div>
                        <div>By Alex Johnson</div>
                    </div>

                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <p>
                            In this in-depth review, we break down {review.title}'s features, pricing, and performance to help you decide if it's the right tool for your specific needs.
                        </p>
                        {/* Placeholder for long form content */}
                        <div className="my-8 p-6 bg-muted/30 rounded-lg border">
                            <h3 className="text-foreground font-bold text-xl mb-2">Our Verdict</h3>
                            <p className="mb-4">{review.verdict}</p>
                            <div className="flex items-center text-amber-500 font-bold text-2xl">
                                <Star className="h-6 w-6 fill-current mr-2" /> {review.rating}/5.0
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Card */}
                <div>
                    <Card className="sticky top-24 border-primary/20 shadow-lg">
                        <CardHeader className="bg-muted/30 pb-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-2xl">{review.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{review.tagline}</p>
                                </div>
                                <div className="bg-primary text-primary-foreground font-bold px-2 py-1 rounded text-lg">
                                    {review.rating}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-2 flex items-center text-green-600"><Check className="h-4 w-4 mr-1" /> Pros</h4>
                                    <ul className="space-y-1 text-sm">
                                        {review.pros.map((pro: string, i: number) => (
                                            <li key={i} className="flex items-start text-muted-foreground">
                                                <span className="mr-2">•</span>{pro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 flex items-center text-red-600"><X className="h-4 w-4 mr-1" /> Cons</h4>
                                    <ul className="space-y-1 text-sm">
                                        {review.cons.map((con: string, i: number) => (
                                            <li key={i} className="flex items-start text-muted-foreground">
                                                <span className="mr-2">•</span>{con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t">
                                    <p className="text-sm text-muted-foreground mb-1">Pricing</p>
                                    <p className="font-bold text-lg">{review.pricing}</p>
                                </div>

                                <Button className="w-full h-12 text-lg" size="lg">
                                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                                <p className="text-xs text-center text-muted-foreground">
                                    We may earn a commission if you click this link.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

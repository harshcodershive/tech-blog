import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogIndexPage() {
    const posts = [
        {
            title: "How to Automate Your Email Marketing with AI",
            excerpt: "Learn the specific workflows top newsletters are using to generate qualified leads on autopilot.",
            category: "Automation",
            date: "Oct 12, 2024",
            slug: "email-marketing-automation",
            readTime: "8 min"
        },
        {
            title: "Top 10 AI Tools for Developers in 2025",
            excerpt: "A curated list of coding assistants that go beyond simple autocomplete.",
            category: "Development",
            date: "Oct 10, 2024",
            slug: "top-ai-tools-developers",
            readTime: "12 min"
        },
        {
            title: "The Ultimate Guide to Prompt Engineering",
            excerpt: "Stop guessing. Here are the scientific frameworks for getting consistent results from LLMs.",
            category: "Guides",
            date: "Oct 08, 2024",
            slug: "prompt-engineering-guide",
            readTime: "15 min"
        },
        {
            title: "Midjourney vs DALL-E 3: Which is Best for Business?",
            excerpt: "We generated 1000 images to find out which model handles branding and text better.",
            category: "Comparisons",
            date: "Oct 05, 2024",
            slug: "midjourney-vs-dalle",
            readTime: "10 min"
        },
        {
            title: "AI Ethics: What Your Business Needs to Know",
            excerpt: "Navigating the legal and ethical gray areas of using generative AI in production.",
            category: "Strategy",
            date: "Oct 01, 2024",
            slug: "ai-ethics-business",
            readTime: "6 min"
        },
        {
            title: "Building an AI Agent from Scratch",
            excerpt: "A technical walkthrough of creating a custom agent using LangChain and OpenAI.",
            category: "Development",
            date: "Sep 28, 2024",
            slug: "building-ai-agent",
            readTime: "20 min"
        }
    ];

    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Latest Insights</h1>
                <p className="text-xl text-muted-foreground">Expert guides, tutorials, and analysis on the AI landscape.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <Link href={`#`} key={index} className="group">
                        <Card className="h-full border-border/50 hover:shadow-lg transition-all duration-300">
                            <div className="aspect-video bg-muted relative overflow-hidden rounded-t-xl">
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                            </div>
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-center mb-2">
                                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                                    <div className="flex items-center text-xs text-muted-foreground">
                                        <Calendar className="h-3 w-3 mr-1" /> {post.date}
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">{post.title}</h2>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                            </CardContent>
                            <CardFooter className="mt-auto pt-0 text-primary font-medium text-sm flex items-center">
                                Read Article <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

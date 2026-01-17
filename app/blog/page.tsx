import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export default function BlogIndexPage() {
    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Latest Insights</h1>
                <p className="text-xl text-muted-foreground">Expert guides, tutorials, and analysis on the AI landscape.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                        <Card className="h-full border-border/50 hover:shadow-lg transition-all duration-300 flex flex-col">
                            <div className="aspect-video bg-muted relative overflow-hidden rounded-t-xl shrink-0">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-center mb-2">
                                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                                    <div className="flex items-center text-xs text-muted-foreground">
                                        <Calendar className="h-3 w-3 mr-1" /> {post.date}
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2 leading-tight">{post.title}</h2>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                            </CardContent>
                            <CardFooter className="mt-auto pt-0 text-primary font-medium text-sm flex items-center justify-between">
                                <span className="flex items-center text-muted-foreground text-xs"><Clock className="h-3 w-3 mr-1" /> {post.readTime}</span>
                                <span className="flex items-center">Read Article <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" /></span>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

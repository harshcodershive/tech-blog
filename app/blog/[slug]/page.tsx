import { blogPosts } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all known posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container py-20 px-4 md:px-8 mx-auto">
            <div className="max-w-3xl mx-auto">
                {/* Back Link */}
                <Link href="/blog">
                    <Button variant="ghost" className="pl-0 hover:pl-2 transition-all mb-8 text-muted-foreground">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Guides
                    </Button>
                </Link>

                {/* Helper Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <Badge variant="secondary" className="rounded-full">{post.category}</Badge>
                    <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {post.readTime}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                    {post.title}
                </h1>

                {/* Content Body */}
                <div
                    className="prose prose-lg prose-gray max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight 
          prose-p:leading-relaxed prose-p:text-muted-foreground
          prose-strong:text-foreground prose-li:text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share / Footer */}
                <div className="mt-12 pt-8 border-t flex justify-between items-center">
                    <p className="text-muted-foreground font-medium">Share this article</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Share2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}

import { blogPosts } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link href="/blog">
                    <Button variant="ghost" className="pl-0 hover:pl-2 transition-all mb-8 text-muted-foreground">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Guides
                    </Button>
                </Link>

                {/* Featured Image */}
                <div className="aspect-video bg-muted relative overflow-hidden rounded-2xl mb-8">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

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
                    className="blog-content prose prose-lg max-w-none
                        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-2 
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:leading-relaxed prose-p:text-muted-foreground prose-p:mb-6
                        prose-strong:text-foreground prose-strong:font-semibold
                        prose-ul:my-6 prose-ul:space-y-2
                        prose-li:text-muted-foreground prose-li:leading-relaxed
                        prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        [&_.lead]:text-xl [&_.lead]:font-medium [&_.lead]:text-foreground [&_.lead]:mb-8"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Related Articles CTA */}
                <div className="mt-12 bg-muted/30 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Explore More Insights</h3>
                    <p className="text-muted-foreground mb-6">
                        Discover more guides, tutorials, and AI tool reviews.
                    </p>
                    <Link href="/blog">
                        <Button size="lg">
                            View All Articles
                        </Button>
                    </Link>
                </div>
            </div>
        </article>
    );
}

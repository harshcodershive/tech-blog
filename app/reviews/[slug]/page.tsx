import { reviewsData } from "@/lib/reviews-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Star, ExternalLink, ArrowLeft, Zap, PlayCircle, FileText, BarChart3, BookOpen, DollarSign } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return reviewsData.map((review) => ({
        slug: review.slug,
    }));
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const review = reviewsData.find((r) => r.slug === slug);

    if (!review) {
        notFound();
    }

    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            {/* Back Link */}
            <Link href="/reviews">
                <Button variant="ghost" className="pl-0 hover:pl-2 transition-all mb-8 text-muted-foreground">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Reviews
                </Button>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">Official Review</Badge>
                            <Badge variant="outline">{review.category}</Badge>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{review.title}</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            {review.tagline}
                        </p>
                    </div>

                    <div className="prose prose-lg prose-gray max-w-none">
                        <h2 className="text-2xl font-bold text-foreground">Overview</h2>
                        <p>{review.summary}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                            <Card className="bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-900">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg flex items-center text-green-700 dark:text-green-400">
                                        <Check className="h-5 w-5 mr-2" /> The Good
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {review.pros.map((pro, i) => (
                                            <li key={i} className="text-sm flex items-start">
                                                <span className="mr-2 text-green-600">•</span> {pro}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-red-50/50 dark:bg-red-900/10 border-red-200 dark:border-red-900">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg flex items-center text-red-700 dark:text-red-400">
                                        <X className="h-5 w-5 mr-2" /> The Bad
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {review.cons.map((con, i) => (
                                            <li key={i} className="text-sm flex items-start">
                                                <span className="mr-2 text-red-600">•</span> {con}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose px-0">
                            {review.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 p-3 bg-muted/40 rounded-lg border border-border/50">
                                    <Zap className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Detailed Review Section - Only shown if detailedReview exists */}
                        {review.detailedReview && (
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold text-foreground mb-6">In-Depth Review</h2>
                                <div
                                    className="detailed-review-content"
                                    dangerouslySetInnerHTML={{ __html: review.detailedReview }}
                                />
                            </div>
                        )}

                        {/* Resources Section - Only shown if resources exist */}
                        {review.resources && review.resources.length > 0 && (
                            <div className="mt-12 not-prose">
                                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                                    <BookOpen className="h-6 w-6 mr-2 text-primary" /> Learn More
                                </h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {review.resources.map((resource, i) => (
                                        <Link
                                            key={i}
                                            href={resource.url}
                                            target="_blank"
                                            className="group flex items-start gap-4 p-4 bg-muted/30 hover:bg-muted/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-200"
                                        >
                                            <div className={`flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center ${
                                                resource.type === 'video'
                                                    ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                                                    : resource.type === 'comparison'
                                                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                                    : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                                            }`}>
                                                {resource.type === 'video' && <PlayCircle className="h-5 w-5" />}
                                                {resource.type === 'article' && <FileText className="h-5 w-5" />}
                                                {resource.type === 'comparison' && <BarChart3 className="h-5 w-5" />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                        {resource.title}
                                                    </h4>
                                                    <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                                {resource.description && (
                                                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                                        {resource.description}
                                                    </p>
                                                )}
                                                <span className="text-xs text-muted-foreground/70 mt-2 inline-block capitalize">
                                                    {resource.type === 'video' ? 'Video Tutorial' : resource.type === 'comparison' ? 'Comparison Guide' : 'Blog Article'}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12 not-prose">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <Star className="h-5 w-5 fill-primary text-primary mr-2" /> Our Verdict
                            </h3>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                {review.verdict}
                            </p>
                            <div className="flex items-center justify-between pt-6 border-t border-primary/10">
                                <div className="flex flex-col">
                                    <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Overall Rating</span>
                                    <span className="text-3xl font-bold text-primary">{review.rating}<span className="text-lg text-muted-foreground font-normal">/5.0</span></span>
                                </div>
                                <Link href={review.officialLink} target="_blank">
                                    <Button size="lg">Visit Website <ExternalLink className="ml-2 h-4 w-4" /></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <Card className="sticky top-24 border-border shadow-lg overflow-hidden">
                        <div className="h-32 bg-gradient-to-br from-primary/20 via-primary/5 to-background flex items-center justify-center">
                            <h2 className="text-3xl font-bold text-primary opacity-50">{review.title}</h2>
                        </div>
                        <CardContent className="pt-6">
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b pb-4">
                                    <span className="font-medium text-muted-foreground">Category</span>
                                    <span className="font-bold">{review.category}</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-4">
                                    <span className="font-medium text-muted-foreground">Rating</span>
                                    <div className="flex items-center font-bold text-amber-500">
                                        <Star className="h-4 w-4 fill-current mr-1" /> {review.rating}
                                    </div>
                                </div>

                                {/* Pricing - Only shown if pricing exists */}
                                {review.pricing && (
                                    <div className="border-b pb-4">
                                        <div className="flex justify-between items-start">
                                            <span className="font-medium text-muted-foreground">Pricing</span>
                                            <div className="text-right">
                                                <div className="flex items-center font-bold text-foreground">
                                                    <DollarSign className="h-4 w-4 mr-0.5" />
                                                    {review.pricing.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                                </div>
                                                <span className="text-xs text-muted-foreground">
                                                    per {review.pricing.period}
                                                </span>
                                                {review.pricing.note && (
                                                    <span className="text-xs text-primary block mt-1">
                                                        {review.pricing.note}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <Link href={review.officialLink} target="_blank" className="w-full block">
                                    <Button className="w-full h-12 text-lg shadow-primary/20 shadow-lg" size="lg">
                                        Visit Official Site <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <p className="text-xs text-center text-muted-foreground">
                                    Transparency: We may earn a commission if you click this link.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

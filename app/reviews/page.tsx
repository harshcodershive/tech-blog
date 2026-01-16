import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { reviewsData } from "@/lib/reviews-data";

export default function ReviewsIndexPage() {
    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4 text-primary bg-primary/5 border-primary/20">Independent Reviews</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Top AI Tools for 2026</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    We've tested hundreds of tools so you don't have to. Here are our top picks for productivity, creativity, and development.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviewsData.map((tool) => (
                    <Card key={tool.slug} className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border-border/60">
                        <CardHeader>
                            <div className="flex justify-between items-start mb-4">
                                <Badge variant="secondary" className="font-medium">{tool.category}</Badge>
                                <div className="flex items-center text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded-md text-sm">
                                    <Star className="h-4 w-4 fill-current mr-1" />
                                    {tool.rating}
                                </div>
                            </div>
                            <CardTitle className="text-2xl mb-2">{tool.title}</CardTitle>
                            <CardDescription className="text-base line-clamp-2 min-h-[3rem]">
                                {tool.tagline}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {tool.description}
                            </p>
                            <div className="space-y-2">
                                {tool.pros.slice(0, 2).map((pro, i) => (
                                    <div key={i} className="flex items-start text-xs text-muted-foreground">
                                        <CheckCircle2 className="h-3.5 w-3.5 mr-2 text-green-600 mt-0.5 shrink-0" />
                                        {pro}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="pt-4 border-t bg-muted/20 mt-auto">
                            <Link href={`/reviews/${tool.slug}`} className="w-full">
                                <Button className="w-full group" variant="default">
                                    Read Review
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Cpu, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { reviewsData } from "@/lib/reviews-data";
import { blogPosts } from "@/lib/blog-data";

export default function Home() {
  const featuredTools = reviewsData.slice(0, 3);
  const recentGuides = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-8 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
              The #1 Source for AI Reviews
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground max-w-4xl mx-auto leading-tight">
              Master the Future of <br className="hidden md:block" />
              <span className="text-primary">AI & Automation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover professional-grade AI tools, in-depth reviews, and automation strategies to scale your business and productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reviews">
                <Button size="lg" className="h-12 px-8 text-lg rounded-full">
                  Explore Top Tools <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full">
                  Read Latest Insights <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tools Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Editor's Choice</h2>
              <p className="text-muted-foreground">Top-rated tools tested by our experts.</p>
            </div>
            <Link href="/reviews" className="text-primary font-medium hover:underline flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTools.map((tool, index) => (
              <motion.div
                key={tool.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{tool.category}</Badge>
                      <div className="flex items-center text-amber-500 font-bold text-sm">
                        <Star className="h-4 w-4 fill-current mr-1" />
                        {tool.rating}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-2 text-base">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-0">
                    <Link href={`/reviews/${tool.slug}`} className="w-full">
                      <Button variant="outline" className="w-full group">
                        Read Review
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Unbiased Reviews</h3>
              <p className="text-muted-foreground">We rigorously test every tool against real-world workflows, not just feature lists.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automation Focused</h3>
              <p className="text-muted-foreground">Learn how to connect tools together to build powerful, time-saving systems.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Business Ready</h3>
              <p className="text-muted-foreground">Curated selection of enterprise-grade tools that are safe for reliable business use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Guides */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Latest Insights</h2>
              <p className="text-muted-foreground">Guides and tutorials to level up your AI game.</p>
            </div>
            <Link href="/blog" className="text-primary font-medium hover:underline flex items-center">
              View All Posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentGuides.map((guide, index) => (
              <Link href={`/blog/${guide.slug}`} key={index} className="group cursor-pointer">
                <div className="aspect-video bg-muted rounded-xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  {/* Placeholder for image */}
                  <div className="flex items-center justify-center h-full text-muted-foreground/30 font-bold text-xl">
                    {guide.category}
                  </div>
                </div>
                <div className="flex items-center text-xs text-muted-foreground mb-2 space-x-2">
                  <span>{guide.date}</span>
                  <span>•</span>
                  <span>{guide.readTime}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight mb-3">
                  {guide.title}
                </h3>
                <span className="text-primary font-medium text-sm flex items-center">
                  Read Article <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      {/* <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
            Join 15,000+ professionals getting weekly AI insights, tool reviews, and automation templates delivered to their inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button size="lg" variant="secondary" className="h-12 text-foreground font-bold">
              Subscribe Free
            </Button>
          </div>
          <p className="text-xs text-primary-foreground/60 mt-4">
            No spam. Unsubscribe anytime. View our <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>.
          </p>
        </div>
      </section> */}
    </div>
  );
}

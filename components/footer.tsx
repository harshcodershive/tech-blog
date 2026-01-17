import Link from "next/link";
import { Zap, Twitter, Linkedin, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { reviewsData } from "@/lib/reviews-data";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

export function Footer() {
    // Get unique categories and limit to 4
    const categories = Array.from(new Set(reviewsData.map(tool => tool.category))).slice(0, 4);

    // Create category links by finding the first tool for each category
    const categoryLinks = categories.map(category => {
        const tool = reviewsData.find(t => t.category === category);
        return {
            name: category,
            slug: tool?.slug || '#'
        };
    });

    return (
        <footer className="bg-muted/30 border-t">
            <div className="container mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="p-1.5 bg-primary rounded-lg">
                                <Zap className="h-5 w-5 text-primary-foreground fill-current" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-foreground">
                                About<span className="text-primary">YourAI</span>
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Your trusted source for AI tools reviews, automation guides, and the latest tech insights. Empowering your workflow with intelligence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/aboutyourai/" className="text-muted-foreground hover:text-primary transition-colors">
                                <FaInstagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <FaXTwitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <CiLinkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/methodology" className="text-muted-foreground hover:text-primary transition-colors">Our Methodology</Link></li>
                            <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog & Guides</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            {categoryLinks.map((category) => (
                                <li key={category.name}>
                                    <Link href={`/reviews/${category.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Affiliate Disclaimer</Link></li>
                            <li><Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} About Your AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

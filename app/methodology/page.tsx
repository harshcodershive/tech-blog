import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FlaskConical, Search, FileText } from "lucide-react";

export default function MethodologyPage() {
    const steps = [
        {
            icon: Search,
            title: "1. Discovery & vetting",
            description: "We scour the market, user forums, and launchpads to find promising AI tools. We filter out vaporware and security risks immediately."
        },
        {
            icon: FlaskConical,
            title: "2. Hands-on Testing",
            description: "Our experts use the tool for at least 7 days in a real-world workflow. We test features, speed, reliability, and ease of use."
        },
        {
            icon: CheckCircle2,
            title: "3. Verification",
            description: "We verify claims made by the developers, check for data privacy compliance (GDPR/SOC2), and test customer support responsiveness."
        },
        {
            icon: FileText,
            title: "4. Scoring & Review",
            description: "We compile our findings into a comprehensive review, assigning a weighted score based on Value, Performance, and UX."
        }
    ];

    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <Badge variant="outline" className="mb-4 text-primary bg-primary/5 border-primary/20">Transparency</Badge>
                    <h1 className="text-4xl font-bold tracking-tight mb-6">Our Review Methodology</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Trust is our currency. Unlike other review sites, we don't just aggregate feature lists. Here is exactly how we evaluate every tool on AI Connect.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {steps.map((step, index) => (
                        <Card key={index} className="border-border/50">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                                    <step.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="prose prose-gray max-w-none">
                    <h2 className="text-2xl font-bold mb-4">Affiliate Disclosure</h2>
                    <p className="text-muted-foreground mb-4">
                        AI Connect is reader-supported. When you buy through links on our site, we may earn an affiliate commission.
                        However, this never influences our editorial integrity. We have rejected partnerships with tools that did not meet our quality standards.
                    </p>
                    <p className="text-muted-foreground">
                        Our goal is to remain the most trusted resource for AI software reviews. If you have questions about our testing process, please contact us.
                    </p>
                </div>
            </div>
        </div>
    );
}

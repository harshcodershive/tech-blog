import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MonitorPlay, Sliders, AlertCircle, RefreshCw, ShieldCheck } from "lucide-react";

export default function MethodologyPage() {
    const steps = [
        {
            id: "01",
            icon: Search,
            title: "Tool Discovery & Initial Research",
            description: "AI tools are selected based on market relevance, public documentation, community feedback, and demonstrated legitimacy. We strictly avoid covering tools that lack transparency or clear functionality."
        },
        {
            id: "02",
            icon: MonitorPlay,
            title: "Product Evaluation & Exploration",
            description: "We evaluate core features, user interface, onboarding, and performance in practical scenarios. If hands-on access is ever limited, we clearly state this within the review."
        },
        {
            id: "03",
            icon: Sliders,
            title: "Feature Relevance & Value Assessment",
            description: "Instead of just listing features, we analyze how useful they are in practice, who the tool is best suited for, and its long-term scalability. We focus on fit and effectiveness, not just feature volume."
        },
        {
            id: "04",
            icon: AlertCircle,
            title: "Pros, Cons & Limitations",
            description: "Each review includes clear advantages, noticeable drawbacks, and technical limitations. Affiliate partnerships never affect how these pros and cons are presented."
        },
        {
            id: "05",
            icon: RefreshCw,
            title: "Content Updates & Accuracy",
            description: "AI tools evolve rapidly. We periodically update our content to reflect feature changes, pricing updates, and policy shifts to keep our readers informed."
        }
    ];

    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <Badge variant="outline" className="mb-4 text-primary bg-primary/5 border-primary/20">Transparency</Badge>
                    <h1 className="text-4xl font-bold tracking-tight mb-6">How We Research & Review AI Tools</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        At AI Connect, we follow a structured and transparent methodology to ensure that our content remains accurate, fair, and valuable. Trust is our currency.
                    </p>
                </div>

                <div className="space-y-8 mb-20">
                    {steps.map((step, index) => (
                        <Card key={index} className="border-border/50 overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="bg-muted/30 p-8 flex flex-col items-center justify-center md:w-48 shrink-0 border-b md:border-b-0 md:border-r border-border/50">
                                    <span className="text-4xl font-bold text-primary/20 mb-2">{step.id}</span>
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                        <step.icon className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="p-8 flex-1">
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="bg-primary/5 rounded-3xl p-8 md:p-12">
                    <div className="flex items-start gap-4">
                        <ShieldCheck className="h-10 w-10 text-primary shrink-0" />
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">Affiliate Transparency</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                AI Connect may use affiliate links in certain articles. However, these links:
                            </p>
                            <ul className="list-disc leading-relaxed text-muted-foreground ml-6">
                                <li>Do not influence tool selection</li>
                                <li>Do not affect review outcomes</li>
                                <li>Exist solely to support website operations</li>
                            </ul>
                            <p className="font-medium text-foreground pt-2">
                                Reader trust remains our highest priority.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

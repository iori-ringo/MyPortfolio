import { Palette, Shield, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/shadcn/card";
import { highlights } from "@/data/works";

const iconMap = {
  Palette,
  Sparkles,
  Shield,
} as const;

export const HighlightsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Card
                key={item.title}
                className="bg-card hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

"use client";

import {
  Boxes,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Palette,
  Sparkles,
  UserCheck,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent } from "@/components/shadcn/card";
import { highlights } from "@/data/works";
import { cn } from "@/lib/utils";

const iconMap = {
  Palette,
  Sparkles,
  Boxes,
  Briefcase,
  UserCheck,
  Zap,
} as const;

export const HighlightsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Card
                key={item.title}
                className={cn(
                  "bg-card hover:shadow-lg transition-all duration-300 border-none shadow-sm group",
                  index >= 3 && !isExpanded ? "hidden md:flex" : "flex",
                )}
              >
                <CardContent className="p-5 md:p-8 h-full flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0 text-left md:text-center w-full">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center md:mb-6 transform -rotate-3 group-hover:rotate-0 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {highlights.length > 3 && (
          <div className="mt-10 text-center md:hidden">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsExpanded(!isExpanded)}
              className="rounded-full px-8 border-primary/20 hover:border-primary/40 bg-card hover:bg-secondary/50 transition-all text-primary font-bold shadow-sm"
            >
              {isExpanded ? (
                <>
                  閉じる <ChevronUp className="ml-2 w-5 h-5" />
                </>
              ) : (
                <>
                  もっと見る <ChevronDown className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

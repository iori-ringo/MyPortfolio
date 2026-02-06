import { Card, CardContent } from "@/components/shadcn/card";
import { experiences } from "@/data/works";

export const ExperienceSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.title} className="bg-card">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

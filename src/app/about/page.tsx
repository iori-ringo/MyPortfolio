import { Badge } from "@/components/shadcn/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { AnimatedTitle } from "@/components/ui/animated-title";
import { Mascot } from "@/components/ui/mascot";
import {
  educations,
  experiences,
  hobbies,
  interests,
  strengths,
  values,
} from "@/data/about";
import { pageMetadata } from "@/data/metadata";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";

export const metadata = pageMetadata.about;

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* ヘッダー */}
        <header className="mb-20 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <Mascot
              src="/images/mascot/hello.webp"
              alt="挨拶する清宮伊織のマスコットキャラクター"
              width={300}
              height={300}
              animation="bounce"
              containerClassName="order-1"
            />
            <div className="order-2 text-left">
              <AnimatedTitle className="text-4xl md:text-5xl font-bold mb-4">
                About Me
              </AnimatedTitle>
              <p className="text-xl text-muted-foreground whitespace-pre-wrap">
                {profile.tagline}
              </p>
            </div>
          </div>
        </header>

        {/* Background / Education セクション */}
        <section className="mb-20">
          <SectionTitle>Background & Education</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {educations.map((edu) => (
              <Card key={edu.school || edu.faculty}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {edu.school || edu.faculty}
                  </CardTitle>
                  {edu.school && (
                    <p className="text-sm text-muted-foreground">
                      {edu.faculty}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Hobbies & Interests セクション */}
        <section className="mb-20">
          <SectionTitle>Hobbies & Challenges</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {hobbies.map((hobby) => (
              <Card key={hobby.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{hobby.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {hobby.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Strengths セクション */}
        <section className="mb-20">
          <SectionTitle>Strengths</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((strength) => (
              <Card
                key={strength.title}
                className="h-full border-2 border-primary/10"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {strength.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values セクション */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <SectionTitle className="mb-0">Values</SectionTitle>
            <Mascot
              src="/images/mascot/good.webp"
              alt="グッドサインをする清宮伊織のマスコットキャラクター"
              width={80}
              height={80}
              animation="pop"
              delay={0.2}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="bg-primary/5 border-none">
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience セクション */}
        <section className="mb-20">
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="relative pl-8 border-l-2 border-primary/20 last:border-0 pb-8 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4 items-center text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {exp.role}
                  </span>
                  {exp.period && <span>• {exp.period}</span>}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                {exp.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills セクション */}
        <section className="mb-20">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.name}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-xl font-bold my-6">Interests</h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <Badge
                key={interest}
                variant="outline"
                className="text-base py-2 px-4"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
// Helper Component
const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={`text-3xl font-bold mb-8 relative inline-block ${className}`}>
    {children}
    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full" />
  </h2>
);

export default AboutPage;

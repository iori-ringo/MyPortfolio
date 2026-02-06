import { Badge } from "@/components/shadcn/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { AnimatedTitle } from "@/components/ui/animated-title";
import { Mascot } from "@/components/ui/mascot";
import { interests, values } from "@/data/about";
import { pageMetadata } from "@/data/metadata";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";

export const metadata = pageMetadata.about;

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* ヘッダー */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
            {/* マスコット（Hello）: 左側 (SPは上) */}
            <Mascot
              src="/images/mascot/hello.webp"
              width={250}
              height={250}
              animation="bounce"
              containerClassName="order-1"
            />

            {/* タイトル: 右側 (SPは下) */}
            <AnimatedTitle className="text-4xl md:text-5xl font-bold order-2 md:-ml-16">
              About me
            </AnimatedTitle>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center">
            {profile.tagline}
          </p>
        </header>

        {/* Skills セクション */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.name}>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
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
        </section>

        {/* Values セクション */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold">Values</h2>
            {/* マスコット（Good） */}
            <Mascot
              src="/images/mascot/good.webp"
              width={110}
              height={130}
              animation="pop"
              delay={0.2}
            />
          </div>
          <div className="space-y-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Interests セクション */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Interests</h2>
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

export default AboutPage;

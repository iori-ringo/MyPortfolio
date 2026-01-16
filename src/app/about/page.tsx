import { Mascot } from "@/components/ui/mascot";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";

export const metadata = {
  title: "About | 清宮 伊織",
  description:
    "スキル、興味領域、価値観について。React/Next.js を中心としたフロントエンド開発が専門です。",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* ヘッダー */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
              src="/images/mascot/good.png"
              width={110}
              height={130}
              animation="pop"
              delay={0.2}
            />
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">可読性を重視</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  コードは書く時間より読む時間の方が長い。誰が見ても理解しやすいコードを心がけています。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">型安全な設計</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  TypeScript と Zod
                  を活用し、実行時エラーを未然に防ぐ堅牢な設計を追求しています。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ユーザー体験優先</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  技術的な美しさよりも、実際に使う人にとって価値のある体験を優先しています。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interests セクション */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Interests</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "UI/UX デザイン",
              "パフォーマンス最適化",
              "データ可視化",
              "AI/機械学習",
              "アクセシビリティ",
              "デザインシステム",
            ].map((interest) => (
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

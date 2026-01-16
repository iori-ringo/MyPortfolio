import { Mascot } from "@/components/ui/mascot";
import { WorkCard } from "@/components/works/work-card";
import { works } from "@/data/works";

export const metadata = {
  title: "Works | 清宮 伊織",
  description: "開発した作品一覧。設計判断、技術スタック、改善点を詳細に記載。",
};

const WorksPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center order-2 md:order-1">
            Works
          </h1>
          {/* マスコット（Think） */}
          <Mascot
            src="/images/mascot/think.png"
            width={230}
            height={230}
            animation="float"
            containerClassName="order-1 md:order-2 -ml-0 md:-ml-2 mt-0 md:mt-2"
          />
        </div>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          これまでに開発した作品です。設計判断や技術的な詳細を記載しています。
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {works.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksPage;

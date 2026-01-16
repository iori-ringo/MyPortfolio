import { FileText, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/ui/mascot";
import { paths } from "@/core/paths";

export const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        {/* マスコット（This） */}
        {/* マスコットは下に移動してレイアウト変更 */}

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          お気軽にご連絡ください。新しいプロジェクトやコラボレーションについてお話しできることを楽しみにしています。
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* CTA Buttons: DOM順序通り左側(PC)・上側(SP)に配置 */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href={paths.contact.getHref()}>
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link href={paths.resume.getHref()}>
                <FileText className="mr-2 h-5 w-5" />
                Resume
              </Link>
            </Button>
          </div>
          {/* マスコット（This - 指差し）: 右側(PC)・下側(SP)に配置 */}
          <Mascot
            src="/images/mascot/this.png"
            width={150}
            height={150}
            animation="bounce"
            className="rotate-12 transform"
            // orderクラスを削除
            containerClassName=""
          />
        </div>
      </div>
    </section>
  );
};

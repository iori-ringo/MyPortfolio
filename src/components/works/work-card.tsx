import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { paths } from "@/core/paths";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
};

export const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-2xl">{work.title}</CardTitle>
        <CardDescription>{work.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 技術スタック */}
        <div className="flex flex-wrap gap-2">
          {work.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* ハイライト */}
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-primary">✦ </span>
          {work.highlight}
        </p>

        {/* 役割 */}
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">役割:</span> {work.role}
        </p>

        {/* アクション */}
        <div className="flex gap-3 pt-2">
          <Link
            href={paths.works.detail.getHref(work.slug)}
            className={buttonVariants({ size: "sm" })}
          >
            詳細を見る
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          {work.github && (
            <a
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <FaGithub className="mr-1 h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

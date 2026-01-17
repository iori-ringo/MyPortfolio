"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  url: string;
  icon: LucideIcon;
};

type NavBarProps = {
  items: NavItem[];
  className?: string;
};

export const NavBar = ({ items, className }: NavBarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          // Home("/")は完全一致、その他は前方一致でアクティブ判定
          const isActive =
            item.url === "/" ? pathname === "/" : pathname.startsWith(item.url);

          return (
            <Link
              key={item.name}
              href={item.url}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  // layoutId="lamp" // 削除: ページ遷移時の座標飛びバグ回避のため
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={{ opacity: 0, scale: 0.8 }} // 変更: フェードイン開始状態
                  animate={{ opacity: 1, scale: 1 }} // 変更: フェードイン完了状態
                  exit={{ opacity: 0, scale: 0.8 }} // 追加: フェードアウト（AnimatePresenceがないので即消えるが、念のため定義）
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

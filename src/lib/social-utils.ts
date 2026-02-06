// ソーシャルリンク関連のユーティリティ関数

import type { ContactLinkType } from "@/data/contact";
import { profile } from "@/data/profile";

/**
 * ContactLinkType に対応するURLを取得する
 * @param type - コンタクトリンクのタイプ
 * @returns 対応するURL（emailの場合はmailto:形式）
 */
export const getContactUrl = (type: ContactLinkType): string => {
  switch (type) {
    case "github":
      return profile.social.github;
    case "email":
      return `mailto:${profile.social.email}`;
    case "linkedin":
      return profile.social.linkedin;
    case "x":
      return profile.social.x;
  }
};

/**
 * コンタクトリンクの説明を取得する
 * emailの場合は実際のメールアドレスを返す
 * @param type - コンタクトリンクのタイプ
 * @param fallback - デフォルトの説明文
 * @returns 表示用の説明文
 */
export const getContactDescription = (
  type: ContactLinkType,
  fallback: string,
): string => (type === "email" ? profile.social.email : fallback);

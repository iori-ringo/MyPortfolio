// ルーティングパス定義
// 全てのリンク生成に使用するパス定義
// paths.xxx.getHref() 形式で使用

export const paths = {
  home: { getHref: () => "/" },
  works: {
    getHref: () => "/works",
    detail: { getHref: (slug: string) => `/works/${slug}` },
  },
  about: { getHref: () => "/about" },
  contact: { getHref: () => "/contact" },
  resume: { getHref: () => "/resume" },
} as const;

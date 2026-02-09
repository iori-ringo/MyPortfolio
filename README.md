# Iori Kiyomiya | Frontend Engineer Portfolio

清宮 伊織(きよみや　いおり)のポートフォリオサイトです。
フロントエンドエンジニアとしてのスキルセット、制作実績、および経歴を掲載しています。

**https://iori-frontend-portfolio.vercel.app**

## 🚀 Tech Stack

このプロジェクトは最新のモダンウェブ技術を使用して構築されています。

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) based custom components
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Linter / Formatter**: [Biome](https://biomejs.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## ✨ Key Features

- **Responsive Design**: モバイルからデスクトップまで完全にレスポンシブ対応
- **Interactive UI**: Framer Motionを使用したリッチなアニメーション（マスコット、ナビゲーション等）
- **Performance**: Next.js App Routerによる最適化されたパフォーマンス
- **Accessibility**: セマンティックなマークアップとアクセシビリティへの配慮

## 💡 こだわりポイント

### SEO対策
- JSON-LD構造化データ（Person / CollectionPage）を埋め込み、検索エンジンにコンテンツの意味を正確に伝達
- 各ページに個別のメタデータ（title / description / OGP / Twitter Card）を設定
- `robots.ts` / `sitemap.ts` をNext.jsのAPI経由で動的生成し、クローラビリティを確保

### コード品質
- ESLint + Prettierの代わりに[Biome](https://biomejs.dev/)を採用し、Lint・フォーマットを単一ツールに統合。設定ファイルの削減と高速な実行を実現
- `data/` 配下にコンテンツデータを集約し、UIとデータを明確に分離。ページ追加や内容更新がコンポーネントに影響しない設計
- `core/site-config.ts` でサイト全体の設定を一元管理

### UI / UX
- Framer Motionによるインタラクティブなアニメーション（マスコットキャラクター、バルーン背景、ナビゲーション遷移）
- `next/font` によるGoogle Fonts（Inter + Noto Sans JP）の最適読み込みで、FOUT（Flash of Unstyled Text）を防止

## 🛠️ Getting Started

ローカル環境での実行方法です。

### 1. Clone the repository

```bash
git clone https://github.com/iori-ringo/MyPortfolio.git
cd MyPortfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── home/         # Home page sections (Hero, CTA, Experience, etc.)
│   ├── works/        # Works page components
│   ├── shadcn/       # shadcn/ui based components
│   └── ui/           # Custom UI components (Mascot, Navbar, etc.)
├── core/             # Core configurations (Paths, Site Config)
├── data/             # Static data content
└── lib/              # Utility functions

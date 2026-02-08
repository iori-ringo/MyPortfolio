# KODAWARI.md - 技術的こだわりポイント

このファイルは、ポートフォリオサイト開発における技術的なこだわりや設計思想を記録します。

---

## UI/UX

### shadcn/ui Button + Next.js Link の統合

`@radix-ui/react-slot` の既知の不具合（v1.2.2 以降）により、`Button asChild` + `next/link` の組み合わせが正しく動作しない問題がありました。

**解決策:** shadcn/ui 公式推奨パターンである `buttonVariants` を Link に直接適用

```tsx
// ❌ Before: asChild + Radix Slot（Next.js 15+ で動作不安定）
<Button asChild size="lg">
  <Link href="/works">Works</Link>
</Button>

// ✅ After: buttonVariants を Link に直接適用（公式推奨）
<Link href="/works" className={buttonVariants({ size: "lg" })}>
  Works
</Link>
```

**メリット:**
- Radix Slot のバグに依存しない
- DOM 構造がシンプル（ネストが減少）
- パフォーマンス向上（Slot レイヤーが不要）

---

### ナビゲーションバーのレスポンシブ配置

モバイルでは画面下部、デスクトップでは画面上部に配置するフローティングナビゲーションを実装。

**問題:** `fixed bottom-0 sm:top-0` の CSS で、デスクトップ表示時に `bottom-0` と `top-0` が同時に適用され、透明なコンテナが画面全体を覆い、背後の要素へのクリックをブロック

**解決策:** `sm:bottom-auto` を追加してデスクトップでは bottom を解除

```css
/* ❌ Before: 画面全体を覆う透明コンテナ */
fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50

/* ✅ After: 上部のみに配置 */
fixed bottom-0 sm:bottom-auto sm:top-0 left-1/2 -translate-x-1/2 z-50
```

---

### Contact カードのクリッカブル領域

カード全体をクリック可能にしつつ、内部要素がクリックを妨げないよう設計。

```tsx
<a href={url} className="block">
  <Card className="hover:shadow-lg cursor-pointer">
    <CardHeader className="pointer-events-none">
      {/* 内部コンテンツ */}
    </CardHeader>
  </Card>
</a>
```

**ポイント:**
- `<a>` タグでカード全体をラップ
- `pointer-events-none` で内部要素へのクリックを親に伝播

---

## アイコン管理

### lucide-react から react-icons への移行

GitHub、LinkedIn、Twitter などのソーシャルアイコンを `lucide-react` から `react-icons/fa` に移行。

**理由:**
- `lucide-react` の Github アイコンが非推奨（Deprecated）
- `react-icons` はブランドアイコンを豊富に提供
- 一貫したアイコンスタイルの維持

```tsx
// ❌ Before: lucide-react（非推奨警告）
import { Github } from "lucide-react";

// ✅ After: react-icons（Font Awesome ブランドアイコン）
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
```

---

## SEO / メタデータ

### サイトURL の一元管理と更新

Vercel のプロジェクト名変更に伴い、サイトURLが `https://iori-portfolio.vercel.app` から `https://iori-frontend-portfolio.vercel.app` に変更された。

**設計:**
サイトURLを `src/core/site-config.ts` の `siteConfig.url` に一元管理しており、以下のファイルがすべてこの値を参照する構成になっている。

- `src/app/robots.ts` — Sitemap URL
- `src/app/sitemap.ts` — 各ページの `<loc>`
- `src/app/layout.tsx` — `metadataBase`（canonical、og:image などの基底URL）
- `src/components/json-ld.tsx` — 構造化データの `url` フィールド

**メリット:**
- URL の変更が1箇所で完結し、修正漏れが起きない
- robots.txt、sitemap.xml、canonical、OGP、JSON-LD すべてが自動的に整合する
- Vercel のプロジェクト名やカスタムドメインの変更にも即座に対応できる

---

### JSON-LD 構造化データでの dangerouslySetInnerHTML 排除

JSON-LD（構造化データ）の出力に `dangerouslySetInnerHTML` を使用していたところ、Biome リンターの `lint/security/noDangerouslySetInnerHtml` ルールで警告が発生。

**問題:**
`dangerouslySetInnerHTML` は任意の HTML を DOM に注入できるため、XSS（クロスサイトスクリプティング）のリスクがある。今回のケースでは `JSON.stringify` の出力を渡しているだけなので実害はないが、リンターが検知するのは正当であり、より安全なパターンに置き換えるべき。

**解決策:**
Next.js の `<script>` タグは子要素として文字列を直接受け取れるため、`dangerouslySetInnerHTML` を使わずに記述できる。

```tsx
// ❌ Before: dangerouslySetInnerHTML（Biome 警告）
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>

// ✅ After: 子要素として直接渡す（安全）
<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
```

**メリット:**
- XSS リスクのある API を使わずに同じ出力が得られる
- Biome のセキュリティルールに準拠
- コードがシンプルになり可読性が向上

---

### 静的エクスポート対応（next.config.ts）

`next.config.ts` に `output: "export"` と `images: { unoptimized: true }` を追加し、Vercel 以外の静的ホスティングにも対応できるようにした。

```ts
// ❌ Before
const nextConfig: NextConfig = {
  /* config options here */
};

// ✅ After
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};
```

**目的:**
- `next build` で `out/` ディレクトリに完全な静的 HTML を生成し、GitHub Pages 等にもデプロイ可能にする
- `output: "export"` 時は Next.js の Image Optimization API が使えないため `images: { unoptimized: true }` で明示的にオプトアウト

---

### robots.ts / sitemap.ts の新規追加

検索エンジン向けに `robots.txt` と `sitemap.xml` を Next.js の Metadata API（`MetadataRoute.Robots` / `MetadataRoute.Sitemap`）で生成するファイルを追加。

**robots.ts:**
- 全ページのクロールを許可（`allow: "/"`）
- サイトマップの URL を `siteConfig.url` から動的に生成

**sitemap.ts:**
- 静的ページ（`/`, `/about`, `/works`, `/contact`, `/resume`）と動的ページ（`/works/[slug]`）を一覧化
- `works` データから動的に slug を取得するため、作品を追加するだけで自動的にサイトマップに反映される
- 各ページに `priority` を設定し、トップページを `1.0`、主要ページを `0.8`、個別作品を `0.7` として重要度を明示

**設計判断:**
- `export const dynamic = "force-static"` を指定し、ビルド時に静的ファイルとして生成。ランタイムでの動的生成を防ぎ、`output: "export"` との整合性を確保

---

### JSON-LD 構造化データの追加（json-ld.tsx）

Google のリッチリザルトやナレッジパネルに情報を提供するため、Schema.org の `Person` 型構造化データを `layout.tsx` に埋め込んだ。

**含まれる情報:**
- `name` / `alternateName` — 日本語名・英語名
- `jobTitle` — 職種
- `url` — サイト URL
- `sameAs` — GitHub、LinkedIn、X のプロフィールリンク

**設計判断:**
- 全ページ共通の情報なので `layout.tsx`（ルートレイアウト）に `<PersonJsonLd />` として配置
- データは `profile.ts` と `site-config.ts` から取得し、ハードコーディングを排除

---

### メタデータの siteConfig 集約と OGP / Twitter Card 対応（layout.tsx）

`layout.tsx` のメタデータで直書きしていたタイトルや説明文を `siteConfig` から参照する形に変更し、加えて OGP（Open Graph Protocol）と Twitter Card のメタタグを追加。

```tsx
// ❌ Before: 値の直書き、OGP は最低限、Twitter Card なし
export const metadata: Metadata = {
  title: "清宮 伊織 | Frontend Engineer",
  description: "フロントエンド開発と...",
  openGraph: {
    title: "清宮 伊織 | Frontend Engineer",
    description: "フロントエンド開発と...",
    type: "website",
  },
};

// ✅ After: siteConfig 参照、metadataBase、OGP 画像、Twitter Card 追加
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
};
```

**目的:**
- `metadataBase` を設定することで、相対パス（`/og-image.png`）が自動的に絶対 URL に解決される
- SNS でシェアされた際に OGP 画像が正しく表示されるよう `images` を明示
- Twitter（X）で大きな画像カードを表示するため `summary_large_image` を指定
- タイトル・説明文の重複管理を排除し、`siteConfig` の値を変更するだけで全体に反映

---

### 各ページへの canonical URL 追加（metadata.ts / page.tsx / works/[slug]/page.tsx）

全ページに `alternates.canonical` を設定し、検索エンジンに正規 URL を明示。

**変更箇所:**
- `src/data/metadata.ts` — `PageMetadata` 型に `alternates` フィールドを追加。`/about`, `/works`, `/contact`, `/resume` の各定義に `canonical` を設定
- `src/app/page.tsx` — トップページに `alternates: { canonical: "/" }` を追加
- `src/app/works/[slug]/page.tsx` — 個別作品ページに `alternates: { canonical: `/works/${work.slug}` }` を追加

**目的:**
- URL パラメータ付きアクセスやトレイリングスラッシュの有無で重複ページと判定されることを防ぐ
- 検索エンジンが評価を正しい URL に集約できるようにする

---

### Works ページの SEO 総合改善

Works ページに対して、検索エンジン最適化の観点から以下の9項目を一括で改善。

#### 1. 見出し構造の修正（重要度：高）

作品名が `CardTitle`（`<div>`）で出力されていたため、検索エンジンがページの情報階層を正しく把握できなかった。

```tsx
// ❌ Before: CardTitle（div 要素）
<CardTitle className="text-2xl">{work.title}</CardTitle>

// ✅ After: h2 要素で適切な見出し階層
<h2 className="text-2xl leading-none font-semibold">{work.title}</h2>
```

**見出し階層:** `h1: Works` → `h2: Memo App` / `h2: Portfolio Site`

#### 2. OGP 情報のページ固有化（重要度：高）

`og:title` / `og:description` がトップページと同じ汎用的な内容だったため、Works ページ固有の情報に変更。`og:url` も追加。

```ts
// ❌ Before: OGP なし（layout.tsx のデフォルトがそのまま適用）
{ title: "Works | 清宮 伊織", description: "開発した作品一覧。..." }

// ✅ After: ページ固有の OGP を設定
openGraph: {
  title: "清宮 伊織の作品一覧 | 設計判断と技術詳細",
  description: "フロントエンドエンジニア清宮伊織の作品一覧。Next.js・TypeScript・Electron ...",
  url: "/works",
}
```

#### 3. meta description の充実（重要度：高）

30文字程度だった description を約80文字に拡充し、技術スタック名を含めてクリック率向上を図った。

```
❌ Before: 「開発した作品一覧。設計判断、技術スタック、改善点を詳細に記載。」
✅ After: 「フロントエンドエンジニア清宮伊織の作品一覧。Next.js・TypeScript・Electron などを用いた Web アプリ・デスクトップアプリの設計判断と技術詳細を紹介します。」
```

#### 4. JSON-LD 構造化データの追加（重要度：中）

Schema.org の `CollectionPage` + `CreativeWork` スキーマを Works ページに追加。各作品の名前、説明、URL、技術スタック、GitHub リポジトリを構造化データとして出力。

```tsx
// json-ld.tsx に WorksCollectionJsonLd コンポーネントを追加
<WorksCollectionJsonLd works={works} />
```

**含まれる情報:**
- `CollectionPage` — ページ全体の型・タイトル・著者
- `CreativeWork` — 各作品の名前・説明・URL・codeRepository・keywords

#### 5. セマンティック HTML（重要度：中）

- 作品カードを `<article>` でラップし、各作品が独立したコンテンツであることを明示
- 作品一覧グリッドを `<section aria-label="作品一覧">` で囲み、セクション構造を強化

#### 6. 作品カードへのサムネイル画像追加（重要度：中）

`Work` 型に `thumbnail` フィールド（オプション）を追加し、`WorkCard` コンポーネントでサムネイル画像を表示。`alt` テキストに作品名を含め、Google 画像検索からの流入を見込む。

```tsx
{work.thumbnail && (
  <Image
    src={work.thumbnail}
    alt={`${work.title}のスクリーンショット`}
    width={600} height={338}
  />
)}
```

#### 7. テキストコンテンツの充実（重要度：中）

`Work` 型に `summary` フィールドを追加し、各作品カードに3〜4行の概要テキストを表示。検索エンジンが「薄いコンテンツ」と判断するリスクを軽減。

#### 8. robots メタタグの明示（重要度：低）

Works ページのメタデータに `robots: { index: true, follow: true }` を明示的に追加。

#### 9. sitemap.xml（既対応）

`src/app/sitemap.ts` で既に対応済み。Works ページおよび各作品詳細ページが自動的にサイトマップに含まれる。

**設計判断:**
- `metadata.ts` の型を `PageMetadata`（独自型）から `Metadata`（Next.js 標準）に変更し、OGP・robots など標準フィールドを自然に扱えるようにした
- サムネイル画像のパスは `public/images/works/` に配置する規約とし、画像がない場合は表示をスキップする設計（`thumbnail` は optional）

---

## アクセシビリティ

### Mascot コンポーネントの alt テキスト改善

`Mascot` コンポーネントの `alt` プロパティのデフォルト値が汎用的な `"Mascot"` のままだったため、スクリーンリーダーで意味のある情報が伝わらなかった。

**変更内容:**
- デフォルト値を `"Mascot"` → `"清宮伊織のマスコットキャラクター"` に変更
- 各ページで使用している Mascot に、ポーズや動作を説明する具体的な alt テキストを個別に設定

```tsx
// ❌ Before: 汎用的な alt（何の画像か伝わらない）
alt = "Mascot"

// ✅ After: デフォルト値を日本語に変更 + 各所で具体的な alt を指定
alt = "清宮伊織のマスコットキャラクター"  // デフォルト
alt = "挨拶する清宮伊織のマスコットキャラクター"  // About ページ
alt = "応援する清宮伊織のマスコットキャラクター"  // Hero セクション
alt = "グッドサインをする清宮伊織のマスコットキャラクター"  // Hero / About
alt = "考える清宮伊織のマスコットキャラクター"  // Works ページ
alt = "指差しする清宮伊織のマスコットキャラクター"  // CTA / Contact
```

**目的:**
- スクリーンリーダー利用者に画像の内容を正確に伝える
- WCAG 2.1 Success Criterion 1.1.1（非テキストコンテンツ）への準拠
- SEO においても画像の内容が検索エンジンに正しく伝わる

---

### ナビゲーションバーのセマンティック HTML 化

ナビゲーションバーのルート要素が `<div>` だったため、スクリーンリーダーやブラウザのアクセシビリティツリーでナビゲーションランドマークとして認識されなかった。

**変更内容:**
- `<div>` を `<nav>` に変更
- `aria-label="メインナビゲーション"` を追加

```tsx
// ❌ Before: div（ランドマークなし）
<div className="fixed bottom-0 sm:bottom-auto sm:top-0 ...">

// ✅ After: nav + aria-label（ナビゲーションランドマーク）
<nav aria-label="メインナビゲーション" className="fixed bottom-0 sm:bottom-auto sm:top-0 ...">
```

**目的:**
- スクリーンリーダーの「ランドマーク一覧」機能でナビゲーションとして認識される
- WCAG 2.1 Success Criterion 1.3.1（情報及び関係性）/ 4.1.2（名前・役割・値）への準拠
- 複数のナビゲーション領域がある場合に `aria-label` で区別可能にする

---

## パフォーマンス

### Mascot コンポーネントの priority 制御

`Mascot` コンポーネントの `<Image>` タグで `priority` が常に `true` にハードコーディングされていたのを、props で制御可能に変更。

```tsx
// ❌ Before: 全マスコット画像が priority（LCP リソースとして優先読み込み）
<Image priority ... />

// ✅ After: props で制御、デフォルトは false
interface MascotProps {
  priority?: boolean;  // 追加
}
<Image priority={priority} ... />
```

**適用:**
- ヒーローセクションのマスコット（PC・SP 共）のみ `priority` を付与 → ファーストビューの LCP 改善
- About ページや Works ページなど、スクロール後に表示されるマスコットは `priority={false}`（デフォルト）→ 不要な優先読み込みを抑制

**目的:**
- Lighthouse の LCP スコアを改善しつつ、初期ロードで不要な画像の優先読み込みを避ける
- `priority={true}` は Next.js が `<link rel="preload">` を生成するため、必要な箇所に限定すべき

---

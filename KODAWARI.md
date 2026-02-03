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

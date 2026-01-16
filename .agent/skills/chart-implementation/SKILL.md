---
name: chart-implementation
description: Recharts を使用したチャート実装の手順とパターン
---

# チャート実装スキル

Recharts を使用したチャートコンポーネントの実装手順です。

## 基本方針

- **Server/Client 分離**: Server Component でデータ準備 → Client Component で Recharts 描画
- **Suspense + Skeleton**: 各チャートに Skeleton を用意し、Suspense の fallback に設定

## ファイル構成

### 単体チャート

```
src/app/(...)/_components/<chart-name>/
├── index.tsx      # Server Component（データ取得・準備）
├── client.tsx     # Client Component（Recharts描画）
└── skeleton.tsx   # ローディング用 Skeleton
```

### バリエーションチャート

```
src/app/(...)/_components/<chart-name>/
├── segment.tsx         # Server Component
├── segment-client.tsx  # Client Component
└── segment-skeleton.tsx
```

## 実装パターン

### Server Component（index.tsx）

```typescript
import { Suspense } from 'react'
import { ChartClient } from './client'
import { ChartSkeleton } from './skeleton'
import { getChartData } from '@/features/xxx/services/get-chart-data'

export const Chart = async () => {
  const data = await getChartData()
  
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <ChartClient data={data} />
    </Suspense>
  )
}
```

### Client Component（client.tsx）

```typescript
'use client'

import { ChartContainer, ChartConfig } from '@/shared/shadcn/chart'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/shadcn/card'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'

const chartConfig: ChartConfig = {
  value: {
    label: 'Value',
    color: 'hsl(var(--chart-1))',
  },
}

type Props = {
  data: Array<{ name: string; value: number }>
}

export const ChartClient = ({ data }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>チャートタイトル</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="var(--color-value)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Skeleton（skeleton.tsx）

```typescript
import { Card, CardContent, CardHeader } from '@/shared/shadcn/card'
import { Skeleton } from '@/shared/shadcn/skeleton'

export const ChartSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-32" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-64 w-full" />
      </CardContent>
    </Card>
  )
}
```

## ページでの使用

```typescript
import { Suspense } from 'react'
import { Chart } from '@/app/(...)/_components/chart'
import { ChartSkeleton } from '@/app/(...)/_components/chart/skeleton'

export default function DashboardPage() {
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <Chart />
    </Suspense>
  )
}
```

## コードスタイル

- `import type` を使用して型インポートを明示
- すべての Props は明示的な型定義
- `const ComponentName = (props: Props) => {}` 形式（React.FC は不使用）
- ChartConfig で `--color-<key>` CSS変数を設定

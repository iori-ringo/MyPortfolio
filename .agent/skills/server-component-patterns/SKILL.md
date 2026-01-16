---
name: server-component-patterns
description: Next.js Server Component のデータ取得パターンと Suspense 活用例
---

# Server Component パターンスキル

Next.js App Router における Server Component のベストプラクティス集です。

## 基本方針

**すべてのコンポーネントはデフォルトで Server Component として実装する。**

## Server Component を使用する場合

- データ取得（`features/*/services/` の関数を直接呼び出し）
- データベースアクセス
- バックエンド API の呼び出し
- 認証情報の取得
- 環境変数へのアクセス
- 大きな依存関係の使用（クライアントバンドルに含めない）

## Client Component が必要な場合

以下の場合のみ `'use client'` ディレクティブを追加：

- インタラクション（`onClick`, `onChange` などのイベントハンドラ）
- 状態管理（`useState`, `useReducer`）
- ライフサイクルフック（`useEffect`, `useLayoutEffect`）
- ブラウザ専用 API（`window`, `localStorage` など）
- カスタムフック（`use-xxx.ts`）の使用
- サードパーティライブラリ（Recharts など）の使用

## データ取得パターン

### ✅ 正しい: Server Component でデータ取得

```typescript
// app/(tow_column)/projects/page.tsx
import { getProjects } from '@/features/project-list/services/get-projects'

export default async function ProjectsPage() {
  const projects = await getProjects()
  return <ProjectListSection projects={projects} />
}
```

### ✅ 正しい: Suspense でラップ

```typescript
import { Suspense } from 'react'
import { ProjectListSkeleton } from '@/features/project-list/components/project-list-skeleton'

export default function ProjectsPage() {
  return (
    <Suspense fallback={<ProjectListSkeleton />}>
      <ProjectListContent />
    </Suspense>
  )
}
```

### ❌ 避ける: Client Component でデータ取得

```typescript
'use client'
export const ProjectsPage = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('/api/projects').then(...) // 避ける
  }, [])
}
```

## 複数データソースのパターン

### 並列データ取得

```typescript
export default async function DashboardPage() {
  // Promise.all で並列取得
  const [projects, stats, notifications] = await Promise.all([
    getProjects(),
    getStats(),
    getNotifications(),
  ])

  return (
    <div>
      <StatsSection stats={stats} />
      <ProjectsSection projects={projects} />
      <NotificationsSection notifications={notifications} />
    </div>
  )
}
```

### 独立した Suspense 境界

```typescript
export default function DashboardPage() {
  return (
    <div className="grid gap-4">
      <Suspense fallback={<StatsSkeleton />}>
        <StatsSection />
      </Suspense>
      
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<NotificationsSkeleton />}>
        <NotificationsSection />
      </Suspense>
    </div>
  )
}
```

## Server Component から Client Component へのデータ渡し

```typescript
// Server Component
import { getChartData } from '@/features/dashboard/services/get-chart-data'
import { ChartClient } from './chart-client'

export const ChartSection = async () => {
  const data = await getChartData()
  
  // シリアライズ可能なデータのみ props として渡す
  return <ChartClient data={data} />
}
```

```typescript
// Client Component
'use client'

type Props = {
  data: ChartData // シリアライズ可能な型
}

export const ChartClient = ({ data }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  return (
    <div onClick={() => setSelectedIndex(1)}>
      {/* インタラクティブなUI */}
    </div>
  )
}
```

## エラーハンドリング

### error.tsx を使用

```typescript
// app/(dashboard)/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>エラーが発生しました</h2>
      <button onClick={() => reset()}>再試行</button>
    </div>
  )
}
```

# 株式会社アドバンス コーポレートサイト 開発状況

最終更新: 2025-11-26

## ✅ 完了している機能・ページ

### TOPページ（/）
- [x] HeroSection - メインビジュアルとキャッチコピー
  - ブルー/グリーンのグラデーション背景
  - 実績数値表示（15名、4事業、東京拠点）
  - CTAボタン（無料相談、サービス一覧）
- [x] ServicesSection - 4つの主要事業紹介
  - ホームページ制作
  - システム開発
  - WEBマーケティング事業
  - AI研修事業
- [x] StrengthsSection - 3つの強み
  - 認定代理店としての信頼性（Google/Yahoo/Meta）
  - クリエイティブ機能の内製化
  - 伴走型の支援体制
- [x] WorksHighlightSection - 成果事例3件
  - **画像統合済み**（Unsplash placeholder）
  - ECサイトリニューアル（CV率45%UP）
  - 業務自動化システム導入（作業時間60%削減）
  - リスティング広告最適化（CPA38%改善）
- [x] FlowSection - 5ステップの支援プロセス
  - 無料相談 → 現状分析 → 提案 → 実施・開発 → 改善・伴走
- [x] CompanySummarySection - 会社概要
  - **画像統合済み**（Unsplash placeholder - オフィス写真）
  - 企業理念、基本情報、認定バッジ
- [x] CTASection - お問い合わせ誘導

### 共通コンポーネント
- [x] HeaderNew - ナビゲーション
  - ドロップダウンメニュー対応
  - 全リンク正常動作（basePath対応済み）
- [x] Footer - フッター
  - **カラースキーム統一済み**（Blue/Green）
  - 4カラムレイアウト
  - 会社情報、事業内容、会社情報ページリンク、お問い合わせ
  - 認定代理店バッジ表示
  - 24時間以内返信の記載

### デザインシステム
- [x] カラーパレット統一
  - Primary: #2563EB (Blue)
  - Accent: #10B981 (Green)
  - 全コンポーネントで統一済み
- [x] Tailwind CSS設定
- [x] Framer Motion アニメーション
- [x] レスポンシブデザイン

### インフラ・デプロイ
- [x] Next.js 15 App Router
- [x] GitHub Pages設定
  - basePath: '/advanceHP'
  - Static Export対応
- [x] 自動ビルド＆デプロイ
- [x] 公開URL: https://fuminico.github.io/advanceHP/

---

## 🚧 実装済みだが改善が必要な項目

### 画像リソース
- ⚠️ **Unsplash placeholderを使用中**
  - WorksHighlightSection: 3枚
  - CompanySummarySection: 1枚
  - **今後**: 実際の会社写真・プロジェクト写真に差し替え推奨

### サービス詳細ページ
以下のページは骨組みのみ存在（詳細コンテンツ未充実）:
- /service/homepage/
- /service/system/
- /service/marketing-business/
- /service/ai-training-business/
- /service/corporate-site/
- /service/service-site/
- /service/owned-media/
- /service/recruiting-site/
- /service/lp/
- /service/system-development/
- /service/marketing/
- /service/ai-training/
- /service/listing-ads/
- /service/sns-ads/
- /service/instagram-ads/
- /service/line-ads/
- /service/web-operation/

---

## ❌ 未実装のページ・機能

### 主要ページ
- [ ] /company/ - 会社概要詳細ページ
  - 代表挨拶
  - 沿革
  - アクセスマップ
- [ ] /works/ - 実績一覧ページ
  - 詳細な事例紹介
  - フィルタリング機能
- [ ] /news/ - お知らせ一覧
  - 新着情報の投稿システム
- [ ] /recruit/ - 採用情報
  - 募集要項
  - 社員インタビュー
- [ ] /privacy/ - プライバシーポリシー
- [ ] /contact/ - お問い合わせフォーム
  - フォーム実装
  - バックエンド送信処理
- [ ] /contact/thanks/ - 送信完了ページ

### 機能
- [ ] お問い合わせフォーム送信機能
- [ ] ブログ・お知らせCMS連携
- [ ] SEO最適化
  - メタタグ設定
  - OGP設定
  - sitemap.xml
  - robots.txt
- [ ] Google Analytics設定
- [ ] パフォーマンス最適化
  - 画像の最適化（Next.js Image）
  - Lazy loading

---

## 📋 次のステップ（優先度順）

### 優先度A（必須）
1. **お問い合わせフォーム実装**
   - /contact/ ページの完全実装
   - バックエンド送信処理
   - /contact/thanks/ 完了ページ

2. **画像の差し替え**
   - Unsplash placeholderから実際の写真へ
   - 必要枚数: 最低4枚（Works 3枚 + Company 1枚）

3. **主要サービスページの詳細化**
   - /service/homepage/
   - /service/system/
   - /service/marketing-business/
   - /service/ai-training-business/

### 優先度B（重要）
4. **会社概要ページ完成**
   - /company/
   - 代表挨拶、沿革、アクセス

5. **実績一覧ページ**
   - /works/
   - 詳細な事例紹介

6. **SEO基本設定**
   - メタタグ、OGP、sitemap

### 優先度C（あると良い）
7. **採用ページ** - /recruit/
8. **お知らせページ** - /news/
9. **プライバシーポリシー** - /privacy/
10. **Google Analytics連携**

---

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **デプロイ**: GitHub Pages (Static Export)
- **画像**: 現在Unsplash API（placeholder）

---

## 📝 開発メモ

### basePath設定の注意点
- `next.config.js`で`basePath: '/advanceHP'`を設定
- すべての`<Link>`コンポーネントのhrefは`basePath`なしで記述
- Next.jsが自動的にプレフィックスを追加

### カラーシステム
```css
Primary Blue: #2563EB (bg-blue-600)
Accent Green: #10B981 (bg-green-500)
Gradient: from-blue-600 to-green-500
```

### リンクパターン
```tsx
// 正しい書き方
<Link href="/service/homepage/">ホームページ制作</Link>

// 間違い（basePath重複）
<Link href="/advanceHP/service/homepage/">ホームページ制作</Link>
```

---

## 🎯 目標

### 短期目標（1-2週間）
- お問い合わせフォーム実装
- 主要4サービスページの詳細化
- 実画像への差し替え

### 中期目標（1ヶ月）
- 全ページコンテンツ充実
- SEO最適化
- Analytics設定

### 長期目標（2-3ヶ月）
- ブログ・お知らせCMS構築
- 採用ページ充実
- パフォーマンス最適化

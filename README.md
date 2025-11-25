# 株式会社アドバンス コーポレートサイト

株式会社アドバンスの公式コーポレートサイトです。Next.js 15 + TypeScript + Tailwind CSSで構築されています。

## 🚀 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UI**: React 19
- **フォント**: Inter, Noto Sans JP

## 🎨 デザインテーマ

Popsy Illustrations Amberテーマをベースに、カラフルでリッチなデザインを実現しています。

### カラーパレット
- **Teal**: `#14b8a6` (メイン)
- **Amber**: `#f59e0b` (アクセント)
- **Coral**: `#ff6b6b` (サブ)
- **Purple**: `#9333ea` (AI研修)

## 📁 プロジェクト構造

```
advance-hp/
├── app/
│   ├── page.tsx                 # トップページ
│   ├── service/
│   │   ├── page.tsx            # 事業内容トップ（4つの柱）
│   │   ├── homepage/           # ホームページ制作事業
│   │   ├── system/             # システム開発事業
│   │   ├── marketing-business/ # WEBマーケティング事業
│   │   ├── ai-training-business/ # AI研修事業
│   │   ├── corporate-site/     # 個別サービス詳細
│   │   ├── service-site/
│   │   ├── owned-media/
│   │   ├── recruiting-site/
│   │   ├── lp/
│   │   ├── web-operation/
│   │   ├── system-development/
│   │   ├── marketing/
│   │   ├── listing-ads/
│   │   ├── sns-ads/
│   │   ├── instagram-ads/
│   │   ├── line-ads/
│   │   └── ai-training/
│   ├── company/                # 会社概要
│   ├── recruit/                # 採用情報
│   ├── contact/                # お問い合わせ
│   └── api/
│       └── contact/            # お問い合わせAPI
├── components/
│   ├── Header.tsx              # ヘッダーナビゲーション
│   ├── Footer.tsx              # フッター
│   └── ServiceTemplate.tsx     # サービス詳細ページテンプレート
└── public/                     # 静的ファイル
```

## 🏗️ サイト構造

### 4つの事業の柱

1. **ホームページ制作** (`/service/homepage`)
   - コーポレートサイト制作
   - サービスサイト制作
   - オウンドメディア制作
   - 採用サイト制作
   - LP制作
   - WEBサイト運用

2. **システム開発** (`/service/system`)
   - スマートフォンアプリ開発
   - Webアプリケーション開発
   - クラウドインフラ構築

3. **WEBマーケティング事業** (`/service/marketing-business`)
   - リスティング広告運用代行
   - SNS広告運用代行
   - Instagram広告運用代行
   - LINE広告運用代行

4. **AI研修事業** (`/service/ai-training-business`)
   - AIリーダー育成プログラム
   - カスタムカリキュラム設計
   - 実践型研修

## 🛠️ セットアップ

### 必要な環境
- Node.js 18.x以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/fuminico/advanceHP.git
cd advanceHP

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

開発サーバーが起動したら、ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスしてください。

## 📝 利用可能なスクリプト

```bash
# 開発サーバーを起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバーを起動
npm start

# Lintチェック
npm run lint
```

## 🎯 主な機能

- ✅ **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- ✅ **スムーススクロール**: ページ内アニメーション
- ✅ **お問い合わせフォーム**: バリデーション付きフォーム
- ✅ **SEO最適化**: メタタグ、構造化データ対応
- ✅ **高速表示**: Next.js 15のApp Routerによる最適化
- ✅ **ドロップダウンメニュー**: サービスナビゲーション
- ✅ **ハンバーガーメニュー**: モバイル対応メニュー

## 📄 ページ一覧

- `/` - トップページ
- `/service` - 事業内容（4つの柱）
- `/service/homepage` - ホームページ制作事業
- `/service/system` - システム開発事業
- `/service/marketing-business` - WEBマーケティング事業
- `/service/ai-training-business` - AI研修事業
- `/company` - 会社概要
- `/recruit` - 採用情報
- `/contact` - お問い合わせ
- `/contact/thanks` - お問い合わせ完了

## 🔧 カスタマイズ

### 色の変更
`tailwind.config.js` でカラーパレットをカスタマイズできます。

### コンテンツの編集
各ページのコンテンツは `app/` ディレクトリ内の対応する `.tsx` ファイルで編集できます。

### お問い合わせフォームのメール送信設定
お問い合わせフォームのメール送信機能を有効にするには、`app/api/contact/route.ts` 内のコメントアウトされた部分を参考に、SendGridなどのメール送信サービスを設定してください。

## 📈 今後の拡張予定

- [ ] メール送信機能の実装（SendGrid / Mailgun等）
- [ ] CMS統合（ニュース・実績記事の管理）
- [ ] Google Analytics連携
- [ ] サイトマップ生成
- [ ] OGP画像の最適化

## 📞 会社情報

- **会社名**: 株式会社アドバンス
- **設立**: 2016年8月1日
- **所在地**: 東京都新宿区西新宿7-7-26 ワコーレ新宿第一ビル1117号室
- **電話**: 03-5937-0296
- **営業時間**: 平日10:00-19:00

## 📜 ライセンス

Copyright © 2024 株式会社アドバンス. All rights reserved.

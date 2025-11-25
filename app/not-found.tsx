import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-amber-50 to-white">
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="text-9xl font-bold gradient-text mb-4">404</div>
          <div className="text-6xl mb-6">🔍</div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          ページが見つかりません
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          お探しのページは移動したか、<br className="sm:hidden" />削除された可能性があります。<br />
          URLをご確認いただくか、<br className="sm:hidden" />下記のリンクからお探しください。
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto mb-8">
          <h2 className="font-bold text-lg text-gray-800 mb-4">おすすめのページ</h2>
          <div className="space-y-3 text-left">
            <Link href="/" className="block p-3 hover:bg-teal-50 rounded-lg transition-colors text-gray-700 hover:text-teal-600">
              <div className="flex items-center gap-3">
                <span className="text-xl">🏠</span>
                <span className="font-medium">トップページ</span>
              </div>
            </Link>
            <Link href="/service" className="block p-3 hover:bg-teal-50 rounded-lg transition-colors text-gray-700 hover:text-teal-600">
              <div className="flex items-center gap-3">
                <span className="text-xl">💼</span>
                <span className="font-medium">事業内容</span>
              </div>
            </Link>
            <Link href="/company" className="block p-3 hover:bg-teal-50 rounded-lg transition-colors text-gray-700 hover:text-teal-600">
              <div className="flex items-center gap-3">
                <span className="text-xl">🏢</span>
                <span className="font-medium">会社概要</span>
              </div>
            </Link>
            <Link href="/contact" className="block p-3 hover:bg-teal-50 rounded-lg transition-colors text-gray-700 hover:text-teal-600">
              <div className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <span className="font-medium">お問い合わせ</span>
              </div>
            </Link>
          </div>
        </div>

        <Link href="/" className="btn-primary inline-block">
          トップページへ戻る
        </Link>
      </div>
    </div>
  );
}

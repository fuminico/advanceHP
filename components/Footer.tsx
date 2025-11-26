import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-lg font-bold">株式会社アドバンス</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              地域企業のデジタル化を伴走しながら支援し、<br />
              持続的な成長を実現する
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>〒160-0022</p>
              <p>東京都新宿区新宿六丁目7番3号</p>
              <p className="mt-3 text-blue-300 font-semibold">
                Google Partner・Yahoo・Meta 認定代理店
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">事業内容</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/service/homepage/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  ホームページ制作
                </Link>
              </li>
              <li>
                <Link href="/service/system/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  システム開発
                </Link>
              </li>
              <li>
                <Link href="/service/marketing-business/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  WEBマーケティング事業
                </Link>
              </li>
              <li>
                <Link href="/service/ai-training-business/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  AI研修事業
                </Link>
              </li>
            </ul>
          </div>

          {/* More Pages */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-green-400">会社情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/company/" className="text-gray-300 hover:text-green-400 transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/works/" className="text-gray-300 hover:text-green-400 transition-colors">
                  実績紹介
                </Link>
              </li>
              <li>
                <Link href="/news/" className="text-gray-300 hover:text-green-400 transition-colors">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link href="/privacy/" className="text-gray-300 hover:text-green-400 transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">お問い合わせ</h3>
            <p className="text-gray-300 text-sm mb-4">
              サービスに関するご相談は<br />
              お気軽にお問い合わせください
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm"
            >
              無料相談はこちら
            </Link>
            <div className="mt-6 text-gray-400 text-xs">
              <p>お問い合わせから24時間以内にご返信</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 株式会社アドバンス All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

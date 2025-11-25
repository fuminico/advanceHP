import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-amber-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-lg font-bold">株式会社アドバンス</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              デジタルビジネスの成功を<br />
              ワンストップでサポート
            </p>
            <div className="text-gray-400 text-sm">
              <p>〒160-0022</p>
              <p>東京都新宿区新宿六丁目7番3号</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-400">事業内容</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/service/corporate-site" className="text-gray-300 hover:text-teal-400 transition-colors">
                  コーポレートサイト制作
                </Link>
              </li>
              <li>
                <Link href="/service/service-site" className="text-gray-300 hover:text-teal-400 transition-colors">
                  サービスサイト制作
                </Link>
              </li>
              <li>
                <Link href="/service/owned-media" className="text-gray-300 hover:text-teal-400 transition-colors">
                  オウンドメディア制作
                </Link>
              </li>
              <li>
                <Link href="/service/recruiting-site" className="text-gray-300 hover:text-teal-400 transition-colors">
                  採用サイト制作
                </Link>
              </li>
              <li>
                <Link href="/service/lp" className="text-gray-300 hover:text-teal-400 transition-colors">
                  LP制作
                </Link>
              </li>
              <li>
                <Link href="/service/system-development" className="text-gray-300 hover:text-teal-400 transition-colors">
                  システム開発
                </Link>
              </li>
            </ul>
          </div>

          {/* More Services & Pages */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-400">サービス・情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/service/marketing" className="text-gray-300 hover:text-teal-400 transition-colors">
                  WEBマーケティング
                </Link>
              </li>
              <li>
                <Link href="/service/ai-training" className="text-gray-300 hover:text-teal-400 transition-colors">
                  AI研修事業
                </Link>
              </li>
              <li>
                <Link href="/recruit" className="text-gray-300 hover:text-teal-400 transition-colors">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-gray-300 hover:text-teal-400 transition-colors">
                  会社概要
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-400">お問い合わせ</h3>
            <p className="text-gray-300 text-sm mb-4">
              サービスに関するご相談は<br />
              お気軽にお問い合わせください
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm"
            >
              無料相談はこちら
            </Link>
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

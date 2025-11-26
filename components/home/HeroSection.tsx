'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden pt-20">
      {/* 背景の装飾 */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <div className="space-y-8">
            {/* 小見出し */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <span className="inline-block bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 rounded-full text-sm font-semibold text-blue-700">
                デジタルビジネスのパートナー
              </span>
            </motion.div>

            {/* メインキャッチコピー */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              地域企業のDXと成長を、
              <br />
              <span className="gradient-text">伴走しながら支えるパートナー</span>
            </motion.h1>

            {/* サブコピー */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              Web制作、システム開発、広告運用、AI研修まで。
              <br />
              中小企業のデジタル化を、専門知識がなくても相談できる体制で支援します。
            </motion.p>

            {/* CTAボタン */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                無料相談を申し込む
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/service/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                サービスを見る
              </Link>
            </motion.div>

            {/* 実績数値 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-8 pt-6 border-t border-gray-200"
            >
              <div>
                <div className="text-3xl font-bold text-blue-600">15名</div>
                <div className="text-sm text-gray-600">専門スタッフ</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">4事業</div>
                <div className="text-sm text-gray-600">一気通貫サポート</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700">東京</div>
                <div className="text-sm text-gray-600">新宿拠点</div>
              </div>
            </motion.div>
          </div>

          {/* 右側：ビジュアル */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* 背景装飾 */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-3xl transform rotate-6 opacity-20" />

              {/* メインコンテンツ */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {/* サービスアイコンカード */}
                  {[
                    { icon: '🌐', title: 'ホームページ制作', color: 'from-blue-400 to-blue-600' },
                    { icon: '💻', title: 'システム開発', color: 'from-green-400 to-green-600' },
                    { icon: '📊', title: 'マーケティング', color: 'from-orange-400 to-orange-600' },
                    { icon: '🤖', title: 'AI研修', color: 'from-purple-400 to-purple-600' },
                  ].map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`bg-gradient-to-br ${service.color} rounded-2xl p-6 text-white shadow-lg cursor-pointer`}
                    >
                      <div className="text-4xl mb-2">{service.icon}</div>
                      <div className="text-sm font-semibold">{service.title}</div>
                    </motion.div>
                  ))}
                </div>

                {/* 追加の装飾要素 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">ワンストップサービス</div>
                      <div className="text-sm text-gray-600">企画から運用まで一貫サポート</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

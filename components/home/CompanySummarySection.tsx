'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '../ui/AnimatedSection';

export default function CompanySummarySection() {
  const companyInfo = {
    name: '株式会社アドバンス',
    ceo: '吉澤 仁',
    address: '東京都新宿区新宿六丁目7番3号',
    employees: '15名（業務委託含む）',
    philosophy: '地域企業のデジタル化を伴走しながら支援し、持続的な成長を実現する',
  };

  return (
    <AnimatedSection className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左側：画像エリア */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* 画像が用意されるまでの仮表示 */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-white to-green-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏢</div>
                  <div className="text-gray-600">
                    明るいオフィス風景
                    <br />
                    <span className="text-sm">
                      🖼️ 画像プロンプト: #3 会社情報
                    </span>
                  </div>
                </div>
              </div>
              {/* 実際の画像を使用する場合
              <Image
                src="/images/company/office.jpg"
                alt="株式会社アドバンス オフィス"
                fill
                className="object-cover"
              />
              */}

              {/* 装飾要素 */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-green-400 rounded-full opacity-20 blur-2xl" />
            </div>
          </motion.div>

          {/* 右側：会社情報 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* セクションヘッダー */}
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Company
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-gray-900">
                <span className="gradient-text">会社概要</span>
              </h2>
            </div>

            {/* 理念 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 mb-2">企業理念</div>
                  <p className="text-gray-600 leading-relaxed">
                    {companyInfo.philosophy}
                  </p>
                </div>
              </div>
            </div>

            {/* 基本情報 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-24 text-sm font-semibold text-gray-500">会社名</div>
                <div className="flex-1 text-gray-900">{companyInfo.name}</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-24 text-sm font-semibold text-gray-500">代表者</div>
                <div className="flex-1 text-gray-900">代表取締役 {companyInfo.ceo}</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-24 text-sm font-semibold text-gray-500">所在地</div>
                <div className="flex-1 text-gray-900">{companyInfo.address}</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-24 text-sm font-semibold text-gray-500">従業員数</div>
                <div className="flex-1 text-gray-900">{companyInfo.employees}</div>
              </div>
            </div>

            {/* 認定バッジ */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    Google Partner・Yahoo・Meta 認定代理店
                  </div>
                  <div className="text-gray-600 text-xs">
                    最新のプラットフォーム情報と技術で支援
                  </div>
                </div>
              </div>
            </div>

            {/* 詳細へのリンク */}
            <Link
              href="/company/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              会社情報の詳細を見る
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
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

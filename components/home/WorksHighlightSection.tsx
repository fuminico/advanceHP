'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '../ui/AnimatedSection';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function WorksHighlightSection() {
  const works = [
    {
      id: 1,
      title: 'ECサイトリニューアル',
      industry: '小売業',
      serviceType: 'Web制作',
      result: 'CV率 45% UP',
      description: 'ユーザビリティを重視したサイト設計により、購入完了率が大幅に向上。',
      image: '/images/works/work-01.jpg', // 🖼️ 画像プロンプト: #5 実績紹介
      tags: ['EC', 'UX改善'],
    },
    {
      id: 2,
      title: '業務自動化システム導入',
      industry: '製造業',
      serviceType: 'AI/業務効率化',
      result: '作業時間 60% 削減',
      description: 'RPA導入により定型業務を自動化。従業員は付加価値の高い業務に集中。',
      image: '/images/works/work-02.jpg', // 🖼️ 画像プロンプト: #5 実績紹介
      tags: ['RPA', '業務効率化'],
    },
    {
      id: 3,
      title: 'リスティング広告最適化',
      industry: 'サービス業',
      serviceType: '広告運用',
      result: 'CPA 38% 改善',
      description: 'AI分析とクリエイティブ改善でコンバージョン単価を大幅に削減。',
      image: '/images/works/work-03.jpg', // 🖼️ 画像プロンプト: #5 実績紹介
      tags: ['Google広告', 'CV改善'],
    },
  ];

  return (
    <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-gray-900">
            <span className="gradient-text">成果事例</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            数値で証明する、確かな実績
          </p>
        </motion.div>

        {/* 実績カードグリッド */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* 画像エリア */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-green-100 overflow-hidden">
                  {/* 画像が用意されるまでの仮表示 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <div className="text-sm text-gray-600">{work.serviceType}</div>
                    </div>
                  </div>
                  {/* 実際の画像を使用する場合
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>

                {/* コンテンツエリア */}
                <div className="p-6">
                  {/* タグ */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* タイトル */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {work.title}
                  </h3>

                  {/* 業種・サービス */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span>{work.industry}</span>
                    <span>•</span>
                    <span>{work.serviceType}</span>
                  </div>

                  {/* 成果 */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 mb-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                      {work.result}
                    </div>
                  </div>

                  {/* 説明 */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* すべて見るボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/works/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            すべての実績を見る
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
    </AnimatedSection>
  );
}

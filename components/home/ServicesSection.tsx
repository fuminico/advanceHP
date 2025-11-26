'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '../ui/AnimatedSection';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function ServicesSection() {
  const services = [
    {
      icon: '🌐',
      title: 'ホームページ制作',
      description: 'コーポレートサイトからサービスサイト、オウンドメディア、採用サイト、LP制作、運用代行まで。目的に応じた最適なWebサイトを企画から運用まで一気通貫で支援します。',
      features: ['コンサル型制作', 'SEO内部対策', '運用サポート'],
      link: '/service/homepage/',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: '💻',
      title: 'システム開発',
      description: 'スマホアプリ、Webアプリケーション、AWSクラウドインフラ構築まで。デザインと技術の融合で、ユーザーのエンゲージメントを最大化するプロダクトを開発します。',
      features: ['フルスタック開発', 'AWS構築', 'JSTQB品質保証'],
      link: '/service/system/',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: '📊',
      title: 'WEBマーケティング事業',
      description: 'Google Partner・Yahoo認定代理店として、リスティング広告、SNS広告（Instagram・LINE等）の運用を代行。LP・バナー改善まで社内完結で成果を最大化します。',
      features: ['認定代理店', 'クリエイティブ内製', 'AI最適化'],
      link: '/service/marketing-business/',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: '🤖',
      title: 'AI研修事業',
      description: '学ぶだけで終わらず、手を動かして定着させ、チームが自走する力を育てるAIリーダー育成プログラム。企業ごとの課題に応じてゼロからカリキュラムを設計します。',
      features: ['カスタム設計', '実践型学習', '受講後フォロー'],
      link: '/service/ai-training-business/',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <AnimatedSection className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-gray-900">
            <span className="gradient-text">4つの事業の柱</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            企業のデジタル変革を支援する、包括的なサービスを提供しています
          </p>
        </motion.div>

        {/* サービスカードグリッド */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Link href={service.link}>
                <div className={`${service.bgColor} rounded-2xl p-8 h-full border-2 border-transparent hover:border-opacity-50 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-2xl`}>
                  {/* アイコンとタイトル */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* 説明 */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* 特徴リスト */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 font-medium shadow-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* リンク */}
                  <div className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-semibold flex items-center group-hover:translate-x-2 transition-transform`}>
                    詳しく見る
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
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
            href="/service/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            すべてのサービスを見る
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

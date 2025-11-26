'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

export default function StrengthsSection() {
  const strengths = [
    {
      icon: '✓',
      title: '認定代理店としての信頼性',
      description:
        'Google Partner、Yahoo!マーケティングソリューションパートナー、Meta Business Partnersとして認定された広告代理店です。最新の情報と媒体連携により、広告成果とビジネス利益を最大化します。',
      bgGradient: 'from-blue-100 to-blue-200',
      iconGradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: '🔧',
      title: 'クリエイティブ機能の内製化',
      description:
        'LP、バナー、ホームページ制作の専門部署を完備し、広告運用とクリエイティブ制作を社内完結。広告効果に精通したチームとの連携で、素早く的確にPDCAを回し成果を最大化します。',
      bgGradient: 'from-green-100 to-green-200',
      iconGradient: 'from-green-400 to-green-600',
    },
    {
      icon: '🤝',
      title: '伴走型の支援体制',
      description:
        '中小企業の現場に寄り添い、専門知識がなくても相談できる体制を整えています。企画から運用、改善まで一気通貫でサポートし、成果が出るまで継続的に伴走します。',
      bgGradient: 'from-orange-100 to-orange-200',
      iconGradient: 'from-orange-400 to-orange-600',
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
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Our Strengths
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-gray-900">
            アドバンスが<span className="gradient-text">選ばれる理由</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            確かな実績と技術力で、お客様のビジネス成長をサポートします
          </p>
        </motion.div>

        {/* 強みカード */}
        <div className="space-y-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* アイコン */}
                  <div
                    className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${strength.bgGradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}
                  >
                    <span className="text-4xl">{strength.icon}</span>
                  </div>

                  {/* コンテンツ */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {strength.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>

                  {/* 装飾的な番号 */}
                  <div className="hidden lg:block flex-shrink-0">
                    <div className={`text-6xl font-bold bg-gradient-to-br ${strength.iconGradient} bg-clip-text text-transparent opacity-20`}>
                      0{index + 1}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 追加のCTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg mb-1">
                  Google Partner・Yahoo・Meta認定代理店
                </div>
                <div className="text-gray-600">
                  確かな技術力と丁寧なサポートで、地域企業のデジタル化を支援しています
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

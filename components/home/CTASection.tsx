'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '../ui/AnimatedSection';

export default function CTASection() {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* アイコン */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
          </motion.div>

          {/* 見出し */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            デジタルビジネスの成功を
            <br />
            一緒に実現しませんか？
          </motion.h2>

          {/* サブテキスト */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl mb-8 text-teal-50 leading-relaxed"
          >
            無料相談で、貴社のビジネス課題をお聞かせください。
            <br />
            経験豊富なコンサルタントが、最適なソリューションをご提案いたします。
          </motion.p>

          {/* ボタンエリア */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/advanceHP/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 hover:bg-gray-100 font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              無料相談を申し込む
            </Link>
            <Link
              href="/advanceHP/service"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              サービス詳細を見る
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

          {/* 特徴リスト */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid sm:grid-cols-3 gap-6 text-left"
          >
            {[
              {
                icon: '⚡',
                title: '即日対応',
                description: 'お問い合わせから24時間以内にご返信',
              },
              {
                icon: '💰',
                title: '明確な料金',
                description: '事前見積もりで追加費用なし',
              },
              {
                icon: '🤝',
                title: '柔軟な対応',
                description: '小規模から大規模案件まで対応可能',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <div className="font-bold text-lg mb-2">{feature.title}</div>
                <div className="text-teal-100 text-sm">{feature.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

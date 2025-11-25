'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // スクロールアニメーション
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-amber-50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-coral-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-block bg-gradient-to-r from-teal-100 to-amber-100 px-4 py-2 rounded-full text-sm font-semibold text-teal-700 mb-4">
                デジタルビジネスのパートナー
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                ビジネスの成長を<br />
                <span className="gradient-text">加速させる</span><br />
                デジタルソリューション
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                システム開発からWEBマーケティング、AI研修まで。<br />
                貴社のデジタル戦略を<strong>ワンストップ</strong>でサポートします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="btn-primary text-center">
                  無料相談を申し込む
                </Link>
                <Link href="/service" className="btn-secondary text-center">
                  サービスを見る
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-6 text-sm text-gray-600">
                <div>
                  <div className="text-2xl font-bold text-teal-600">15+</div>
                  <div>プロフェッショナル</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">100+</div>
                  <div>プロジェクト実績</div>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Illustration Placeholder - Popsy Style */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-amber-400 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:-rotate-2 transition-transform duration-500">
                  <div className="space-y-6">
                    {/* Illustration elements */}
                    <div className="flex items-center gap-4 bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-2xl">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">システム開発</div>
                        <div className="text-sm text-gray-600">最新技術で実装</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-2xl">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">WEBデザイン</div>
                        <div className="text-sm text-gray-600">魅力的なUI/UX</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gradient-to-r from-coral-50 to-coral-100 p-4 rounded-2xl">
                      <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">マーケティング</div>
                        <div className="text-sm text-gray-600">成果にコミット</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-container bg-white">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">OUR SERVICES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="gradient-text">包括的な</span>サービスラインナップ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            企業のデジタル変革を支援する、幅広いサービスを提供しています
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Card 1 */}
          <Link href="/service/system-development" className="card card-hover group fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">システム開発</h3>
            <p className="text-gray-600 text-sm mb-4">
              アプリ開発からクラウド構築まで、デザインと技術を融合したプロダクト開発
            </p>
            <div className="text-teal-600 font-semibold text-sm flex items-center">
              詳しく見る
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Service Card 2 */}
          <Link href="/service/corporate-site" className="card card-hover group fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">ホームページ制作</h3>
            <p className="text-gray-600 text-sm mb-4">
              企業サイトからLP、採用サイトまで、目的に応じた最適なサイトを制作
            </p>
            <div className="text-amber-600 font-semibold text-sm flex items-center">
              詳しく見る
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Service Card 3 */}
          <Link href="/service/marketing" className="card card-hover group fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">WEBマーケティング</h3>
            <p className="text-gray-600 text-sm mb-4">
              リスティング広告、SNS広告運用で、ビジネスの成長を加速
            </p>
            <div className="text-coral-600 font-semibold text-sm flex items-center">
              詳しく見る
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Service Card 4 */}
          <Link href="/service/ai-training" className="card card-hover group fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">AI研修事業</h3>
            <p className="text-gray-600 text-sm mb-4">
              実務課題を題材に、チームが自走するAI活用力を育成
            </p>
            <div className="text-purple-600 font-semibold text-sm flex items-center">
              詳しく見る
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12 fade-in-up">
          <Link href="/service" className="btn-primary inline-block">
            すべてのサービスを見る
          </Link>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-container bg-gradient-to-br from-teal-50 to-amber-50">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">OUR STRENGTHS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            アドバンスが<span className="gradient-text">選ばれる理由</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">ワンストップ対応</h3>
            <p className="text-gray-600 leading-relaxed">
              企画・設計からデザイン、開発、マーケティング、運用まで。すべてを社内で完結できる体制で、スピーディな対応を実現します。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">💡</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">コンサルティング型</h3>
            <p className="text-gray-600 leading-relaxed">
              単なる制作会社ではありません。ビジネス課題を深く理解し、成果にコミットしたコンサルティング型の制作・開発を提供します。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-coral-100 to-coral-200 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">成果重視の運用</h3>
            <p className="text-gray-600 leading-relaxed">
              制作後の成果が重要です。データ分析、A/Bテスト、継続的な改善により、ビジネスの成長を長期的にサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-teal-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            デジタルビジネスの成功を<br className="sm:hidden" />一緒に実現しませんか？
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-teal-50">
            無料相談で、貴社のビジネス課題をお聞かせください。<br />
            最適なソリューションをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              無料相談を申し込む
            </Link>
            <Link href="/service" className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              サービス詳細を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

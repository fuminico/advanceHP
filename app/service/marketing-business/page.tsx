'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function MarketingBusinessPage() {
  useEffect(() => {
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

  const services = [
    {
      title: 'リスティング広告運用代行',
      description: 'Google・Yahoo広告で成果を最大化。認定資格保有者による運用',
      link: '/service/listing-ads',
      icon: '🎯',
    },
    {
      title: 'SNS広告運用代行',
      description: 'Facebook・Instagram・X・LINE・TikTok広告で潜在顧客にリーチ',
      link: '/service/sns-ads',
      icon: '📱',
    },
    {
      title: 'Instagram 広告運用代行',
      description: 'Meta Business Partners認定。ビジュアル型で魅力的に訴求',
      link: '/service/instagram-ads',
      icon: '📷',
    },
    {
      title: 'LINE 広告運用代行',
      description: '9,200万人への高いリーチ。精密なターゲティング',
      link: '/service/line-ads',
      icon: '💬',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-coral-500 via-coral-600 to-coral-700 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">📊</div>
            <span className="text-coral-100 font-semibold text-sm uppercase tracking-wider">WEB MARKETING</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              WEBマーケティング事業
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed opacity-90">
              リスティング広告、SNS広告運用で、<br />
              ビジネスの成長を加速します。
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container bg-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-coral-400 to-coral-600 bg-clip-text text-transparent">
              提供サービス
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="card card-hover group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-2xl flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
              <div className="bg-gradient-to-r from-coral-400 to-coral-600 bg-clip-text text-transparent font-semibold text-sm flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section-container bg-gradient-to-br from-coral-50 to-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-coral-400 to-coral-600 bg-clip-text text-transparent">
              WEBマーケティングの特長
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-coral-100 to-coral-200 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              🎯
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">認定資格保有</h3>
            <p className="text-gray-600 leading-relaxed">
              Google Partner、Yahoo!マーケティングソリューションパートナー認定。全員が認定資格を所有しています。
            </p>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-coral-100 to-coral-200 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              ✨
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">クリエイティブ連携</h3>
            <p className="text-gray-600 leading-relaxed">
              LP、バナー、サイトの分析・改善、A/Bテストまで社内で1社完結。本質的な改善が可能です。
            </p>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-coral-100 to-coral-200 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              📈
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">ビジネス利益重視</h3>
            <p className="text-gray-600 leading-relaxed">
              貴社のビジネスに向き合い理解し、広告成果だけでなくビジネス利益の最大化を目指します。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-coral-500 to-coral-600 text-white">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            貴社のビジネス課題をお聞かせください。<br />
            最適なソリューションをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-coral-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              無料相談を申し込む
            </Link>
            <Link href="/service" className="border-2 border-white text-white hover:bg-white hover:text-coral-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              事業内容一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

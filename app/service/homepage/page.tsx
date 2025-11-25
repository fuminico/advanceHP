'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function HomepagePage() {
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
      title: 'コーポレートサイト制作',
      description: '企業の信頼性とブランディングを強化する、ビジネス課題を解決するコンサル型制作',
      link: '/service/corporate-site',
      icon: '🏢',
    },
    {
      title: 'サービスサイト制作',
      description: '流入とコンバージョン増加を目的とした、成果にコミットする制作',
      link: '/service/service-site',
      icon: '🎯',
    },
    {
      title: 'オウンドメディア制作',
      description: '潜在層への集客、企業認知、サービス認知を目的とした顧客育成メディア',
      link: '/service/owned-media',
      icon: '📰',
    },
    {
      title: '採用サイト制作',
      description: 'ブランディング強化・応募増加・ミスマッチ採用防止を実現',
      link: '/service/recruiting-site',
      icon: '👥',
    },
    {
      title: 'LP制作',
      description: 'CVRを最大化する、広告運用とクリエイティブの知見に基づくLP制作',
      link: '/service/lp',
      icon: '📊',
    },
    {
      title: 'WEBサイト運用',
      description: '日々の更新業務を代行し、最新SEOトレンドに準拠した運用',
      link: '/service/web-operation',
      icon: '🔧',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🌐</div>
            <span className="text-amber-100 font-semibold text-sm uppercase tracking-wider">HOMEPAGE CREATION</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              ホームページ制作
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed opacity-90">
              コーポレートサイトからLP、採用サイトまで。<br />
              目的に応じた最適なサイトを制作します。
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container bg-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              提供サービス
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="card card-hover group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-semibold text-sm flex items-center">
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
      <section className="section-container bg-gradient-to-br from-amber-50 to-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              ホームページ制作の特長
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              🎯
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">目的に応じた制作</h3>
            <p className="text-gray-600 leading-relaxed">
              ターゲットに応じてコンテンツと導線を整理し、企業ブランディング、サービス認知、採用活動など、目的を明確にした制作を行います。
            </p>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              🔍
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">SEO対策</h3>
            <p className="text-gray-600 leading-relaxed">
              キーワード分析、内部対策、コンテンツSEOまで設計に組み込み、検索エンジンからの流入を最大化します。
            </p>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              💡
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">コンサルティング型</h3>
            <p className="text-gray-600 leading-relaxed">
              デジタルマーケティング全般を扱い、貴社の営業フロー、マーケティングフローを理解した制作を行います。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            貴社のビジネス課題をお聞かせください。<br />
            最適なソリューションをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-amber-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              無料相談を申し込む
            </Link>
            <Link href="/service" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              事業内容一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

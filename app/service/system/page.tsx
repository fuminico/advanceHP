'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function SystemPage() {
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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">💻</div>
            <span className="text-teal-100 font-semibold text-sm uppercase tracking-wider">SYSTEM DEVELOPMENT</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              システム開発
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed opacity-90">
              デザインと技術の融合による最高のプロダクトで、<br />
              ユーザーのエンゲージメントを最大化します。
            </p>
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                提供サービス
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">プロダクト開発</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• スマートフォンアプリ開発</li>
                <li>• Webアプリケーション開発</li>
                <li>• バックエンド開発</li>
                <li>• クラウドインフラ構築（AWS中心）</li>
                <li>• QAエンジニアによる品質保証</li>
              </ul>
            </div>

            <div className="card fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                📊
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">プロダクトマネジメント</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                プロダクトの成長戦略を描き、検証と改善を繰り返す伴走型のマネジメント支援を提供します。
              </p>
            </div>

            <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                ☁️
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">クラウド開発支援</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                UXに影響を及ぼすパフォーマンス、ユーザビリティ、リテンションを考慮したクラウドアーキテクチャデザインを提供します。
              </p>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-teal-50 to-white fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">開発領域</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-xl mr-2">📱</span>
                  モバイルアプリ開発
                </h4>
                <ul className="text-gray-600 text-sm space-y-1 ml-7">
                  <li>• iOS（Swift）</li>
                  <li>• Android（Kotlin）</li>
                  <li>• React Native（クロスプラットフォーム）</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-xl mr-2">🌐</span>
                  Webアプリケーション開発
                </h4>
                <ul className="text-gray-600 text-sm space-y-1 ml-7">
                  <li>• React / Next.js / TypeScript</li>
                  <li>• Vue.js / Nuxt.js</li>
                  <li>• UI/UXデザイン</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-xl mr-2">⚙️</span>
                  バックエンド開発
                </h4>
                <ul className="text-gray-600 text-sm space-y-1 ml-7">
                  <li>• Node.js / Express</li>
                  <li>• Python / Django / Flask</li>
                  <li>• Go</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-xl mr-2">☁️</span>
                  クラウドインフラ
                </h4>
                <ul className="text-gray-600 text-sm space-y-1 ml-7">
                  <li>• AWS（EC2, S3, Lambda, RDS等）</li>
                  <li>• GCP / Azure</li>
                  <li>• Docker / Kubernetes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-container bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              開発の流れ
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { step: '01', title: '要件定義・仕様策定', description: 'ビジネス要件を深く理解し、技術的な実現方法を検討します。' },
            { step: '02', title: 'アーキテクチャ設計', description: 'スケーラビリティ、パフォーマンス、セキュリティを考慮した設計を行います。' },
            { step: '03', title: 'デザイン・開発', description: 'UI/UXデザインとバックエンド開発を並行して進めます。' },
            { step: '04', title: 'テスト・品質保証', description: 'QAエンジニアによる徹底したテストで品質を担保します。' },
            { step: '05', title: 'リリース・運用サポート', description: 'リリース後も継続的な改善とスケーリングをサポートします。' },
          ].map((item, index) => (
            <div key={index} className="card fade-in-up flex items-start gap-6" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            貴社のビジネス課題をお聞かせください。<br />
            最適なソリューションをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              無料相談を申し込む
            </Link>
            <Link href="/service" className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              事業内容一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

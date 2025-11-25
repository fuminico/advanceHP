'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function CompanyPage() {
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
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🏢</div>
            <span className="text-teal-200 font-semibold text-sm uppercase tracking-wider">COMPANY</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              会社概要
            </h1>
            <p className="text-lg sm:text-xl text-teal-100 leading-relaxed">
              デジタルビジネスの成功を、<br className="sm:hidden" />ワンストップでサポート
            </p>
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="section-container bg-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="gradient-text">ミッション</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            テクノロジーとクリエイティビティの力で、<br />
            企業のデジタル変革を加速させ、<br />
            ビジネスの成長に貢献します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center fade-in-up">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
              🎯
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">ワンストップ</h3>
            <p className="text-gray-600 leading-relaxed">
              企画からデザイン、開発、マーケティング、運用まで、すべてを一貫してサポート
            </p>
          </div>

          <div className="card text-center fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
              💡
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">コンサルティング</h3>
            <p className="text-gray-600 leading-relaxed">
              ビジネス課題を深く理解し、成果にコミットした提案と実装
            </p>
          </div>

          <div className="card text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 h-20 bg-gradient-to-br from-coral-400 to-coral-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">継続的な成長</h3>
            <p className="text-gray-600 leading-relaxed">
              データ分析と改善により、お客様のビジネスを長期的にサポート
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-container bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            会社情報
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card fade-in-up">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-bold text-gray-800 bg-gray-50 w-48">会社名</td>
                  <td className="py-4 px-6 text-gray-700">株式会社アドバンス</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-gray-800 bg-gray-50">代表取締役</td>
                  <td className="py-4 px-6 text-gray-700">吉澤仁</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-gray-800 bg-gray-50">所在地</td>
                  <td className="py-4 px-6 text-gray-700">
                    〒160-0022<br />
                    東京都新宿区新宿六丁目7番3号
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-gray-800 bg-gray-50">資本金</td>
                  <td className="py-4 px-6 text-gray-700">500万円</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-gray-800 bg-gray-50">設立年月日</td>
                  <td className="py-4 px-6 text-gray-700">202●年●月</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-gray-800 bg-gray-50">従業員数</td>
                  <td className="py-4 px-6 text-gray-700">15名（業務委託含む）</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-gray-800 bg-gray-50">主な事業内容</td>
                  <td className="py-4 px-6 text-gray-700">
                    各種研修事業<br />
                    システム開発事業<br />
                    SNSコンサルティング<br />
                    WEBマーケティング事業
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-container bg-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="gradient-text">事業内容</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card fade-in-up">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                💻
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">システム開発</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  スマートフォンアプリ、Webアプリケーション、クラウドインフラ構築など、デザインと技術を融合したプロダクト開発
                </p>
              </div>
            </div>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                🌐
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">ホームページ制作</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  コーポレートサイト、サービスサイト、オウンドメディア、採用サイト、LP制作、WEBサイト運用
                </p>
              </div>
            </div>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-coral-400 to-coral-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                📊
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">WEBマーケティング</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  リスティング広告運用、SNS広告運用（Facebook、Instagram、LINE）、SEO対策、アクセス解析
                </p>
              </div>
            </div>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                🤖
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">AI研修事業</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AIリーダー育成プログラム。企業ごとにカスタマイズしたカリキュラムで、チームの自走力を育成
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 fade-in-up">
          <Link href="/service" className="btn-primary inline-block">
            サービス詳細を見る
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            お気軽にご相談ください
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-teal-50">
            貴社のビジネス課題をお聞かせください。<br />
            最適なソリューションをご提案いたします。
          </p>
          <Link href="/contact" className="btn-secondary inline-block">
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </div>
  );
}

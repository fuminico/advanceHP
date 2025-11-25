'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function RecruitPage() {
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
            <div className="text-6xl mb-6">👥</div>
            <span className="text-teal-200 font-semibold text-sm uppercase tracking-wider">RECRUIT</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              採用情報
            </h1>
            <p className="text-lg sm:text-xl text-teal-100 leading-relaxed">
              デジタルビジネスの未来を、<br className="sm:hidden" />一緒に創りませんか？
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-container bg-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="gradient-text">アドバンスで働く</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            私たちは、最新のテクノロジーとクリエイティビティを融合させ、<br />
            企業のデジタル変革を支援するプロフェッショナル集団です。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">成長できる環境</h3>
            <p className="text-gray-600 leading-relaxed">
              最新技術に触れながら、システム開発、WEBデザイン、マーケティング、AI研修など多様な分野でスキルを磨けます。
            </p>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              🤝
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">チームワーク</h3>
            <p className="text-gray-600 leading-relaxed">
              部門を超えたコラボレーションで、より良いソリューションを生み出します。フラットな組織で、意見を言いやすい文化があります。
            </p>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              💡
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">イノベーション</h3>
            <p className="text-gray-600 leading-relaxed">
              新しいアイデアや挑戦を歓迎します。失敗を恐れず、常に改善を続ける文化があります。
            </p>
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="section-container bg-gradient-to-br from-teal-50 to-amber-50">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            募集職種
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* システムエンジニア */}
          <div className="card fade-in-up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">システムエンジニア</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">正社員</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">東京</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Web アプリケーション開発、スマートフォンアプリ開発、クラウドインフラ構築など、幅広い開発業務を担当していただきます。
            </p>
            <div className="border-t pt-4 mt-4">
              <h4 className="font-bold text-gray-800 mb-2">求めるスキル</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>TypeScript、React、Next.js などの開発経験</li>
                <li>AWS等のクラウドサービス利用経験</li>
                <li>チーム開発の経験</li>
              </ul>
            </div>
          </div>

          {/* WEBデザイナー */}
          <div className="card fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">WEBデザイナー</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">正社員</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">東京</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              コーポレートサイト、サービスサイト、LP等のUI/UXデザインを担当していただきます。
            </p>
            <div className="border-t pt-4 mt-4">
              <h4 className="font-bold text-gray-800 mb-2">求めるスキル</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Figma、Adobe XD等のデザインツールの使用経験</li>
                <li>UI/UXデザインの実務経験</li>
                <li>レスポンシブデザインの理解</li>
              </ul>
            </div>
          </div>

          {/* WEBマーケター */}
          <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">WEBマーケター</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">正社員</span>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">業務委託</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">東京</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              リスティング広告、SNS広告の運用、SEO対策、アクセス解析など、クライアントのWEBマーケティングを支援していただきます。
            </p>
            <div className="border-t pt-4 mt-4">
              <h4 className="font-bold text-gray-800 mb-2">求めるスキル</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Google広告、Facebook広告等の運用経験</li>
                <li>Google Analytics、Search Console等の分析経験</li>
                <li>SEO対策の実務経験</li>
              </ul>
            </div>
          </div>

          {/* AI研修講師 */}
          <div className="card fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">AI研修講師</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">正社員</span>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">業務委託</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">東京</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              企業向けのAI研修プログラムの設計・実施を担当していただきます。受講者の成長をサポートしながら、企業のAI活用を推進します。
            </p>
            <div className="border-t pt-4 mt-4">
              <h4 className="font-bold text-gray-800 mb-2">求めるスキル</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>AI・機械学習の実務経験または深い知識</li>
                <li>研修・教育の経験</li>
                <li>コミュニケーション能力</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container bg-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="gradient-text">福利厚生</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card fade-in-up">
              <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center">
                <span className="text-2xl mr-3">💰</span>
                給与・評価制度
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 年2回の評価・昇給機会</li>
                <li>• 成果に応じたインセンティブ</li>
                <li>• 資格取得支援制度</li>
              </ul>
            </div>

            <div className="card fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center">
                <span className="text-2xl mr-3">🏖️</span>
                休暇制度
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 完全週休2日制（土日祝）</li>
                <li>• 年次有給休暇</li>
                <li>• 夏季休暇・年末年始休暇</li>
              </ul>
            </div>

            <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center">
                <span className="text-2xl mr-3">📚</span>
                スキルアップ支援
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 書籍購入補助</li>
                <li>• 社内勉強会の開催</li>
                <li>• 外部セミナー参加支援</li>
              </ul>
            </div>

            <div className="card fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center">
                <span className="text-2xl mr-3">🏢</span>
                働く環境
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• リモートワーク可（職種による）</li>
                <li>• フレックスタイム制</li>
                <li>• 最新の開発環境・ツール</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-container bg-gradient-to-br from-teal-50 to-amber-50">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            応募の流れ
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              { step: '01', title: 'エントリー', description: 'お問い合わせフォームまたはメールにて、履歴書・職務経歴書をお送りください。' },
              { step: '02', title: '書類選考', description: 'ご提出いただいた書類をもとに選考いたします。結果は1週間程度でご連絡します。' },
              { step: '03', title: '面接（1〜2回）', description: '対面またはオンラインで面接を実施します。スキルや経験、志望動機などをお聞かせください。' },
              { step: '04', title: '内定', description: '最終面接の結果、内定となった方には詳細な条件をご提示いたします。' },
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            一緒に働きませんか？
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-teal-50">
            ご応募・ご質問は、お問い合わせフォームよりお気軽にご連絡ください。
          </p>
          <Link href="/contact" className="btn-secondary inline-block">
            応募・お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function AITrainingBusinessPage() {
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
      <section className="relative bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🤖</div>
            <span className="text-purple-100 font-semibold text-sm uppercase tracking-wider">AI TRAINING</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              AI研修事業
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed opacity-90">
              学ぶだけで終わらず、手を動かして定着させ、<br />
              チームが自走する力を育てる実践型AI研修
            </p>
          </div>
        </div>
      </section>

      {/* Service Link */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                AIリーダー育成プログラム
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              企業ごとにヒアリングを行い、課題や目標に応じてゼロからカリキュラムを設計。<br />
              実務課題を題材に成果を作り、チーム主導でAI活用を全社に広げる基盤を築きます。
            </p>
          </div>

          <Link
            href="/service/ai-training"
            className="card card-hover group bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 fade-in-up"
          >
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform flex-shrink-0">
                🤖
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">AIリーダー育成プログラム</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  カスタムカリキュラム設計、柔軟な研修スタイル（対面・オンライン）、充実したフォロー体制で、実践的なAI活用力を育成します。
                </p>
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-semibold flex items-center">
                  詳しく見る
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="section-container bg-gradient-to-br from-purple-50 to-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              3つのPOINT
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              📚
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">カスタムカリキュラム設計</h3>
            <p className="text-gray-600 leading-relaxed">
              企業ごとにヒアリングを行い、課題や目標に応じてゼロからカリキュラムを設計。部門や職種に合わせて最適化します。
            </p>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              💻
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">柔軟な研修スタイル</h3>
            <p className="text-gray-600 leading-relaxed">
              対面型出張研修・オンライン研修の双方に対応。ITスキルに不安がある方でも、教材・課題・QAでフォローします。
            </p>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              🤝
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">充実したフォロー体制</h3>
            <p className="text-gray-600 leading-relaxed">
              研修終了後も、質疑応答や追加サポート、振り返り面談など、学びの定着と実践をしっかりサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-container bg-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              AI活用シーン（職種別）
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="card fade-in-up">
            <h3 className="text-lg font-bold mb-3 text-gray-800">営業・マーケ</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• 提案書・議事録の半自動化でスピード向上</li>
              <li>• レポート作成・調査要約の定常化</li>
              <li>• LP構成のドラフト量産</li>
            </ul>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-bold mb-3 text-gray-800">バックオフィス</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• 議事録・稟議メモの定型処理テンプレ化</li>
              <li>• 採用スクリーニング・面接準備の効率化</li>
              <li>• ナレッジのひな形化で属人化解消</li>
            </ul>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-bold mb-3 text-gray-800">制作・プロダクト</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• 要件整理・仕様ドラフトの自動生成</li>
              <li>• ユーザーインサイト要約の高速化</li>
              <li>• デザイン案・コピー案の初稿量産</li>
            </ul>
          </div>

          <div className="card fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-bold mb-3 text-gray-800">マネジメント・経営</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• 定例レポートの骨子・可視化平準化</li>
              <li>• 運用ガイドライン整備</li>
              <li>• 部門横断でのテンプレ共有</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            貴社のビジネス課題をお聞かせください。<br />
            最適なソリューションをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              無料相談を申し込む
            </Link>
            <Link href="/service" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              事業内容一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

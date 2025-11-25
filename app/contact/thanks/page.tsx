import Link from 'next/link';

export default function ThanksPage() {
  return (
    <div>
      {/* Thank You Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-amber-50 to-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto text-5xl">
                ✓
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              お問い合わせ<br className="sm:hidden" />ありがとうございます
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              お問い合わせを受け付けました。<br />
              内容を確認の上、1〜2営業日以内に<br className="sm:hidden" />ご連絡させていただきます。
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800">今後の流れ</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 text-teal-600 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">自動返信メールの送信</h3>
                    <p className="text-sm text-gray-600">ご登録いただいたメールアドレスに自動返信メールをお送りしています。</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 text-teal-600 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">担当者からのご連絡</h3>
                    <p className="text-sm text-gray-600">1〜2営業日以内に、担当者よりご連絡させていただきます。</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 text-teal-600 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">詳細なお打ち合わせ</h3>
                    <p className="text-sm text-gray-600">ご要望を詳しくお伺いし、最適なソリューションをご提案いたします。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary text-center">
                トップページに戻る
              </Link>
              <Link href="/service" className="btn-secondary text-center">
                サービス一覧を見る
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              ※ 自動返信メールが届かない場合は、迷惑メールフォルダをご確認いただくか、<br className="hidden sm:inline" />
              お手数ですが再度お問い合わせください。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

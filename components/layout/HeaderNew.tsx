'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeaderNew() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'ホームページ制作', href: '/advanceHP/service/homepage/' },
    { name: 'システム開発', href: '/advanceHP/service/system/' },
    { name: 'WEBマーケティング事業', href: '/advanceHP/service/marketing-business/' },
    { name: 'AI研修事業', href: '/advanceHP/service/ai-training-business/' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 6 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 bg-gradient-to-br from-teal-500 to-amber-400 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">A</span>
            </motion.div>
            <span className="text-2xl font-bold gradient-text hidden sm:inline">
              株式会社アドバンス
            </span>
            <span className="text-2xl font-bold gradient-text sm:hidden">
              アドバンス
            </span>
          </Link>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-700 hover:text-teal-600 font-medium"
            >
              HOME
            </Link>

            {/* サービスドロップダウン */}
            <div className="relative group">
              <Link
                href="/service/"
                className="px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-700 hover:text-teal-600 font-medium inline-flex items-center"
              >
                事業内容
                <svg
                  className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {/* ドロップダウンメニュー */}
              <div className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/recruit/"
              className="px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-700 hover:text-teal-600 font-medium"
            >
              採用情報
            </Link>
            <Link
              href="/company/"
              className="px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-700 hover:text-teal-600 font-medium"
            >
              会社概要
            </Link>
            <Link
              href="/contact/"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              お問い合わせ
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/service/"
                className="block px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                事業内容
              </Link>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-8 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-600 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                href="/recruit/"
                className="block px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                採用情報
              </Link>
              <Link
                href="/company/"
                className="block px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                会社概要
              </Link>
              <Link
                href="/contact/"
                className="block px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

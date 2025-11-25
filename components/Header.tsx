'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-amber-400 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold gradient-text hidden sm:inline">株式会社アドバンス</span>
            <span className="text-2xl font-bold gradient-text sm:hidden">アドバンス</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-700 hover:text-teal-600 font-medium"
            >
              HOME
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/service"
                className="px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-700 hover:text-teal-600 font-medium inline-flex items-center"
              >
                事業内容
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 animate-fade-in border border-gray-100">
                  <Link href="/service/corporate-site" className="block px-4 py-3 hover:bg-teal-50 text-gray-700 hover:text-teal-600 transition-colors">
                    <div className="font-medium">コーポレートサイト制作</div>
                    <div className="text-xs text-gray-500">企業の信頼性を高める</div>
                  </Link>
                  <Link href="/service/service-site" className="block px-4 py-3 hover:bg-teal-50 text-gray-700 hover:text-teal-600 transition-colors">
                    <div className="font-medium">サービスサイト制作</div>
                    <div className="text-xs text-gray-500">CV増加を実現</div>
                  </Link>
                  <Link href="/service/owned-media" className="block px-4 py-3 hover:bg-teal-50 text-gray-700 hover:text-teal-600 transition-colors">
                    <div className="font-medium">オウンドメディア制作</div>
                    <div className="text-xs text-gray-500">潜在層へアプローチ</div>
                  </Link>
                  <Link href="/service/recruiting-site" className="block px-4 py-3 hover:bg-teal-50 text-gray-700 hover:text-teal-600 transition-colors">
                    <div className="font-medium">採用サイト制作</div>
                    <div className="text-xs text-gray-500">理想の人材を獲得</div>
                  </Link>
                  <Link href="/service/lp" className="block px-4 py-3 hover:bg-teal-50 text-gray-700 hover:text-teal-600 transition-colors">
                    <div className="font-medium">LP制作</div>
                    <div className="text-xs text-gray-500">CVRを最大化</div>
                  </Link>
                  <Link href="/service/system-development" className="block px-4 py-3 hover:bg-teal-50 text-gray-700 hover:text-teal-600 transition-colors">
                    <div className="font-medium">システム開発</div>
                    <div className="text-xs text-gray-500">デザインと技術の融合</div>
                  </Link>
                  <Link href="/service/marketing" className="block px-4 py-3 hover:bg-teal-50 text-gray-700 hover:text-teal-600 transition-colors">
                    <div className="font-medium">WEBマーケティング</div>
                    <div className="text-xs text-gray-500">広告運用とSEO対策</div>
                  </Link>
                  <Link href="/service/ai-training" className="block px-4 py-3 hover:bg-teal-50 text-gray-700 hover:text-teal-600 transition-colors">
                    <div className="font-medium">AI研修事業</div>
                    <div className="text-xs text-gray-500">チームの自走力を育成</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/recruit"
              className="px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-700 hover:text-teal-600 font-medium"
            >
              採用情報
            </Link>
            <Link
              href="/company"
              className="px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-gray-700 hover:text-teal-600 font-medium"
            >
              会社概要
            </Link>
            <Link
              href="/contact"
              className="ml-4 btn-primary text-sm"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="メニュー"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <Link href="/" className="block px-4 py-3 hover:bg-teal-50 rounded-lg transition-colors text-gray-700 font-medium">
              HOME
            </Link>
            <div className="px-4 py-2">
              <div className="font-medium text-gray-700 mb-2">事業内容</div>
              <Link href="/service/corporate-site" className="block pl-4 py-2 text-sm text-gray-600 hover:text-teal-600">
                コーポレートサイト制作
              </Link>
              <Link href="/service/service-site" className="block pl-4 py-2 text-sm text-gray-600 hover:text-teal-600">
                サービスサイト制作
              </Link>
              <Link href="/service/owned-media" className="block pl-4 py-2 text-sm text-gray-600 hover:text-teal-600">
                オウンドメディア制作
              </Link>
              <Link href="/service/recruiting-site" className="block pl-4 py-2 text-sm text-gray-600 hover:text-teal-600">
                採用サイト制作
              </Link>
              <Link href="/service/lp" className="block pl-4 py-2 text-sm text-gray-600 hover:text-teal-600">
                LP制作
              </Link>
              <Link href="/service/system-development" className="block pl-4 py-2 text-sm text-gray-600 hover:text-teal-600">
                システム開発
              </Link>
              <Link href="/service/marketing" className="block pl-4 py-2 text-sm text-gray-600 hover:text-teal-600">
                WEBマーケティング
              </Link>
              <Link href="/service/ai-training" className="block pl-4 py-2 text-sm text-gray-600 hover:text-teal-600">
                AI研修事業
              </Link>
            </div>
            <Link href="/recruit" className="block px-4 py-3 hover:bg-teal-50 rounded-lg transition-colors text-gray-700 font-medium">
              採用情報
            </Link>
            <Link href="/company" className="block px-4 py-3 hover:bg-teal-50 rounded-lg transition-colors text-gray-700 font-medium">
              会社概要
            </Link>
            <Link href="/contact" className="block mx-4 mt-4 btn-primary text-center">
              お問い合わせ
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

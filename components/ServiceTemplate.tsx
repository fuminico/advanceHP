'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  colorFrom: string;
  colorTo: string;
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  benefits?: Array<{
    title: string;
    items: string[];
  }>;
  process?: Array<{
    step: string;
    title: string;
    description: string;
  }>;
}

export default function ServiceTemplate({
  title,
  subtitle,
  description,
  icon,
  colorFrom,
  colorTo,
  features,
  benefits,
  process,
}: ServiceTemplateProps) {
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
      <section className={`relative bg-gradient-to-br ${colorFrom} ${colorTo} text-white py-20 overflow-hidden`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{icon}</div>
            <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">{subtitle}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed opacity-90">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container bg-white">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${colorFrom} ${colorTo} bg-clip-text text-transparent`}>
              サービスの特長
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`w-16 h-16 bg-gradient-to-br ${colorFrom} ${colorTo} rounded-2xl flex items-center justify-center mb-4 text-3xl`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      {benefits && benefits.length > 0 && (
        <section className="section-container bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              解決できる<span className={`bg-gradient-to-r ${colorFrom} ${colorTo} bg-clip-text text-transparent`}>課題</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className={`w-6 h-6 mr-3 mt-0.5 flex-shrink-0 bg-gradient-to-br ${colorFrom} ${colorTo}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'transparent', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process Section */}
      {process && process.length > 0 && (
        <section className="section-container bg-white">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${colorFrom} ${colorTo} bg-clip-text text-transparent`}>
                制作の流れ
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((step, index) => (
              <div key={index} className="card fade-in-up flex items-start gap-6" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 bg-gradient-to-br ${colorFrom} ${colorTo} rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={`section-container bg-gradient-to-r ${colorFrom} ${colorTo} text-white`}>
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            貴社のビジネス課題をお聞かせください。<br />
            最適なソリューションをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-gray-800 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              無料相談を申し込む
            </Link>
            <Link href="/service" className="border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              他のサービスを見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

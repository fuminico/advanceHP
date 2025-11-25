'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget_range: '',
    site_url: '',
    message: '',
    privacy_agreed: false,
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    } else if (formData.name.length > 100) {
      newErrors.name = 'お名前は100文字以内で入力してください';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'メールアドレスの形式が正しくありません';
    }

    if (formData.phone && !/^[0-9\-]+$/.test(formData.phone)) {
      newErrors.phone = '電話番号は数字とハイフンのみで入力してください';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください';
    } else if (formData.message.length < 10) {
      newErrors.message = 'お問い合わせ内容は10文字以上で入力してください';
    } else if (formData.message.length > 2000) {
      newErrors.message = 'お問い合わせ内容は2000文字以内で入力してください';
    }

    if (!formData.privacy_agreed) {
      newErrors.privacy_agreed = 'プライバシーポリシーへの同意が必要です';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/contact/thanks');
      } else {
        if (data.errors) {
          const errorObj: {[key: string]: string} = {};
          data.errors.forEach((err: {field: string; message: string}) => {
            errorObj[err.field] = err.message;
          });
          setErrors(errorObj);
        } else {
          alert(data.message || 'エラーが発生しました。時間をおいて再度お試しください。');
        }
      }
    } catch (error) {
      alert('エラーが発生しました。時間をおいて再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">✉️</div>
            <span className="text-teal-200 font-semibold text-sm uppercase tracking-wider">CONTACT</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              お問い合わせ
            </h1>
            <p className="text-lg sm:text-xl text-teal-100 leading-relaxed">
              ご相談・ご質問など、お気軽にお問い合わせください。<br />
              1〜2営業日以内にご連絡いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-container bg-white">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="fade-in-up">
              <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-2">
                お名前 <span className="text-coral-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-coral-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                placeholder="山田 太郎"
              />
              {errors.name && <p className="mt-1 text-sm text-coral-500">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="fade-in-up" style={{ animationDelay: '0.05s' }}>
              <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2">
                メールアドレス <span className="text-coral-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-coral-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                placeholder="example@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-coral-500">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-2">
                電話番号（任意）
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-coral-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                placeholder="03-1234-5678"
              />
              {errors.phone && <p className="mt-1 text-sm text-coral-500">{errors.phone}</p>}
            </div>

            {/* Company */}
            <div className="fade-in-up" style={{ animationDelay: '0.15s' }}>
              <label htmlFor="company" className="block text-sm font-bold text-gray-800 mb-2">
                会社名（任意）
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="株式会社〇〇"
              />
            </div>

            {/* Budget Range */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <label htmlFor="budget_range" className="block text-sm font-bold text-gray-800 mb-2">
                想定予算帯（任意）
              </label>
              <select
                id="budget_range"
                name="budget_range"
                value={formData.budget_range}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">選択してください</option>
                <option value="〜30万円">〜30万円</option>
                <option value="30〜100万円">30〜100万円</option>
                <option value="100〜300万円">100〜300万円</option>
                <option value="300万円〜">300万円〜</option>
                <option value="未定">未定</option>
              </select>
            </div>

            {/* Site URL */}
            <div className="fade-in-up" style={{ animationDelay: '0.25s' }}>
              <label htmlFor="site_url" className="block text-sm font-bold text-gray-800 mb-2">
                現在のサイトURL（任意）
              </label>
              <input
                type="url"
                id="site_url"
                name="site_url"
                value={formData.site_url}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="https://example.com"
              />
            </div>

            {/* Message */}
            <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
              <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-2">
                お問い合わせ内容 <span className="text-coral-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-coral-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                placeholder="お問い合わせ内容を具体的にご記入ください"
              />
              {errors.message && <p className="mt-1 text-sm text-coral-500">{errors.message}</p>}
            </div>

            {/* Privacy Policy */}
            <div className="fade-in-up" style={{ animationDelay: '0.35s' }}>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="privacy_agreed"
                  checked={formData.privacy_agreed}
                  onChange={handleChange}
                  className="mt-1 mr-2 w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <span className="text-sm text-gray-700">
                  <a href="#" className="text-teal-600 hover:text-teal-700 underline">プライバシーポリシー</a>に同意する <span className="text-coral-500">*</span>
                </span>
              </label>
              {errors.privacy_agreed && <p className="mt-1 text-sm text-coral-500">{errors.privacy_agreed}</p>}
            </div>

            {/* Submit Button */}
            <div className="text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

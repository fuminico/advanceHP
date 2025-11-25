import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  budget_range?: string;
  site_url?: string;
  message: string;
  privacy_agreed: boolean;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Name validation
  if (!data.name || data.name.trim() === '') {
    errors.push({ field: 'name', message: 'お名前を入力してください。' });
  } else if (data.name.length > 100) {
    errors.push({ field: 'name', message: 'お名前は100文字以内で入力してください。' });
  }

  // Email validation
  if (!data.email || data.email.trim() === '') {
    errors.push({ field: 'email', message: 'メールアドレスを入力してください。' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({ field: 'email', message: 'メールアドレスの形式が正しくありません。' });
  }

  // Phone validation (optional)
  if (data.phone && data.phone.trim() !== '' && !/^[0-9\-]+$/.test(data.phone)) {
    errors.push({ field: 'phone', message: '電話番号は数字とハイフンのみで入力してください。' });
  }

  // Message validation
  if (!data.message || data.message.trim() === '') {
    errors.push({ field: 'message', message: 'お問い合わせ内容を入力してください。' });
  } else if (data.message.length < 10) {
    errors.push({ field: 'message', message: 'お問い合わせ内容は10文字以上で入力してください。' });
  } else if (data.message.length > 2000) {
    errors.push({ field: 'message', message: 'お問い合わせ内容は2000文字以内で入力してください。' });
  }

  // Privacy policy agreement validation
  if (!data.privacy_agreed) {
    errors.push({ field: 'privacy_agreed', message: 'プライバシーポリシーへの同意が必要です。' });
  }

  return errors;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate form data
    const validationErrors = validateContactForm(data);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { status: 'error', errors: validationErrors },
        { status: 400 }
      );
    }

    // Here you would typically send an email using a service like SendGrid, Mailgun, etc.
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      budget_range: data.budget_range,
      site_url: data.site_url,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement actual email sending
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // const msg = {
    //   to: process.env.CONTACT_EMAIL,
    //   from: process.env.FROM_EMAIL,
    //   subject: `【お問い合わせ】${data.name}様より`,
    //   text: `お名前: ${data.name}\nメールアドレス: ${data.email}\n...`,
    // };
    // await sgMail.send(msg);

    // Return success response
    return NextResponse.json(
      { status: 'ok', message: 'お問い合わせを受け付けました。' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: '現在、お問い合わせを受け付けられません。時間をおいて再度お試しください。',
      },
      { status: 500 }
    );
  }
}

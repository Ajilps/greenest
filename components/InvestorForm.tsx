'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  company: z.string().optional(),
  investmentInterest: z.enum(['small', 'medium', 'large', 'strategic']),
  message: z.string().min(10, 'Please tell us a bit more about your interest'),
});

type FormData = z.infer<typeof schema>;

export default function InvestorForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Investor inquiry:', data);
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-gray-400';
  const labelClass = 'block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2';
  const errorClass = 'text-red-500 text-xs mt-1.5';

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-14 text-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 size={40} className="text-primary" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-text">Inquiry Received!</h3>
        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
          Thank you for your interest in investing in GreenNest. Our team will reach out within 48 hours with
          the investment deck and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5" noValidate>
      <div>
        <label htmlFor="inv-name" className={labelClass}>Full Name</label>
        <input id="inv-name" type="text" placeholder="Your name" {...register('name')} className={inputClass} />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="inv-email" className={labelClass}>Email Address</label>
        <input id="inv-email" type="email" placeholder="you@company.com" {...register('email')} className={inputClass} />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="inv-phone" className={labelClass}>Phone Number</label>
        <input id="inv-phone" type="tel" placeholder="+91 00000 00000" {...register('phone')} className={inputClass} />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="inv-company" className={labelClass}>Company / Organization</label>
        <input id="inv-company" type="text" placeholder="Optional" {...register('company')} className={inputClass} />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="inv-interest" className={labelClass}>Investment Interest Level</label>
        <select id="inv-interest" {...register('investmentInterest')} className={inputClass}>
          <option value="">Select investment level</option>
          <option value="small">₹10L – ₹50L (Seed)</option>
          <option value="medium">₹50L – ₹2Cr (Growth)</option>
          <option value="large">₹2Cr+ (Major)</option>
          <option value="strategic">Strategic Partnership</option>
        </select>
        {errors.investmentInterest && <p className={errorClass}>{errors.investmentInterest.message}</p>}
      </div>

      <div className="md:col-span-2">
        <label htmlFor="inv-message" className={labelClass}>Tell Us About Your Interest</label>
        <textarea
          id="inv-message"
          rows={4}
          placeholder="Share your investment goals and vision for eco-tourism..."
          {...register('message')}
          className={inputClass + ' resize-none'}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-sm hover:bg-secondary disabled:opacity-60 transition-colors duration-200 shadow-lg"
        >
          {isSubmitting && <Loader2 size={16} className="animate-spin" />}
          {isSubmitting ? 'Submitting...' : 'Request Investment Deck →'}
        </button>
      </div>
    </form>
  );
}

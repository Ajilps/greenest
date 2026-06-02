'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  familySize: z.enum(['1-2', '3-4', '5+']),
  travelPreference: z.enum(['family', 'couple', 'friends', 'solo', 'photography']),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Waitlist submission:', data);
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5E4E]/30 focus:border-[#2E5E4E] transition-all placeholder:text-gray-400';
  const labelClass = 'block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2';
  const errorClass = 'text-red-500 text-xs mt-1.5';

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-14 text-center">
        <div className="w-20 h-20 rounded-full bg-[#2E5E4E]/10 flex items-center justify-center">
          <CheckCircle2 size={40} className="text-[#2E5E4E]" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-text">You&rsquo;re on the list!</h3>
        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
          Thank you for joining the GreeNest waiting list. We&rsquo;ll keep you updated on our progress
          and send you early access details before anyone else.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5" noValidate>
      <div>
        <label htmlFor="wl-name" className={labelClass}>Full Name</label>
        <input id="wl-name" type="text" placeholder="Your full name" {...register('name')} className={inputClass} />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="wl-email" className={labelClass}>Email Address</label>
        <input id="wl-email" type="email" placeholder="you@example.com" {...register('email')} className={inputClass} />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="wl-phone" className={labelClass}>Phone Number</label>
        <input id="wl-phone" type="tel" placeholder="+91 00000 00000" {...register('phone')} className={inputClass} />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="wl-family" className={labelClass}>Group Size</label>
        <select id="wl-family" {...register('familySize')} className={inputClass}>
          <option value="">Select size</option>
          <option value="1-2">1–2 people</option>
          <option value="3-4">3–4 people</option>
          <option value="5+">5+ people</option>
        </select>
        {errors.familySize && <p className={errorClass}>{errors.familySize.message}</p>}
      </div>

      <div className="md:col-span-2">
        <label htmlFor="wl-pref" className={labelClass}>Travel Style</label>
        <select id="wl-pref" {...register('travelPreference')} className={inputClass}>
          <option value="">Select style</option>
          <option value="family">Family vacation</option>
          <option value="couple">Couple retreat</option>
          <option value="friends">Friends group</option>
          <option value="solo">Solo travel</option>
          <option value="photography">Photography trip</option>
        </select>
        {errors.travelPreference && <p className={errorClass}>{errors.travelPreference.message}</p>}
      </div>

      <div className="md:col-span-2">
        <label htmlFor="wl-message" className={labelClass}>Message (optional)</label>
        <textarea
          id="wl-message"
          rows={3}
          placeholder="Tell us about your dream stay at GreeNest..."
          {...register('message')}
          className={inputClass + ' resize-none'}
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2E5E4E] text-white font-bold text-sm hover:bg-[#4F8A63] disabled:opacity-60 transition-colors duration-200 shadow-lg"
        >
          {isSubmitting && <Loader2 size={16} className="animate-spin" />}
          {isSubmitting ? 'Joining...' : 'Join the Waiting List →'}
        </button>
      </div>
    </form>
  );
}

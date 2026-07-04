'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { motion } from 'framer-motion';

export default function BookingPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target as HTMLFormElement);
    
    const { error } = await supabase.from('bookings').insert({
      farmer_name: formData.get('name'),
      email: formData.get('email'),
      booking_date: formData.get('date'),
      flock_size: Number(formData.get('size')),
      breed: formData.get('breed'),
    });

    setStatus(error ? 'error' : 'success');
  };

  return (
    <div className="min-h-screen bg-[#F3E9D8] py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto"
      >
        <h1 className="text-5xl font-serif text-[#111827] mb-2">Secure Your Date</h1>
        <p className="text-gray-600 mb-10">Fill in the details below and we'll be in touch to finalize your booking.</p>
        
        {status === 'success' ? (
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="p-8 bg-white border-l-4 border-green-600 rounded-lg shadow-sm text-green-900"
          >
            <h3 className="font-bold text-lg mb-1">Booking Request Received</h3>
            <p>Thank you! We've received your request and will follow up via email shortly to confirm the details.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-black/5">
            <div className="grid gap-2">
              <label className="text-sm font-bold text-gray-700">Full Name</label>
              <input name="name" required className="w-full p-4 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-[#C56A3C] outline-none transition" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-bold text-gray-700">Email Address</label>
              <input name="email" type="email" required className="w-full p-4 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-[#C56A3C] outline-none transition" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-bold text-gray-700">Preferred Date</label>
                <input name="date" type="date" required className="w-full p-4 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-[#C56A3C] outline-none transition" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-bold text-gray-700">Flock Size</label>
                <input name="size" type="number" required className="w-full p-4 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-[#C56A3C] outline-none transition" />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-bold text-gray-700">Breed</label>
              <input name="breed" className="w-full p-4 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-[#C56A3C] outline-none transition" />
            </div>
            <button disabled={status === 'loading'} className="w-full bg-[#C56A3C] hover:bg-[#a65831] text-white py-4 rounded-lg font-bold transition-colors shadow-lg active:scale-[0.98]">
              {status === 'loading' ? 'Submitting...' : 'Confirm Request'}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
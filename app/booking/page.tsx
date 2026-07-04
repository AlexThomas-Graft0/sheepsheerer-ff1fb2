'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

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
    <div className="max-w-xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-serif mb-8">Secure Your Date</h1>
      {status === 'success' ? (
        <div className="p-8 bg-green-50 text-green-800 rounded-xl">Booking request submitted! We will confirm via email.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" required placeholder="Full Name" className="w-full p-3 border rounded" />
          <input name="email" type="email" required placeholder="Email Address" className="w-full p-3 border rounded" />
          <input name="date" type="date" required className="w-full p-3 border rounded" />
          <input name="size" type="number" required placeholder="Flock Size" className="w-full p-3 border rounded" />
          <input name="breed" placeholder="Breed" className="w-full p-3 border rounded" />
          <button disabled={status === 'loading'} className="w-full bg-[#C56A3C] text-white py-4 rounded font-bold">
            {status === 'loading' ? 'Submitting...' : 'Confirm Booking'}
          </button>
        </form>
      )}
    </div>
  );
}
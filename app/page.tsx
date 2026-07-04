import { Suspense } from 'react';
import { YieldEstimator } from '@/components/YieldEstimator';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3E9D8]">
      <header className="bg-white/80 backdrop-blur-md border-b border-black/5 p-6 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-serif font-bold text-[#C56A3C]">ShearPrecision</h1>
        <nav className="flex gap-6">
          <a href="#services" className="text-sm font-bold hover:text-[#C56A3C] transition">Services</a>
          <a href="#about" className="text-sm font-bold hover:text-[#C56A3C] transition">About</a>
          <a href="/booking" className="bg-[#C56A3C] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#a65831] transition">Book Now</a>
        </nav>
      </header>

      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#C56A3C] font-bold tracking-widest uppercase text-xs mb-4 block">Reliable Shearing Services</span>
          <h1 className="text-6xl font-serif mb-6 leading-[1.1]">Professional Shearing, Right at Your Gate.</h1>
          <p className="text-xl mb-8 text-gray-700 leading-relaxed">We bring precision, animal welfare, and punctuality to your smallholding or commercial farm. Expert shearing services across South Wales.</p>
          <div className="flex gap-4">
            <a href="/booking" className="bg-[#111827] text-white px-8 py-4 rounded-lg font-bold hover:bg-black transition">Check Availability</a>
          </div>
        </div>
        <Suspense fallback={<div className="h-96 bg-white/50 rounded-2xl animate-pulse" />}>
          <YieldEstimator />
        </Suspense>
      </section>

      <section id="about" className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8 text-[#111827]">Shearing Done Right. No Compromises.</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Founded in Cardiff, ShearPrecision was built on a simple premise: sheep deserve stress-free handling, and farmers deserve a service that shows up on time. We don’t just shear; we respect the tradition of Welsh agriculture while using modern techniques to improve your flock’s productivity.</p>
        </div>
      </section>
      
      <footer className="py-16 text-center text-gray-500 border-t border-black/5">
        <p className="font-serif text-lg text-[#C56A3C] mb-2">ShearPrecision Wales</p>
        <p className="text-xs uppercase tracking-widest">© 2026. Precision shearing for South Wales farmers.</p>
      </footer>
    </main>
  );
}
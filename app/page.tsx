import { Suspense } from 'react';
import { YieldEstimator } from '@/components/YieldEstimator';

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="bg-white border-b-2 border-gray-100 p-6 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-serif font-bold text-[#C56A3C]">ShearPrecision Wales</h1>
        <nav className="flex gap-4">
          <a href="#services" className="text-sm font-bold">Services</a>
          <a href="#about" className="text-sm font-bold">About</a>
          <a href="/booking" className="bg-[#C56A3C] text-white px-4 py-2 rounded text-sm font-bold">Book Now</a>
        </nav>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-serif mb-6 leading-tight">Professional Shearing, Right at Your Gate.</h1>
          <p className="text-lg mb-8 text-gray-700">We bring precision, animal welfare, and punctuality to your smallholding or commercial farm. No-fuss, expert shearing services across South Wales.</p>
          <div className="flex gap-4">
            <a href="/booking" className="bg-[#C56A3C] text-white px-8 py-4 rounded font-bold">Check Availability</a>
          </div>
        </div>
        <Suspense fallback={<div>Loading calculator...</div>}>
          <YieldEstimator />
        </Suspense>
      </section>

      <section id="about" className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Shearing Done Right. No Compromises.</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Founded in Cardiff, ShearPrecision was built on a simple premise: sheep deserve stress-free handling, and farmers deserve a service that shows up on time. We don’t just shear; we respect the tradition of Welsh agriculture while using modern techniques to improve your flock’s productivity.</p>
        </div>
      </section>
      
      <footer className="py-12 text-center text-sm text-gray-500">
        © 2026 ShearPrecision Wales. Precision shearing for South Wales farmers.
      </footer>
    </main>
  );
}
'use client';
import { useState } from 'react';

export function YieldEstimator() {
  const [flockSize, setFlockSize] = useState(100);
  const [breed, setBreed] = useState('Welsh Mountain');
  
  const estimate = Math.round(flockSize * (breed === 'Welsh Mountain' ? 2.5 : 3.2));

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-black/5 border border-black/5">
      <h3 className="text-2xl font-serif mb-6 text-[#111827]">Wool Yield Estimator</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Flock Size</label>
          <input 
            type="number" 
            value={flockSize} 
            onChange={(e) => setFlockSize(Number(e.target.value))}
            className="w-full bg-[#F3E9D8] text-xl font-bold p-4 rounded-xl border-none focus:ring-2 focus:ring-[#C56A3C] outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Breed</label>
          <select 
            value={breed} 
            onChange={(e) => setBreed(e.target.value)}
            className="w-full bg-[#F3E9D8] p-4 rounded-xl border-none font-bold focus:ring-2 focus:ring-[#C56A3C] outline-none appearance-none"
          >
            <option>Welsh Mountain</option>
            <option>Suffolk</option>
            <option>Texel</option>
          </select>
        </div>
        <div className="bg-[#111827] p-6 rounded-2xl text-center text-white">
          <p className="text-xs uppercase tracking-widest font-bold opacity-60 mb-1">Estimated Yield</p>
          <p className="text-5xl font-serif font-bold text-[#C56A3C]">{estimate} kg</p>
        </div>
      </div>
    </div>
  );
}
'use client';
import { useState } from 'react';

export function YieldEstimator() {
  const [flockSize, setFlockSize] = useState(100);
  const [breed, setBreed] = useState('Welsh Mountain');
  
  const estimate = Math.round(flockSize * (breed === 'Welsh Mountain' ? 2.5 : 3.2));

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#C56A3C]">
      <h3 className="text-2xl font-serif mb-4">Wool Yield Estimator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1">Flock Size</label>
          <input 
            type="number" 
            value={flockSize} 
            onChange={(e) => setFlockSize(Number(e.target.value))}
            className="w-full border-2 border-gray-200 p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Breed</label>
          <select 
            value={breed} 
            onChange={(e) => setBreed(e.target.value)}
            className="w-full border-2 border-gray-200 p-2 rounded"
          >
            <option>Welsh Mountain</option>
            <option>Suffolk</option>
            <option>Texel</option>
          </select>
        </div>
        <div className="bg-[#F3E9D8] p-4 rounded text-center">
          <p className="text-sm">Estimated Yield</p>
          <p className="text-3xl font-serif font-bold text-[#C56A3C]">{estimate} kg</p>
        </div>
      </div>
    </div>
  );
}
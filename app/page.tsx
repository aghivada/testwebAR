'use client';

import React, { useState } from 'react';

interface Building {
  id: string;
  name: string;
  description: string;
  modelSrc: string;
}

const buildings: Building[] = [
  {
    id: 'darul-khikmah',
    name: 'DARUL KHIKMAH',
    description: 'Model 3D Gedung Darul Khikmah. Gunakan mode AR untuk menempatkannya di permukaan nyata.',
    modelSrc: '/models/darulKhikmah.glb',
  },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState<string>('darul-khikmah');
  const currentBuilding = buildings.find((b) => b.id === selectedId) || buildings[0];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-between p-4 md:p-8">
      <header className="w-full max-w-2xl text-center my-4">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          {currentBuilding.name}
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-1">
          {currentBuilding.description}
        </p>
      </header>

      <div className="w-full max-w-2xl mb-4 flex gap-2 overflow-x-auto pb-2">
        {buildings.map((b) => (
          <button
            key={b.id}
            onClick={() => setSelectedId(b.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${selectedId === b.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
          >
            {b.name}
          </button>
        ))}
      </div>

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col">
        <div className="relative w-full h-[400px] md:h-[500px]">
          {React.createElement('model-viewer', {
            src: currentBuilding.modelSrc,
            alt: currentBuilding.name,
            'shadow-intensity': '1',
            ar: true,
            'ar-modes': 'scene-viewer quick-look webxr',
            'camera-controls': true,
            'auto-rotate': true,
            style: { width: '100%', height: '100%' },
            children: React.createElement(
              'button',
              {
                slot: 'ar-button',
                className:
                  'absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition-all active:scale-95 text-sm md:text-base cursor-pointer',
              },
              [
                React.createElement('span', { key: 'icon' }, '📱'),
                'Lihat dalam AR',
              ]
            ),
          } as any)}
        </div>
      </div>

      <footer className="w-full max-w-2xl text-center mt-6 text-xs text-slate-400">
        WebAR System &bull; Powered by Next.js & Google Model-Viewer
      </footer>
    </main>
  );
}
'use client';

import { useState } from 'react';
import LogoutButton from './LogoutButton';
import AvatarCarousel from './AvatarCarousel';
import ChatModal from './ChatModal';
import { personas } from '../data/personas';

export default function DemoPageClient() {
  const [selectedPersonaId, setSelectedPersonaId] = useState<number | null>(null);

  const selectedPersona = personas.find((p) => p.id === selectedPersonaId);

  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Xenium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-xenium-navy via-xenium-teal to-xenium-purple animate-gradient"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-xenium-teal rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-xenium-purple rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-xenium-mint rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="glass rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-glow">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-dark mb-6 bg-xenium-teal/20">
            <svg className="w-10 h-10 text-xenium-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            AI Personas
          </h1>
          
          {/* Subtitle */}
          <div className="glass-dark rounded-2xl px-6 py-3 inline-block mb-6 bg-xenium-teal/20">
            <p className="text-xenium-lime font-bold text-lg flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Wähle eine Persona
            </p>
          </div>
          
          {/* Description */}
          <p className="text-xenium-mint text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Klicke auf einen Avatar, um mit einer AI Persona zu chatten.
          </p>
          
          {/* Avatar Carousel */}
          <div className="flex justify-center mb-12">
            <AvatarCarousel onPersonaClick={setSelectedPersonaId} />
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="glass-dark rounded-xl p-6 backdrop-blur-sm bg-xenium-navy/30 border border-xenium-mint/20">
              <div className="w-12 h-12 rounded-lg bg-xenium-lime/30 flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-xenium-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Schnell</h3>
              <p className="text-xenium-mint/80 text-sm">Blitzschnelle Antworten</p>
            </div>
            
            <div className="glass-dark rounded-xl p-6 backdrop-blur-sm bg-xenium-navy/30 border border-xenium-mint/20">
              <div className="w-12 h-12 rounded-lg bg-xenium-teal/30 flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-xenium-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Sicher</h3>
              <p className="text-xenium-mint/80 text-sm">Enterprise-Schutz</p>
            </div>
            
            <div className="glass-dark rounded-xl p-6 backdrop-blur-sm bg-xenium-navy/30 border border-xenium-mint/20">
              <div className="w-12 h-12 rounded-lg bg-xenium-purple/30 flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-xenium-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Skalierbar</h3>
              <p className="text-xenium-mint/80 text-sm">Wächst mit Ihnen</p>
            </div>
          </div>
          
          {/* Logout Button */}
          <LogoutButton />
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xenium-mint/70 text-sm">
            AI Personas Demo • Powered by Xenium
          </p>
        </div>
      </div>

      {/* Chat Modal */}
      {selectedPersona && (
        <ChatModal
          persona={selectedPersona}
          onClose={() => setSelectedPersonaId(null)}
        />
      )}
    </main>
  );
}

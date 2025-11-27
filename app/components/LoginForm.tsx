'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push('/demo');
        router.refresh();
      } else {
        setError(data.error || 'Falsches Passwort');
      }
    } catch (err) {
      setError('Ein Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Xenium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-xenium-navy via-xenium-teal to-xenium-purple animate-gradient"></div>
      
      {/* Floating Orbs - Xenium Colors */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-xenium-teal rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-xenium-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-xenium-mint rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="glass rounded-3xl shadow-2xl p-8 md:p-10 animate-glow">
          <div className="text-center mb-8">
            {/* Lock Icon mit Xenium Teal */}
            <div className="inline-block p-4 rounded-2xl glass-dark mb-4 bg-xenium-teal/20">
              <svg className="w-12 h-12 text-xenium-lime mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              AI Personas
            </h2>
            <p className="text-xenium-mint text-sm md:text-base font-light">
              Secure Access Portal
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-white/90 text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-xenium-mint/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-xenium-lime/50 focus:border-xenium-lime transition-all duration-300"
                placeholder="Enter your password"
                disabled={loading}
              />
            </div>

            {error && (
              <div className="glass-dark rounded-lg p-3 border-l-4 border-red-400 bg-red-900/20">
                <p className="text-red-200 text-sm font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-xenium-lime hover:bg-xenium-lime/90 text-xenium-navy font-bold rounded-xl border border-xenium-lime transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xenium-lime/50"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-xenium-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : (
                'Access Portal'
              )}
            </button>
          </form>
          
          <div className="mt-6 pt-6 border-t border-xenium-mint/20">
            <p className="text-center text-xenium-mint/80 text-xs">
              Protected by enterprise-grade security
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

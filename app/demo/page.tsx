import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LogoutButton from '../components/LogoutButton';

export default async function DemoPage() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('auth_token');

  if (!authToken) {
    redirect('/');
  }

  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 animate-gradient"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className="glass rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-glow">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-dark mb-6">
            <svg className="w-10 h-10 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            AI Personas
          </h1>
          
          {/* Subtitle */}
          <div className="glass-dark rounded-2xl px-6 py-3 inline-block mb-6">
            <p className="text-emerald-300 font-semibold text-lg flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Access Granted
            </p>
          </div>
          
          {/* Description */}
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to the demo portal. You've successfully authenticated and now have access to the AI Personas platform.
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="glass-dark rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-violet-500/30 flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-violet-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Fast</h3>
              <p className="text-white/60 text-sm">Lightning-quick responses</p>
            </div>
            
            <div className="glass-dark rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-500/30 flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Secure</h3>
              <p className="text-white/60 text-sm">Enterprise-grade protection</p>
            </div>
            
            <div className="glass-dark rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-pink-500/30 flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Scalable</h3>
              <p className="text-white/60 text-sm">Grows with your needs</p>
            </div>
          </div>
          
          {/* Logout Button */}
          <LogoutButton />
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
            AI Personas Demo • Powered by Next.js
          </p>
        </div>
      </div>
    </main>
  );
}

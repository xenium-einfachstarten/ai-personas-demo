import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LogoutButton from '../components/LogoutButton';

export default async function DemoPage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get('auth_token');

  if (!authToken) {
    redirect('/');
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          AI Personas Demo
        </h1>
        <p className="text-gray-600">
          Erfolgreich eingeloggt!
        </p>
        <LogoutButton />
      </div>
    </main>
  );
}

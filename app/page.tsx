import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginForm from './components/LoginForm';

export default async function LoginPage() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('auth_token');

  if (authToken) {
    redirect('/demo');
  }

  return <LoginForm />;
}

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import DemoPageClient from '../components/DemoPageClient';

export default async function DemoPage() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('auth_token');

  if (!authToken) {
    redirect('/');
  }

  return <DemoPageClient />;
}

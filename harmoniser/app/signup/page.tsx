import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'SignUp',
};

import LogoDashboard from '@/app/ui/dashboard/logo-dashboard';
import SignUpForm from '@/app/ui/signup-form';
 
export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center md:h-screen bg-colours-3">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end justify-center rounded-lg bg-colours-1 p-2 md:h-36">
          <div className="w-32 text-white md:w-36">
            <LogoDashboard />
          </div>
        </div>
        <SignUpForm />
      </div>
    </main>
  );
}
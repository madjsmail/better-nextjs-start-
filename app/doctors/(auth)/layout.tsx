import { auth } from '@/features/auth/auth';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
    const session = await auth()

    if (session?.user) redirect('/patients/dashboard')
    return (
        <section>
            {children}
        </section>
    );
}

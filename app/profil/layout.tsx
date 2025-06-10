import requireAuth from '@/features/auth/require-auth';
import type { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
    requireAuth()
    return (
        <section>
            {children}
        </section>
    );
}

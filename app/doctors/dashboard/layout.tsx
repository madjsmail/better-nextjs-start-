import roleBasedAccess from '@/features/auth/role-based-access';
import { Role } from '@my-monorepo/shared-types';
import type { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
    await roleBasedAccess(Role.Pro)

    return (
        <section>
            {children}
        </section>
    );
}

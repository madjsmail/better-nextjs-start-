
import { auth } from '@/features/auth/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Fragment, type ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
    const session = await auth()

    if (session?.user) redirect('/patients/dashboard')

    return (
        <Fragment>
            <div className="flex min-h-screen flex-col">
                <header className="w-full border-b bg-background">
                    <div className="container flex h-16 items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-paypal-medium-blue" style={{ fontFamily: "Courgette, cursive" }}>
                                Doctofree
                            </span>
                        </Link>
                    </div>
                </header>

                {children}
                <footer className="w-full border-t bg-background">
                    <div className="container py-6">
                        <p className="text-center text-sm text-muted-foreground">
                            © 2025 Doctofree. All rights reserved.
                        </p>
                    </div>
                </footer>


            </div>

        </Fragment>

    );
}

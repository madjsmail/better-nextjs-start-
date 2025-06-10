import LandingFooter from '@/features/patient-lending-page/footer.component';
import { LandingHeader } from '@/features/patient-lending-page/navbar.component';
import type { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {

    return (
        <div className="flex flex-col min-h-screen ">

            <LandingHeader />
            <main className="flex-grow p-8  m-10 rounded-lg">
                {children}
            </main>
            <LandingFooter />
        </div>
    );
}

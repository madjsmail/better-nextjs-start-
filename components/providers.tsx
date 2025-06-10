"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";


export default function Providers({ children }: { children: ReactNode }) {
    const router = useRouter();
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

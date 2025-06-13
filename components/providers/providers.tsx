"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

import { getQueryClient } from "@/config/get-query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "../ui/sonner";
import { ThemeProvider } from "./theme-provider";


export default function Providers({ children }: { children: ReactNode }) {
    const router = useRouter();
    const client = getQueryClient()
    return (
        <QueryClientProvider client={client}>
            <SessionProvider>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster
                        position="top-right"
                        richColors={true} />
                </ThemeProvider>
            </SessionProvider>
        </QueryClientProvider>
    );
}

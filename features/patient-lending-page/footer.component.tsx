'use client';

import Link from "next/link";

export default function LandingFooter() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container mx-auto flex flex-col gap-6 py-8 md:flex-row md:py-12">
                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-paypal-medium-blue" style={{ fontFamily: "Courgette, cursive" }}>
                            Doctofree
                        </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Doctofree is a healthcare appointment booking platform that connects patients with healthcare
                        professionals.
                    </p>
                </div>
                <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium">For patients</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/doctors" className="text-muted-foreground hover:text-paypal-medium-blue">
                                    Find a doctor
                                </Link>
                            </li>
                            <li>
                                <Link href="/specialties" className="text-muted-foreground hover:text-paypal-medium-blue">
                                    Specialties
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="text-muted-foreground hover:text-paypal-medium-blue">
                                    Help center
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium">For professionals</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-paypal-medium-blue">
                                    Join Doctofree
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-paypal-medium-blue">
                                    Professional login
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-paypal-medium-blue">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-paypal-medium-blue">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-muted-foreground hover:text-paypal-medium-blue">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-paypal-medium-blue">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col gap-4 border-t py-6 md:flex-row md:items-center">
                <p className="text-xs text-muted-foreground md:flex-1">
                    © 2023 <span style={{ fontFamily: "Courgette, cursive" }}>Doctofree</span>. All rights reserved. This is a
                    demo clone.
                </p>
                <div className="flex gap-4">
                    <Link href="/terms" className="text-xs text-muted-foreground hover:text-paypal-medium-blue">
                        Terms
                    </Link>
                    <Link href="/privacy" className="text-xs text-muted-foreground hover:text-paypal-medium-blue">
                        Privacy
                    </Link>
                    <Link href="/cookies" className="text-xs text-muted-foreground hover:text-paypal-medium-blue">
                        Cookies
                    </Link>
                </div>
            </div>
        </footer>
    );
}
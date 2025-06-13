import roleBasedAccess from '@/features/auth/role-based-access';
import { Role } from '@my-monorepo/shared-types';
import type { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

import { Calendar, Clock, FileText, Home, LogOut, Menu, Settings, User, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getEvents, getUsers } from '@/features/calender/requests';

export default async function DoctorDashboardPage({ children }: LayoutProps) {
    await roleBasedAccess(Role.Pro)

    // Sample data for today's appointments
    const todayAppointments = [
        {
            id: 1,
            patient: "John Smith",
            time: "9:00 AM",
            type: "Check-up",
            status: "Confirmed",
        },
        {
            id: 2,
            patient: "Emily Johnson",
            time: "10:30 AM",
            type: "Follow-up",
            status: "Confirmed",
        },
        {
            id: 3,
            patient: "Michael Brown",
            time: "11:45 AM",
            type: "Consultation",
            status: "Confirmed",
        },
        {
            id: 4,
            patient: "Sarah Davis",
            time: "2:15 PM",
            type: "Check-up",
            status: "Confirmed",
        },
        {
            id: 5,
            patient: "David Wilson",
            time: "3:30 PM",
            type: "Follow-up",
            status: "Confirmed",
        },
    ]

    // Sample data for upcoming appointments
    const upcomingAppointments = [
        {
            id: 6,
            patient: "Jennifer Lee",
            date: "May 28, 2023",
            time: "10:00 AM",
            type: "Check-up",
        },
        {
            id: 7,
            patient: "Robert Taylor",
            date: "May 28, 2023",
            time: "11:30 AM",
            type: "Consultation",
        },
        {
            id: 8,
            patient: "Lisa Anderson",
            date: "May 29, 2023",
            time: "9:15 AM",
            type: "Follow-up",
        },
    ]
  const [events, users] = await Promise.all([getEvents(), getUsers()]);

    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-64">
                                <div className="flex flex-col space-y-6">
                                    <div className="flex items-center gap-2 py-4">
                                        <span className="text-2xl font-bold text-paypal-blue" style={{ fontFamily: "Courgette, cursive" }}>
                                            Doctofree
                                        </span>
                                        <span className="text-sm text-muted-foreground">for Professionals</span>
                                    </div>
                                    <nav className="flex flex-col space-y-1">
                                        <Button variant="ghost" className="justify-start" asChild>
                                            <Link href="/doctor-dashboard">
                                                <Home className="mr-2 h-4 w-4" />
                                                Dashboard
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" className="justify-start" asChild>
                                            <Link href="/doctor-dashboard/appointments">
                                                <Calendar className="mr-2 h-4 w-4" />
                                                Appointments
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" className="justify-start" asChild>
                                            <Link href="/doctor-dashboard/patients">
                                                <Users className="mr-2 h-4 w-4" />
                                                Patients
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" className="justify-start" asChild>
                                            <Link href="/doctor-dashboard/schedule">
                                                <Clock className="mr-2 h-4 w-4" />
                                                Schedule
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" className="justify-start" asChild>
                                            <Link href="/doctor-dashboard/medical-records">
                                                <FileText className="mr-2 h-4 w-4" />
                                                Medical Records
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" className="justify-start" asChild>
                                            <Link href="/doctor-dashboard/settings">
                                                <Settings className="mr-2 h-4 w-4" />
                                                Settings
                                            </Link>
                                        </Button>
                                    </nav>
                                </div>
                            </SheetContent>
                        </Sheet>
                        <Link href="/doctor-dashboard" className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-paypal-blue" style={{ fontFamily: "Courgette, cursive" }}>
                                Doctofree
                            </span>
                            <span className="hidden text-sm text-muted-foreground md:inline-block">for Professionals</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                            <span className="sr-only">User account</span>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="/">
                                <LogOut className="h-5 w-5" />
                                <span className="sr-only">Log out</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>
            <div className="flex flex-1">
                <aside className="hidden w-64 border-r bg-background md:block">
                    <div className="flex h-full flex-col">
                        <div className="flex-1 overflow-auto py-6">
                            <nav className="flex flex-col space-y-1 px-4">
                                <Button variant="secondary" className="justify-start" asChild>
                                    <Link href="/doctor-dashboard">
                                        <Home className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </Link>
                                </Button>
                                <Button variant="ghost" className="justify-start" asChild>
                                    <Link href="/doctor-dashboard/appointments">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        Appointments
                                    </Link>
                                </Button>
                                <Button variant="ghost" className="justify-start" asChild>
                                    <Link href="/doctor-dashboard/patients">
                                        <Users className="mr-2 h-4 w-4" />
                                        Patients
                                    </Link>
                                </Button>
                                <Button variant="ghost" className="justify-start" asChild>
                                    <Link href="/doctor-dashboard/schedule">
                                        <Clock className="mr-2 h-4 w-4" />
                                        Schedule
                                    </Link>
                                </Button>
                                <Button variant="ghost" className="justify-start" asChild>
                                    <Link href="/doctor-dashboard/medical-records">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Medical Records
                                    </Link>
                                </Button>
                                <Button variant="ghost" className="justify-start" asChild>
                                    <Link href="/doctor-dashboard/settings">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Settings
                                    </Link>
                                </Button>
                            </nav>
                        </div>
                    </div>
                </aside>
                <section>
                    {children}
                </section>
            </div>
        </div>
    )
}

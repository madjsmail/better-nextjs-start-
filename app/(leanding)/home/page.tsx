import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Activity,
    ArrowRight,
    Baby,
    Bone,
    Brain,
    Eye,
    Heart,
    Microscope,
    Search,
    Stethoscope,
    SmileIcon as Tooth,
    UserCheck
} from "lucide-react";
import Link from "next/link";
export default function Page() {
    const specialties = [
        { name: "General Practitioner", icon: Stethoscope },
        { name: "Dentist", icon: Tooth },
        { name: "Dermatologist", icon: UserCheck },
        { name: "Gynecologist", icon: Heart },
        { name: "Ophthalmologist", icon: Eye },
        { name: "Pediatrician", icon: Baby },
        { name: "Psychologist", icon: Brain },
        { name: "Cardiologist", icon: Activity },
        { name: "Orthopedist", icon: Bone },
        { name: "Neurologist", icon: Microscope },
    ]

    const healthArticles = [
        {
            title: "Understanding Seasonal Allergies: Causes and Treatments",
            excerpt:
                "Learn about the common causes of seasonal allergies and discover effective treatments to manage your symptoms.",
            category: "Allergies",
            author: "Dr. Emily Rodriguez",
            date: "May 15, 2023",
            icon: "🤧",
        },
        {
            title: "The Importance of Regular Health Check-ups",
            excerpt:
                "Regular health check-ups can help detect potential health issues before they become serious. Find out how often you should visit your doctor.",
            category: "Preventive Care",
            author: "Dr. David Kim",
            date: "May 10, 2023",
            icon: "🩺",
        },
        {
            title: "Nutrition Basics: Building a Balanced Diet",
            excerpt:
                "Discover the fundamentals of nutrition and learn how to create a balanced diet that supports your overall health and wellbeing.",
            category: "Nutrition",
            author: "Dr. Lisa Patel",
            date: "May 5, 2023",
            icon: "🥗",
        },
    ]
    return (
        <div className="flex min-h-screen flex-col ">

            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-paypal-medium-blue to-paypal-medium-blue/70 text-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Find the right healthcare professional
                                </h1>
                                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                                    Book appointments with doctors, dentists, and other healthcare professionals in your area.
                                </p>
                            </div>
                            <div className="w-full max-w-md space-y-2">
                                <Tabs defaultValue="doctor" className="w-full">
                                    <TabsList className="grid w-full grid-cols-2 bg-white/20">
                                        <TabsTrigger value="doctor" className="data-[state=active]:text-paypal-medium-blue">
                                            Find a doctor
                                        </TabsTrigger>
                                        <TabsTrigger value="appointment" className="data-[state=active]:text-paypal-medium-blue">
                                            My appointments
                                        </TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="doctor" className="space-y-4">
                                        <div className="relative">
                                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                type="search"
                                                placeholder="Specialty, doctor, practice..."
                                                className="w-full bg-white pl-8 pr-20 rounded-xl"
                                            />
                                            <Button
                                                className="absolute right-1 top-1 h-8 bg-paypal-yellow text-paypal-gray hover:bg-paypal-yellow/90 rounded-lg"
                                                size="sm"
                                            >
                                                Search
                                            </Button>
                                        </div>
                                        <div className="relative">
                                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input type="search" placeholder="Location" className="w-full bg-white pl-8 pr-20 rounded-xl" />
                                            <Button
                                                className="absolute right-1 top-1 h-8 bg-paypal-yellow text-paypal-gray hover:bg-paypal-yellow/90 rounded-lg"
                                                size="sm"
                                            >
                                                Near me
                                            </Button>
                                        </div>
                                        <Button
                                            className="w-full bg-paypal-yellow text-paypal-gray hover:bg-paypal-yellow/90 rounded-xl h-12 font-medium"
                                            size="lg"
                                        >
                                            Find a doctor
                                        </Button>
                                    </TabsContent>
                                    <TabsContent value="appointment" className="space-y-4">
                                        <div className="flex flex-col space-y-2 text-center">
                                            <h3 className="text-lg font-medium">Access your appointments</h3>
                                            <p className="text-sm text-white/90">Log in to view, reschedule, or cancel your appointments.</p>
                                            <Button
                                                asChild
                                                className="bg-white text-paypal-medium-blue hover:bg-white/90 rounded-xl h-12 font-medium"
                                            >
                                                <Link href="/patients/login">Log in</Link>
                                            </Button>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-paypal-medium-blue">
                                    Popular specialties
                                </h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Find the right specialist for your needs
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                {specialties.map((specialty) => (
                                    <Link
                                        key={specialty.name}
                                        href={`/doctors?specialty=${specialty.name.toLowerCase().replace(" ", "-")}`}
                                        className="flex flex-col items-center space-y-2 rounded-xl border p-4 hover:bg-muted transition-colors"
                                    >
                                        <div className="rounded-full bg-paypal-medium-blue/10 p-3">
                                            <specialty.icon className="h-6 w-6 text-paypal-medium-blue" />
                                        </div>
                                        <span className="text-sm font-medium text-center">{specialty.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-paypal-light-gray">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-paypal-medium-blue">
                                    For patients
                                </h2>
                                <p className="text-muted-foreground md:text-xl">
                                    Find and book appointments with healthcare professionals in your area.
                                </p>
                                <ul className="grid gap-2">
                                    <li className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-paypal-medium-blue" />
                                        <span>Find the right specialist for your needs</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-paypal-medium-blue" />
                                        <span>Book appointments online 24/7</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-paypal-medium-blue" />
                                        <span>Receive reminders for your appointments</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-paypal-medium-blue" />
                                        <span>Access your medical history</span>
                                    </li>
                                </ul>
                                <Button
                                    asChild
                                    className="bg-paypal-medium-blue hover:bg-paypal-medium-blue/90 text-white rounded-xl px-6"
                                >
                                    <Link href="/patients/signup">Create an account</Link>
                                </Button>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-paypal-medium-blue">
                                    For healthcare professionals
                                </h2>
                                <p className="text-muted-foreground md:text-xl">
                                    Manage your practice and appointments with our platform.
                                </p>
                                <ul className="grid gap-2">
                                    <li className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-paypal-medium-blue" />
                                        <span>Manage your availability and appointments</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-paypal-medium-blue" />
                                        <span>Reduce no-shows with automatic reminders</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-paypal-medium-blue" />
                                        <span>Access patient information securely</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-paypal-medium-blue" />
                                        <span>Grow your practice with online visibility</span>
                                    </li>
                                </ul>
                                <Button
                                    variant="outline"
                                    asChild
                                    className="border-paypal-medium-blue text-paypal-medium-blue hover:bg-paypal-medium-blue hover:text-white rounded-xl px-6"
                                >
                                    {/* <Link href="/for-professionals">Learn more</Link> */}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-paypal-medium-blue">
                                    Health Articles & Resources
                                </h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Stay informed with the latest health information and expert advice
                                </p>
                            </div>
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
                                {healthArticles.map((article, index) => (
                                    <div
                                        key={index}
                                        className="group relative overflow-hidden rounded-2xl border bg-background shadow-sm transition-all hover:shadow-md"
                                    >
                                        <div className="aspect-video w-full overflow-hidden bg-paypal-medium-blue/5 flex items-center justify-center">
                                            <span className="text-6xl">{article.icon}</span>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="rounded-full bg-paypal-medium-blue/10 px-2.5 py-0.5 text-xs font-medium text-paypal-medium-blue">
                                                    {article.category}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold line-clamp-2 mb-2">{article.title}</h3>
                                            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-muted-foreground">By {article.author}</span>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="gap-1 text-paypal-medium-blue rounded-full hover:bg-paypal-medium-blue/10"
                                                    asChild
                                                >
                                                    <Link href="#">
                                                        Read more
                                                        <ArrowRight className="h-3 w-3 ml-1" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button
                                variant="outline"
                                className="mt-4 border-paypal-medium-blue text-paypal-medium-blue hover:bg-paypal-medium-blue hover:text-white rounded-full px-8"
                                asChild
                            >
                                <Link href="/articles">View all articles</Link>
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-paypal-medium-blue text-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                    Ready to take control of your healthcare?
                                </h2>
                                <p className="mx-auto max-w-[600px] text-white/90 md:text-xl">
                                    Join millions of patients who manage their healthcare with{" "}
                                    <span style={{ fontFamily: "Courgette, cursive" }}>Doctofree</span>.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Button
                                    size="lg"
                                    className="bg-paypal-yellow text-paypal-gray hover:bg-paypal-yellow/90 rounded-xl px-8 h-14 font-medium"
                                    asChild
                                >
                                    {/* <Link href="/signup">Sign Up Now</Link> */}
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-paypal-medium-blue bg-white hover:bg-white hover:text-paypal-medium-blue rounded-xl px-8 h-14 font-medium"
                                    asChild
                                >
                                    <Link href="/doctors">Find a Doctor</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

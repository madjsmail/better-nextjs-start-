"use client";

// Corrected import paths for Button and Input components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Activity, ArrowRight, Baby, Bone, Brain, Eye, Heart, LucideIcon, Microscope, Search, Smile, Stethoscope, UserCheck } from "lucide-react";
import Link from "next/link";
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
const specialties = [
    {
        name: "General Practitioner",
        icon: Stethoscope,
        description: "Comprehensive primary care for all your health needs.",
    },
    {
        name: "Dentist",
        icon: Smile, // Using Smile icon for Dentist
        description: "Expert care for healthy teeth and gums.",
    },
    {
        name: "Dermatologist",
        icon: UserCheck,
        description: "Specialized treatment for skin, hair, and nail conditions.",
    },
    {
        name: "Gynecologist",
        icon: Heart,
        description: "Dedicated care for women's reproductive health.",
    },
    {
        name: "Ophthalmologist",
        icon: Eye,
        description: "Advanced eye care and vision correction services.",
    },
    {
        name: "Pediatrician",
        icon: Baby,
        description: "Compassionate health care for infants, children, and adolescents.",
    },
    {
        name: "Psychologist",
        icon: Brain,
        description: "Professional support for mental and emotional well-being.",
    },
    {
        name: "Cardiologist",
        icon: Activity,
        description: "Heart specialists providing diagnostic and treatment services.",
    },
    {
        name: "Orthopedist",
        icon: Bone,
        description: "Musculoskeletal experts treating bones, joints, and ligaments.",
    },
    {
        name: "Neurologist",
        icon: Microscope,
        description: "Specializing in disorders of the brain, spinal cord, and nerves.",
    },
];
export default function Hero80() {
    return (
        <div className="">
            <div className="relative overflow-hidden">
                <div className="container relative py-32">
                    <div className="container mx-auto">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    {/* Updated Main Heading */}
                                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                                        Find the right healthcare professional
                                    </h1>
                                    {/* New Subheading */}
                                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                                        Book appointments with doctors, dentists, and other healthcare professionals in your area.
                                    </p>
                                </div>
                                {/* Search Form */}
                                <div className="space-y-4 rounded-lg  p-4 backdrop-blur-sm bg-accent">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {/* Input for Doctor or Specialty */}
                                        <Input
                                            placeholder="Doctor or Specialty"
                                            className="border-input bg-background text-foreground placeholder:text-muted-foreground"
                                        />
                                        {/* Input for Location */}
                                        <Input
                                            placeholder="Location"
                                            defaultValue="Barcelona, Spain"
                                            className="border-input bg-background text-foreground placeholder:text-muted-foreground"
                                        />
                                    </div>
                                    <Button className="w-full bg-paypal-yellow text-primary-foreground hover:bg-primary/90">
                                        <Search className="mr-2 size-4" />
                                        Search Doctors
                                    </Button>
                                </div>
                            </div>
                            {/* Images for layout/imagery */}
                            <div className="grid grid-cols-2 gap-8">
                                <img
                                    src="https://images.unsplash.com/photo-1632054224659-280be3239aff?"
                                    alt="Doctor Consultation"
                                    className="row-span-2 rounded-md object-cover w-full h-full"
                                    onError={(e) => { e.currentTarget.src = "https://placehold.co/400x600?text=Image+Error"; }}
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1681505512385-8b9d567a56c0?"
                                    alt="Dental Care"
                                    className="aspect-square rounded-md object-cover w-full h-full"
                                    onError={(e) => { e.currentTarget.src = "https://placehold.co/400x400?text=Image+Error"; }}
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1631507623112-0092cef9c70d?"
                                    alt="Healthcare Team"
                                    className="aspect-square rounded-md object-cover w-full h-full"
                                    onError={(e) => { e.currentTarget.src = "https://placehold.co/400x400?text=Image+Error"; }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-4">
                    <p className="text-xl font-semibold text-blue-600">
                        Discover our specialized services...
                    </p>
                    <h2 className="text-3xl font-medium lg:text-4xl text-gray-800 dark:text-gray-200 mt-4">
                        Find the Right Health Specialist for You
                    </h2>
                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                        {/* Map over the specialties array to render FeatureCard components */}
                        {specialties.map((specialty, index) => (
                            <FeatureCard
                                key={index} // Added a unique key for list rendering
                                icon={specialty.icon}
                                title={specialty.name} // Use specialty.name for the title
                                description={specialty.description} // Use specialty.description for the description
                            />
                        ))}
                    </div>
                </div>
            </section>

            <FeatureSection />
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

        </div>
    );
}











interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <div className="relative flex flex-col gap-3 rounded-lg border border-gray-200 p-6 transition-all duration-200 hover:border-paypal-yellow hover:shadow-lg md:flex-row md:items-start">
            <span className="mb-4 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-paypal-yellow bg-paypal-yellow/20 text-paypal-yellow md:mb-0 md:mr-4">
                <Icon className="size-6" />
            </span>
            <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-200 md:mb-2 md:text-xl">
                    {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-500 md:text-base">
                    {description}
                </p>
            </div>

        </div>


    );
}





const features = [
    {
        forGroup: "PATIENTS",
        title: "Find and Book Appointments with Ease",
        description: [ // Changed to an array for bullet points
            "Find the right specialist for your needs.",
            "Book appointments online 24/7.",
            "Receive reminders for your appointments.",
            "Access your medical history securely from anywhere.",
        ],
        imageSrc: "https://placehold.co/900x600/EBEDED/C3C9C9?text=Patients&font=poppins.svg",
        imageAlt: "Illustration of a patient booking an appointment online",
    },
    {
        forGroup: "HEALTHCARE PROFESSIONALS",
        title: "Efficient Practice Management for You",
        description: [ // Changed to an array for bullet points
            "Manage your availability and appointments effortlessly.",
            "Reduce no-shows with automatic reminders.",
            "Access patient information securely.",
            "Grow your practice with enhanced online visibility.",
        ],
        imageSrc: "https://placehold.co/900x600/EBEDED/C3C9C9?text=Professionals&font=poppins.svg",
        imageAlt: "Illustration of a healthcare professional managing their practice",
    },
];


export function FeatureSection() {
    return (
        <section className="py-24 md:py-">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-3xl font-semibold lg:text-4xl text-center mb-12 text-gray-800 dark:text-gray-100"> {/* Added dark mode text color */}
                    A Better Way to Connect with <span className="text-blue-600 dark:text-blue-400">Healthcare</span> {/* Adjusted primary color for dark mode */}
                </h2>
                <div className="mt-10 grid gap-9 lg:grid-cols-2">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col justify-between rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-none dark:hover:border-blue-400" /* Dark mode borders, background, shadow, and hover effects */
                        >
                            <div className="relative flex flex-col md:flex-row justify-between gap-4 md:gap-10 rounded-t-lg border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900"> {/* Dark mode header background and border */}
                                <div className="flex flex-col justify-between gap-4 py-6 px-4 md:py-10 md:px-8 flex-grow">
                                    <p className="text-sm uppercase text-blue-600 dark:text-blue-400 font-medium"> {/* Adjusted text color for dark mode */}
                                        For {feature.forGroup}
                                    </p>
                                    <h3 className="text-2xl font-bold md:text-4xl text-gray-900 dark:text-gray-50"> {/* Adjusted text color for dark mode */}
                                        {feature.title}
                                    </h3>
                                </div>
                                <div className="relative w-full h-48 md:h-auto md:w-2/5 shrink-0 overflow-hidden rounded-tr-lg border-t md:border-l border-gray-200 dark:border-gray-700"> {/* Adjusted border for dark mode */}
                                    <img
                                        src={feature.imageSrc}
                                        alt={feature.imageAlt}
                                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-tr-lg"
                                    />
                                </div>
                            </div>
                            <div className="p-4 text-gray-700 dark:text-gray-300 md:p-8 text-base leading-relaxed"> {/* Adjusted text color for dark mode */}
                                <ul className="list-disc pl-5 space-y-2">
                                    {feature.description.map((item, descIndex) => (
                                        <li key={descIndex}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

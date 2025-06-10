"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters." }),
});

export default function LoginPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {

        const res = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false
        })


        if (res.error == 'CredentialsSignin') {
            toast.error('Credentials non valid');
            return;
        }
        toast.success('you have been logged in');

    };

    return (
        <main
            className="flex flex-1 items-center justify-center py-12"
            style={{ backgroundColor: "#f5f7fa" /* paypal-light-gray */ }}
        >
            <Card className="w-full max-w-md rounded-lg">
                <CardHeader className="space-y-1">
                    <div className="mb-4 flex items-center justify-center">
                        <div
                            className="inline-block rounded-lg p-2"
                            style={{
                                backgroundColor: "rgba(0, 50, 150, 0.1)" /* paypal-blue/10 */,
                            }}
                        >
                            <div
                                className="rounded-full p-2"
                                style={{ backgroundColor: "#003090" /* paypal-blue */ }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                                    <path d="M13 13h4"></path>
                                    <path d="M13 17h4"></path>
                                    <path d="M9 13h.01"></path>
                                    <path d="M9 17h.01"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <CardTitle
                        className="text-center text-2xl"
                        style={{ color: "#003090" /* paypal-blue */ }}
                    >
                        Healthcare Professional Login
                    </CardTitle>
                    <CardDescription className="text-center">
                        Access your professional account to manage appointments and patients
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Form {...form}>
                        {/* Changed action to onSubmit */}
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field, fieldState }) => (
                                    <FormItem>
                                        <FormLabel>Professional Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="doctor@example.com"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        {fieldState.error && (
                                            <FormMessage>{fieldState.error.message}</FormMessage>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field, fieldState }) => (
                                    <FormItem>
                                        <div className="flex items-center justify-between">
                                            <FormLabel>Password</FormLabel>
                                            <Link
                                                href="/"
                                                className="text-xs hover:underline"
                                                style={{ color: "#003090" /* paypal-blue */ }}
                                            >
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <FormControl>
                                            <Input
                                                id="password"
                                                type="password"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        {fieldState.error && (
                                            <FormMessage>{fieldState.error.message}</FormMessage>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full"
                                style={{
                                    backgroundColor: "#003090",
                                    borderColor: "#003090" /* paypal-blue */,
                                    color: "white",
                                }}
                            >
                                Log in to Professional Account
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-center text-sm">
                        Not registered yet?{" "}
                        <Link
                            href="/doctors/signup"
                            className="hover:underline"
                            style={{ color: "#003090" /* paypal-blue */ }}
                        >
                            Join Doctofree as a professional
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </main>
    );
}
import Link from "next/link";


export default function UnauthorizedPage() {
    return (
        <div className="flex flex-col min-h-[100vh] items-center justify-center space-y-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">404 - Page Not Found</h1>
                <p className="max-w-[600px] text-paypal-blue   md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-paypal-light-blue">
                    Don't worry, you haven't broken the internet. You can find your way back to the homepage.
                </p>
            </div>
            <Link
                href="/home"
                className="inline-flex h-9 items-center justify-center rounded-md border text-paypal-blue bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
            >
                Back to the homepage
            </Link>
            {/* <img
                src="/placeholder.svg"
                alt="Error Image"
                width={400}
                height={300}
                className="object-cover rounded-lg shadow-lg"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
            /> */}
        </div>
    )
}
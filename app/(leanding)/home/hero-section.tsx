import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    BriefcaseIcon,
    FlowerIcon,
    HeartIcon,
    LightbulbIcon,
    MountainSnow,
    SearchIcon,
    SettingsIcon,
} from "lucide-react";


export function DoctoFreeSearch() {
    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
                <div className="text-center">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Doctofree
                    </h1>
                    <p className="text-muted-foreground mt-3 text-xl">
                        Find the right healthcare professional for your needs with ease.
                    </p>
                    <div className="relative mx-auto mt-7 max-w-xl sm:mt-12">
                        {/* Form */}
                        <form>
                            {/* --- MODIFIED SECTION START --- */}
                            <div className="bg-background relative z-10 flex items-center space-x-3 rounded-lg border p-3 shadow-lg">
                                {/* Input 1: For Name or Specialty */}
                                <div className="flex-[1_0_0%]">
                                    <Label htmlFor="specialty" className="sr-only">
                                        Specialty or name
                                    </Label>
                                    <Input
                                        name="specialty"
                                        id="specialty"
                                        placeholder="Specialty, name..."
                                        // The classes below remove the default input border to blend it into the container
                                        className="h-full border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                </div>

                                {/* Vertical separator for better UI */}
                                <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>

                                {/* Input 2: For Address */}
                                <div className="flex-[1_0_0%]">
                                    <Label htmlFor="address" className="sr-only">
                                        Address or city
                                    </Label>
                                    <Input
                                        name="address"
                                        id="address"
                                        placeholder="Address, city..."
                                        // The classes below remove the default input border to blend it into the container
                                        className="h-full border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                </div>

                                {/* Search Button */}
                                <div className="flex-[0_0_auto]">
                                    <Button size={"icon"} type="submit">
                                        <SearchIcon />
                                    </Button>
                                </div>
                            </div>
                            {/* --- MODIFIED SECTION END --- */}
                        </form>
                        {/* End Form */}

                        {/* SVG Element */}
                        <div className="absolute end-0 top-0 hidden translate-x-20 -translate-y-12 md:block">
                            <svg
                                className="h-auto w-16 text-orange-500"
                                width={121}
                                height={135}
                                viewBox="0 0 121 135"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                    stroke="currentColor"
                                    strokeWidth={10}
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                    stroke="currentColor"
                                    strokeWidth={10}
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                    stroke="currentColor"
                                    strokeWidth={10}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        {/* End SVG Element */}

                        {/* SVG Element */}
                        <div className="absolute start-0 bottom-0 hidden -translate-x-32 translate-y-10 md:block">
                            <svg
                                className="h-auto w-40 text-cyan-500"
                                width={347}
                                height={188}
                                viewBox="0 0 347 188"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                                    stroke="currentColor"
                                    strokeWidth={7}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        {/* End SVG Element */}
                    </div>
                    <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-20">
                        <Button variant={"outline"}>
                            <BriefcaseIcon className="mr-2 h-auto w-3 flex-shrink-0" />
                            Business
                        </Button>
                        <Button variant={"outline"}>
                            <SettingsIcon className="mr-2 h-auto w-3 flex-shrink-0" />
                            Strategy
                        </Button>
                        <Button variant={"outline"}>
                            <HeartIcon className="mr-2 h-auto w-3 flex-shrink-0" />
                            Health
                        </Button>
                        <Button variant={"outline"}>
                            <LightbulbIcon className="mr-2 h-auto w-3 flex-shrink-0" />
                            Creative
                        </Button>
                        <Button variant={"outline"}>
                            <FlowerIcon className="mr-2 h-auto w-3 flex-shrink-0" />
                            Environment
                        </Button>
                        <Button variant={"outline"}>
                            <MountainSnow className="mr-2 h-auto w-3 flex-shrink-0" />
                            Adventure
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ShineBorder from "@/components/ui/shine-border";

export default function Experience () {
    const data = [
        {
            title: "Jan 2020 - Jul 2020",
            content: (
                <div>
                    <div>
                        <h2 className="text-lg md:text-2xl mb-4 text-black dark:text-white max-w-4xl">
                            The Cyber Agents
                        </h2>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl">
                            - Caught 3 scamsters, managed to get their IP Address, and located them geopolitically.
                        </p>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl mt-1">
                            - Interacted with Police Staff.
                        </p>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl mt-1">
                            - Accessed their mobile phones and laptops via RATs( Remote Access Trojans ).
                        </p>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl mt-1">
                            - Got the confidential information like the software used for virtual number interaction
                            with victim.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "Apr 2024 - Apr 2024",
            content: (
                <div>
                    <div>
                        <h2 className="text-lg md:text-2xl mb-4 text-black dark:text-white max-w-4xl">
                            Pinnacle Labs
                        </h2>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl">
                            - Found 1 Vulnerability at Pinnacle Lab Website
                        </p>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl mt-1">
                            - Created 2 Projects using Bash Scripting for Pinnacle Labs
                        </p>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl mt-1">
                            - Project 1: File/Image Encryption Tool Based on GPG Public and Private Key for safe transfer and use.
                        </p>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl mt-1">
                            - Project 2: Password Analyzer checks for basic password, if passed then looks with common password.
                        </p>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="min-h-72 bg-background flex items-center justify-center py-10 px-4 md:px-10">
            <ShineBorder
                className="relative flex flex-col w-full max-w-screen-lg mx-auto items-center justify-center overflow-hidden rounded-lg border p-6 shadow-xl" color={['#A07CFE', '#FE8FB5', '#FFBE7B']}>
                <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                    <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl text-center">
                        Patch notes from my career
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl">
                        Just like software evolves, so has my career—packed with feature rollouts, bug fixes, and the occasional hotfix under pressure. Here’s a version-controlled timeline of my professional growth and the skills I’ve deployed along the way.
                    </p>
                </div>
                <Timeline data={data}/>
            </ShineBorder>

        </div>
    );
}

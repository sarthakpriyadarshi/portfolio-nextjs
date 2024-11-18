import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ShineBorder from "@/components/ui/shine-border";


export default function Education () {
    const data = [
        {
            title: "2019-2022",
            content: (
                <div>
                    <div>
                        <h2 className="text-lg md:text-2xl mb-4 text-black dark:text-white max-w-4xl">
                            Kendriya Vidyalaya No. 2, Jalahalli East
                        </h2>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl">
                            Grade: 10th Standard - 12th Standard
                        </p>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl">
                            Physics, Chemistry, Maths & Computer Science
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "2023-2026",
            content: (
                <div>
                    <div>
                        <h2 className="text-lg md:text-2xl mb-4 text-black dark:text-white max-w-4xl">
                            St. Joseph Engineering College
                        </h2>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl">
                            Bachelor&#39;s of Engineering
                        </p>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl">
                            Computer Science and Engineering
                        </p>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="min-h-72 bg-background flex items-center justify-center py-7 px-4 md:px-10" id="education">
            <ShineBorder
                className="relative flex flex-col w-full max-w-screen-lg mx-auto items-center justify-center overflow-hidden rounded-lg border p-6 shadow-xl z-10" color={['#ffffff', '#131313', '#FFBE7B']}>
                <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                    <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl text-center">
                        Changelog from my education
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl text-center">
                    From acing assignments to dodging deadlines, my education has been an epic upgrade log. Here’s a
                    timeline of the patches, bug fixes, and new features that shaped my learning journey.
                    </p>
                </div>
                <Timeline data={data}/>
            </ShineBorder>
        </div>
    );
}

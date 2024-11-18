"use client";

import { MagicCard, MagicContainer } from '@/components/ui/magic-card';
import { Button } from "@/components/ui/button";
import React from "react";
import ShineBorder from "@/components/ui/shine-border";

export default function Certification() {
    return (
        <div className="min-h-72 bg-background flex items-center justify-center py-7 px-4 md:px-10">
            <ShineBorder
                className="relative flex flex-col w-full max-w-screen-lg mx-auto items-center justify-center overflow-hidden rounded-lg border p-6 shadow-xl z-10" color={['#ffffff', '#131313', '#FFBE7B']}>
                <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl text-center">
                    Certified to break things
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl">
                    As my mom says I always break things, so I got a proof to make my mom proud!
                </p>
                <MagicContainer className="flex h-auto w-full flex-col gap-4 lg:h-auto lg:flex-row mt-10">
                    {/* First MagicCard */}
                    <MagicCard
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#404040_50%,transparent_100%)] p-6 shadow-2xl"
                    >
                        <img
                            src="ceh-master.png"
                            alt="CERTIFICATIONS"
                            className="w-full max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[200px] object-contain"
                        />
                        <h3 className="z-10 text-center text-[clamp(1.5rem,_3vw,_2rem)] text-xs text-gray-800 dark:text-gray-200 mt-3">
                            Certified Ethical Hacker
                        </h3>
                        <Button variant="gooeyLeft" className="mt-3 z-10 bg-gray-700 hover:bg-[000000] verify">
                            Verify
                        </Button>
                        <div
                            className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                    </MagicCard>

                    {/* Second MagicCard */}
                    <MagicCard
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#404040_50%,transparent_100%)] p-6 shadow-2xl"
                    >
                        <img
                            src="ceh-master.png"
                            alt="CERTIFICATIONS"
                            className="w-full max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[200px] object-contain"
                        />
                        <h3 className="z-10 text-center text-[clamp(1.5rem,_3vw,_2rem)] text-xs text-gray-800 dark:text-gray-200 mt-3">
                            Certified Ethical Hacker (Masters)
                        </h3>
                        <Button variant="gooeyLeft" className="mt-3 z-10 bg-gray-700 hover:bg-[000000] verify">
                            Verify
                        </Button>
                        <div
                            className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                    </MagicCard>

                    {/* Third MagicCard */}
                    <MagicCard
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#404040_50%,transparent_100%)] p-6 shadow-2xl"
                    >
                        <img
                            src="oscp.svg"
                            alt="CERTIFICATIONS"
                            className="w-full max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[200px] lg:max-h-[200px] object-contain"
                        />
                        <h3 className="z-10 text-center text-[clamp(1.5rem,_3vw,_2rem)] text-xs text-gray-800 dark:text-gray-200 mt-3">
                            OSCP+
                        </h3>
                        <Button variant="gooeyLeft" className="mt-3 z-10 bg-gray-700 hover:bg-[000000] verify">
                            Verify
                        </Button>
                        <div
                            className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                    </MagicCard>
                </MagicContainer>
                <MagicContainer className="flex h-auto w-full flex-col gap-4 lg:h-auto lg:flex-row mt-4">
                    {/* First MagicCard */}
                    <MagicCard
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#404040_50%,transparent_100%)] p-6 shadow-2xl"
                    >
                        <img
                            src="ceh-master.png"
                            alt="CERTIFICATIONS"
                            className="w-full max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[200px] object-contain"
                        />
                        <h3 className="z-10 text-center text-[clamp(1.5rem,_3vw,_2rem)] text-xs text-gray-800 dark:text-gray-200 mt-3">
                            Certified Ethical Hacker
                        </h3>
                        <Button variant="gooeyLeft" className="mt-3 z-10 bg-gray-700 hover:bg-[000000] verify">
                            Verify
                        </Button>
                        <div
                            className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                    </MagicCard>

                    {/* Second MagicCard */}
                    <MagicCard
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#404040_50%,transparent_100%)] p-6 shadow-2xl"
                    >
                        <img
                            src="ceh-master.png"
                            alt="CERTIFICATIONS"
                            className="w-full max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[200px] object-contain"
                        />
                        <h3 className="z-10 text-center text-[clamp(1.5rem,_3vw,_2rem)] text-xs text-gray-800 dark:text-gray-200 mt-3">
                            Certified Ethical Hacker (Masters)
                        </h3>
                        <Button variant="gooeyLeft" className="mt-3 z-10 bg-gray-700 hover:bg-[000000] verify">
                            Verify
                        </Button>
                        <div
                            className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                    </MagicCard>

                    {/* Third MagicCard */}
                    <MagicCard
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#404040_50%,transparent_100%)] p-6 shadow-2xl"
                    >
                        <img
                            src="oscp.svg"
                            alt="CERTIFICATIONS"
                            className="w-full max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[200px] lg:max-h-[200px] object-contain"
                        />
                        <h3 className="z-10 text-center text-[clamp(1.5rem,_3vw,_2rem)] text-xs text-gray-800 dark:text-gray-200 mt-3">
                            OSCP+
                        </h3>
                        <Button variant="gooeyLeft" className="mt-3 z-10 bg-gray-700 hover:bg-[000000] verify">
                            Verify
                        </Button>
                        <div
                            className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                    </MagicCard>
                </MagicContainer>
            </ShineBorder>
        </div>
    );
}
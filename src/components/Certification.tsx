"use client";

import { MagicCard, MagicContainer } from '@/components/ui/magic-card';
import { Button } from "@/components/ui/button";
import React from "react";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";

export default function Certification() {
    return (
        <div className="min-h-72 bg-background flex items-center justify-center py-7 px-4 md:px-10" id="certification">
            <ShineBorder
                className="relative flex flex-col w-full max-w-screen-lg mx-auto items-center justify-center overflow-hidden rounded-lg border p-6 shadow-xl z-10" color={['#d5c596', '#ffbe7b', '#f3be16']}>
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
                        <Image
                            src="/ceh.png"
                            alt="CERTIFICATIONS"
                            width={100} // Adjust width
                            height={100} // Adjust height
                            className="w-full max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[200px] object-contain"
                        />
                        <h3 className="z-10 text-center text-[clamp(1.5rem,_3vw,_2rem)] text-xs text-gray-800 dark:text-gray-200 mt-3">
                            Certified Ethical Hacker
                        </h3>
                        <a href="https://aspen.eccouncil.org/VerifyBadge?type=certification&a=xT1zfB1v+fE31joaVFZ0WwJy/+6E4eu9pjiaRbK0RW0=">
                            <Button variant="gooeyLeft" className="mt-3 z-10 bg-gray-700 hover:bg-[000000] verify">
                                Verify
                            </Button>
                        </a>
                        <div
                            className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                    </MagicCard>

                    {/* Second MagicCard */}
                    <MagicCard
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#404040_50%,transparent_100%)] p-6 shadow-2xl"
                    >
                        <Image
                            src="/ceh-practical.png"
                            alt="CERTIFICATIONS"
                            width={100} // Adjust width
                            height={100} // Adjust height
                            className="w-full max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[200px] object-contain"
                        />
                        <h3 className="z-10 text-center text-[clamp(1.5rem,_3vw,_2rem)] text-xs text-gray-800 dark:text-gray-200 mt-3">
                            Certified Ethical Hacker (Practical)
                        </h3>
                        <a href="https://aspen.eccouncil.org/VerifyBadge?type=certification&a=65LL4fCkTK7eAnb3+wAPr5S1xF0KV92rsDdezUe0+qs=">
                            <Button variant="gooeyLeft" className="mt-3 z-10 bg-gray-700 hover:bg-[000000] verify">
                                Verify
                            </Button>
                        </a>
                        <div
                            className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                    </MagicCard>

                    {/* Third MagicCard */}
                    <MagicCard
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#404040_50%,transparent_100%)] p-6 shadow-2xl"
                    >
                        <Image
                            src="/ceh-master.png"
                            alt="CERTIFICATIONS"
                            width={100} // Adjust width
                            height={100} // Adjust height
                            className="w-full max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[200px] lg:max-h-[200px] object-contain"
                        />
                        <h3 className="z-10 text-center text-[clamp(1.5rem,_3vw,_2rem)] text-xs text-gray-800 dark:text-gray-200 mt-3">
                            Certified Ethical Hacker (Masters)
                        </h3>
                        <a href="https://aspen.eccouncil.org/VerifyBadge?type=certification&a=65LL4fCkTK7eAnb3+wAPr2IpIXhxULxsUkPxsYJfIZ0=">
                            <Button variant="gooeyLeft" className="mt-3 z-10 bg-gray-700 hover:bg-[000000] verify">
                                Verify
                            </Button>
                        </a>
                        <div
                            className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                    </MagicCard>
                </MagicContainer>
                <MagicContainer className="flex h-auto w-full flex-col gap-4 lg:h-auto lg:flex-row mt-4">
                    {/* First MagicCard */}
                    <MagicCard
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#404040_50%,transparent_100%)] p-6 shadow-2xl"
                    >
                        <Image
                            src="/pen-100.png"
                            alt="CERTIFICATIONS"
                            width={100} // Adjust width
                            height={100} // Adjust height
                            className="w-full max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[200px] object-contain"
                        />
                        <h3 className="z-10 text-center text-[clamp(1.5rem,_3vw,_2rem)] text-xs text-gray-800 dark:text-gray-200 mt-3">
                            Network Penetration Testing Essentials
                        </h3>
                        <a href="https://www.credential.net/dc0ec938-04bd-4a53-b044-80b0472b5ebe">
                            <Button variant="gooeyLeft" className="mt-3 z-10 bg-gray-700 hover:bg-[000000] verify">
                                Verify
                            </Button>
                        </a>
                        <div
                            className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                    </MagicCard>

                    {/* Second MagicCard */}
                    <MagicCard
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#404040_50%,transparent_100%)] p-6 shadow-2xl"
                    >
                        <Image
                            src="/cnss.png"
                            alt="CERTIFICATIONS"
                            width={100} // Adjust width
                            height={100} // Adjust height
                            className="w-full max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[200px] object-contain"
                        />
                        <h3 className="z-10 text-center text-[clamp(1.5rem,_3vw,_2rem)] text-xs text-gray-800 dark:text-gray-200 mt-3">
                            Certified Network Security Specialist
                        </h3>
                        <a href="https://www.credential.net/4d9657f6-e239-4c3f-9629-c68b0cc6d54b">
                            <Button variant="gooeyLeft" className="mt-3 z-10 bg-gray-700 hover:bg-[000000] verify">
                                Verify
                            </Button>
                        </a>
                        <div
                            className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                    </MagicCard>

                    {/* Third MagicCard */}
                    <MagicCard
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#404040_50%,transparent_100%)] p-6 shadow-2xl"
                    >
                        <Image
                            src="/oscp.svg"
                            alt="CERTIFICATIONS"
                            width={100} // Adjust width
                            height={100} // Adjust height
                            className="w-full max-w-[75px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[200px] lg:max-h-[200px] object-contain"
                        />
                        <h3 className="z-10 text-center text-[clamp(1.5rem,_3vw,_2rem)] text-xs text-gray-800 dark:text-gray-200 mt-3">
                            Offensive Security Certified Professional
                        </h3>
                        <a href="">
                            <Button variant="gooeyLeft" className="mt-3 z-10 bg-gray-700 hover:bg-[000000] verify">
                                On-going
                            </Button>
                        </a>
                        <div
                            className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                    </MagicCard>
                </MagicContainer>
            </ShineBorder>
        </div>
    );
}

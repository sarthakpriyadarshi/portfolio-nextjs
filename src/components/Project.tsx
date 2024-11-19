"use client";
import React from "react";
import {PinContainer} from "@/components/ui/3d-pin";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";

export default function Project() {
    return (
        <div className="min-h-72 bg-background flex items-center justify-center py-7 px-4 md:px-10" id="project">
            <ShineBorder
                className="relative flex flex-col w-full max-w-screen-lg mx-auto items-center justify-center overflow-hidden rounded-lg border p-6 shadow-xl z-10"
                color={['#d5c596', '#ffbe7b', '#f3be16']}>
                <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                    <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl text-center">
                        Code, chaos and projects
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl text-center">
                        Welcome to the gallery of glory and glitches. These projects are proof that with enough caffeine
                        and Ctrl+Z, anything is possible.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mx-2">
                    <PinContainer
                        title="GitHub"
                        href="https://github.com/sarthakpriyadarshi/eProctor"
                        containerClassName="sm:mx-4 md:mx-6"  // Added margin classes
                    >
                        <div
                            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                eProctor
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal font-change">
                                 <span className="text-slate-400 ">
                                        An Online Proctoring Tool
                                 </span>
                            </div>
                            <div
                                className="relative flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-gray-500 via-white-500 to-yellow-500 overflow-hidden">
                                <Image
                                    src="/eProctor.png" // Adjust with the correct path
                                    alt="Profile"
                                    width={600}      // Set base width
                                    height={600}     // Set base height (adjust for aspect ratio)
                                    className="w-full h-full object-cover" // Ensure the image covers the container
                                />
                                {/* Gradient Overlay */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-gray-500 via-white-500 to-yellow-500 opacity-40"/>
                            </div>
                        </div>
                    </PinContainer>

                    <PinContainer
                        title="GitHub"
                        href="https://github.com/sarthakpriyadarshi/Guardian-Eye"
                        containerClassName="sm:mx-4 md:mx-6"  // Added margin classes
                    >
                        <div
                            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                Guardian Eye
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal font-change">
                                <span className="text-slate-500">
                                    An AI Based Door Unlocking System
                                </span>
                            </div>
                            <div
                                className="relative flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-gray-500 via-white-500 to-yellow-500 overflow-hidden">
                                <Image
                                    src="/GuardianEye.png" // Adjust with the correct path
                                    alt="Profile"
                                    width={600}      // Set base width
                                    height={600}     // Set base height (adjust for aspect ratio)
                                    className="w-full h-full object-cover" // Ensure the image covers the container
                                />
                                {/* Gradient Overlay */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-gray-500 via-white-500 to-yellow-500 opacity-40"/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            </ShineBorder>
        </div>
    );
}

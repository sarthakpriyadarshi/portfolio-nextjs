import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import ShinyButton from '@/components/ui/shiny-button';
import ShineBorder from "@/components/ui/shine-border";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CopyEmailButton from '@/components/ui/CopyEmailButton';
import React from "react";
import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex items-center justify-center bg-background relative px-4 pt-5 pb-7 md:px-10 mt-3 md:mt-16" id="hero">
            <ShineBorder
                className="relative flex flex-col md:flex-row w-full max-w-screen-lg mx-auto items-center md:items-start justify-center overflow-hidden rounded-lg border bg-background p-6 md:p-10 shadow-xl z-10"
                color={['#ffffff', '#131313', '#FFBE7B']}
            >
                {/* Text Content */}
                <div className="flex flex-col md:flex-row justify-center items-center w-full mt-4">
                    {/* Text and Buttons Div */}
                    <div className="flex flex-col items-start justify-center w-full md:w-[50%] px-6 md:px-8 mb-8 md:mb-0">
                        <h1 className="z-10 whitespace-pre-wrap text-left text-3xl md:text-5xl font-medium tracking-tighter text-black dark:text-white mb-6">
                            SARTHAK PRIYADARSHI
                        </h1>
                        <h2 className="z-10 whitespace-pre-wrap text-left text-lg md:text-xl tracking-tighter text-black dark:text-white mb-8">
                            Ethical Hacker and Penetration Tester
                        </h2>
                        <div className="flex justify-center space-x-6 mb-10 mt-2 z-10">
                            <a
                                href="https://example.com/download-cv"
                                target="_blank"
                                style={{ textDecoration: 'none' }}
                            >
                                <FaGithub
                                    className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition duration-300"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/yourusername" // Replace with your LinkedIn URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm md:text-xl"
                            >
                                <FaLinkedin
                                    className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition duration-300"
                                />
                            </a>
                        </div>
                        <p className="text-justify text-base md:text-sm lg:text-xl mb-6 break-words">
                            I am a Penetration Tester and Developer from India. I specialize in black-box penetration
                            testing and web development.
                        </p>
                        <p className="text-justify text-base md:text-sm lg:text-xl mb-6">
                            I have a deep appreciation for developers—they give me the opportunity to test and improve their systems.
                        </p>
                        <p className="text-justify text-base md:text-sm lg:text-xl mb-8 break-words">
                            My technical expertise includes proficiency in Python, Java, Bash scripting, Linux and Windows
                            administration, and networking. Additionally, I have a foundational knowledge of the MERN stack.
                        </p>

                        {/* Buttons side by side */}
                        <div className="flex justify-center items-center space-x-4">
                            <a
                                href="https://example.com/download-cv"
                                target="_blank"
                                style={{ textDecoration: 'none' }}
                            >
                                <ShinyButton text="Download CV" />
                            </a>
                            <CopyEmailButton />
                        </div>
                    </div>

                    {/* Image Div */}
                    <div className="flex justify-center items-center w-full md:w-[50%] mt-8 md:mt-0 md:ml-8 z-10">
                        <Image
                            src="/image.jpg" // Adjust with the correct path
                            alt="Profile"
                            width={600}      // Set base width
                            height={600}     // Set base height (adjust for aspect ratio)
                            className="rounded-lg border max-w-full h-auto"
                        />
                    </div>
                </div>



                {/* Dot Pattern */}
                <DotPattern
                    width={20}
                    height={20}
                    cx={1}
                    cy={1}
                    cr={1}
                    className={cn(
                        "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
                    )}
                />
            </ShineBorder>

            {/* Ink cursor component */}
        </div>
    );
}

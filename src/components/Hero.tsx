import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import ShinyButton from '@/components/ui/shiny-button'
import ShineBorder from "@/components/ui/shine-border";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import React from "react";

export default function Home() {
    return (
        <div className="flex items-center justify-center bg-background relative px-4 py-7 md:px-10 mt-10 md:mt-16">
            <ShineBorder
                className="relative flex flex-col md:flex-row w-full max-w-screen-lg mx-auto items-center md:items-start justify-center overflow-hidden rounded-lg border bg-background p-6 md:p-10 shadow-xl z-10" color={['#ffffff', '#131313', '#FFBE7B']}>
                {/* Text Content */}
                <div className="flex flex-col items-start justify-center w-full md:w-[50%]">
                    <h1 className="z-10 whitespace-pre-wrap text-left text-3xl md:text-5xl font-medium tracking-tighter text-black dark:text-white mb-3">
                        SARTHAK PRIYADARSHI
                    </h1>
                    <h2 className="z-10 whitespace-pre-wrap text-left text-lg md:text-xl tracking-tighter text-black dark:text-white mb-10">
                        An Ethical Hacker and Penetration Tester
                    </h2>
                    <div className="flex justify-center space-x-6 mb-8 mt-1 z-10">
                        <a
                            href="https://example.com/download-cv"
                            target="_blank"
                            style={{textDecoration: 'none'}}
                        >
                            <FaGithub
                                className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition duration-300"/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yourusername" // Replace with your LinkedIn URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm md:text-xl"
                        >
                            <FaLinkedin
                                className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition duration-300"/>
                        </a>
                    </div>
                    <p className="text-left text-base md:text-xl mb-6 break-words">
                        I am a Penetration Tester, A Developer from India. I specialize in Black Box Penetration Testing
                        and Web Development.
                    </p>
                    <p className="text-left text-base md:text-xl mb-6">
                        I mean love Developers too, because they give me the opportunity to exploit them.
                    </p>
                    <p className="text-left text-base md:text-xl mb-8 break-words">
                        I am proficient at Python, Java, Bash Scripting, Linux & Windows Administration, Networking, and
                        have basic knowledge of the MERN Stack.
                    </p>
                    <a
                        href="https://example.com/download-cv"
                        target="_blank"
                        style={{textDecoration: 'none'}}
                    >
                        <ShinyButton text="Download CV"/>
                    </a>
                </div>


                <div className="flex justify-center items-center w-full md:w-[50%] mt-4 md:mt-0">
                    <img
                        src="https://via.placeholder.com/400x500"
                        className="rounded-lg border max-w-full"
                        alt="Profile"
                    />
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

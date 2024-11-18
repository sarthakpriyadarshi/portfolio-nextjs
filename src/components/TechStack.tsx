import { FaReact, FaJava, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiCyberdefenders, SiTypescript, SiJavascript, SiNextdotjs, SiPostgresql, SiMysql, SiGnubash, SiGit, SiKalilinux, SiWindows, SiWindowsterminal } from 'react-icons/si';
import ShineBorder from "@/components/ui/shine-border";
import React from "react";

interface TechStackItem {
    icon: JSX.Element;
    name: string;
}

const techStack: TechStackItem[] = [
    { icon: <SiCyberdefenders />, name: 'Cyber Security' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaReact />, name: 'React.js' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiWindows />, name: 'Windows Administration'},
    { icon: <SiKalilinux />, name: 'Linux Administration' },
    { icon: <SiGnubash />, name: 'Bash Scripting' },
    { icon: <SiWindowsterminal />, name: 'Windows CLI Scripting' },
    { icon: <SiGit />, name: 'Git' },
];

const TechStack = () => {
    return (
        <div className="min-h-72 bg-background flex items-center justify-center py-10 px-4 md:px-10">
            <ShineBorder
                className="relative flex flex-col w-full max-w-screen-lg mx-auto items-center justify-center overflow-hidden rounded-lg border p-6 shadow-xl"
                color={['#ffffff', '#131313', '#FFBE7B']}>
                <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl text-center">
                    Tools which i trade
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl text-center">
                    Penetration testing: Breaking things to make them better. Software development: Building things to break them later.
                    But hey, both require some serious tech muscle!
                </p>
                <div className="tech-stack">
                    {techStack.map((tech, index) => (
                        <div className="tech-item md:text-sm sm:text-xs" key={index}>
                            <div className="icon">{tech.icon}</div>
                            <span className="name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </ShineBorder>
        </div>

    )
        ;
};

export default TechStack;

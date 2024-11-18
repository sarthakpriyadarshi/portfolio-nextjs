import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconPackage,
    IconBriefcase2,
    IconHome,
    IconBooks,
    IconCode,
    IconCertificate,
} from "@tabler/icons-react";
import Lenis from "@studio-freight/lenis";

export function NavigationMenu({ lenis }: { lenis: React.RefObject<Lenis | null> }) {

    const links = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#hero",
        },
        {
            title: "Tech Stack",
            icon: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#techstack",
        },
        {
            title: "Certifications",
            icon: <IconCertificate className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#certification",
        },
        {
            title: "Experience",
            icon: <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#experience",
        },
        {
            title: "Education",
            icon: <IconBooks className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#education",
        },
        {
            title: "Projects",
            icon: <IconPackage className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#project",
        },
        {
            title: "LinkedIn",
            icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://linkedin.com/in/sarthakpriyadarshi",
        },
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://github.com/sarthakpriyadarshi",
        },
    ];

    const handleNavigation = (href: string) => {
        if (lenis.current && href.startsWith("#")) {
            const target = document.querySelector(href);
            if (target instanceof HTMLElement) {
                lenis.current.scrollTo(target);
            } else {
                console.error(`Target not found for href: ${href}`);
            }
        } else if (!href.startsWith("#")) {
            window.open(href, "_blank");
        }
    };

    return (
        <div className="w-full flex justify-center">
            {/* Mobile Navigation */}
            <div className="fixed bottom-8 right-4 z-50 md:hidden">
                <FloatingDock
                    mobileClassName="bottom-0"
                    lenis={lenis}
                    items={links.map((link) => ({
                        ...link,
                        onClick: () => handleNavigation(link.href),
                    }))}
                />
            </div>

            {/* Desktop Navigation */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
                <FloatingDock
                    lenis={lenis}
                    items={links.map((link) => ({
                        ...link,
                        onClick: () => handleNavigation(link.href),
                    }))}
                />
            </div>
        </div>
    );
}

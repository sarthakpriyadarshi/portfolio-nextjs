import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import ShineBorder from "@/components/ui/shine-border";
import Lenis from "@studio-freight/lenis";

export const FloatingDock = ({
                                 items,
                                 desktopClassName,
                                 mobileClassName,
                                 lenis,
                             }: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    desktopClassName?: string;
    mobileClassName?: string;
    lenis: React.RefObject<Lenis | null>;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} lenis={lenis} />
            <FloatingDockMobile items={items} className={mobileClassName} lenis={lenis} />
        </>
    );
};

const FloatingDockMobile = ({
                                items,
                                className,
                                lenis,
                            }: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
    lenis: React.RefObject<Lenis | null>;
}) => {
    const [open, setOpen] = useState(false);

    const handleNavigation = (href: string) => {
        if (lenis.current && href.startsWith("#")) {
            const target = document.querySelector(href) as HTMLElement | null; // Explicit cast
            if (target) {
                lenis.current.scrollTo(target); // Ensure lenis receives an HTMLElement
            } else {
                console.error(`Target not found for href: ${href}`);
            }
        } else if (!href.startsWith("#")) {
            window.open(href, "_blank");
        }
    };

    return (
        <div className={cn("relative block md:hidden", className)} style={{ position: "relative", zIndex: 9999 }}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute bottom-full mb-2 inset-x-0 flex flex-col items-center gap-3"
                        style={{
                            zIndex: 9999, // Ensure menu is on top of everything
                            position: "absolute", // Keep menu absolutely positioned
                        }}
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: { delay: idx * 0.05 },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <button
                                    onClick={() => handleNavigation(item.href)}
                                    className="h-12 w-12 rounded-full bg-gray-50 dark:bg-[#df8216] flex items-center justify-center"
                                    style={{
                                        zIndex: 10001, // Ensure button stays above the menu
                                        position: "relative", // Button needs to be positioned for z-index
                                    }}
                                >
                                    <div className="h-6 w-6">{item.icon}</div>
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="h-14 w-14 rounded-full bg-gray-50 dark:bg-[#df8216] flex items-center justify-center"
                style={{
                    zIndex: 10001, // Ensure button is above the menu
                    position: "relative", // Button should be positioned for z-index
                }}
            >
                <IconLayoutNavbarCollapse className="h-6 w-6 text-neutral-500 dark:text-white" />
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({
                                 items,
                                 className,
                                 lenis,
                             }: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
    lenis: React.RefObject<Lenis | null>;
}) => {
    const mouseX = useMotionValue(Infinity);

    const handleNavigation = (href: string) => {
        if (lenis.current && href.startsWith("#")) {
            const target = document.querySelector(href) as HTMLElement | null; // Explicit cast
            if (target) {
                lenis.current.scrollTo(target); // Ensure lenis receives an HTMLElement
            } else {
                console.error(`Target not found for href: ${href}`);
            }
        } else if (!href.startsWith("#")) {
            window.open(href, "_blank");
        }
    };


    return (
        <ShineBorder className="hidden md:block p-0 border" color={["#f3be16", "#df8216", "#FFBE7B"]}>
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className={cn(
                    "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-black px-4 pb-3",
                    className
                )}
            >
                {items.map((item) => (
                    <IconContainer
                        key={item.title}
                        mouseX={mouseX}
                        title={item.title}
                        icon={item.icon}
                        href={item.href}
                        onClick={() => handleNavigation(item.href)}
                    />
                ))}
            </motion.div>
        </ShineBorder>
    );
};

function IconContainer({
                           mouseX,
                           title,
                           icon,
                           // eslint-disable-next-line @typescript-eslint/no-unused-vars
                           href,
                           onClick,
                       }: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
    onClick: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
    const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

    const [hovered, setHovered] = useState(false);

    return (
        <button onClick={onClick}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </button>
    );
}

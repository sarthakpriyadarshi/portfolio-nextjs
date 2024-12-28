"use client";

import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"], // Adjusted offsets
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    // Smooth gradient color transition for the circle
    const circleColor = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1], // Fine-grained thresholds for smoother transition
        ["#595959", "#9f7d1a", "#f3be16", "#f3be16", "#f3be16"] // Smooth gradient between colors
    );

    // Smooth gradient color transition for the title
    const titleColor = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1], // Same thresholds for consistency
        ["#444444", "#6e5531", "#f3be16", "#f3be16", "#f3be16"] // Smooth gradient between colors
    );

    return (
        <div
            className="w-full bg-white dark:bg-black font-sans md:px-10"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <motion.div
                                className="h-10 w-10 absolute left-3 md:left-3 rounded-full flex items-center justify-center"
                                style={{
                                    backgroundColor: "rgb(35,35,35)", // Dull background for outer circle
                                }}
                            >
                                <motion.div
                                    className="h-4 w-4 rounded-full border border-neutral-300 dark:border-neutral-700"
                                    style={{
                                        backgroundColor: circleColor, // Smooth gradient transition for the inner circle
                                    }}
                                />
                            </motion.div>
                            <motion.h3
                                className="hidden md:block text-lg md:pl-20 md:text-4xl font-bold"
                                style={{
                                    color: titleColor, // Smooth gradient transition for title
                                }}
                            >
                                {item.title}
                            </motion.h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-gray-500 via-[#df8216] to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

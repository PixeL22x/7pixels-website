"use client";

import { useLenisScroll } from "@/contexts/SmoothScrollContext";
import { useEffect } from "react";

export function SmoothScrollExample() {
    const lenis = useLenisScroll();

    useEffect(() => {
        if (!lenis) return;

        // Example: Scroll to top when component mounts
        const handleScrollToTop = () => {
            lenis.scrollTo(0, { duration: 2 });
        };

        // Example: Listen to scroll events
        const handleScroll = (e: any) => {
            console.log("Scroll progress:", e.progress);
        };

        lenis.on("scroll", handleScroll);

        // Example: Scroll to a specific element
        const scrollToElement = () => {
            const element = document.getElementById("target-element");
            if (element) {
                lenis.scrollTo(element, { duration: 1.5, offset: -100 });
            }
        };

        // Cleanup
        return () => {
            lenis.off("scroll", handleScroll);
        };
    }, [lenis]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Smooth Scroll Examples</h2>

            <div className="space-y-4">
                <button
                    onClick={() => lenis?.scrollTo(0, { duration: 2 })}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Scroll to Top
                </button>

                <button
                    onClick={() => lenis?.scrollTo(1000, { duration: 1.5 })}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                    Scroll to 1000px
                </button>

                <button
                    onClick={() => lenis?.scrollTo("bottom", { duration: 2 })}
                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
                >
                    Scroll to Bottom
                </button>
            </div>

            <div id="target-element" className="mt-20 p-8 bg-gray-100 rounded">
                <h3 className="text-xl font-semibold">Target Element</h3>
                <p>This element can be scrolled to using the hook.</p>
            </div>
        </div>
    );
}

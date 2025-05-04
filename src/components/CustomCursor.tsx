'use client'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const handleMouseMove = (event: MouseEvent) => {
            const { clientX: x, clientY: y } = event;
            gsap.to(cursor, {
                duration: 0.1,
                x: x - cursor.offsetWidth / 2,
                y: y - cursor.offsetHeight / 2,
            });
        };

        const handleMouseOverElement = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.tagName === "BUTTON" || target.tagName === "A") {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOverElement);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOverElement);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-150 ease-out
                ${isActive
                    ? "w-8 h-8 bg-emerald-400 border border-emerald-100 shadow-[0_0_10px_rgba(52,211,153,0.6)] opacity-90"
                    : "w-4 h-4 bg-emerald-300 opacity-60"
                }
                   rounded-full`}
        />

    );
}

export default CustomCursor;

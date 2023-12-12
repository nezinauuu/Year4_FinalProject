"use client";
import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";

export const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const halfPageHeight = document.documentElement.scrollHeight / 2;
            setShowButton(scrollTop > halfPageHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="flex justify-center">
            {showButton && (
                <Button
                    className="fixed top-10 left-5 transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-peach duration-300"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    Back to top
                </Button>
            )}
        </div>
    );
};

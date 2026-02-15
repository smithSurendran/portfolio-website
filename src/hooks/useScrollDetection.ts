import { useState, useEffect } from "react";

export function useScrollDetection(threshold: number = 10) {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold)
        }

        handleScroll() // Check scroll position on mount
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [threshold])

    return isScrolled
}
import { useState, useEffect } from "react";

export default function useNavbar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        const screenHigh = window.innerHeight;
        setScrolled(window.scrollY > screenHigh);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { 
        active, 
        setActive, 
        toggle, 
        setToggle, 
        scrolled, 
        isOpen, 
        setIsOpen 
    };
}
import { navLinks } from "../data/navLinks";

type NavLinksProps = {
    scrolled?: boolean;
    onClick?: () => void;
    className?: string;
};

const NavLinks = ({ scrolled, onClick, className }: NavLinksProps) => {
    return (
        <>
            {
                navLinks.map((link)=>(
                    <a key={link.label} className={`relative transition-colors duration-500 ease-in-out group ${scrolled ? "text-gray-800" : "text-white"} ${className}`} href={link.url} onClick={onClick}>
                        {link.title}
                        <span className="absolute left-0 -bottom-1 w-full rounded-2xl h-[2px] bg-gray-800 scale-x-0 opacity-0 origin-center transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100"/>
                    </a>
                ))
            }
        </>
    )
}

export default NavLinks

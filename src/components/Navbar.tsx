import useNavbar from "../hooks/useNavbar"
import { iconList } from "../data/icons";
import { navLinks } from "../data/navLinks";

const Navbar = () => {

    const { scrolled, isOpen, setIsOpen } = useNavbar();

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 duration-1000 ease-in-out ${scrolled || isOpen ? "backdrop-filter backdrop-blur-lg shadow-md scale-100" : "scale-95 bg-none "}`}>
            <div className='container mx-auto px-6 p-4'>
                <div className="flex flex-row-reverse md:flex-row items-center justify-between">
                    <a className={`text-xl font-bold block ${scrolled ? "text-gray-800" : "text-white"} sm:block md:hidden lg:block`} href="#hero">
                        I.IV∆N
                    </a>
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link)=>(
                            <a key={link.label} className={`relative ${scrolled ? "text-gray-800" : "text-white"} transition-colors duration-500 ease-in-out group`} href={link.url}>
                                {link.title}
                                <span className="absolute left-0 -bottom-1 w-full rounded-2xl h-[2px] bg-gray-800 scale-x-0 opacity-0 origin-center transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100"/>
                            </a>
                        ))}
                    </div>
                    <div className="hidden md:flex gap-4">
                        {iconList.map(({ id, url, name, component: Icon }) => (
                            <a 
                                key={id} 
                                aria-label={`Go to ${name}`}
                                href={url}
                                rel="noopener noreferrer"
                                target='_blank'
                            >
                                <Icon className={`w-6 h-6  hover:cursor-pointer ${scrolled ? "text-gray-600" : "text-white"} ease-in-out duration-500`} />
                            </a>
                        ))}
                    </div>

                    {/* Menu para resoluciones pequeñas */}
                    <button 
                        className='p-1 md:hidden bg-white/90 rounded-lg backdrop-blur-sm shadow-lg'
                        onClick={()=> setIsOpen(!isOpen)}
                    >
                        <svg 
                            aria-hidden="true" 
                            className={`w-6 h-6 text-gray-600 dark:text-white transform transition-transform duration-300 ease-in-out ${
                                isOpen ? "rotate-90" : "rotate-0"
                            }`}
                            fill="none" 
                            height="24" 
                            viewBox="0 0 24 24"
                            width="24" 
                            xmlns="http://www.w3.org/2000/svg" 
                        >
                            {isOpen ? (
                                <path
                                    d="M6 18L18 6M6 6l12 12"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                />
                            ) : (
                                <path
                                    d="M5 7h14M5 12h14M5 17h10"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                {isOpen && (
                    <div className="lg:hidden mt-4 bg-none rounded-lg p-4 space-y-4">
                        {
                            navLinks.map((link)=>(
                                <a key={link.label} className="block text-gray-800" href={link.url} onClick={() => setIsOpen(false)} >
                                    {link.title}
                                </a>
                            ))
                        }
                        <div className="flex gap-4 pt-2 border-t">
                        {iconList.map(({ id, url, name, component: Icon }) => (
                            <a
                            key={id}
                            aria-label={`Go to ${name}`}
                            href={url}
                            rel="noopener noreferrer"
                            target="_blank"
                            onClick={()=> setIsOpen(false)}
                            >
                            <Icon className="w-6 h-6 text-gray-700 hover:text-gray-500 transition-colors" />
                            </a>
                        ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar

import { iconList } from "../data/icons";

type IconsLinksProps = {
    scrolled?: boolean;
    onClick?: () => void;
    className?: string;
};

const IconLinks = ({ scrolled, onClick, className }: IconsLinksProps) => {
    return (
        <div className={`flex gap-4 ${className || ""}`}>
            {iconList.map(({ id, url, name, component: Icon }) => (
                <a
                    key={id}
                    aria-label={`Go to ${name}`}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={onClick}
                >
                    <Icon
                        className={`w-6 h-6 hover:cursor-pointer transition-colors duration-500 ease-in-out ${
                        scrolled ? "text-gray-600 hover:text-gray-800" : "text-white hover:text-gray-300"
                        }`}
                    />
                </a>
            ))}
        </div>
    )
}

export default IconLinks

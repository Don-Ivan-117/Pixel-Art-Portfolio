import HeadingUnderline from "../components/HeadingUnderline"


const About = () => {
    return (
        <section id="about" className="relative min-h-screen px-6 lg:px-12 bg-primary-blue-light overflow-hidden rounded-tr-[3rem]">
            <div className="max-w-lg mx-auto flex flex-col justify-center min-h-screen text-center sm:text-left">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                    About the Artist
                </h2>
                <HeadingUnderline />
                <p className="text-lg text-gray-100 leading-relaxed mb-8 font-poppins">
                    I am a digital artist and developer who finds inspiration at the intersection
                    of technology and creative expression. My work explores how algorithms can
                    generate beauty, and how code can become a brush for the modern soul.
                </p>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    {["Pixel Art", "Web Development", "Digital Design", "UI/UX"].map((tag, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 text-gray-100 border border-gray-300 rounded-xl backdrop-blur-sm bg-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <img
                alt="flower"
                aria-hidden="true"
                className="absolute w-full max-w-md bottom-0 opacity-30 lg:opacity-100"
                src="src/assets/img/flowers.png"
            />
        </section>
    )
}

export default About

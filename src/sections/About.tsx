
const About = () => {
    return (
        <section className="relative min-h-screen px-6 lg:px-12 bg-[#3A6E96] overflow-hidden rounded-tr-[3rem]" id="about">
            <div className="relative z-10 flex min-h-screen">
                {/* Columna izquierda -> Imagen */}
                <div className="flex items-end justify-center">
                    <img 
                        alt="flower" 
                        className="w-full max-w-md object-contain"
                        src="src/assets/img/flowers.png" 
                    />
                </div>
                {/* Columna derecha -> Texto */}
                <div className="flex items-center justify-center">
                    <div className="max-w-lg text-center sm:text-left">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            About the Artist
                        </h2>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-amber-500 mx-auto sm:mx-0 mb-6" />
                        <p className="text-lg text-gray-100 leading-relaxed mb-8 font-poppins">
                            I am a digital artist and developer who finds inspiration at the intersection of technology and creative expression.
                            My work explores how algorithms can generate beauty, and how code can become a brush for the modern soul.
                        </p>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                            {["Pixel Art", "Web Development", "Digital Design", "UI/UX"].map((tag, i) => (
                                <span key={i} className="px-4 py-2 text-gray-100 border border-gray-300 rounded-xl backdrop-blur-sm bg-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

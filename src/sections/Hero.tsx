const Hero = () => {
    return (
        <section id="hero" className="relative h-screen overflow-hidden bg-primary-blue">
            <div className="absolute bg-primary-blue-dark bottom-0 w-full h-[40px] sm:h-[60px]" style={{ height: "60px" }}/>
            
            <div className="relative z-20 flex flex-col lg:flex-row h-full max-w-screen-xl mx-auto px-6">
                <div className="flex-1 flex flex-col pt-8 justify-center text-center items-center lg:justify-center lg:items-start lg:text-left lg:pt-0">
                    <span className="uppercase text-white text-sm font-bold mb-2 block">
                        Portrait:
                    </span>
                    <h1 className="text-white font-extrabold text-4xl sm:text-5xl mb-6">
                        Pixel 
                        <span className="block text-primary">
                            Artist
                        </span>
                    </h1>
                    <p className="text-stone-100 text-base md:text-2xl max-w-md">
                        I create digital experiences that are both visually stunning and functionally elegant. 
                        Every project is a careful balance of form and function, designed to leave a lasting impression.
                    </p>
                    <button className="mt-8 flex text-white uppercase py-4 text-base font-light px-10 border border-white rounded-md hover:bg-white/20 hover:cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-download animate-bounce"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 11l5 5l5 -5" />
                            <path d="M12 4l0 12" />
                        </svg>
                        &nbsp; Get started
                    </button>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end items-end lg:items-center overflow-hidden">
                    <img
                        alt=""
                        aria-hidden="true"
                        src="src/assets/img/church.webp"
                        className="max-h-full max-w-full object-contain mt-auto"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero

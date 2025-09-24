import { Card, CardBody, CardFooter, Image } from "@heroui/react"
import { artWork } from "../data/artworks"
import useArtworks from "../hooks/useArtwork"
import ArtworkModal from "../components/ArtworkModal"


const Artwork = () => {

    const {
        activeVersion,
        displayedBg,
        displayedColors,
        displayedImg,
        handleOpen,
        isOpen,
        nextItem,
        onClose,
        previousItem,
        selectItem ,
        setActiveVersion,
    } = useArtworks();

    return (
        <>
            <section id="artwork" className='relative py-20 px-6 lg:px-12 bg-[#0e5fd2] overflow-hidden'>
                <div  className='absolute inset-0 bg-[#f8f0e3] rounded-tl-[2rem] sm:rounded-tl-[3rem] z-0 smn:'/>

                <div className='relative max-w-7xl mx-auto z-10'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6'>Digital Collection</h2>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-[#ec8cba] to-[#63a3eb] mx-auto mb-6" />
                        <p className='text-lg text-gray-600 max-w-2xl fonts-popins mx-auto leading-relaxed'>
                            Each piece embodies a unique dialogue between technology and emotion, capturing moments of inspiration through contemporary visual forms.
                        </p>
                    </div>
                </div>

                <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {artWork.map((artwork, index) => (
                        <Card key={artwork.id} isPressable shadow="sm" className='bg-none bg-transparent' onPress={()=> handleOpen(artwork, index)}>
                            <CardBody className="overflow-visible p-0">
                                <Image 
                                    alt={artwork.title}
                                    className="w-full object-cover object-center h-[160px]"
                                    style={{
                                        backgroundColor: artwork.primaryColor
                                    }}
                                    radius="none"
                                    shadow="none"
                                    src={artwork.img}
                                    width="100%"
                                />
                            </CardBody>
                            <CardFooter className="p-6 flex flex-col space-y-3 items-start">
                                <div className="flex items-center justify-between w-full">
                                    <h3 className="text-xl font-serif font-semibold text-slate-900">
                                        {artwork.title}
                                    </h3>
                                    <span className="text-sm text-slate-500 font-medium">{artwork.yearCreation}</span>
                                </div>
                                <p className="text-slate-600 text-sm">Retrato</p>
                                <div className="flex space-x-2">
                                    {
                                        artwork.colors.map((color)=>(
                                            <div 
                                                key={color}
                                                className='w-4 h-4 rounded-full'
                                                style={{backgroundColor: color}}
                                            />
                                        ))
                                    }
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* ArtWork Detail Modal */}
            <ArtworkModal
            activeVersion={activeVersion}
            displayedBg={displayedBg}
            displayedColors={displayedColors}
            displayedImg={displayedImg}
            isOpen={isOpen}
            nextItem = {nextItem}
            onClose={onClose}
            previousItem = {previousItem}
            selectItem={selectItem}
            setActiveVersion={setActiveVersion}
            />
        </>
        
    )
}

export default Artwork

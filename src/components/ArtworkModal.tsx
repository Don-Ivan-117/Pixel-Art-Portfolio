import type { Artwork, Version } from "../types";
import { NextIcon, PreviousIcon } from "../icons/MusicIcons";
import { Button, Card, CardBody, CardFooter, CardHeader, Modal, ModalBody, ModalContent } from "@heroui/react";

type ArtworkModalProps = {
    activeVersion: Version | null;
    displayedBg: string;
    displayedColors: string[];
    displayedImg: string;
    isOpen: boolean;
    nextItem: () => void;
    onClose: () => void;
    previousItem: () => void;
    selectItem: Artwork | null;
    setActiveVersion: React.Dispatch<React.SetStateAction<Version | null>>
};

const ArtworkModal = ({ isOpen, onClose, selectItem, displayedImg, displayedColors, displayedBg, activeVersion, setActiveVersion, nextItem, previousItem}: ArtworkModalProps) => {
    if(!selectItem) return null;
    return (
        <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} size="5xl" hideCloseButton>
            <ModalContent className="flex flex-col gap-1 max-h-[100vh] bg-transparent shadow-none">
                {(onClose) => (
                    <ModalBody className="overflow-y-auto">
                        <div className="max-w-5xl w-full mx-auto p-0">
                            <div className="grid md:grid-cols-2 gap-2 h-full">
                                <div className='relative'>
                                    <button className='absolute top-2 right-2 sm:hidden' onClick={()=> onClose()}>
                                        <svg 
                                            aria-hidden="true" 
                                            className="w-6 h-6 text-gray-400/70 dark:text-white" 
                                            fill="none" 
                                            height="24" 
                                            viewBox="0 0 24 24"
                                            width="24" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                                        </svg>
                                    </button>
                                    <img
                                        alt={selectItem.title}
                                        className="w-full h-full object-contain rounded-2xl"
                                        src={displayedImg}
                                        loading="lazy"
                                        style={{backgroundColor: displayedBg}}
                                    />
                                </div>
                                <Card className="relative rounded-2xl overflow-hidden border-none shadow-none" style={{ background: `linear-gradient(135deg, ${displayedColors[0]} 50%, ${displayedColors[1] || displayedColors[0]} 50%)`}}>
                                    <CardHeader className="flex justify-between items-start px-6 pt-6">
                                        <div className="flex space-x-2">
                                            {
                                                displayedColors.map((color) => (
                                                    <div key={color} className="w-5 h-5 border border-white rounded-full shadow" style={{ backgroundColor: color }}/>
                                                ))
                                            }
                                        </div>
                                        <span className="text-sm tracking-widest text-gray-100">
                                            {selectItem.yearCreation}
                                        </span>
                                    </CardHeader>
                                    <CardBody className="px-6 py-4">
                                        <h1 className="text-4xl font-serif font-bold text-left text-gray-200">
                                            {selectItem.title}
                                        </h1>
                                        <p className="text-gray-200 mt-2 text-base leading-relaxed max-w-md">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sed tempora. Pariatur, tenetur.
                                        </p>
                                        <div className="flex gap-3 mt-6 flex-wrap">
                                            <button className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${!activeVersion ? "bg-gray-200 text-black font-semibold shadow-md": "bg-transparent text-white border-white"}`} onClick={() => setActiveVersion(null)}>
                                                Original
                                            </button>
                                            {selectItem.alternativePalette?.map((version, index) => (
                                                <button key={index} className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${ activeVersion === version ? "bg-gray-200 text-black font-semibold shadow-md" : "bg-transparent text-white border-white"}`} onClick={() => setActiveVersion(version)}>
                                                    Versión {index + 1}
                                                </button>
                                            ))}
                                        </div>
                                    </CardBody>
                                    <CardFooter className="px-6 pb-6">
                                        <div className="flex justify-between pt-4 border-t border-white w-full">
                                            <Button isIconOnly radius="full" className='bg-white' variant="light" onPress={() => previousItem()}>
                                                <PreviousIcon/>
                                            </Button>
                                            <Button isIconOnly radius="full" className='bg-white' variant="light" onPress={() => nextItem()}>
                                                <NextIcon />
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </ModalBody>
                )}
            </ModalContent>
        </Modal>
    )
}

export default ArtworkModal

import { useState } from "react";
import { useDisclosure } from "@heroui/react"; // O de donde lo importes
import { artWork } from "../data/artworks";
import type { Artwork, Version } from "../types";

export default function useArtworks() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectItem, setSelectItem] = useState<Artwork | null>(null);
    const [currentItem, setCurrentItem] = useState(0);
    const [activeVersion, setActiveVersion] = useState<Version | null>(null);

    const handleOpen = (item: Artwork, index: number) => {
        setSelectItem(item);
        setCurrentItem(index);
        setActiveVersion(null);
        onOpen();
    };

    const nextItem = () => {
        const nextIndex = (currentItem + 1) % artWork.length;
        setCurrentItem(nextIndex);
        setSelectItem(artWork[nextIndex]);
        setActiveVersion(null);
    };

    const previousItem = () => {
        const prevIndex = (currentItem - 1 + artWork.length) % artWork.length;
        setCurrentItem(prevIndex);
        setSelectItem(artWork[prevIndex]);
        setActiveVersion(null);
    };

    const displayedImg = activeVersion ? activeVersion.img : selectItem?.img;
    const displayedColors = activeVersion ? activeVersion.colors : selectItem?.colors;
    const displayedBg = activeVersion ? activeVersion.colors[0] : selectItem?.primaryColor;

    return {
        isOpen,
        onOpen,
        onClose,
        selectItem,
        currentItem,
        activeVersion,
        handleOpen,
        nextItem,
        previousItem,
        displayedImg,
        displayedColors,
        displayedBg,
        setActiveVersion,
    };
}

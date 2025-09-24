import type { SVGProps } from "react";

export type Version = {
    img: string;
    colors: string[];
};

export type Artwork = {
    id: number;
    title: string;
    img: string;
    primaryColor: string;
    yearCreation: string;
    colors: string[];
    alternativePalette?: Version[];
};

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export type contactFormType = {
    name : string;
    email: string;
    consultationType: string;
    message : string;
};

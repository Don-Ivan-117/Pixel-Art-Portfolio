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

import { Button } from "@heroui/react";
import { CheckIcon, ClipBoardIcon } from "../icons/ActionIcons";

type CopyToClipProps = {
    handleCopy : (text:string)=> Promise<void>;
    itsCopyID : boolean;
    id: string;
    text:string
}

const CopyToClip = ({handleCopy, itsCopyID, text } : CopyToClipProps) => {
    return (
        <Button isIconOnly aria-label="clipboard" size="sm" onPress={() => handleCopy(text)} className={` transition-all duration-300 rounded-full shadow-md backdrop-blur-sm ${itsCopyID ? "bg-primary-rose hover:bg-primary-rose pointer-events-none" : "bg-primary-blue hover:bg-primary-blue"} `}>
            {
                itsCopyID ? (
                    <ClipBoardIcon/>
                ) : (
                    <CheckIcon/>
                )
            }
        </Button>
    )
}

export default CopyToClip

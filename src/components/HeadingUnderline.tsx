type HeadinUnderlineProps  = {
    fromColor?: string;
    toColor?: string;
    className?: string
}

const HeadingUnderline = ({fromColor="from-primary-rose", toColor="to-primary-blue", className}: HeadinUnderlineProps) => {
    return (
        <div className={`w-24 h-0.5 mx-auto mb-6 bg-gradient-to-r ${fromColor} ${toColor} ${className}`} />
    )
}

export default HeadingUnderline

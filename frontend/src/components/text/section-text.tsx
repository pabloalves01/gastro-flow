interface SectionTextProps {
    title: string;
    subtitle: string;
}

const SectionText: React.FC<SectionTextProps> = ({ title, subtitle }) => {
    return (
        <div className="flex items-center w-full">
            <div className="flex flex-col ">
                <div className="text-white text-md font-semibold">
                    {title}
                </div>
                <div className="text-[#A1A1A1] text-sm font-regular">
                    {subtitle}
                </div>
            </div>
        </div>
    )
}

export default SectionText;
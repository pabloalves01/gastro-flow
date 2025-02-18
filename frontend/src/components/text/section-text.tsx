interface SectionTextProps {
    title: string;
    subtitle: string;
    icon?: React.ReactNode;
}

const SectionText: React.FC<SectionTextProps> = ({ title, subtitle, icon }) => {
    return (
        <div className="flex items-center w-full">
            {icon && (
                <div className="mr-4">
                    <div className="text-[#FF9800] rounded-full">
                        {icon}
                    </div>
                </div>
            )}
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
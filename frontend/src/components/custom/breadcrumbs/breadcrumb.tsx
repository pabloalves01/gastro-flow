import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/catalyst/button";

interface BreadcrumbItem {
    label: string;
    href: string;
}
interface BreadcrumbButton {
    label: string;
    icon?: React.ReactNode;
    href?: string
    onClick: () => void;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
    buttons?: BreadcrumbButton[];
}

export function Breadcrumb({ items, buttons }: BreadcrumbProps) {
    return (
        <nav className="flex items-center justify-between space-x-2 text-sm text-[#A1A1A1] pb-4">
            {/* Breadcrumb links */}
            <div className="flex items-center space-x-2">
                {items.map((item, index) => (
                    <div key={item.href} className="flex items-center">
                        {index > 0 && (
                            <ChevronRight className="w-4 h-4 mx-2 text-[#333333]" />
                        )}
                        <Link
                            to={item.href}
                            className={`hover:text-white transition-colors ${index === items.length - 1 ? "text-white font-medium" : ""}`}
                        >
                            {item.label}
                        </Link>
                    </div>
                ))}
            </div>

            {/* Breadcrumb buttons */}
            {buttons && buttons.length > 0 && (
                <div className="flex items-center space-x-2">
                    {buttons.map((button, index) => (
                        <div key={index}>
                            {button.href ? (
                                <Button className="flex items-center gap-2 px-4 py-2 cursor-pointer">
                                    <Link to={button.href} className="flex items-center gap-2">
                                        {button.icon && (
                                            <span className="w-5 h-5 flex items-center justify-center">
                                                {button.icon}
                                            </span>
                                        )}
                                        <span>{button.label}</span>
                                    </Link>
                                </Button>
                            ) : (
                                <Button
                                    onClick={button.onClick}
                                    className="flex items-center gap-2 px-4 py-2 cursor-pointer"
                                >
                                    {button.icon && (
                                        <span className="w-5 h-5 flex items-center justify-center">
                                            {button.icon}
                                        </span>
                                    )}
                                    <span>{button.label}</span>
                                </Button>
                            )}
                        </div>
                    ))}
                </div>
            )}

        </nav>
    );
}

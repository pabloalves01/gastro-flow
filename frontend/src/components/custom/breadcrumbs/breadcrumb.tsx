import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex items-center space-x-2 text-sm text-[#A1A1A1] pb-4">
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
        </nav>
    );
}
import { ReactNode, useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "../../utils/cn";

export type ToastProps = {
    open?: boolean;
    onClose?: () => void;
    title?: string;
    description?: string;
    icon?: ReactNode;
    type?: "success" | "error" | "info" | "warning";
    duration?: number;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
};

const defaultIcons = {
    success: <CheckCircle2 className="w-5 h-5 text-green-500" />,
    error: <XCircle className="w-5 h-5 text-red-500" />,
    warning: <AlertCircle className="w-5 h-5 text-yellow-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
};

export function Toast({
    open = false,
    onClose,
    title,
    description,
    icon,
    type = "info",
    duration = 3000,
    position = "top-right",
}: ToastProps) {
    const [isVisible, setIsVisible] = useState(open);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        setIsVisible(open);
        if (open) {
            const timer = setTimeout(() => {
                handleClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [open, duration]);

    const handleClose = () => {
        setIsLeaving(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsLeaving(false);
            onClose?.();
        }, 300);
    };

    if (!isVisible) return null;

    const positionClasses = {
        "top-right": "top-4 right-4",
        "top-left": "top-4 left-4",
        "bottom-right": "bottom-4 right-4",
        "bottom-left": "bottom-4 left-4",
    };

    return (
        <div
            className={cn(
                "fixed z-50 flex items-start w-full max-w-sm gap-4 p-4 rounded-lg shadow-lg bg-zinc-900 text-white",
                positionClasses[position],
                "animate-in slide-in-from-right-full duration-300",
                isLeaving && "animate-out slide-out-to-right-full duration-300"
            )}
            role="alert"
        >
            <div className="flex-shrink-0">
                {icon || defaultIcons[type]}
            </div>

            <div className="flex-1">
                {title && (
                    <h3 className="font-medium leading-5">{title}</h3>
                )}
                {description && (
                    <p className="mt-1 text-sm text-zinc-400">{description}</p>
                )}
            </div>

            <button
                onClick={handleClose}
                className="flex-shrink-0 w-5 h-5 text-zinc-400 hover:text-white transition-colors"
            >
                <XCircle className="w-full h-full" />
            </button>
        </div>
    );
}
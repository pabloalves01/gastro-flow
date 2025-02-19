import { useState, useRef, useEffect } from "react";
import { Input } from "./input";
import { Field, Label, Description } from "./fieldset";
import { Button } from "./button";
import { Calendar } from "lucide-react";

interface DatePickerProps {
    label?: string;
    description?: string;
    placeholder?: string;
    value?: Date;
    onChange?: (date: Date) => void;
    required?: boolean;
    disabled?: boolean;
    name?: string;
    className?: string;
    dateFormat?: string;
    minDate?: Date;
    maxDate?: Date;
    showClearButton?: boolean;
}

export function DatePicker({
    label,
    description,
    placeholder = "Selecione uma data",
    value,
    onChange,
    required,
    disabled,
    name,
    className,
    dateFormat = "dd/MM/yyyy",
    minDate,
    maxDate,
    showClearButton = true,
}: DatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const calendarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const formatDate = (date: Date): string => {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return dateFormat
            .replace("dd", day)
            .replace("MM", month)
            .replace("yyyy", year.toString());
    };

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        onChange?.(date);
        setIsOpen(false);
    };

    const handleClear = () => {
        setSelectedDate(undefined);
        onChange?.(undefined as any);
    };

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const days: Date[] = [];

        // Add empty days for padding
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(null as any);
        }

        // Add days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    };

    const isDateDisabled = (date: Date): boolean => {
        if (!date) return true;
        if (minDate && date < minDate) return true;
        if (maxDate && date > maxDate) return true;
        return false;
    };

    return (
        <Field className={className}>
            {label && <Label>{label}</Label>}
            {description && <Description>{description}</Description>}
            <div className="relative" ref={calendarRef}>
                <div className="relative">
                    <Input
                        type="text"
                        name={name}
                        value={selectedDate ? formatDate(selectedDate) : ""}
                        placeholder={placeholder}
                        required={required}
                        disabled={disabled}
                        onClick={() => setIsOpen(true)}
                        readOnly
                        className="bg-[#1B1B1B] border-[#333333] text-white cursor-pointer"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                        {showClearButton && selectedDate && (
                            <button
                                onClick={handleClear}
                                className="p-0.5 hover:bg-[#333333] rounded-md flex items-center justify-center text-[#666666] hover:text-white"
                                type="button"
                            >
                                <span className="text-base leading-none">&times;</span>
                            </button>
                        )}
                        <Calendar className="w-4 h-4 text-[#666666]" />
                    </div>
                </div>

                {isOpen && (
                    <div className="absolute z-50 mt-1 p-4 bg-[#1B1B1B] border border-[#333333] rounded-lg shadow-lg w-[300px]">
                        <div className="flex justify-between items-center mb-4">
                            <Button
                                onClick={() =>
                                    setCurrentMonth(
                                        new Date(
                                            currentMonth.getFullYear(),
                                            currentMonth.getMonth() - 1
                                        )
                                    )
                                }
                                className="p-1 hover:bg-[#333333] rounded-md"
                            >
                                ←
                            </Button>
                            <span className="text-white font-medium">
                                {currentMonth.toLocaleString("default", {
                                    month: "long",
                                    year: "numeric",
                                })}
                            </span>
                            <Button
                                onClick={() =>
                                    setCurrentMonth(
                                        new Date(
                                            currentMonth.getFullYear(),
                                            currentMonth.getMonth() + 1
                                        )
                                    )
                                }
                                className="p-1 hover:bg-[#333333] rounded-md"
                            >
                                →
                            </Button>
                        </div>

                        <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                            {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(
                                (day) => (
                                    <div key={day} className="text-[#666666]">
                                        {day}
                                    </div>
                                )
                            )}
                        </div>

                        <div className="grid grid-cols-7 gap-1">
                            {getDaysInMonth(currentMonth).map((date, index) => (
                                <div key={index}>
                                    {date ? (
                                        <div
                                            onClick={() => !isDateDisabled(date) && handleDateSelect(date)}
                                            role="button"
                                            tabIndex={isDateDisabled(date) ? -1 : 0}
                                            aria-disabled={isDateDisabled(date)}
                                            className={`w-full p-2 text-center rounded-lg ${isDateDisabled(date)
                                                ? "text-[#666666] cursor-not-allowed"
                                                : selectedDate &&
                                                    date.toDateString() === selectedDate.toDateString()
                                                    ? "bg-[#FF9800] text-white hover:bg-[#F57C00]"
                                                    : "text-white hover:bg-[#333333] cursor-pointer"}`}
                                        >
                                            {date.getDate()}
                                        </div>
                                    ) : (
                                        <div className="w-full p-2" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Field>
    );
}
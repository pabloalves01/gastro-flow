import { User } from 'lucide-react';

export default function Header() {
    return (
        <div className="bg-[#1E1E1E] border-b-1 border-[#333333] p-4 flex justify-between items-center">
            <div className="text-white text-md font-semibold">
                Dashboard
            </div>

            <div className="flex justify-end">
                <div className="flex justify-center items-center w-10 h-10 bg-[#FF9800] rounded-full">
                    <User className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
}

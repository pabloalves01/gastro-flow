import { Button } from '../ui/catalyst/button'

export default function UnlockMoreBenefits() {
    return (
        <div className="flex flex-col py-12 px-6 gap-2 items-center justify-center bg-[#141414] border border-[#333333] p-6 rounded-xl">
            <div className='text-center'>
                <div className="text-white text-md font-semibold">Atualize seu plano para liberar mais recursos!</div>
                <div className="text-[#A1A1A1] text-sm font-regular mb-4">
                    Aproveite ao máximo com o plano Premium
                </div>
            </div>
            <Button className='bg-[#FF9800] py-3 px-8 text-md rounded-lg w-64 font-semibold text-white hover:bg-[#F57C00] transition-colors duration-300'>
                Atualizar Plano
            </Button>
        </div>
    )
}

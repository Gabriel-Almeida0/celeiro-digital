//TopBanner.tsx
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TopBanner() {
  return (
    <div className="bg-[#D35C27] text-white p-2">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <Image
            src="/placeholder.svg"
            alt="Fertilizer"
            width={30}
            height={30}
            className="object-contain"
          />
          <span className="font-semibold text-sm sm:text-base">OFERTA IMPERDÍVEL</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-bold">50% DE DESCONTO</span>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm sm:text-base">
            Comprar
          </Button>
        </div>
      </div>
    </div>
  )
}


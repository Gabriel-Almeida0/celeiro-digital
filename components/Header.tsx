//Header.tsx
import Image from 'next/image'
import { Search, ShoppingCart, MapPin, User, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div className="flex items-center">
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={180}
                height={130}
                className="object-contain"
              />
            </div>
            <Button variant="ghost" className="sm:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex-1 w-full sm:max-w-xl">
            <div className="relative">
              <Input
                type="search"
                placeholder="O que você procura?"
                className="w-full pl-4 pr-10 py-2 border-2 border-[#4A3F13]"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" />
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="text-[#4A3F13]" />
              <span>Selecione o CEP</span>
            </div>
            <User className="text-[#4A3F13]" />
            <ShoppingCart className="text-[#4A3F13]" />
          </div>
        </div>
      </div>
    </header>
  )
}

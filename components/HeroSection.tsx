//HeroSection.tsx
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[300px] sm:h-[400px]">
      <Image
        src="/img/fundo.jpg"
        alt="Agricultural Hero"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="container mx-auto text-white px-4">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            A maior variedade de<br />
            sementes agrícolas do<br />
            mercado em um só lugar!
          </h1>
          <Button className="bg-white text-black hover:bg-gray-100">
            Confira
          </Button>
        </div>
      </div>
    </section>
  )
}


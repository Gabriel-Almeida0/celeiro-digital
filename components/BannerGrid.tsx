//bannerGrid.tsx
import Image from "next/image"

export function BannerGrid() {
  return (
    <section className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative h-[150px] sm:h-[200px] rounded-lg overflow-hidden">
          <Image
            src="/img/irigacao.jpg"
            alt="Irrigation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-xl sm:text-3xl font-bold text-white text-center">IRRIGAÇÃO</h2>
          </div>
        </div>
        <div className="relative h-[150px] sm:h-[200px] rounded-lg overflow-hidden">
          <Image
            src="/img/maquinas.png"
            alt="Machines"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-xl sm:text-3xl font-bold text-white text-center">MÁQUINAS E DRONES AGRÍCOLAS</h2>
          </div>
        </div>
      </div>
    </section>
  )
}


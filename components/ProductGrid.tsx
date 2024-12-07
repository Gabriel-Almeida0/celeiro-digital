import Image from "next/image"

export function ProductGrid() {
  return (
    <section className="container mx-auto py-8 px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">MAIS VENDIDOS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-4">
            <Image
              src="/placeholder.svg"
              alt="Product"
              width={200}
              height={200}
              className="w-full object-contain mb-4"
            />
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Produto Exemplo</h3>
            <p className="text-gray-500 line-through text-xs sm:text-sm">R$ 99,99</p>
            <p className="text-lg sm:text-xl font-bold text-[#D35C27]">R$ 49,99</p>
            <p className="text-xs sm:text-sm text-gray-500">ou 12x de R$ 4,99</p>
          </div>
        ))}
      </div>
    </section>
  )
}


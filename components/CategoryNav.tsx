//CategoryNav.tsx
import Image from "next/image"

const categories = ['Bovinos', 'Equinos', 'Suínos', 'Galináceos', 'Coelhos', 'Psicultura', 'Apicultura', 'Outros']

export function CategoryNav() {
  return (
    <nav className="border-b overflow-x-auto">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center min-w-max">
          {categories.map((category) => (
            <div key={category} className="flex flex-col items-center gap-2 px-2">
              <div className=" flex items-center justify-center">
                <Image
                  src={`/img/${category}.png`} 
                  alt={category}
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

//Footer.tsx
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#4A3F13] text-white mt-8">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>Fale Conosco</li>
              <li>Trabalhe Conosco</li>
              <li>Atendimento</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>Política de Privacidade</li>
              <li>Termos de Uso</li>
              <li>Cupom de Desconto</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li>Segunda a Sexta</li>
              <li>08:00 às 18:00</li>
              <li>Telefone: (XX) XXXX-XXXX</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Baixe nosso App</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Image
                src="/img/App_Store.png"
                alt="App Store"
                width={180}
                height={80}
                className="object-contain"
              />
              <Image
                src="/img/play_store.png"
                alt="Play Store"
                width={180}
                height={130}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


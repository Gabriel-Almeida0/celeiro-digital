import { TopBanner } from "@/components/TopBanner"
import { Header } from "@/components/Header"
import { CategoryNav } from "@/components/CategoryNav"
import { HeroSection } from "@/components/HeroSection"
import { ProductGrid } from "@/components/ProductGrid"
import { BannerGrid } from "@/components/BannerGrid"
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />
      <CategoryNav />
      <HeroSection />
      <ProductGrid />
      <BannerGrid />
      <Footer />
    </div>
  )
}


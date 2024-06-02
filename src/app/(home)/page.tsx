import { MainProducts } from "app/components/home/MainProducts"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "✨ Future world",
  description: "Welcome to the future world, an ecomerce from other century.",
  keywords:["future", "world", "ecommerce", "technology"] // datos para SEO en buscadores
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  )
}

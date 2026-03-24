import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import ForWho from '@/components/ForWho'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <ForWho />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

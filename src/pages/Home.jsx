import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Sobre from '../components/sections/Sobre'
import Detalhes from '../components/sections/Detalhes'
import Urgencia from '../components/sections/Urgencia'
import FAQ from '../components/sections/FAQ'
import Comprar from '../components/sections/Comprar'
import { useScrollToHash } from '../hooks/useScrollToHash'

export default function Home() {
  useScrollToHash()

  return (
    <div className="min-h-svh bg-[rgb(240,235,229)] text-stone-900 transition-colors duration-300 dark:bg-[rgb(56,57,62)] dark:text-stone-100">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Detalhes />
        <Urgencia />
        <FAQ />
        <Comprar />
      </main>
      <Footer />
    </div>
  )
}

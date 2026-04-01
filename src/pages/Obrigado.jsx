import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { CONTACT } from '../config/links'

export default function Obrigado() {
  return (
    <div className="min-h-svh bg-[rgb(240,235,229)] text-stone-900 transition-colors duration-300 dark:bg-[rgb(56,57,62)] dark:text-stone-100">
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl border border-stone-300/80 bg-white/80 p-8 text-center shadow-xl dark:border-zinc-600 dark:bg-zinc-800/70 sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-3xl text-emerald-600 dark:text-emerald-400">
            ✓
          </div>
          <h1 className="text-2xl font-extrabold text-stone-900 sm:text-3xl dark:text-stone-50">
            Contato em análise
          </h1>
          <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-400">
            Assim que o seu contato for <strong className="text-stone-800 dark:text-stone-200">confirmado</strong>, envie
            uma mensagem pelo <strong>WhatsApp</strong> ou pelo <strong>Instagram</strong> com o resumo do que você
            precisa. Assim agilizamos o retorno e o orçamento sem ruído.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="cta-shadow inline-flex justify-center rounded-2xl bg-[rgb(5,45,81)] px-6 py-3.5 font-bold text-white transition-transform hover:scale-[1.02] dark:bg-cyan-600"
            >
              Abrir WhatsApp
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-2xl border-2 border-[rgb(5,45,81)] px-6 py-3.5 font-semibold text-[rgb(5,45,81)] transition-colors hover:bg-[rgb(5,45,81)]/10 dark:border-cyan-400 dark:text-cyan-300"
            >
              Abrir Instagram
            </a>
          </div>
          <Link
            to="/"
            className="mt-10 inline-block text-sm font-medium text-stone-500 underline-offset-4 hover:text-[rgb(5,45,81)] hover:underline dark:hover:text-cyan-400"
          >
            ← Voltar à página inicial
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

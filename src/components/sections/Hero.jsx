import { CONTACT } from '../../config/links'

const HERO_IMG =
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format&fit=crop'

export default function Hero() {
  return (
    <section className='relative overflow-hidden border-b border-stone-300/50 dark:border-zinc-600/40'>
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-[rgb(5,45,81)]/15 dark:from-cyan-400/5 dark:to-cyan-900/20' />
      <div className='relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20'>
        <div className='animate-fade-up text-left'>
          <p className='mb-3 inline-block rounded-full border border-[rgb(5,45,81)]/20 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[rgb(5,45,81)] dark:border-cyan-500/30 dark:bg-zinc-800/70 dark:text-cyan-300'>
            Serviços premium em informática
          </p>
          <h1 className='mt-2 text-3xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-5xl dark:text-stone-50'>
            Seu computador como novo,{' '}
            <span className='bg-gradient-to-r from-[rgb(5,45,81)] to-cyan-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-cyan-200'>
              performance que impressiona.
            </span>
          </h1>
          <p className='animate-fade-up animate-delay-100 mt-5 max-w-xl text-base text-stone-600 dark:text-stone-300'>
            ClayTech entrega formatação, manutenção e upgrades com padrão de
            autoridade. Menos travamentos, mais produtividade e a tranquilidade
            de quem escolhe quem entende do assunto.
          </p>
          <div className='animate-fade-up animate-delay-200 mt-8 flex flex-wrap gap-3'>
            <a
              href='#orcamento'
              className='cta-shadow inline-flex items-center justify-center rounded-2xl bg-[rgb(5,45,81)] px-6 py-3.5 text-base font-bold text-white transition-transform duration-200 hover:scale-[1.03] hover:brightness-110 dark:bg-cyan-600 dark:hover:bg-cyan-500'
            >
              Solicite seu orçamento agora
            </a>
            <a
              href={CONTACT.whatsapp}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center rounded-2xl border-2 border-[rgb(5,45,81)] bg-transparent px-6 py-3.5 text-base font-semibold text-[rgb(5,45,81)] transition-all hover:bg-[rgb(5,45,81)]/10 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-400/10'
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        <div className='animate-fade-up animate-delay-300 relative lg:justify-self-end'>
          <div className='relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10'>
            <img
              src={HERO_IMG}
              alt='Estação de trabalho com notebook e ferramentas de desenvolvimento'
              className='h-full w-full object-cover'
              width={600}
              height={450}
              loading='eager'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[rgb(5,45,81)]/40 to-transparent dark:from-black/50' />
            <div className='absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-3 text-left text-sm shadow-lg dark:bg-zinc-800/95'>
              <p className='font-semibold text-[rgb(5,45,81)] dark:text-cyan-300'>
                ClayTech
              </p>
              <p className='text-stone-600 dark:text-stone-400'>
                Tecnologia aplicada com cuidado e resultado!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

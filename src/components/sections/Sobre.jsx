import Reveal from '../ui/Reveal'

export default function Sobre() {
  return (
    <section
      id='sobre'
      className='scroll-mt-28 border-b border-stone-300/40 py-16 dark:border-zinc-600/30'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <Reveal>
          <h2 className='text-center text-2xl font-bold text-stone-900 sm:text-3xl dark:text-stone-50'>
            Sobre o profissional
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-center text-stone-600 dark:text-stone-400'>
            Especialista em manutenção e otimização de computadores, ajudando
            clientes a recuperar desempenho, proteger arquivos e prolongar a
            vida útil de seus equipamentos.
          </p>
        </Reveal>

        <div className='mt-12 grid gap-8 md:grid-cols-3'>
          {[
            {
              title: 'Autoridade técnica',
              text: 'Experiência sólida em diagnóstico, montagem e otimização. Nada de achismo, cada etapa é explicada com clareza e transparência!',
            },
            {
              title: 'Atendimento humano',
              text: 'Você fala com quem realmente executa o serviço. Transparência total antes, durante e depois.',
            },
            {
              title: 'Resultados que duram',
              text: 'Foco em prevenção e custo-benefício: SSD, limpeza térmica e sistema organizado para o dia a dia.',
            },
          ].map((item) => (
            <Reveal key={item.title}>
              <article className='h-full rounded-2xl border border-stone-300/60 bg-white/60 p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-zinc-600/60 dark:bg-zinc-800/40'>
                <h3 className='text-lg font-bold text-[rgb(5,45,81)] dark:text-cyan-300'>
                  {item.title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400'>
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

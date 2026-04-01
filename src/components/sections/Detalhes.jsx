import Reveal from '../ui/Reveal'

const categorias = [
  {
    titulo: 'Formatação e instalação',
    itens: [
      'Formatação completa',
      'Instalação do Windows atualizado',
      'Pacote Office atualizado',
    ],
    destaque:
      'Sistema limpo, drivers e atualizações essenciais, pronto para trabalhar.',
  },
  {
    titulo: 'Manutenção e montagem',
    itens: [
      'Montagem de computadores',
      'Limpeza interna',
      'Troca de pasta térmica',
      'Manutenção preventiva',
    ],
    destaque:
      'Hardware tratado com o cuidado que prolonga a vida útil da máquina.',
  },
  {
    titulo: 'Backup e armazenamento',
    itens: [
      'Backup de arquivos',
      'Troca de HD',
      'Instalação de SSD',
      'Organização de dados',
    ],
    destaque:
      'Seus arquivos protegidos e seu PC mais rápido com armazenamento moderno.',
  },
  {
    titulo: 'Restauração e limpeza',
    itens: [
      'Restauração do sistema',
      'Limpeza de disco',
      'Otimização para melhor desempenho',
    ],
    destaque:
      'Recupere desempenho sem necessariamente formatar, diagnóstico honesto.',
  },
]

export default function Detalhes() {
  return (
    <section id='detalhes' className='scroll-mt-28 py-16'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <Reveal>
          <h2 className='text-center text-2xl font-bold text-stone-900 sm:text-3xl dark:text-stone-50'>
            Detalhes e benefícios
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-center text-stone-600 dark:text-stone-400'>
            Trabalhos de alta qualidade com processo organizado: você sabe o que
            está sendo feito e por quê. Lista completa dos serviços mais
            solicitados.
          </p>
        </Reveal>

        <ul className='mt-10 grid gap-6 sm:grid-cols-2'>
          {categorias.map((cat) => (
            <Reveal key={cat.titulo}>
              <li className='group rounded-2xl border border-stone-300/70 bg-gradient-to-br from-white/80 to-stone-100/50 p-6 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgb(5,45,81)]/30 hover:shadow-xl dark:border-zinc-600/70 dark:from-zinc-800/60 dark:to-zinc-900/40 dark:hover:border-cyan-500/30'>
                <h3 className='text-xl font-bold text-[rgb(5,45,81)] dark:text-cyan-300'>
                  {cat.titulo}
                </h3>
                <ul className='mt-4 space-y-2 text-sm text-stone-700 dark:text-stone-300'>
                  {cat.itens.map((item) => (
                    <li key={item} className='flex gap-2'>
                      <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500' />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className='mt-4 border-t border-stone-200/80 pt-4 text-sm font-medium text-stone-600 dark:border-zinc-600 dark:text-stone-400'>
                  {cat.destaque}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

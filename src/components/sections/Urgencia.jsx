import Reveal from '../ui/Reveal'
import { CONTACT } from '../../config/links'

export default function Urgencia() {
  return (
    <section className='border-y border-amber-500/30 bg-gradient-to-r from-amber-500/12 via-orange-500/10 to-[rgb(5,45,81)]/15 py-14 dark:from-amber-900/20 dark:via-orange-900/15 dark:to-cyan-950/30'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <Reveal>
          <div className='text-center'>
            <span className='inline-flex items-center rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-800 dark:bg-amber-400/20 dark:text-amber-200'>
              Vagas limitadas esta semana
            </span>
            <h2 className='mt-4 text-2xl font-extrabold text-stone-900 sm:text-3xl dark:text-stone-50'>
              Exclusividade ClayTech: prioridade para quem decide agora!
            </h2>
            <p className='mx-auto mt-3 max-w-2xl text-stone-700 dark:text-stone-300'>
              A agenda é propositalmente enxuta para manter padrão de
              excelência. Quem agenda cedo garante atendimento dedicado, sem
              fila interminável e sem improviso. 😉
            </p>
            <p className='mx-auto mt-2 max-w-xl text-sm font-semibold text-[rgb(5,45,81)] dark:text-cyan-300'>
              Não deixe para depois, um PC lento hoje pode virar perda de dados
              ou hardware amanhã.
            </p>
            <a
              href={CONTACT.whatsapp}
              target='_blank'
              rel='noreferrer'
              className='cta-shadow mt-8 inline-flex rounded-2xl bg-[rgb(5,45,81)] px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.03] dark:bg-cyan-600 dark:hover:bg-cyan-500'
            >
              Garantir meu orçamento agora!
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

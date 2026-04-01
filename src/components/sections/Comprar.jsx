import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import { CONTACT } from '../../config/links'

export default function Comprar() {
  return (
    <section
      id='orcamento'
      className='scroll-mt-28 bg-gradient-to-b from-stone-200/40 to-transparent py-16 dark:from-zinc-800/50 dark:to-transparent'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div id='contatos' className='scroll-mt-28'>
          <Reveal>
            <div className='overflow-hidden rounded-3xl border border-stone-300/80 bg-white/80 shadow-2xl dark:border-zinc-600 dark:bg-zinc-800/70'>
              <div className='grid lg:grid-cols-2'>
                <div className='p-8 lg:p-10'>
                  <h2 className='text-2xl font-bold text-stone-900 dark:text-stone-50'>Feche com quem entrega resultado!</h2>
                  <p className='mt-2 text-stone-600 dark:text-stone-400'>Contatos diretos, resposta ágil para orçamento sem burocracia.</p>
                  <ul className='mt-6 space-y-3 text-sm'>
                    <li>
                      <a
                        href={CONTACT.instagram}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center gap-2 font-semibold text-pink-600 hover:underline dark:text-pink-400'
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href={CONTACT.whatsapp}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center gap-2 font-semibold text-emerald-600 hover:underline dark:text-emerald-400'
                      >
                        WhatsApp
                      </a>
                    </li>
                  </ul>
                  <div className='mt-8 rounded-2xl bg-[rgb(240,235,229)] p-4 dark:bg-zinc-900/80'>
                    <p className='text-xs font-bold uppercase tracking-wide text-[rgb(5,45,81)] dark:text-cyan-300'>Pagamento</p>
                    <p className='mt-2 text-sm text-stone-700 dark:text-stone-300'>
                      <strong>Em até 2x sem juros</strong> em serviços elegíveis ou combine outras formas diretamente no contato, conforme
                      disponibilidade.
                    </p>
                  </div>
                </div>
                <div className='flex flex-col justify-center bg-[rgb(5,45,81)] p-8 text-white lg:p-10 dark:bg-gradient-to-br dark:from-cyan-900 dark:to-[rgb(5,45,81)]'>
                  <p className='text-sm font-medium uppercase tracking-widest text-cyan-200/90'>Próximo passo</p>
                  <p className='mt-3 text-lg font-semibold leading-snug'>Um clique separa você de um PC estável, rápido e confiável.</p>
                  <a
                    href={CONTACT.whatsapp}
                    target='_blank'
                    rel='noreferrer'
                    className='cta-shadow mt-6 inline-flex justify-center rounded-2xl bg-white px-6 py-4 text-center text-base font-bold text-[rgb(5,45,81)] transition-transform hover:scale-[1.02] dark:bg-cyan-100 dark:text-cyan-950'
                  >
                    Entrar em contato agora
                  </a>
                  <Link to='/obrigado' className='mt-4 text-center text-sm text-cyan-100/90 underline-offset-2 hover:underline'>
                    Já solicitei — ver instruções pós-contato
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

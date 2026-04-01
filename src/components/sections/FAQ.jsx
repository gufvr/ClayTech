import { useState } from 'react'
import Reveal from '../ui/Reveal'

const faqs = [
  {
    q: 'Quais trabalhos em informática você oferece?',
    a: 'Oferecemos formatação e instalação de Windows e Office, manutenção e montagem, backup, troca de HD/SSD, restauração do sistema e otimização. A lista completa está na seção de detalhes. Valores e prazos podem ser combinados no orçamento.',
  },
  {
    q: 'Quanto tempo costuma levar o serviço?',
    a: 'O tempo varia conforme o tipo de serviço e a condição do equipamento. Após o diagnóstico, informamos uma previsão realista. Você pode ajustar este texto depois com prazos médios do seu fluxo de trabalho.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Aceitamos formas de pagamento acordadas no orçamento, incluindo opção em até 2x sem juros em casos selecionados, ou condições especiais combinadas diretamente no contato.',
  },
  {
    q: 'Preciso levar o computador até você?',
    a: 'As opções de atendimento (local, retirada ou remoto quando aplicável) são definidas no primeiro contato. Edite esta resposta conforme sua operação real.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section
      id='faq'
      className='scroll-mt-28 border-t border-stone-300/40 py-16 dark:border-zinc-600/30'
    >
      <div className='mx-auto max-w-3xl px-4 sm:px-6'>
        <Reveal>
          <h2 className='text-center text-2xl font-bold text-stone-900 sm:text-3xl dark:text-stone-50'>
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className='mt-10 space-y-3'>
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <Reveal key={item.q}>
                <div
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    isOpen
                      ? 'border-[rgb(5,45,81)]/40 bg-white/90 dark:border-cyan-500/40 dark:bg-zinc-800/80'
                      : 'border-stone-300/60 bg-white/50 dark:border-zinc-600 dark:bg-zinc-800/40'
                  }`}
                >
                  <button
                    type='button'
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className='flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold text-stone-900 dark:text-stone-100 sm:text-base'
                  >
                    {item.q}
                    <span
                      className={`text-[rgb(5,45,81)] transition-transform dark:text-cyan-400 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <p className='border-t border-stone-200 px-4 pb-4 pt-2 text-sm leading-relaxed text-stone-600 dark:border-zinc-600 dark:text-stone-400'>
                      {item.a}
                    </p>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

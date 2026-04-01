import { Link } from 'react-router-dom'
import ThemeToggle from '../ui/ThemeToggle'
import SectionLink from '../ui/SectionLink'
import { CONTACT } from '../../config/links'
import { useTheme } from '../../hooks/useTheme'

const sections = [
  { id: 'sobre', label: 'Sobre o Profissional' },
  { id: 'detalhes', label: 'Detalhes' },
  { id: 'contatos', label: 'Contatos' },
  { id: 'orcamento', label: 'Solicitar orçamento' },
]

export default function Header() {
  const { dark } = useTheme()

  return (
    <header className='sticky top-0 z-50 border-b border-stone-300/60 bg-[rgb(240,235,229)]/90 backdrop-blur-md dark:border-zinc-600/60 dark:bg-[rgb(56,57,62)]/92'>
      <div className='mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6'>
        <Link
          to='/'
          className='flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight text-[rgb(5,45,81)] dark:text-stone-100'
        >
          <img src={dark ? '/ct-black.png' : '/ct-white.png'} alt='ClayTech' />
          ClayTech
        </Link>

        <nav className='hidden flex-wrap items-center justify-end gap-1 text-sm font-medium lg:flex xl:gap-2'>
          {sections.map(({ id, label }) => (
            <SectionLink
              key={id}
              id={id}
              className='rounded-lg px-2 py-2 text-stone-700 transition-colors hover:bg-black/5 hover:text-[rgb(5,45,81)] dark:text-stone-200 dark:hover:bg-white/10 dark:hover:text-cyan-300 xl:px-3'
            >
              {label}
            </SectionLink>
          ))}
          <span
            className='mx-1 hidden h-4 w-px bg-stone-300 dark:bg-zinc-600 xl:block'
            aria-hidden
          />
          <a
            href={CONTACT.instagram}
            target='_blank'
            rel='noreferrer'
            className='rounded-lg px-2 py-2 text-stone-600 transition-colors hover:bg-pink-500/10 hover:text-pink-600 dark:text-stone-300 dark:hover:text-pink-400 xl:px-3'
          >
            Instagram
          </a>
          <a
            href={CONTACT.whatsapp}
            target='_blank'
            rel='noreferrer'
            className='rounded-lg px-2 py-2 text-stone-600 transition-colors hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-stone-300 dark:hover:text-emerald-400 xl:px-3'
          >
            WhatsApp
          </a>
        </nav>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <a
            href={CONTACT.whatsapp}
            target='_blank'
            rel='noreferrer'
            className='cta-shadow hidden rounded-xl bg-[rgb(5,45,81)] px-3 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] hover:brightness-110 sm:inline-block lg:px-4 dark:bg-cyan-700 dark:hover:bg-cyan-600'
          >
            Orçamento
          </a>
        </div>
      </div>

      <nav className='flex flex-wrap items-center justify-center gap-x-1 gap-y-1 border-t border-stone-300/50 px-2 py-2 text-xs font-medium lg:hidden dark:border-zinc-600/50'>
        {sections.map(({ id, label }) => (
          <SectionLink
            key={id}
            id={id}
            className='rounded-lg px-2 py-1.5 text-stone-700 dark:text-stone-200'
          >
            {label === 'Sobre o Profissional' ? 'Sobre' : label.split(' ')[0]}
          </SectionLink>
        ))}
        <a
          href={CONTACT.instagram}
          target='_blank'
          rel='noreferrer'
          className='rounded-lg px-2 py-1.5 text-pink-600 dark:text-pink-400'
        >
          IG
        </a>
        <a
          href={CONTACT.whatsapp}
          target='_blank'
          rel='noreferrer'
          className='rounded-lg px-2 py-1.5 text-emerald-600 dark:text-emerald-400'
        >
          WA
        </a>
      </nav>
    </header>
  )
}

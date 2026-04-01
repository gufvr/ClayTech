import { Link } from 'react-router-dom'
import { CONTACT } from '../../config/links'

const social = [
  { label: 'Instagram', href: CONTACT.instagram, icon: 'instagram' },
]

function Icon({ name }) {
  if (name === 'instagram') {
    return (
      <svg
        className='h-5 w-5'
        fill='currentColor'
        viewBox='0 0 24 24'
        aria-hidden='true'
      >
        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
      </svg>
    )
  }
  return (
    <svg
      className='h-5 w-5'
      fill='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className='border-t border-stone-300/70 bg-[rgb(240,235,229)]/80 py-12 dark:border-zinc-600/60 dark:bg-[rgb(56,57,62)]/90'>
      <div className='mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6'>
        <div>
          <p className='text-lg font-bold text-[rgb(5,45,81)] dark:text-stone-100'>
            ClayTech
          </p>
          <p className='mt-1 text-sm text-stone-600 dark:text-stone-400'>
            Excelência que você sente no primeiro uso.
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 rounded-xl border border-stone-300/80 bg-white/50 px-4 py-2 text-sm font-medium text-stone-700 transition-all hover:border-[rgb(5,45,81)] hover:text-[rgb(5,45,81)] dark:border-zinc-600 dark:bg-zinc-700/50 dark:text-stone-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300'
            >
              <Icon name={s.icon} />
              {s.label}
            </a>
          ))}
          <a
            href={CONTACT.whatsapp}
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-emerald-500'
          >
            WhatsApp
          </a>
        </div>
        <p className='text-xs text-stone-500 dark:text-stone-500'>
          © {new Date().getFullYear()} ClayTech. Todos os direitos reservados.{' '}
          <br />
          <i class='devicon-github-original'></i> Desenvolvido por{' '}
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
          />
          <a
            href='https://github.com/gufvr'
            class='hover:text-accent transition text-cyan-400'
          >
            Gustavo Favero
          </a>
        </p>
      </div>
    </footer>
  )
}

import { Link, useLocation } from 'react-router-dom'

/** âncora na home com rolagem suave; a partir de outras rotas navega para /#id */
export default function SectionLink({ id, className, children }) {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return (
      <a href={`#${id}`} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={{ pathname: '/', hash: id }} className={className}>
      {children}
    </Link>
  )
}

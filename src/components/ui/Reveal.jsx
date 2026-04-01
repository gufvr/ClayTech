import { useReveal } from '../../hooks/useReveal'

export default function Reveal({ children, className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${visible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}

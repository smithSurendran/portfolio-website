import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavigationProps = {
  className?: string
  listClassName?: string
  mobileOnNavigate?: () => void
}

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/calculators', label: 'Calculators' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation({ className, listClassName, mobileOnNavigate }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary navigation" className={className}>
      <ul className={listClassName ?? 'flex items-center space-x-8'}>
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={mobileOnNavigate}
                className={clsx(
                  'font-medium transition-colors duration-200',
                  isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600',
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

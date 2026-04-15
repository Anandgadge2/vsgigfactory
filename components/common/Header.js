'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Our Expertise', href: '/expertise' },
  { name: 'Projects', href: '/projects' },
  { name: 'Login', href: '/login' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="inner">
        <Link href="/" className="brand">Gigfactory</Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'active' : ''}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="menu-btn" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {open ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.name}
            </Link>
          ))}
        </nav>
      ) : null}

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 20;
          background: #fff;
          border-bottom: 1px solid #e2e8f0;
        }
        .inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .brand { font-weight: 800; color: #0f172a; text-decoration: none; font-size: 1.1rem; }
        .desktop-nav { display: flex; gap: 10px; }
        .desktop-nav a { text-decoration: none; color: #334155; padding: 8px 10px; border-radius: 8px; }
        .desktop-nav a.active { background: #e2e8f0; color: #0f172a; font-weight: 700; }
        .menu-btn { display: none; border: 1px solid #cbd5e1; border-radius: 8px; background: #fff; padding: 6px 10px; }
        .mobile-nav { display: none; }

        @media (max-width: 840px) {
          .desktop-nav { display: none; }
          .menu-btn { display: block; }
          .mobile-nav {
            display: grid;
            padding: 0 20px 12px;
            gap: 8px;
          }
          .mobile-nav a {
            text-decoration: none;
            color: #0f172a;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 10px;
          }
        }
      `}</style>
    </header>
  )
}

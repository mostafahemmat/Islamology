import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const NavLinks: QuartzComponent = (props: QuartzComponentProps) => {
  const links = [
    { href: "/", text: "خانه" },
    { href: "/about-islamology", text: "درباره اسلام‌شناسی" },
    { href: "/about-me", text: "درباره من" },
    { href: "/support", text: "حمایت از ما" },
    { href: "/social", text: "شبکه‌های اجتماعی" },
    { href: "/sitemap", text: "نقشه سایت" },
    { href: "/library", text: "کتابخانه" },
  ]

  return (
    <nav style={{ display: 'flex', gap: '1rem', marginLeft: 'auto', marginRight: 'auto' }}>
      {links.map((link) => (
        <a 
          key={link.href} 
          href={link.href}
          style={{ textDecoration: 'none', color: 'var(--dark)' }}
        >
          {link.text}
        </a>
      ))}
    </nav>
  )
}

export default (() => NavLinks) satisfies QuartzComponentConstructor

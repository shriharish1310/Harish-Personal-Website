import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-black/70 backdrop-blur z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Shri Harish
        </Link>
        <div className="space-x-6">
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

import './globals.css'
import Navbar from '../components/Navbar.jsx'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar children={undefined} />
        <main className="pt-24 max-w-6xl mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}

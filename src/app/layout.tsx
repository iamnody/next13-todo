import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Next Todos',
  description: 'Created for practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='dark:bg-slate-800'>
        <Navbar />
        <main className='mx-auto max-w-xl p-4 bg-stone-200 min-h-screen'>
          {children}
        </main>
      </body>
    </html>
  )
}

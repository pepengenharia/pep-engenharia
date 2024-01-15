import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ weight: '400' ,subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'P&P Engenharia',
  description: `A P&P é uma empresa de prestação de serviços e fornecimento de mão de obra especializada para realização de Projetos nas diversas áreas da Engenharia.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>{children}</body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import './globals.css'
import Authprovider from "./Provider"
import Navbar from './components/Navbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-Auth',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* preconnect scripts... */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Authprovider>
        <body className={inter.className}>
          {children}
        </body>
      </Authprovider>
    </html>
  )
}

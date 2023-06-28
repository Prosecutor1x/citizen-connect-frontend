import './globals.css'
import { Inter, Merriweather, Quicksand } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })
const merriweather = Merriweather({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})


export const metadata = {
    title: 'Bongobashi a citizen connect app',
    description: 'Made by Krishnarjun and Rupsha',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={merriweather.className}>
                {' '}
                <Providers>{children} </Providers>
            </body>
        </html>
    )
}

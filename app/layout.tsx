import { Navbar } from '@/components';
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const metadata = {
    title: 'Software Developer - Aleksa Marjanov',
    description: 'Web Developer | Software Developer, create unique designs',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} overflow-hidden w-full min-h-screen bg-white/80`} >
                <Navbar />
                {children}
            </body>
        </html>
    )
}

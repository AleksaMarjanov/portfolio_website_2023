import { Footer, Navbar } from '@/components';
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
            <body className={`${montserrat.className} bg-light w-full min-h-screen `} >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}

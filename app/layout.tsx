import './globals.css'

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
            <body>{children}</body>
        </html>
    )
}

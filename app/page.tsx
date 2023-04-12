import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export default function Home() {
    return (
        <main className="">

            <div className="text-black">
                HomePage
                About
                Projects
                Testimonials
                Contact
            </div>
        </main>
    )
}

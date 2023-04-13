import { AnimatedText, Layout } from '@/components';
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import profilePic from '../public/myImage.png'

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export default function Home() {
    return (
        <main className="flex items-center text-black w-full min-h-screen">
            <div className="pt-0">
                <Layout >
                    <div className='flex items-center justify-between w-full'>
                        <div className="w-1/2">
                            <Image
                                src={profilePic}
                                priority
                                alt="AleksaMarjanov"
                                className="w-full h-auto rounded-full" />
                        </div>
                        <div>
                            <AnimatedText text=" Software Developer | Web Developer " className="" />
                            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. </p>
                        </div>
                    </div>
                </Layout>'
            </div >
        </main >
    )
}

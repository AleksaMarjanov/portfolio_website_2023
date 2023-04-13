import { AnimatedText, Layout } from '@/components';
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import profilePic from '../public/myImage.png'
import Link from 'next/link';

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
                    <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                        <div className="md:w-1/2">
                            <Image
                                src={profilePic}
                                priority
                                // width={350}
                                // height={350}
                                alt="AleksaMarjanov"
                                className="w-full h-auto rounded-full" />
                        </div>
                        <div className="md:w-1/2 flex flex-col items-center self-center">
                            <AnimatedText text="Empowering Businesses through Innovative Software Development." className="!text-6xl !text-left" />
                            <span className="font-medium text-base my-4"><b>Exper</b>ienced <b>fro</b>nt-end <b>deve</b>loper, <b>Brin</b>ging <b>yo</b>ur
                                <b> digi</b>tal <b>dre</b>ams <b>to</b> <b>li</b>fe <b>wi</b>th <b>visi</b>onary <b>fro</b>nt-end <b>deve</b>lopment.</span>
                            <div>
                                <Link href="/AleksaMarjanovResume2023">Resume</Link>
                            </div>
                        </div>

                    </div>
                </Layout>'
            </div >
        </main >
    )
}

import { AnimatedText, Layout } from '@/components';
import Image from 'next/image';
import profilePic from '../public/digitalArt.png'
import Link from 'next/link';
// import light from '../public/light.svg'
import { LinkArrow } from '@/components/Icons';

const Home = () => {

    return (
        <main className="bg-light flex items-center text-dark w-full min-h-[80vh] md:min-h-screen">
            <div className="pt-0">
                <Layout >
                    <div className='flex flex-col lg:flex-row items-center justify-between w-full'>
                        <div className="w-full h-auto lg:w-1/2 flex items-center justify-center">
                            <Image
                                src={profilePic}
                                priority
                                alt="AleksaMarjanov"
                                className="object-cover rounded-full"
                                sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col items-center self-center">
                            <AnimatedText text="Empowering Businesses through Innovative Software Development." className="text-2xl md:text-6xl !text-left" />
                            <span className="font-medium text-base my-4"><b>Exper</b>ienced <b>fro</b>nt-end <b>deve</b>loper,
                                <b> brin</b>ging <b>yo</b>ur
                                <b> digi</b>tal <b>dre</b>ams <b>to</b> <b>li</b>fe <b>wi</b>th <b>visi</b>onary <b>fro</b>nt-end <b>deve</b>lopment.</span>
                            <div className='flex items-center self-start mt-2 gap-2 md:gap-4 '>
                                <Link
                                    className="flex items-center bg-[#F7AB0A] text-light p-2.5 px-65 rounded-lg text-lg font-semibold
hover:bg-light hover:text-[#F7AB0A] border border-solid border-transparent hover:border-[#F7AB0A] transition-all border-2 duration-300 ease-in-out
                                    "
                                    href=",./AleksaMarjanovResume2023.pdf"
                                    download={true}
                                    target={"_blank"}>
                                    Resume
                                    <LinkArrow className={"w-6 ml-1"} />
                                </Link>
                                <Link
                                    className="ml-4 text-lg font-medium capitilize text-underline"
                                    href="mailto:aleksa.marjanov@outlook.com">Contact</Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                {/* <div className='absolute right-4 bottom-32 inline-block w-24'> */}
                {/*     <Image src={light} alt="AleksaMarjanov" className="w-full h-auto" /> */}
                {/* </div> */}
            </div >

        </main >
    )
}

export default Home;

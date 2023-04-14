import { AnimatedText, Layout } from '@/components'
import Image from 'next/image'
import React from 'react'
import profilePic from '../../public/headshot.png'

export const metadata = {
    title: 'Software Developer- About Page'
}

const About = () => {
    return (
        <>
            <main className="w-full flex flex-col items-center justify-center">
                {/* <div className="pt-16"> */}
                <Layout>
                    <AnimatedText text="Meet the Passionate Problem Solver Behind the Code" className="mb-16 !text-6xl !text-center" />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className='mb-4 text-lg font-bold uppercase text-black/75'>About Me</h2>
                            <p className="font-medium">Hi, I am Aleksa Marjanov, a software developer with over a year of experience
                                in the field. My passion lies in creating beautiful,
                                user-focused interfaces that bring my clients' visions to life.
                            </p>
                            <p className="my-4 font-medium">
                                I am always looking for innovative ways to solve problems and approach every project -
                                whether it's a website, mobile app, or any other software development project - with full commitment to creating
                                a user-centered and functional end-user experience.
                            </p>
                            <p className="my-4 font-medium">
                                My goal is to deliver digital solutions that not only
                                meet but exceed expectations,
                                and I'm excited to bring my skills and dedication to your next project.</p>
                        </div>

                        <div className='col-span-3 relative items-center justify-center object-center h-max rounded-2xl border-2 border-solid border-[#F7AB0A] bg-white p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[#F7AB0A]' />
                            <Image src={profilePic} alt="AleksaMarjanov" className='w-full  h-auto rounded-2xl' />
                        </div>
                    </div>
                </Layout>
                {/* </div > */}
            </main >
        </>
    )
}

export default About

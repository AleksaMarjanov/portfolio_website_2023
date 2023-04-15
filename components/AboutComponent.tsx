"use client";

import { AnimatedText, Layout, Skills } from '@/components'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import profilePic from '../public/headshot.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion';


//TODO: Add proper value type instead of any
//
const AnimatedNumbers = ({ value }: any) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0)) {
                //TODO: Fix Error 'textContent does not exist on type never'
                // @ts-ignore
                ref.current.textContent = latest.toFixed(0)
            }
        })

    }, [springValue, value])


    return <span ref={ref}></span>
}

const AboutComponent = () => {

    return (
        <>
            <main className="bg-light z-0 relative w-full flex flex-col items-center justify-center">
                <div className="pt-16">
                    <Layout>
                        <AnimatedText text="Meet the Passionate Problem Solver Behind the Code" className="mb-16 !text-6xl !text-center" />
                        <div className='grid w-full grid-cols-8 gap-16'>
                            <div className="w-full col-span-3 flex flex-col items-start justify-start">
                                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                                <motion.p className="font-medium">Hi, I am Aleksa Marjanov, a software developer with over a year of experience
                                    in the field. My passion lies in creating beautiful,
                                    user-focused interfaces that bring my clients' visions to life.
                                </motion.p>
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

                            <div className='md:max-w-[300px] col-span-2 relative items-center justify-center object-center h-max rounded-2xl border-2 border-solid border-[#F7AB0A] bg-light p-8'>
                                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[#F7AB0A]' />
                                <Image src={profilePic} alt="AleksaMarjanov" className='w-full h-auto rounded-2xl' />
                            </div>

                            <div className='col-span-3 flex flex-col items-center justify-between'>

                                <div>
                                    <span className="inline-block text-6xl font-bold">
                                        <AnimatedNumbers value={10} />+
                                    </span>
                                    <h2 className='text-xl font-medium capitilize text-dark/75'>Satisfied Clients</h2>
                                </div>

                                <div>
                                    <span className='inline-block text-6xl font-bold'>
                                        <AnimatedNumbers value={15} />+
                                    </span>
                                    <h2 className='text-xl font-medium capitilize text-dark/75'>Projects Completed</h2>
                                </div>

                                <div>
                                    <span className='inline-block text-6xl font-bold'>
                                        <AnimatedNumbers value={1} />+
                                    </span>
                                    <h2 className='text-xl font-medium capitilize text-dark/75'>Years of Experience</h2>
                                </div>
                            </div>
                        </div>

                        <Skills />
                    </Layout>
                </div >
            </main >
        </>
    )
}

export default AboutComponent

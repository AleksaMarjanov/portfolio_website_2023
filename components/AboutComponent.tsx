"use client";

import { AnimatedText, Education, Experience, Layout, Skills } from '@/components'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import profilePic from '../public/headshot.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import { About } from '@/typings';
import { staggerContainer, textVariant } from '@/utils/motion';
import devPic from '../public/developer-pic-2.jpg'


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
    const [about, setAbout] = useState([])

    const query = groq`
    *[_type == 'about']
    `

    const fetchAbout = async () => {
        const data = await client.fetch(query)
        setAbout(data)
    }

    useEffect(() => {
        fetchAbout()
    }, [])

    console.log({ about })

    return (
        <>
            <main className="bg-light w-full flex flex-col items-center justify-center">
                <div className="pt-16">
                    <Layout>
                        <AnimatedText text="Meet the Passionate Problem Solver Behind the Code" className="mb-8 md:mb-16 !text-4xl md:!text-6xl !text-center" />
                        <div className='grid w-full gap-y-8 md:gap-y-4 lg:gap-y-0 grid-cols-8 gap-4 sm:gap-8 md:gap-16'>
                            <div className="w-full md:col-span-4 lg:col-span-3 flex flex-col items-start justify-start order-2 lg:order-1 col-span-8">
                                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                                {about?.map((item: About) => (
                                    <motion.div
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        key={item._id} >

                                        <motion.p className="font-medium"
                                            variants={textVariant(0.3)}
                                        >
                                            {item.paragraph1}
                                        </motion.p>

                                        <motion.p
                                            variants={textVariant(0.45)}

                                            className="my-4 font-medium">
                                            {item.paragraph2}
                                        </motion.p>

                                        <motion.p
                                            variants={textVariant(0.65)}
                                            className="my-4 font-medium">
                                            {item.paragraph3}
                                        </motion.p>
                                    </motion.div>
                                ))}
                            </div>
                            {/* max-w-[540px] md:max-w-[300px] */}
                            <div className='md:max-w-[400px] col-span-8  md:col-span-4 lg:col-span-3 relative 
                                items-center justify-center h-max rounded-2xl border-2 border-solid border-[#F7AB0A] bg-light p-8 order-1 lg:order-2'>

                                <div className='absolute top-0 -right-3 -z-10 w-[105%] h-[103%] rounded-[2.5rem] rounded-br-3xl  bg-[#F7AB0A]' />

                                {/* <div className='absolute top-0 -right-3 -z-10 w-[105%] h-[103%] rounded-[2rem] bg-[#F7AB0A] dark:bg-light' /> */}
                                <Image src={profilePic}
                                    alt="AleksaMarjanov"
                                    className='w-full h-auto rounded-2xl'
                                    priority
                                    sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,a
                                33vw"
                                />
                            </div>

                            <div className='col-span-8 flex-row lg:col-span-2 flex lg:flex-col items-center justify-between order-3 '>

                                <div>
                                    <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                                        <AnimatedNumbers value={10} />+
                                    </span>
                                    <h2 className='text-xl font-medium capitilize text-dark/75'>Satisfied Clients</h2>
                                </div>

                                <div>
                                    <span className='inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                                        <AnimatedNumbers value={15} />+
                                    </span>
                                    <h2 className='text-xl font-medium capitilize text-dark/75'>Projects Completed</h2>
                                </div>

                                <div>
                                    <span className='inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                                        <AnimatedNumbers value={1} />+
                                    </span>
                                    <h2 className='text-xl font-medium capitilize text-dark/75'>Years of Experience</h2>
                                </div>
                            </div>
                        </div>

                        <Skills />
                        {/* <Experience /> */}
                        {/* <Education /> */}
                    </Layout>
                </div >
            </main >
        </>
    )
}

export default AboutComponent

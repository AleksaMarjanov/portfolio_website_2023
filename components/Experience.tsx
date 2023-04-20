"use client";

import { motion, useScroll } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react'
import LiIcon from './LiIcon';
import { Experience } from '@/typings';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

type ExperienceProps = {
    experience: Experience
}
const query = groq`
*[_type == "experience"]
`

const Details = ({ position, companyLink, company, work, time, address }: Experience) => {
    const ref = useRef(null)

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitlize font-bold text-lg sm:text-xl md:text-2xl'>
                {position}&nbsp;<a href={companyLink} target="_blank" className="text-[#F7AB0A] capitlize">@{company}</a>
            </h3>
            <span className='capitlize font-medium text-dark/75 text-xs md:text-lg'>
                {time} | {address}
            </span>
            <p className='font-medium w-full text-sm md:text-lg'>
                {work}
            </p>
        </motion.div>
    </li >
}


const Experience = () => {
    const ref = useRef(null)
    const [experiences, setExperiences] = useState([])

    const { scrollYProgress } = useScroll(
        // Using ref to target the div line 
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    const fetchExperiences = async () => {
        const data = await client.fetch(query)
        setExperiences(data);
    }

    useEffect(() => {
        fetchExperiences()
    }, [])



    console.warn('Experinecess', { experiences })

    return (
        <div className='my-64'>
            <h2 className='md:mb-32 w-full text-center font-semibold text-4xl sm:text-6xl mb-16 md:text-8xl'>
                Experience
            </h2>

            <div ref={ref} className='w-full sm:w-[90%] md:w-[75%] m-auto relative'>
                {/* Line that will animate with framer-motion -- scrollYProgress */}
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute sm:left-[30px] left-[20px] w-[2px] md:left-9 md:top-0 md:w-[4px] h-full bg-dark origin-top' />

                <ul className='w-full flex flex-col items-start justify-between ml-2 md:ml-4'>
                    {experiences?.map((experience: Experience) => (
                        <div key={experience._id} >
                            {/* TODO: Some properties are missing in types */}
                            {/* @ts-ignore */}
                            < Details
                                position={experience.position}
                                company={experience.company}
                                companyLink={experience.companyLink}
                                time={experience.dateStarted}
                                address={experience.address}
                                work={experience.work}
                            />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Experience;


"use client";

import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import LiIcon from './LiIcon';
import { Experience } from '@/typings';

type ExperienceProps = {
    experience: Experience
}

const Details = ({ experience }: ExperienceProps) => {
    const ref = useRef(null)

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitlize font-bold text-2xl'>
                {experience.position}&nbsp;<a href={experience.companyLink} target="_blank" className="text-[#F7AB0A] capitlize">@{experience.company}</a>
            </h3>
            <span className='capitlize font-medium text-dark/75'>
                {/* {time} | {address} */}
            </span>
            <p className='font-medium w-full'>
                {experience.work}
            </p>
        </motion.div>
    </li >
}


const Experience = () => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll(
        // Using ref to target the div line 
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className='my-64'>
            <h2 className='mb-32 w-full text-center font-semibold text-8xl'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] m-auto relative'>
                {/* Line that will animate with framer-motion -- scrollYProgress */}
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    {/* TODO:Map through experiences */}
                    <Details
                    //                         position='CEO & Founder'
                    //                         company='Marjanov Design Solutions'
                    //                         companyLink='https://marjanovdesignsolutions.com'
                    //                         time='January 2023 - Current'
                    //                         address='Remote'
                    //                         work='Utilizing cutting-edge technologies such as ReactJS, NextJS and TailwindCSS. 
                    // Leading the company in making decisions that are focused on delivering the highest quality solutions to clients.
                    // Responsible for overall management, growth and direction of the company. 
                    // Accountable for making strategic decisions and leading the company to success.'
                    />
                    <Details
                    //                         position='CEO & Founder'
                    //                         company='Marjanov Design Solutions'
                    //                         companyLink='https://marjanovdesignsolutions.com'
                    //                         time='January 2023 - Current'
                    //                         address='Remote'
                    //                         work='Utilizing cutting-edge technologies such as ReactJS, NextJS and TailwindCSS. 
                    // Leading the company in making decisions that are focused on delivering the highest quality solutions to clients.
                    // Responsible for overall management, growth and direction of the company. 
                    // Accountable for making strategic decisions and leading the company to success.'
                    />
                    <Details
                    //                         position='CEO & Founder'
                    //                         company='Marjanov Design Solutions'
                    //                         companyLink='https://marjanovdesignsolutions.com'
                    //                         time='January 2023 - Current'
                    //                         address='Remote'
                    //                         work='Utilizing cutting-edge technologies such as ReactJS, NextJS and TailwindCSS. 
                    // Leading the company in making decisions that are focused on delivering the highest quality solutions to clients.
                    // Responsible for overall management, growth and direction of the company. 
                    // Accountable for making strategic decisions and leading the company to success.'
                    />
                    {/* <p className="uppercase py-5 text-gray-300 sm:text-center"> */}
                    {/**/}
                    {/*     {new Date(experience.dateStarted).toDateString()} = {" "} {experience.isCurrentlyWorkingHere */}
                    {/*         ? "Present" */}
                    {/*         : new Date(experience.dateEnded).toDateString()} */}
                    {/* </p> */}
                </ul>
            </div>
        </div>
    )
}

export default Experience

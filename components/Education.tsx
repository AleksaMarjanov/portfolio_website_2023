"use client";

import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import LiIcon from './LiIcon';

type DetailsProps = {
    type: string,
    time: string,
    place: string,
    info: string;
}


const Details = ({ type, time, place, info }: DetailsProps) => {
    const ref = useRef(null)

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-start justify-start'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitlize font-bold text-lg sm:text-xl md:text-2xl'>
                {type}
            </h3>
            <span className='capitlize font-medium text-dark/75 text-xs md:text-lg'>
                {time} | {place}
            </span>
            <p className='font-medium w-full text-sm md:text-lg'>
                {info}
            </p>
        </motion.div>
    </li >
}


const Education = () => {
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
            <h2 className='md:mb-32 w-full text-center font-semibold text-4xl sm:text-6xl mb-16 md:text-8xl'>
                Education
            </h2>

            <div ref={ref} className='w-full sm:w-[90%] md:w-[75%] m-auto relative'>
                {/* Line that will animate with framer-motion -- scrollYProgress */}
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute sm:left-[30px] left-[20px] w-[2px] md:left-9 md:top-0 md:w-[4px] h-full bg-dark origin-top' />

                <ul className='w-full flex flex-col items-start justify-start ml-2 md:ml-4'>
                    <Details
                        type="Certificate"
                        time="2022-2022"
                        place="Remote | Promineo Tech"
                        info="Front End Software Engineer"
                    />
                    <Details
                        type="Bachelor CS ( undergraduate )"
                        time="2016-2019"
                        place="Zrenjanin, Serbia"
                        info="Relevant courses included Data Structures and Algorithms, Computer Science Pascal, C, JavaScript, x64 Assembly"
                    />
                    <Details
                        type="High School GED"
                        time="2012-2016"
                        place="Serbia, Vrsac"
                        info="Formal high school education"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education; 

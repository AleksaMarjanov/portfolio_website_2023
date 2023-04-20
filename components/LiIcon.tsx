"use client";

import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'



//TODO: Also have to fix type for this reference here
const LiIcon = ({ reference }: any) => {

    const { scrollYProgress } = useScroll(
        // Using ref to target the div line 
        {
            target: reference,
            offset: ["center end", "center center"]
        })
    return (
        <figure className="absolute max-[475px]:-left-[3.5] -left-3 md:left-2 stroke-dark">

            <svg className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]  md:-rotate-90" width="75" height="75" viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className="stroke-[#F7AB0A] fill-none stroke-1" />
                <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-light"
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx="75" cy="50" r="10" className="animate-pulse fill-[#F7AB0A] stroke-1" />
            </svg >
        </figure >
    )
}

export default LiIcon

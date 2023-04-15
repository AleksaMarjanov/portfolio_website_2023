"use client";

import React from 'react'
import { motion } from 'framer-motion'

type SkillProps = {
    name: string
    x: string
    y: string
}

const Skill = ({ name, x, y }: SkillProps) => {

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'>
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center 
            rounded-full bg-circularLight'>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'>
                    Web
                </motion.div>

                <Skill name="CSS" x="-5vw" y="-10" />
            </div >
        </>
    )
}

export default Skills

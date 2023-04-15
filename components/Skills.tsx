"use client";

import React from 'react'
import { motion } from 'framer-motion'
import ReactPic from '../public/skills/react.svg'
import Image from 'next/image';

type SkillProps = {
    name: string
    x: string
    y: string
}

const Skill = ({ name, x, y }: SkillProps) => {

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute '
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
        >
            {/* {name} */}
            <Image src={ReactPic} alt="skills" priority className="w-16  h-16 object-center object-contai " />
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

                <Skill name="CSS" x="-5vw" y="-10vw" />
            </div >
        </>
    )
}

export default Skills

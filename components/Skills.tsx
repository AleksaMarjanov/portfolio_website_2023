"use client";

import { motion } from 'framer-motion'
// import { React, css, HTML, next, typescript, Javascript, Redux, MongoDB, git } from '../public/skills/index'
import ReactPic from '../public/skills/react.svg'
import Next from '../public/skills/NextJS-Dark.svg'
import HTML from '../public/skills/HTML.svg'
import Python from '../public/skills/python.png'
import Tailwind from '../public/skills/TailwindCSS-Dark.svg'
import TypeScript from '../public/skills/TypeScript.svg'
import CSS from '../public/skills/CSS.svg'
import Javascript from '../public/skills/JavaScript.svg'
import jQuery from '../public/skills/JQuery.svg'
import Redux from '../public/skills/Redux.svg'
import MongoDB from '../public/skills/MongoDB.svg'
import Git from '../public/skills/Github-Dark.svg'
import Image, { StaticImageData } from 'next/image';

type SkillProps = {
    x: string
    y: string
    src: string | StaticImageData
}

const Skill = ({ x, y, src }: SkillProps) => {

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex items-center justify-center rounded-full bg-dark/50 font-semibold py-3 px-6 shadow-dark cursor-pointer absolute '
            initial="hidden"
            whileInView="show"
            animate={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
        >
            {/* {name} */}
            < Image src={src} width={16} height={16} alt="skills" priority className="w-16  h-16 object-center object-contai " />
        </motion.div >
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

                <Skill src={ReactPic} x="-5vw" y="-10vw" />
                <Skill src={Next} x="-8vw" y="-4vw" />
                <Skill src={CSS} x="20vw" y="6vw" />
                <Skill src={Tailwind} x="0vw" y="12vw" />
                <Skill src={Javascript} x="-20vw" y="2vw" />
                <Skill src={Redux} x="-20vw" y="-15vw" />
                <Skill src={TypeScript} x="-15vw" y="8vw" />
                <Skill src={HTML} x="12vw" y="4vw" />

                <Skill src={Git} x="-20vw" y="18vw" />
            </div >
        </>
    )
}

export default Skills

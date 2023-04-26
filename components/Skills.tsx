"use client";

import { motion } from 'framer-motion'
// import { React, css, HTML, next, typescript, Javascript, Redux, MongoDB, git } from '../public/skills/index'
import ReactPic from '../public/skills/react.svg'
import Next from '../public/skills/NextJS-Dark.svg'
import HTML from '../public/skills/HTML.svg'
import AWS from '../public/skills/AWS-Dark.svg'
import Vscode from '../public/skills/VSCode-Dark.svg'
import Vercel from '../public/skills/Vercel-Dark.svg'
import Python from '../public/skills/python.png'
import Tailwind from '../public/skills/TailwindCSS-Dark.svg'
import TypeScript from '../public/skills/TypeScript.svg'
import CSS from '../public/skills/CSS.svg'
import Javascript from '../public/skills/JavaScript.svg'
import jQuery from '../public/skills/JQuery.svg'
import Redux from '../public/skills/Redux.svg'
import Neovim from '../public/skills/NeoVim-Dark.svg'
import Postman from '../public/skills/Postman.svg'
import Vim from '../public/skills/VIM-Dark.svg'
import Firebase from '../public/skills/Firebase-Dark.svg'
import Linux from '../public/skills/Linux-Dark.svg'
import Jest from '../public/skills/Jest.svg'
import Markdown from '../public/skills/Markdown-Dark.svg'
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
            className='flex items-center justify-center rounded-full bg-transparent lg:bg-dark/50
            font-semibold lg:py-3 py-1.5 px-3 md:py-2 md:px-4  bg-dark shadow-dark cursor-pointer absolute '
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
        >
            {/* {name} */}
            < Image src={src} width={16} height={16} alt="skills" priority className="w-8 h-8 md:w-12 md:h-12 lg:w-16  lg:h-16 object-center object-contai " />
        </motion.div >
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-6xl md:text-8xl mt-32 md:mt-64 w-full text-center">Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center 
            rounded-full bg-circularLightSm  lg:bg-circularLight max-[375px]:h-[50vh] max-[475px]:h-[60vh] '>
                <motion.div
                    // whileHover={{ scale: 1.05 }}
                    className='flex items-center justify-center rounded-full font-semibold bg-dark p-4 text-xs sm:text-sm lg:px-6 text-light 
                   lg: p-8 shadow-dark cursor-pointer'>
                    Web
                </motion.div>

                <Skill src={ReactPic} x="0vw" y="-16vw" />
                <Skill src={Next} x="-12vw" y="-13vw" />
                {/* <Skill src={CSS} x="-24vw" y="6vw" /> */}
                <Skill src={Tailwind} x="0vw" y="16vw" />
                <Skill src={Javascript} x="-18vw" y="3vw" />
                <Skill src={Redux} x="-16vw" y="-22vw" />
                <Skill src={TypeScript} x="-24vw" y="-8vw" />
                <Skill src={HTML} x="12vw" y="16vw" />
                <Skill src={Git} x="-24w" y="28vw" />
                <Skill src={Linux} x="22vw" y="-6vw" />
                <Skill src={Neovim} x="14vw" y="-16vw" />
                <Skill src={jQuery} x="-18vw" y="16vw" />
                <Skill src={Vscode} x="22vw" y="22vw" />
                <Skill src={MongoDB} x="18vw" y="3vw" />
            </div >
        </>
    )
}

export default Skills

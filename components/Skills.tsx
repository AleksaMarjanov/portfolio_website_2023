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
            className='flex items-center justify-center rounded-full bg-dark/50 font-semibold py-3 px-6 shadow-dark cursor-pointer absolute '
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            viewport={{ once: true }}
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
                    // whileHover={{ scale: 1.05 }}
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'>
                    Web
                </motion.div>

                <Skill src={ReactPic} x="-5vw" y="-10vw" />
                <Skill src={Next} x="-8vw" y="-4vw" />
                <Skill src={CSS} x="-24vw" y="6vw" />
                <Skill src={Tailwind} x="0vw" y="12vw" />
                <Skill src={Javascript} x="-20vw" y="2vw" />
                <Skill src={Redux} x="-20vw" y="-15vw" />
                <Skill src={TypeScript} x="-15vw" y="8vw" />
                <Skill src={HTML} x="12vw" y="4vw" />
                <Skill src={jQuery} x="0vw" y="-20vw" />
                <Skill src={Git} x="-25w" y="18vw" />
                <Skill src={Neovim} x="22vw" y="-20vw" />
                <Skill src={Markdown} x="2vw" y="-12vw" />
                <Skill src={Postman} x="32vw" y="-5vw" />
                <Skill src={Firebase} x="6vw" y="-3vw" />
                <Skill src={Linux} x="13vw" y="-8vw" />
                <Skill src={Jest} x="-24vw" y="18vw" />
                <Skill src={Vim} x="4vw" y="4vw" />
                <Skill src={Vscode} x="12vw" y="13vw" />
                <Skill src={Vercel} x="32vw" y="-10vw" />
                <Skill src={MongoDB} x="18vw" y="9vw" />
            </div >
        </>
    )
}

export default Skills

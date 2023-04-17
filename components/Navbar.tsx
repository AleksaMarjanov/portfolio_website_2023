'use client';

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Logo } from '.'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';

type LinkProps = {
    href: string;
    title: string;
    className: string;
}

const CustomLink = ({ href, title, className }: LinkProps) => {
    const pathname = usePathname()

    return (
        <Link href={href} className={`${className} relative group`} >
            {title}
            < span className={`h-[1px] inline-block  bg-dark absolute left-0 bottom-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link >
    )
}

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <header className="flex w-full px-32 py-8 font-medium items-center justify-between">

            <button className='flex flex-col items-center justify-center'>
                <span className='bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5'></span>
                <span className='bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5'></span>
                <span className='bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5'></span>
            </button>

            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink href="/projects" title="Projects" className="mx-4" />
                <CustomLink href="/contact" title="Contact" className="ml-4" />
            </nav>
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mr-3"
                    href="https://twitter.com/Beli1337" target={"_blank"}>
                    <TwitterIcon />
                </motion.a>
                <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mr-3"
                    href="https://github.com/AleksaMarjanov" target={"_blank"}>
                    <GithubIcon />
                </motion.a>
                <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://linkedin.com/in/AleksaMarjanov" target={"_blank"}>
                    <LinkedInIcon />
                </motion.a>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header >
    )
}

export default Navbar

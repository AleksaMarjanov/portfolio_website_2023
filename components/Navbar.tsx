'use client';

import React from 'react'
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
            < span className={`h-[1px] inline-block  bg-black absolute left-0 bottom-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link >
    )
}

const Navbar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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

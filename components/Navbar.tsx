'use client';

import React, { MouseEventHandler, useState } from 'react'
import { motion } from 'framer-motion';
import { Logo } from '.'
import Link from 'next/link';
import { usePathname, useSearchParams } from "next/navigation";
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';
import { useRouter } from 'next/navigation';

//TODO: FIX ALL TYPES/TS-IGNORES

type LinkProps = {

    href: string;
    title: string;
    className: string;
}

type MobLinkProps = {
    href: string;
    title: string;
    className: string;
    toggle: boolean | (() => void)
}


const CustomMobileLink = ({ href, title, toggle, className }: MobLinkProps) => {
    const router = useRouter();
    const pathname = usePathname()

    const handleClick = () => {
        // @ts-ignore
        toggle()
        router.push(href);
    }

    return (
        // @ts-ignore
        < button href={href} className={`${className} relative group my-2`
        } onClick={handleClick} >
            {title}
            < span className={`h-[1px] inline-block  bg-light absolute left-0 bottom-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span >

        </button >
    )
}


const CustomLink = ({ href, title, className }: LinkProps) => {
    const pathname = usePathname()


    return (
        <Link href={href} className={`${className} relative group`}  >
            {title}
            < span className={`h-[1px] inline-block  bg-dark absolute left-0 bottom-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span >
        </Link >
    )
}

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    // trigger hamburger menu
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <header className="bg-light flex w-full px-6 sm:px-12 md:px-16 lg:px-32 py-8 font-medium items-center justify-between relative z-10">
            {/* Hamburger menu */}
            <button className='flex lg:hidden flex-col items-center justify-center' onClick={handleToggle}>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${toggle ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-0.5 ${toggle ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm  ${toggle ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className="w-full flex justify-between items-center hidden lg:flex ">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                    <CustomLink href="/contact" title="Contact" className="ml-4" />
                </nav>
                <nav className="flex items-center justify-center flex-wrap mt-2">
                    <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3 mx-1 "
                        href="https://twitter.com/Beli1337" target={"_blank"}>
                        <TwitterIcon />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3 bg-light rounded-full dark:bg-light mx-1 "
                        href="https://github.com/AleksaMarjanov" target={"_blank"}>
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3 mx-1 "
                        href="https://linkedin.com/in/AleksaMarjanov" target={"_blank"}>
                        <LinkedInIcon />
                    </motion.a>
                </nav>
            </div>

            {/* Mobile menu */}
            {toggle ?
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] flex flex-col fixed z-[30] justify-between items-center h-[60vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
bg-dark/90 text-light dark:bg-light/75 dark:text-dark rounded-sm backdrop-blur-md py-32">
                    <nav className="flex items-center justify-start flex-col">
                        <CustomMobileLink href="/" title="Home" className="" toggle={handleToggle} />
                        <CustomMobileLink href="/about" title="About" className="" toggle={handleToggle} />
                        <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleToggle} />
                        <CustomMobileLink href="/contact" title="Contact" className="" toggle={handleToggle} />
                    </nav>
                    <nav className="flex items-center justify-center flex-wrap">
                        <motion.a
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 mx-1 "
                            href="https://twitter.com/Beli1337" target={"_blank"}>
                            <TwitterIcon />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 mx-1 "
                            href="https://github.com/AleksaMarjanov" target={"_blank"}>
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 mx-1 "
                            href="https://linkedin.com/in/AleksaMarjanov" target={"_blank"}>
                            <LinkedInIcon />
                        </motion.a>
                    </nav>
                </motion.div>
                : null
            }


            <div className="absolute left-[50%] top-2 translate-x-[-50%] hidden lg:block">
                <Logo />
            </div>
        </header >
    )
}

export default Navbar

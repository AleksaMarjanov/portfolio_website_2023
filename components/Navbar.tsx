'use client';

import React from 'react'
import { Logo } from '.'
import Link from 'next/link';
import { usePathname } from "next/navigation";

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
                <CustomLink href="/About" title="About" className="mx-4" />
                <CustomLink href="/Projects" title="Projects" className="mx-4" />
                <CustomLink href="/Contact" title="Contact" className="ml-4" />
            </nav>
            <nav>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default Navbar

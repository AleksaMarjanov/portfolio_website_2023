import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className="w-full bg-light border-t-2 border-solid border-[#F7AB0A] font-medium px-6 md:px-16 text-md md:text-lg ">

            <div className='w-full h-full inline-block z-0 bg-light md:p-32 py-8 flex flex-col items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="">
                    by&nbsp;
                    <Link
                        className="underline underline-offset-2 pr-2 hover:text-[#F7AB0A] hover:animate-pulse duration-300 "
                        href="https://marjanovdesignsolutions.com"
                        target={"_blank"}>Aleksa Marjanov</Link>
                </div>
                <div className="flex items-center">
                    Hire <span className="text-pink-500 text-md  md:text-2xl px-1 ">&#9825;</span>
                    <Link
                        className="underline underline-offset-2 hover:text-[#F7AB0A] hover:animate-pulse duration-300 "
                        href="https://marjanovdesignsolutions.com"
                        target={"_blank"} >
                        Marjanov Design Solutions
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer

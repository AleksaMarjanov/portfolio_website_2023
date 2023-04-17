"use client";

import React from 'react'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { GithubIcon } from './Icons';

type Props = {
    type: string,
    title: string,
    summary: string,
    link: string;
    github: string;
    img: string | StaticImageData
}

const FeaturedProject = ({ type, title, summary, img, link, github }: Props) => {

    return (
        <article className='w-full flex items-center justify-between relative p-12 rounded-br-2xl rounded-3xl border border-solid border-[#F7AB0A] bg-light shadow-2xl'>

            <div className='absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] rounded-br-3xl  bg-[#F7AB0A]' />
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg ' href={link} target="_blank">
                <Image src={img} alt={title} className="w-full h-auto" priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                33vw"

                />
            </Link>


            <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
                <span className='text-pink-600 font-medium text-2xl'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 '>
                    <h2 className='my-2 w-full text-left text-4xl font-bold '>{title}</h2>
                </Link>
                <p className='font-medium my-2 text-dark'>{summary}</p>
                <div className='flex items-center mt-2 space-x-3'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                    <Link href={link} target="_blank" className='rounded-lg bg-[#F7AB0A] hover:bg-light hover:text-[#F7AB0A] hover:border hover:border-solid hover:border-[#F7AB0A] transition-all duration-400 ease-out text-light p-2 px-6 font-semibold'>Visit Project</Link>
                </div>
            </div>

        </article>

    )
}

export default FeaturedProject

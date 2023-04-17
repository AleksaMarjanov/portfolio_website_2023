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
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl'>

            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg ' href={link} target="_blank">
                <Image src={img} alt={title} className="w-full h-auto" priority />
            </Link>


            <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
                <span className='text-pink-600 font-medium text-2xl'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 '>
                    <h2 className='my-2 w-full text-left text-4xl font-bold '>{title}</h2>
                </Link>
                <p>{summary}</p>
                <div>
                    <Link href={github} target="_blank"><GithubIcon /></Link>
                    <Link href={link} target="_blank">Visit Project</Link>
                </div>
            </div>

        </article>

    )
}

export default FeaturedProject

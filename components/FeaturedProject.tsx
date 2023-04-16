"use client";

import React from 'react'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

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
        <article>

            <Link href={link} target="_blank">
                <Image src={img} alt={title} className="w-full h-auto" priority />
            </Link>


            <div>
                <span>
                    {type}
                </span>
                <Link href={link} target="_blank">
                    <h2>{title}</h2>
                </Link>
                <p>summary</p>
                <div>
                    <Link href={github} target="_blank">GithubIcon</Link>
                    <Link href={link} target="_blank">Visit Project</Link>
                </div>
            </div>

        </article>

    )
}

export default FeaturedProject

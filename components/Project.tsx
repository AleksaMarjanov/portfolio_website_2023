import Link from 'next/link';
import React from 'react'
import { GithubIcon } from './Icons';
import Image, { StaticImageData } from 'next/image';


type Props = {
    type: string,
    title: string,
    summary: string,
    link: string;
    github: string;
    img: string | StaticImageData

}
const Project = ({ type, title, summary, img, link, github }: Props) => {

    return (
        <article className='w-full flex items-center justify-center border border-solid border-dark rounded-2xl bg-light p-6 relative'>


            <Link className='w-full ursor-pointer overflow-hidden rounded-lg ' href={link} target="_blank">
                <Image src={img} alt={title} className="w-full h-auto" priority />
            </Link>


            <div className='w-full flex flex-col items-start justify-between pl-6 '>
                <span className='text-pink-600 font-medium text-2xl'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 '>
                    <h2 className='my-2 w-full text-left text-4xl font-bold '>{title}</h2>
                </Link>
                <p className='font-medium my-2 text-dark'>{summary}</p>
                <div className='flex items-center mt-2 space-x-3'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                    <Link href={link} target="_blank" className='rounded-lg bg-dark text-light p-2 px-6 font-semibold'>Visit</Link>
                </div>
            </div>

        </article>
    )
}
export default Project;

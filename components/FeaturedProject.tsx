import React from 'react'
import Image, { StaticImageData } from 'next/image';

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
        <div>FeaturedProject</div>
    )
}

export default FeaturedProject

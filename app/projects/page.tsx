import { AnimatedText, FeaturedProject, Layout, Project, TransitionEffect } from '@/components'
import React from 'react'
import project from '../../public/marjanov.png'
import { Projects } from '@/typings'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import { urlFor } from '@/lib/urlFor'

export const metadata = {
    title: 'Projects Page'
}

type ProjectType = {
    project: Projects
}

const query = groq`
*[_type == 'project']
`

const Projects = async () => {


    const projects = await client.fetch(query)

    console.log({ projects });


    return (
        <>
            <TransitionEffect />
            <main className="w-full p-2 md:p-0 mb-16 flex flex-col items-center justify-center">
                {/* <div className="pt-16"> */}
                <Layout >
                    <AnimatedText text="Creative Portfolio" className='mb-8 !text-4xl md:!text-7xl lg:!text-8xl lg:mb-16' />

                    <div className="grid grid-cols-12 gap-24 gap-x-0 xs:gap-x-8 sm:gap-x-16 md:gap-y-24  xl:gap-y-32" >
                        < div className="col-span-12" >
                            <FeaturedProject type='Business Website' title="Marjanov Design Solutions" summary="Single page website made for my website development company showcasing portfolio and some information about services provided" img={project} link="https://marjanovdesignsolutions.com" github="https://github.com/AleksaMarjanov/marjanovdesignsolutions" />
                        </div>
                        {projects?.map((project: Projects) => (
                            <div key={project._id} className="col-span-12 lg:col-span-6">
                                <Project
                                    type={project.type}
                                    img={urlFor(project.image).url()}
                                    title={project.title}
                                    summary={project.summary}
                                    link={project.link}
                                    github={project.github} />
                            </div>
                        ))}
                        {/* <Project type="Project" title="Marjanov Design Solutions" summary="Web dev company" img={project} link="https://marjanovdesignsolutions.com" github="https://github.com/marjanovdesignsolutions" /> */}
                    </div>
                </Layout >
                {/* </div > */}
            </main >
        </>
    )
}

export default Projects 

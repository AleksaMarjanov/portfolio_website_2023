import { AnimatedText, FeaturedProject, Layout, Project } from '@/components'
import React from 'react'
import project from '../../public/marjanov.png'

export const metadata = {
    title: 'Projects Page'
}

const Projects = () => {

    return (
        <main className="w-full mb-16 flex flex-col items-center justify-center">
            <div className="pt-16">
                < Layout >
                    <AnimatedText text="Creative Portfolio" className='!text-8xl mb-16' />

                    <div className="grid grid-cols-12 gap-24" >
                        <div className="col-span-12">
                            <FeaturedProject type="Featured Project" title="Marjanov Design Solutions" summary="Web dev company" img={project} link="https://marjanovdesignsolutions.com" github="https://github.com/marjanovdesignsolutions" />
                        </div>
                        <div className="col-span-6">
                            <Project type="Project" title="Marjanov Design Solutions" summary="Web dev company" img={project} link="https://marjanovdesignsolutions.com" github="https://github.com/marjanovdesignsolutions" />
                        </div>
                        <div className="col-span-6">
                            <Project type="Project" title="Marjanov Design Solutions" summary="Web dev company" img={project} link="https://marjanovdesignsolutions.com" github="https://github.com/marjanovdesignsolutions" />
                        </div>
                    </div>
                </Layout >
            </div >
        </main >
    )
}

export default Projects 

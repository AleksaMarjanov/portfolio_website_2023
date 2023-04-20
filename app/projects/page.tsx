import { AnimatedText, FeaturedProject, Layout, Project } from '@/components'
import React from 'react'
import project from '../../public/marjanov.png'

export const metadata = {
    title: 'Projects Page'
}

const Projects = () => {

    return (
        <main className="w-full p-2 md:p-0 mb-16 flex flex-col items-center justify-center">
            {/* <div className="pt-16"> */}
            <Layout >
                <AnimatedText text="Creative Portfolio" className='mb-8 !text-4xl md:!text-7xl lg:!text-8xl lg:mb-16' />

                <div className="grid grid-cols-12 gap-24 gap-x-0 xs:gap-x-8 sm:gap-x-16 md:gap-y-24  xl:gap-y-32" >
                    <div className="col-span-12">
                        <FeaturedProject type="Featured Project" title="Marjanov Design Solutions" summary="Web dev company" img={project} link="https://marjanovdesignsolutions.com" github="https://github.com/marjanovdesignsolutions" />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <Project type="Project" title="Marjanov Design Solutions" summary="Web dev company" img={project} link="https://marjanovdesignsolutions.com" github="https://github.com/marjanovdesignsolutions" />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <Project type="Project" title="Marjanov Design Solutions" summary="Web dev company" img={project} link="https://marjanovdesignsolutions.com" github="https://github.com/marjanovdesignsolutions" />
                    </div>
                </div>
            </Layout >
            {/* </div > */}
        </main >
    )
}

export default Projects 

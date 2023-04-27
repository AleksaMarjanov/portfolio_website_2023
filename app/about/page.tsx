import { AboutComponent, Skills, TransitionEffect } from '@/components'
import React from 'react'

export const metadata = {
    title: 'About Page'
}

const About = () => {

    return (

        <main>
            <TransitionEffect />
            <AboutComponent />
        </main>
    )
}

export default About

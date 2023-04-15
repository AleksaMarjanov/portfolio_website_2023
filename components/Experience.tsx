import React from 'react'

type DetailsProps = {
    position: string,
    company: string,
    companyLink: string,
    time: string,
    address: string,
    work: string;
}


const Details = ({ position, company, companyLink, time, address, work }: DetailsProps) => {
    return <li>
        <div>
            <h3 >
                {position}&nbsp;<a href={companyLink}>@{company}</a>
            </h3>
            <span>
                {time} | {address}
            </span>
            <p>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
    return (
        <div className='my-64'>
            <h2 className='mb-32 w-full text-center font-semibold text-8xl'>
                Experience
            </h2>

            <div className='w-[75%] m-auto relative'>
                <ul>
                    <Details
                        position='CEO & Founder'
                        company='Marjanov Design Solutions'
                        companyLink='https://marjanovdesignsolutions.com'
                        time='January 2023 - Current'
                        address='Remote'
                        work='Developed NextJS Websites'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience

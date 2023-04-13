import React from 'react'

type Props = {
    text: string;
    className: string;
}

const AnimatedText = ({ text, className = "" }: Props) => {
    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
            <h1 className={` ${className} inline-block w-full text-black font-bold capitalize text-8xl`}>
                {
                    text.split(" ").map((word, index) =>
                        <span key={word + '-' + index} >
                            {word}&nbsp;
                        </span>
                    )
                }
            </h1>
        </div>
    )
}

export default AnimatedText

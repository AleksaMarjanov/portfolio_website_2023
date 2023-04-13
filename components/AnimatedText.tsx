"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';

type Props = {
    text: string;
    className: string;
}

const quote = {
    intial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWord = {
    intial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}



const AnimatedText = ({ text, className = "" }: Props) => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
            <motion.h1
                variants={quote}
                initial="hidden"
                whileInView="show"
                className={` ${className} inline-block w-full text-black font-bold capitalize `}>
                {
                    text.split(" ").map((word, index) =>
                        <motion.span
                            variants={singleWord}
                            key={word + '-' + index} className="inline-block">
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </motion.div >
    )
}

export default AnimatedText

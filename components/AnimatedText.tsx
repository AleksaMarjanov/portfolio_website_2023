"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { quote, singleWord, staggerContainer } from '@/utils/motion';

type Props = {
    text: string;
    className: string;
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
                initial="initial"
                animate="animate"
                className={` ${className} inline-block w-full text-dark font-bold capitalize `}>
                {
                    text.split(" ").map((word: string, index: number) =>
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

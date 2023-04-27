"use client";

import './globals.css'
import { AnimatePresenceProps, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Fragment, type PropsWithChildren } from 'react';


export default function LayoutAnimatePresence({ children, ...restProps }: PropsWithChildren<AnimatePresenceProps>) {
    const pathname = usePathname()

    return (
        <AnimatePresence {...restProps} mode='wait'>
            <Fragment key={pathname}>{children}</Fragment>
        </AnimatePresence>
    )
}


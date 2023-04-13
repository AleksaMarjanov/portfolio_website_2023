import React from 'react'



export default function Layout(
    {
        children,
    }: {
        children: React.ReactNode
    }, className = "") {
    {

        return (
            <div className={`w-full h-full inline-block z-0 bg-white/80 p-32 mt-0 ${className}`}>
                {children}
            </div>
        )
    }
}

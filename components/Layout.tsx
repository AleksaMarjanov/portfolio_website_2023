import React from 'react'

export default function Layout(
    {
        children,
    }: {
        children: React.ReactNode
    }, className = "") {
    {

        return (
            <div className={`w-full h-full bg-light z-0 relative inline-block p-4 lg:p-32 ${className}`}>
                {children}
            </div>
        )
    }
}

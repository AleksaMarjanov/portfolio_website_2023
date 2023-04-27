// "use client";
//
// import { Footer, Navbar } from '@/components';
// import { motion, AnimatePresence } from 'framer-motion';
// import { usePathname } from 'next/navigation';
//
// export default function Client({
//     children,
// }: {
//     children: React.ReactNode
// }) {
//     const pathname = usePathname()
//
//     return (
//         <html lang="en">
//             <body className={`${montserrat.className} bg-light w-full min-h-screen `} >
//                 <Navbar />
//                 <AnimatePresence mode='wait'>
//                     <motion.div key={pathname}>{children}</motion.div>
//                     <Footer />
//                 </AnimatePresence>
//             </body>
//         </html>
//     )
// }

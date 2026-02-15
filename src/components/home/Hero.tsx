'use client'

import {motion} from 'framer-motion'
import Link from 'next/link'
import {useGeoContent} from '@/lib/geo'
import type { Region } from '@/config/regions.config'

interface HeroProps {
    regionOverride?: Region
}

export default function Hero({ regionOverride }: HeroProps){

    const {regionText} = useGeoContent(regionOverride)

    return (
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-blue-700 text-white overflow-hidden">
            {/* background pattern */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute inset-0' style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize:'30px 30px'
                }}/>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Region Badge */}
                    {regionText && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-block mb-4 px-4 py-2 bg-white/20 text-sm rounded-full text-sm font-medium"
                        >
                            {regionText}
                        </motion.div>
                    )}
                    {/* Main Headline  */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Your Trusted Partner in
                        <span className="block text-accent-400"> Home Financing</span>
                    </h1>
                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl mb-10 text-blue-50 font-light">
                        Expert guidance, personalized solutions, and exceptional service for all your mortage needs.
                    </p>

                    {/* CTA Button */}
                    <div className ="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/apply"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transforme hover:-translate-y-0.5"
                            onClick={() => {
                                if (typeof window !== 'undefined' && window.gtag) {
                                    window.gtag('event', 'cta_click', {
                                        location:'hero',
                                        label:'Apply Now'
                                    })
                                }
                            }}
                        >
                            Apply Now
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                            >
                            Contact Me 
                            </Link>
                    </div>
                </motion.div>
            </div>

                  {/* Wave divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="white"
                    />
                    </svg>
                </div>

        </section>
    )
}

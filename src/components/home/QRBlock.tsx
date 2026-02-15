'use client'

import { QRCodeSVG } from 'qrcode.react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site.config'
import { profileConfig } from '@/config/profile.config'

export default function QRBlock(){
    //Generate tracking URL instead of direct social link
    const qrUrl =`${siteConfig.url}/api/qr-redirect?target=social`

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{opacity: 1, y: 0 }}
            viewport={{once: true}}
            transition={{duration: 0.5, delay:0.2}}
            className='bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md mx-auto lg:mx-0'
        >
            <div className='text-center'>
                {/* QR Code */}
                <div className='inline-block p-6 bg-gray-50 rounded-xl mb-4'>
                    <QRCodeSVG
                        value={qrUrl}
                        size={200}
                        level='H'
                        includeMargin={false}
                        imageSettings={{
                            src: profileConfig.photo, // Optional logo in center
                            height: 40,
                            width:40,
                            excavate: true,
                        }}
                    />
                </div>

                {/*Label*/}
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Scan To Apply Now</h3>
                <p className='text-gray-600 text-sm'>Quick access to my profile and application</p>
            </div>
        </motion.div>
    )

}

import {Metadata} from 'next'
import {profileConfig} from '@/config/profile.config'

export const metadata: Metadata = {
    title: 'About | Your Trusted Mortgage Partner',
    description: 'Learn more about our mission, values, and the team behind Your Trusted Mortgage Partner. We are dedicated to providing expert mortgage guidance and personalized financing solutions.',
}

export default function AboutPage() {
    return (
        <div className='py-16 md:py-24'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/*Header Section*/}
                <div className='text-center mb-12'>
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>About Us</h1>
                    <p className='text-lg text-gray-600'>Dedicated to helping you achieve your financial goals</p>
                </div>

                {/*Content Section*/}
                <div className="prose prose-lg max-w-none">
                    <p>
                        With over [X years] of experience in mortgage lending, I&apos;ve helped
                        hundreds of families achieve their dream of homeownership. My approach
                        is simple: provide transparent guidance, personalized solutions, and
                        exceptional service throughout your home financing journey.
                    </p>

                    <h2>My Credentials</h2>
                    <ul>
                        <li>Licensed Mortgage Loan Officer (#{profileConfig.credentials})</li>
                        <li>[Relevant Certifications]</li>
                        <li>Member of [Professional Associations]</li>
                    </ul>

                    <h2>My Commitment</h2>
                    <p>
                        I believe that every client deserves personalized attention and
                        honest advice. Whether you&apos;re a first-time homebuyer or refinancing
                        your existing mortgage, I&apos;ll work with you to find the best solution
                        for your unique situation.
                    </p>
                </div>


            </div>
        </div>
    )
}

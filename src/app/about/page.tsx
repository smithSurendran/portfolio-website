import {Metadata} from 'next'
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
                    <p className='text-lg text-gray-600'>Dedicated to helping individuals and families navigate home financing with confidence.</p>
                </div>

                {/*Content Section*/}
                <div className="prose prose-lg max-w-none">
                    <p>
                        I am Joseph Cherian, a licensed Mortgage Loan Officer dedicated to helping individuals and families navigate the U.S. home financing process with confidence and clarity. With a strong understanding of mortgage guidelines, lending regulations, and borrower qualification standards, my goal is to make homeownership accessible, transparent, and stress-free.
                    </p>

                    <p>
                        I provide personalized, step-by-step guidance throughout the entire loan process, from initial consultation and financial review to loan approval and closing. I work closely with borrowers to evaluate income, credit history, debt-to-income ratios, and documentation requirements to ensure accurate eligibility assessment and smooth underwriting.
                    </p>

                    <p>
                        The goal is simple: deliver responsible lending solutions that align with long-term financial success while ensuring compliance with U.S. mortgage standards.
                    </p>
                </div>


            </div>
        </div>
    )
}

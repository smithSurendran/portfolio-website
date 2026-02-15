import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { profileConfig } from '@/config/profile.config'

export const metadata: Metadata = {
  title: 'About | Joseph Cherian',
  description:
    'Learn more about Joseph Cherian, a licensed Mortgage Loan Officer focused on clear guidance, responsible lending, and a smooth home financing experience.',
}

const processSteps = [
  'Initial consultation and financial review',
  'Income, credit, and debt-to-income analysis',
  'Program matching and documentation preparation',
  'Loan submission, underwriting, and closing support',
]

export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium mb-4">
              About Joseph Cherian
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Guidance with Clarity and Confidence</h1>
            <p className="text-lg md:text-xl text-blue-100">
              Dedicated to helping individuals and families navigate the U.S. home financing process with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="relative w-full max-w-xs h-80 mx-auto rounded-xl overflow-hidden ring-4 ring-slate-100">
                <Image src={profileConfig.photo} alt={profileConfig.name} fill className="object-cover" priority />
              </div>
              <div className="text-center mt-5 space-y-1">
                <p className="text-2xl font-bold text-slate-900">{profileConfig.name}</p>
                <p className="text-slate-700">{profileConfig.title}</p>
                <p className="text-sm text-slate-600">{profileConfig.credentials}</p>
                <p className="text-sm text-slate-600">
                  {profileConfig.company.name} | {profileConfig.company.nmls}
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-5 text-slate-700 leading-relaxed">
              <p>
                I am Joseph Cherian, a licensed Mortgage Loan Officer dedicated to helping individuals and families
                navigate the U.S. home financing process with confidence and clarity. With a strong understanding of
                mortgage guidelines, lending regulations, and borrower qualification standards, my goal is to make
                homeownership accessible, transparent, and stress-free.
              </p>
              <p>
                I provide personalized, step-by-step guidance throughout the entire loan process, from initial
                consultation and financial review to loan approval and closing. I work closely with borrowers to
                evaluate income, credit history, debt-to-income ratios, and documentation requirements to ensure
                accurate eligibility assessment and smooth underwriting.
              </p>
              <p>
                The goal is simple: deliver responsible lending solutions that align with long-term financial success
                while ensuring compliance with U.S. mortgage standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How I Guide You</h2>
            <ul className="space-y-3">
              {processSteps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-3">Let&apos;s Talk About Your Goals</h2>
            <p className="text-blue-100 mb-6">
              Whether you are buying your first home, upgrading, or refinancing, you will get clear advice and
              responsible loan options tailored to your financial profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors duration-200"
              >
                Contact Me
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Metadata } from 'next'
import { ArrowsRightLeftIcon, HomeModernIcon } from '@heroicons/react/24/outline'

const featuredOptions = [
  {
    title: 'Home Purchase Loans',
    description:
      'Whether you’re buying your first home or upgrading to a new property, personalized mortgage solutions help simplify the purchasing process. From pre-approval to closing, every step is designed to ensure a smooth and informed experience.',
    icon: HomeModernIcon,
  },
  {
    title: 'Mortgage Refinance',
    description:
      'Refinancing allows homeowners to replace their current mortgage with a new loan that may offer lower interest rates, improved terms, or access to home equity. Options include rate-and-term refinance, cash-out refinance, and streamline refinance programs for eligible government-backed loans.',
    extraDescription:
      'Refinancing may help reduce monthly payments, shorten loan duration, or consolidate higher-interest debt into a single mortgage payment.',
    icon: ArrowsRightLeftIcon,
  },
]

const loanTypes = [
  {
    title: 'Conventional Loans',
    description:
      'Ideal for borrowers with stable income and strong credit profiles. Conventional loans offer flexible terms and competitive rates without government insurance requirements.',
  },
  {
    title: 'FHA Loans',
    description:
      'Government-insured loans designed to help first-time buyers and clients with moderate credit qualify for homeownership with lower down payment options.',
  },
  {
    title: 'VA Loans',
    description:
      'Available to eligible veterans and active-duty service members. VA loans often provide zero down payment options and no private mortgage insurance requirements.',
  },
  {
    title: 'USDA Loans',
    description:
      'Designed for buyers purchasing homes in eligible rural and suburban areas. These loans may offer affordable financing with reduced upfront costs.',
  },
  {
    title: 'Jumbo Loans',
    description:
      'Mortgage solutions for higher-value properties exceeding standard conforming loan limits.',
  },
  {
    title: 'Fixed-Rate Mortgages',
    description:
      'Stable interest rate and predictable monthly payments throughout the loan term.',
  },
  {
    title: 'Adjustable-Rate Mortgages (ARM)',
    description:
      'Lower initial interest rates that adjust periodically based on market conditions.',
  },
]

export const metadata: Metadata = {
  title: 'Loan Types | Mortgage Solutions',
  description:
    'Explore available mortgage loan types including Conventional, FHA, VA, USDA, Jumbo, Fixed-Rate, and ARM options.',
}

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loan Types
          </h1>
          <p className="text-lg text-gray-600">
            Mortgage solutions tailored to your financial profile and homeownership goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredOptions.map((option) => {
            const Icon = option.icon
            return (
              <article key={option.title} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 text-primary-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{option.title}</h2>
                <p className="text-gray-600 leading-relaxed">{option.description}</p>
                {option.extraDescription && (
                  <p className="text-gray-600 leading-relaxed mt-4">{option.extraDescription}</p>
                )}
              </article>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loanTypes.map((loan) => (
            <article key={loan.title} className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{loan.title}</h2>
              <p className="text-gray-600 leading-relaxed">{loan.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

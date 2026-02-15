// src/app/calculators/page.tsx
import MortgageCalculator from '@/components/calculators/MortgageCalculator'
//import AffordabilityCalculator from '@/components/calculators/AffordabilityCalculator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mortgage Calculators | Financial Tools',
  description: 'Calculate your monthly payments, home affordability, and refinance savings with our free tools.',
}

export default function CalculatorsPage() {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Financial Calculators
          </h1>
          <p className="text-xl text-gray-600">
            Plan your home purchase with confidence
          </p>
        </div>

        <div className="space-y-12">
          <MortgageCalculator />
        
        </div>
      </div>
    </div>
  )
}
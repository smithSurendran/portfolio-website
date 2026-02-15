// src/components/calculators/MortgageCalculator.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { calculateMortgage } from '@/lib/calculators'

const schema = z.object({
  homePrice: z.number().min(1000).max(100000000),
  downPayment: z.number().min(0).max(100000000),
  interestRate: z.number().min(0).max(30),
  loanTerm: z.number().min(1).max(30),
})

type FormData = z.infer<typeof schema>

export default function MortgageCalculator() {
  const [result, setResult] = useState<{
    monthlyPayment: number
    totalPayment: number
    totalInterest: number
  } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      homePrice: 300000,
      downPayment: 60000,
      interestRate: 6.5,
      loanTerm: 30,
    },
  })

  const onSubmit = (data: FormData) => {
    const calculationResult = calculateMortgage(
      data.homePrice,
      data.downPayment,
      data.interestRate,
      data.loanTerm
    )
    setResult(calculationResult)

    // Track calculator usage
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'calculator_use', {
        calculator_type: 'mortgage',
        home_price: data.homePrice,
      })
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Mortgage Payment Calculator
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Home Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Home Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                {...register('homePrice', { valueAsNumber: true })}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            {errors.homePrice && (
              <p className="mt-1 text-sm text-red-600">{errors.homePrice.message}</p>
            )}
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Down Payment
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                {...register('downPayment', { valueAsNumber: true })}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            {errors.downPayment && (
              <p className="mt-1 text-sm text-red-600">{errors.downPayment.message}</p>
            )}
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.01"
                {...register('interestRate', { valueAsNumber: true })}
                className="w-full pr-8 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                %
              </span>
            </div>
            {errors.interestRate && (
              <p className="mt-1 text-sm text-red-600">{errors.interestRate.message}</p>
            )}
          </div>

          {/* Loan Term */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Term
            </label>
            <div className="relative">
              <input
                type="number"
                {...register('loanTerm', { valueAsNumber: true })}
                className="w-full pr-16 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                years
              </span>
            </div>
            {errors.loanTerm && (
              <p className="mt-1 text-sm text-red-600">{errors.loanTerm.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
        >
          Calculate Payment
        </button>
      </form>

      {/* Results */}
      {result && (
        <div className="mt-8 p-6 bg-primary-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Your Estimated Payment
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Monthly Payment:</span>
              <span className="text-2xl font-bold text-primary-600">
                ${result.monthlyPayment.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Total Payment:</span>
              <span className="font-semibold">
                ${result.totalPayment.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Total Interest:</span>
              <span className="font-semibold">
                ${result.totalInterest.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
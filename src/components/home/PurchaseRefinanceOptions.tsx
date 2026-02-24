'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowsRightLeftIcon, ChevronDownIcon, HomeIcon } from '@heroicons/react/24/outline'

const options = [
  {
    id: 'purchase-option',
    buttonLabel: 'Purchase',
    title: 'Home Purchase Loans',
    description:
      "Whether you're buying your first home or upgrading to a new property, personalized mortgage solutions help simplify the purchasing process. From pre-approval to closing, every step is designed to ensure a smooth and informed experience.",
    icon: HomeIcon,
  },
  {
    id: 'refinance-option',
    buttonLabel: 'Refinance',
    title: 'Mortgage Refinance',
    description:
      'Refinancing allows homeowners to replace their current mortgage with a new loan that may offer lower interest rates, improved terms, or access to home equity. Options include rate-and-term refinance, cash-out refinance, and streamline refinance programs for eligible government-backed loans.',
    description2:
      'Refinancing may help reduce monthly payments, shorten loan duration, or consolidate higher-interest debt into a single mortgage payment.',
    icon: ArrowsRightLeftIcon,
  },
]

export default function PurchaseRefinanceOptions() {
  const [openOptionId, setOpenOptionId] = useState<string | null>(null)
  const openOption = options.find((option) => option.id === openOptionId)

  const handleToggle = (id: string) => {
    setOpenOptionId((current) => (current === id ? null : id))
  }

  return (
    <section className="bg-gray-50 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 border border-blue-700 shadow-lg mb-8">
          <div className="grid grid-cols-2 divide-x divide-blue-500/40">
            {options.map((option) => {
              const Icon = option.icon
              const isOpen = openOptionId === option.id

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleToggle(option.id)}
                  aria-expanded={isOpen}
                  aria-controls={option.id}
                  className={`group flex items-center justify-center gap-3 py-5 text-white transition-colors duration-200 ${
                    isOpen ? 'bg-white/15' : 'hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-7 h-7 text-blue-100 group-hover:text-white" />
                  <span className="text-2xl font-bold tracking-tight">{option.buttonLabel}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-blue-100 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {openOption && (
            <motion.article
              key={openOption.id}
              id={openOption.id}
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden bg-white rounded-2xl shadow-lg"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{openOption.title}</h2>
                <p className="text-gray-700 leading-relaxed">{openOption.description}</p>
                {openOption.description2 && (
                  <p className="text-gray-700 leading-relaxed mt-4">{openOption.description2}</p>
                )}
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

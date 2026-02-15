// src/lib/calculators.ts
export function calculateMortgage(
  homePrice: number,
  downPayment: number,
  annualRate: number,
  years: number
) {
  const principal = homePrice - downPayment
  const monthlyRate = annualRate / 100 / 12
  const numberOfPayments = years * 12

  // Monthly payment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

  const totalPayment = monthlyPayment * numberOfPayments
  const totalInterest = totalPayment - principal

  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
  }
}

export function calculateAffordability(
  annualIncome: number,
  monthlyDebts: number,
  downPayment: number,
  interestRate: number,
  loanTerm: number
) {
  // 28% front-end ratio, 36% back-end ratio (conservative)
  const maxMonthlyPayment = (annualIncome / 12) * 0.28
  const maxTotalDebt = (annualIncome / 12) * 0.36
  const availableForMortgage = Math.min(
    maxMonthlyPayment,
    maxTotalDebt - monthlyDebts
  )

  // Reverse mortgage calculation to find max home price
  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = loanTerm * 12

  const maxLoanAmount =
    (availableForMortgage * (Math.pow(1 + monthlyRate, numberOfPayments) - 1)) /
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))

  const maxHomePrice = maxLoanAmount + downPayment

  return {
    maxHomePrice: Math.round(maxHomePrice),
    maxMonthlyPayment: Math.round(availableForMortgage),
    maxLoanAmount: Math.round(maxLoanAmount),
  }
}
import { profileConfig } from '@/config/profile.config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Joseph Cherian',
  description:
    'Have questions about loan options or pre-approval? Get personalized guidance tailored to your financial goals.',
}

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Contact Joseph Cherian
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-gray-600 text-center mb-8 leading-relaxed">
            Have questions about loan options or pre-approval? Get personalized guidance tailored to your financial
            goals. Reach out by phone, email, or social media to begin your mortgage journey with confidence.
          </p>

          <div className="space-y-1 text-center mb-8">
            <p className="text-2xl font-bold text-gray-900">{profileConfig.name}</p>
            <p className="text-gray-700">{profileConfig.title}</p>
            <p className="text-gray-600">{profileConfig.credentials}</p>
            <p className="text-gray-600">
              {profileConfig.company.name} | {profileConfig.company.nmls}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <a href={`tel:${profileConfig.contact.phone}`} className="text-primary-600">
                {profileConfig.contact.phone}
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a href={`mailto:${profileConfig.contact.email}`} className="text-primary-600">
                {profileConfig.contact.email}
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
              <p className="text-gray-600">
                {profileConfig.company.officeAddress || 'Office address coming soon'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

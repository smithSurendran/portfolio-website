import { profileConfig } from '@/config/profile.config'

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Contact Me
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
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
          </div>
        </div>
      </div>
    </div>
  )
}
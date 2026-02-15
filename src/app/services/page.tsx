export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Purchase Loans', 'Refinancing', 'First-Time Buyers'].map((service) => (
            <div key={service} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">{service}</h3>
              <p className="text-gray-600">
                Expert assistance for all your {service.toLowerCase()} needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
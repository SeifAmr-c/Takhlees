export default function BrowseServices({ navigate }) {
  const companies = [
    { name: 'Nile Logistics Co.', rating: 4.8, reviews: 124, location: 'Alexandria Port', services: ['Full Clearance', 'Documentation'], price: 'From EGP 2,500', verified: true },
    { name: 'Alexandria Clearance', rating: 4.6, reviews: 89, location: 'Alexandria Port', services: ['Documentation Only', 'Customs'], price: 'From EGP 1,800', verified: true },
    { name: 'Suez Gateway Ltd.', rating: 4.9, reviews: 156, location: 'Port Said', services: ['Full Clearance', 'Port Handling'], price: 'From EGP 3,000', verified: true },
    { name: 'Red Sea Logistics', rating: 4.5, reviews: 67, location: 'Ain Sokhna', services: ['Full Clearance', 'Storage'], price: 'From EGP 2,800', verified: true },
    { name: 'Delta Customs Services', rating: 4.7, reviews: 98, location: 'Damietta Port', services: ['Documentation', 'Customs'], price: 'From EGP 2,200', verified: true },
    { name: 'Mediterranean Freight', rating: 4.4, reviews: 45, location: 'Alexandria Port', services: ['Port Handling', 'Storage'], price: 'From EGP 1,500', verified: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Takhlees" className="h-10 w-auto" />
            <span className="text-xl font-bold text-gray-900">Takhlees</span>
          </div>
        </div>
        
        <nav className="mt-6">
          <button 
            onClick={() => navigate('user-dashboard')}
            className="w-full flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            My Requests
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-3 text-blue-600 bg-blue-50 border-r-4 border-blue-600 font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Browse Services
          </button>
          <button 
            onClick={() => navigate('submit-application')}
            className="w-full flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Submit Application
          </button>
          <button 
            onClick={() => navigate('track-order')}
            className="w-full flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Track Order
          </button>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <button 
            onClick={() => navigate('landing')}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Browse Clearance Services</h1>
          <p className="text-gray-600">Find verified companies for your port clearance needs</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Port</label>
              <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-blue-500">
                <option>All Ports</option>
                <option>Alexandria Port</option>
                <option>Port Said</option>
                <option>Damietta Port</option>
                <option>Ain Sokhna</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
              <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-blue-500">
                <option>All Services</option>
                <option>Full Clearance</option>
                <option>Documentation Only</option>
                <option>Customs</option>
                <option>Port Handling</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-blue-500">
                <option>Any Price</option>
                <option>Under EGP 2,000</option>
                <option>EGP 2,000 - 5,000</option>
                <option>Over EGP 5,000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
              <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-blue-500">
                <option>Any Rating</option>
                <option>4.5+ Stars</option>
                <option>4.0+ Stars</option>
                <option>3.5+ Stars</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 gap-6">
          {companies.map((company, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                      {company.verified && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium">✓ Verified</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm mt-1">📍 {company.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <span>⭐</span>
                      <span className="font-semibold text-gray-900">{company.rating}</span>
                    </div>
                    <p className="text-gray-500 text-xs">{company.reviews} reviews</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {company.services.map((service, j) => (
                    <span key={j} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">{company.price}</p>
                  <button 
                    onClick={() => navigate('submit-application')}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

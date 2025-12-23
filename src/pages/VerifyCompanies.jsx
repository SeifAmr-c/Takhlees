export default function VerifyCompanies({ navigate }) {
  const companies = [
    { id: 1, name: 'Cairo Clearance Co.', email: 'info@cairoclearance.com', phone: '+20 12 345 6789', port: 'Alexandria', taxNumber: '123-456-789', date: 'Dec 8, 2024', status: 'Pending' },
    { id: 2, name: 'Delta Freight Services', email: 'contact@deltafreight.com', phone: '+20 10 987 6543', port: 'Port Said', taxNumber: '987-654-321', date: 'Dec 7, 2024', status: 'Pending' },
    { id: 3, name: 'Pharaoh Logistics', email: 'admin@pharaoh.com', phone: '+20 11 222 3333', port: 'Damietta', taxNumber: '456-789-123', date: 'Dec 6, 2024', status: 'Pending' },
    { id: 4, name: 'Suez Express Ltd.', email: 'info@suezexpress.com', phone: '+20 12 444 5555', port: 'Ain Sokhna', taxNumber: '789-123-456', date: 'Dec 5, 2024', status: 'Pending' },
    { id: 5, name: 'Mediterranean Cargo', email: 'contact@medcargo.com', phone: '+20 10 666 7777', port: 'Alexandria', taxNumber: '321-654-987', date: 'Dec 4, 2024', status: 'Pending' },
    { id: 6, name: 'Red Sea Handlers', email: 'admin@redsea.com', phone: '+20 11 888 9999', port: 'Ain Sokhna', taxNumber: '654-321-987', date: 'Dec 3, 2024', status: 'Pending' },
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
          <span className="inline-block mt-2 bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
            Admin Portal
          </span>
        </div>
        
        <nav className="mt-6">
          <button 
            onClick={() => navigate('admin-dashboard')}
            className="w-full flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Manage Users
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-3 text-orange-600 bg-orange-50 border-r-4 border-orange-600 font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Companies
            <span className="ml-auto bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">6</span>
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Reports
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
          <h1 className="text-2xl font-bold text-gray-900">Verify Companies</h1>
          <p className="text-gray-600">Review and approve company registration applications</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl">
                ⏳
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">6</p>
                <p className="text-gray-600 text-sm">Pending Review</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl">
                ✓
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">48</p>
                <p className="text-gray-600 text-sm">Verified Companies</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-xl">
                ✗
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-gray-600 text-sm">Rejected This Month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Companies Table */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Pending Verification Requests</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Port</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Tax Number</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Applied</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Documents</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <tr key={company.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">{company.name}</p>
                      <p className="text-gray-500 text-sm">{company.email}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{company.phone}</td>
                    <td className="px-6 py-4 text-gray-700">{company.port}</td>
                    <td className="px-6 py-4 text-gray-700 font-mono text-sm">{company.taxNumber}</td>
                    <td className="px-6 py-4 text-gray-500">{company.date}</td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:underline text-sm font-medium">
                        View License →
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                          Approve
                        </button>
                        <button className="px-4 py-2 bg-red-100 text-red-600 rounded-lg text-sm font-medium hover:bg-red-200">
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

import { useState } from 'react'

export default function CompanyDashboard({ navigate }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const stats = [
    { label: 'New Requests', value: '8', icon: '📥', color: 'bg-green-100 text-green-600' },
    { label: 'In Progress', value: '15', icon: '🔄', color: 'bg-blue-100 text-blue-600' },
    { label: 'Completed', value: '124', icon: '✓', color: 'bg-emerald-100 text-emerald-600' },
    { label: 'Revenue (EGP)', value: '285,000', icon: '💰', color: 'bg-purple-100 text-purple-600' },
  ]

  const requests = [
    { id: 'TKL-2024-089', client: 'Ahmed Mohamed', service: 'Full Clearance', port: 'Alexandria', status: 'New', statusColor: 'bg-green-100 text-green-700', date: 'Dec 8, 2024' },
    { id: 'TKL-2024-088', client: 'Sara Ibrahim', service: 'Documentation', port: 'Alexandria', status: 'In Progress', statusColor: 'bg-blue-100 text-blue-700', date: 'Dec 7, 2024' },
    { id: 'TKL-2024-087', client: 'Mohamed Ali', service: 'Full Clearance', port: 'Port Said', status: 'In Progress', statusColor: 'bg-blue-100 text-blue-700', date: 'Dec 6, 2024' },
    { id: 'TKL-2024-086', client: 'Fatma Hassan', service: 'Customs', port: 'Alexandria', status: 'Completed', statusColor: 'bg-emerald-100 text-emerald-700', date: 'Dec 5, 2024' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/Takhlees/logo.png" alt="Takhlees" className="h-8 w-auto" />
          <div>
            <span className="text-lg font-bold text-gray-900">Takhlees</span>
            <span className="block text-xs text-green-600 font-medium">Company Portal</span>
          </div>
        </div>
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed h-full bg-white border-r border-gray-200 z-50
        w-64 transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 lg:gap-3">
              <img src="/Takhlees/logo.png" alt="Takhlees" className="h-8 lg:h-10 w-auto" />
              <span className="text-lg lg:text-xl font-bold text-gray-900">Takhlees</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded hover:bg-gray-100"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
            Company Portal
          </span>
        </div>

        <nav className="mt-4 lg:mt-6">
          <button className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-green-600 bg-green-50 border-r-4 border-green-600 font-medium text-sm lg:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Dashboard
          </button>
          <button
            onClick={() => { navigate('company-requests'); setSidebarOpen(false); }}
            className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium text-sm lg:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Requests
            <span className="ml-auto bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">8</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium text-sm lg:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Analytics
          </button>
          <button className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium text-sm lg:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Payments
          </button>
          <button className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium text-sm lg:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <button
            onClick={() => { navigate('landing'); setSidebarOpen(false); }}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-medium text-sm lg:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 lg:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Welcome, Nile Logistics! 👋</h1>
              <p className="text-sm sm:text-base text-gray-600">Here's your business overview</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="relative p-2 sm:p-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                NL
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                <div className={`w-10 sm:w-12 h-10 sm:h-12 ${stat.color} rounded-xl flex items-center justify-center text-lg sm:text-xl mb-3 sm:mb-4`}>
                  {stat.icon}
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Requests */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Recent Requests</h2>
              <button
                onClick={() => navigate('company-requests')}
                className="text-green-600 font-medium text-xs sm:text-sm hover:underline"
              >
                View All →
              </button>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden p-4 space-y-4">
              {requests.map((req, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-green-600 text-sm">{req.id}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${req.statusColor}`}>
                      {req.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-900 font-medium mb-1">{req.client}</p>
                  <p className="text-xs text-gray-600 mb-1">{req.service} • {req.port}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-gray-500">{req.date}</span>
                    <button className="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-xs font-medium hover:bg-green-100">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Request ID</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Client</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Port</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((req, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-green-600">{req.id}</td>
                      <td className="px-6 py-4 text-gray-700">{req.client}</td>
                      <td className="px-6 py-4 text-gray-700">{req.service}</td>
                      <td className="px-6 py-4 text-gray-700">{req.port}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${req.statusColor}`}>
                          {req.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{req.date}</td>
                      <td className="px-6 py-4">
                        <button className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
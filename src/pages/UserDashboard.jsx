export default function UserDashboard({ navigate }) {
  const stats = [
    { label: 'Active Requests', value: '3', icon: '🔄', color: 'bg-blue-100 text-blue-600' },
    { label: 'Completed', value: '12', icon: '✓', color: 'bg-green-100 text-green-600' },
    { label: 'Pending Payment', value: '1', icon: '💳', color: 'bg-orange-100 text-orange-600' },
    { label: 'Total Spent (EGP)', value: '45,000', icon: '💰', color: 'bg-purple-100 text-purple-600' },
  ]

  const requests = [
    { id: 'TKL-2024-001', service: 'Full Clearance', company: 'Nile Logistics Co.', status: 'In Progress', statusColor: 'bg-blue-100 text-blue-700', date: 'Dec 5, 2024' },
    { id: 'TKL-2024-002', service: 'Documentation Only', company: 'Alexandria Clearance', status: 'Pending', statusColor: 'bg-yellow-100 text-yellow-700', date: 'Dec 4, 2024' },
    { id: 'TKL-2024-003', service: 'Port Handling', company: 'Suez Gateway Ltd.', status: 'Completed', statusColor: 'bg-green-100 text-green-700', date: 'Dec 1, 2024' },
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
          <button className="w-full flex items-center gap-3 px-6 py-3 text-blue-600 bg-blue-50 border-r-4 border-blue-600 font-medium">
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
          <button 
            onClick={() => navigate('browse-services')}
            className="w-full flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium"
          >
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
          <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profile
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Notifications
            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Ahmed! 👋</h1>
            <p className="text-gray-600">Here's what's happening with your clearance requests</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search requests..."
                className="w-64 pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button className="relative p-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold">
              AM
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-xl mb-4`}>
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Requests */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Requests</h2>
            <a href="#" className="text-blue-600 font-medium text-sm hover:underline">View All →</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Request ID</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Service Type</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-blue-600">{req.id}</td>
                    <td className="px-6 py-4 text-gray-700">{req.service}</td>
                    <td className="px-6 py-4 text-gray-700">{req.company}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${req.statusColor}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{req.date}</td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => navigate('track-order')}
                        className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100"
                      >
                        View
                      </button>
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

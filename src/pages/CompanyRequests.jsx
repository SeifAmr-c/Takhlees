import { useState } from 'react'

export default function CompanyRequests({ navigate }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const requests = [
    { id: 'TKL-2024-089', client: 'Ahmed Mohamed', service: 'Full Clearance', port: 'Alexandria', status: 'New', statusColor: 'bg-green-100 text-green-700', date: 'Dec 8, 2024', value: 'EGP 3,500' },
    { id: 'TKL-2024-088', client: 'Sara Ibrahim', service: 'Documentation', port: 'Alexandria', status: 'New', statusColor: 'bg-green-100 text-green-700', date: 'Dec 8, 2024', value: 'EGP 1,800' },
    { id: 'TKL-2024-087', client: 'Mohamed Ali', service: 'Full Clearance', port: 'Port Said', status: 'In Progress', statusColor: 'bg-blue-100 text-blue-700', date: 'Dec 7, 2024', value: 'EGP 4,200' },
    { id: 'TKL-2024-086', client: 'Fatma Hassan', service: 'Customs', port: 'Alexandria', status: 'In Progress', statusColor: 'bg-blue-100 text-blue-700', date: 'Dec 6, 2024', value: 'EGP 2,500' },
    { id: 'TKL-2024-085', client: 'Omar Youssef', service: 'Full Clearance', port: 'Alexandria', status: 'Completed', statusColor: 'bg-emerald-100 text-emerald-700', date: 'Dec 5, 2024', value: 'EGP 3,000' },
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
          <button
            onClick={() => { navigate('company-dashboard'); setSidebarOpen(false); }}
            className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium text-sm lg:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-green-600 bg-green-50 border-r-4 border-green-600 font-medium text-sm lg:text-base">
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
          <div className="mb-6 lg:mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Incoming Requests</h1>
            <p className="text-sm sm:text-base text-gray-600">Manage and respond to clearance requests</p>
          </div>

          {/* Filters */}
          <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
              <div className="flex gap-2 sm:gap-4">
                <select className="flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-200 rounded-lg focus:border-green-500 text-sm">
                  <option>All Status</option>
                  <option>New</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
                <select className="flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-200 rounded-lg focus:border-green-500 text-sm">
                  <option>All Services</option>
                  <option>Full Clearance</option>
                  <option>Documentation</option>
                  <option>Customs</option>
                </select>
              </div>
              <div className="sm:flex-1"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search requests..."
                  className="w-full sm:w-64 pl-9 sm:pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-green-500 text-sm"
                />
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Requests */}
          <div className="bg-white rounded-xl shadow-sm">
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
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">{req.date}</p>
                      <p className="text-sm font-semibold text-gray-900">{req.value}</p>
                    </div>
                    <div className="flex gap-2">
                      {req.status === 'New' && (
                        <>
                          <button className="px-2.5 py-1.5 bg-green-600 text-white rounded-lg text-xs font-medium hover:bg-green-700">
                            Accept
                          </button>
                          <button className="px-2.5 py-1.5 bg-red-100 text-red-600 rounded-lg text-xs font-medium hover:bg-red-200">
                            Reject
                          </button>
                        </>
                      )}
                      {req.status === 'In Progress' && (
                        <button className="px-2.5 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700">
                          Update
                        </button>
                      )}
                      {req.status === 'Completed' && (
                        <button className="px-2.5 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-200">
                          View
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Request ID</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Client</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Port</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Value</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((req, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-green-600">{req.id}</td>
                      <td className="px-6 py-4 text-gray-700">{req.client}</td>
                      <td className="px-6 py-4 text-gray-700">{req.service}</td>
                      <td className="px-6 py-4 text-gray-700">{req.port}</td>
                      <td className="px-6 py-4 font-medium text-gray-900">{req.value}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${req.statusColor}`}>
                          {req.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{req.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {req.status === 'New' && (
                            <>
                              <button className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                                Accept
                              </button>
                              <button className="px-3 py-1.5 bg-red-100 text-red-600 rounded-lg text-sm font-medium hover:bg-red-200">
                                Reject
                              </button>
                            </>
                          )}
                          {req.status === 'In Progress' && (
                            <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                              Update Status
                            </button>
                          )}
                          {req.status === 'Completed' && (
                            <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200">
                              View Details
                            </button>
                          )}
                        </div>
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
import { useState } from 'react'

export default function TrackOrder({ navigate }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const timeline = [
    { status: 'Application Submitted', date: 'Dec 5, 2024 - 10:30 AM', completed: true },
    { status: 'Application Accepted', date: 'Dec 5, 2024 - 2:15 PM', completed: true },
    { status: 'Document Collection', date: 'Dec 6, 2024 - 9:00 AM', completed: true },
    { status: 'Customs Processing', date: 'Dec 7, 2024 - 11:45 AM', completed: true, current: true },
    { status: 'Port Handling', date: 'Pending', completed: false },
    { status: 'Ready for Delivery', date: 'Pending', completed: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/Takhlees/logo.png" alt="Takhlees" className="h-8 w-auto" />
          <span className="text-lg font-bold text-gray-900">Takhlees</span>
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
        </div>

        <nav className="mt-4 lg:mt-6">
          <button
            onClick={() => { navigate('user-dashboard'); setSidebarOpen(false); }}
            className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium text-sm lg:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium text-sm lg:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            My Requests
          </button>
          <button
            onClick={() => { navigate('browse-services'); setSidebarOpen(false); }}
            className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-gray-600 hover:bg-gray-50 font-medium text-sm lg:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Browse Services
          </button>
          <button className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-blue-600 bg-blue-50 border-r-4 border-blue-600 font-medium text-sm lg:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Track Order
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
            <button
              onClick={() => navigate('user-dashboard')}
              className="text-blue-600 hover:underline mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base"
            >
              ← Back to Dashboard
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Track Order</h1>
            <p className="text-sm sm:text-base text-gray-600">Request ID: <span className="font-semibold text-blue-600">#TKL-2024-001</span></p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Current Status */}
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
                  <div>
                    <p className="text-gray-500 text-xs sm:text-sm">Current Status</p>
                    <p className="text-xl sm:text-2xl font-bold text-blue-600">Customs Processing</p>
                  </div>
                  <div className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm w-fit">
                    In Progress
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                  <div className="bg-blue-600 h-2 sm:h-3 rounded-full" style={{ width: '66%' }}></div>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm mt-2">Estimated completion: Dec 9, 2024</p>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Status Timeline</h2>
                <div className="space-y-4 sm:space-y-6">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full flex-shrink-0 ${
                          item.current ? 'bg-blue-600 ring-4 ring-blue-100' :
                          item.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`}></div>
                        {i < timeline.length - 1 && (
                          <div className={`w-0.5 h-full min-h-[40px] sm:min-h-[50px] ${
                            item.completed ? 'bg-green-500' : 'bg-gray-200'
                          }`}></div>
                        )}
                      </div>
                      <div className="pb-4 sm:pb-6">
                        <p className={`font-medium text-sm sm:text-base ${item.current ? 'text-blue-600' : item.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                          {item.status}
                          {item.current && <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Current</span>}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Order Summary</h2>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-gray-500 text-xs sm:text-sm">Service Type</p>
                    <p className="font-medium text-sm sm:text-base">Full Clearance</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs sm:text-sm">Port</p>
                    <p className="font-medium text-sm sm:text-base">Alexandria Port</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs sm:text-sm">Company</p>
                    <p className="font-medium text-sm sm:text-base">Nile Logistics Co.</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs sm:text-sm">Submission Date</p>
                    <p className="font-medium text-sm sm:text-base">Dec 5, 2024</p>
                  </div>
                  <div className="pt-3 sm:pt-4 border-t">
                    <p className="text-gray-500 text-xs sm:text-sm">Total Amount</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">EGP 2,500</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Company Contact</h2>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm sm:text-base">
                    NL
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Nile Logistics Co.</p>
                    <p className="text-gray-500 text-xs sm:text-sm">⭐ 4.8 Rating</p>
                  </div>
                </div>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <p className="text-gray-600">📞 +20 12 345 6789</p>
                  <p className="text-gray-600">✉️ contact@nilelogistics.com</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Documents</h2>
                <div className="space-y-2 sm:space-y-3">
                  {['Bill of Lading.pdf', 'Commercial Invoice.pdf', 'Packing List.pdf'].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <svg className="w-4 sm:w-5 h-4 sm:h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm font-medium truncate">{doc}</span>
                      </div>
                      <button className="text-blue-600 text-xs sm:text-sm hover:underline flex-shrink-0 ml-2">View</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
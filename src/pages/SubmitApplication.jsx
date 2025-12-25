import { useState } from 'react'

export default function SubmitApplication({ navigate }) {
  const [step, setStep] = useState(1)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const steps = ['Shipment Details', 'Select Company', 'Upload Documents', 'Review & Submit']

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Submit Application
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
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Submit Clearance Application</h1>
              <p className="text-sm sm:text-base text-gray-600">Fill in the details below to request port clearance services</p>
            </div>

            {/* Progress Steps - Mobile */}
            <div className="lg:hidden mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600">Step {step} of 4</span>
                <span className="text-sm text-gray-500">{steps[step - 1]}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Progress Steps - Desktop */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              {steps.map((label, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step > i + 1 ? 'bg-green-500 text-white' :
                    step === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step > i + 1 ? '✓' : i + 1}
                  </div>
                  <span className={`ml-3 font-medium ${step === i + 1 ? 'text-blue-600' : 'text-gray-500'}`}>
                    {label}
                  </span>
                  {i < 3 && <div className={`w-16 h-1 mx-4 rounded ${step > i + 1 ? 'bg-green-500' : 'bg-gray-200'}`}></div>}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
              {step === 1 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Shipment Details</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Port of Entry</label>
                      <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:border-blue-500 text-sm sm:text-base">
                        <option>Select Port</option>
                        <option>Alexandria Port</option>
                        <option>Port Said</option>
                        <option>Damietta Port</option>
                        <option>Ain Sokhna</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Service Type</label>
                      <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:border-blue-500 text-sm sm:text-base">
                        <option>Select Service</option>
                        <option>Full Clearance</option>
                        <option>Documentation Only</option>
                        <option>Customs Clearance</option>
                        <option>Port Handling</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Shipment Description</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your shipment (type of goods, quantity, etc.)"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:border-blue-500 text-sm sm:text-base"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Estimated Value (EGP)</label>
                      <input
                        type="text"
                        placeholder="e.g., 50,000"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:border-blue-500 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Expected Arrival Date</label>
                      <input
                        type="date"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:border-blue-500 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Delivery Address</label>
                    <input
                      type="text"
                      placeholder="Enter delivery address"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:border-blue-500 text-sm sm:text-base"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Select Clearance Company</h2>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { name: 'Nile Logistics Co.', rating: 4.8, price: 'EGP 2,500', time: '3-5 days' },
                      { name: 'Alexandria Clearance', rating: 4.6, price: 'EGP 2,200', time: '4-6 days' },
                      { name: 'Suez Gateway Ltd.', rating: 4.9, price: 'EGP 3,000', time: '2-4 days' },
                    ].map((company, i) => (
                      <label key={i} className="flex flex-col sm:flex-row sm:items-center p-3 sm:p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-blue-500 transition">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <input type="radio" name="company" className="w-5 h-5 text-blue-600" />
                          <div className="ml-3 sm:ml-4 flex-1">
                            <p className="font-semibold text-gray-900 text-sm sm:text-base">{company.name}</p>
                            <p className="text-gray-500 text-xs sm:text-sm">⭐ {company.rating} • Est. {company.time}</p>
                          </div>
                        </div>
                        <p className="font-bold text-blue-600 text-sm sm:text-base ml-8 sm:ml-0">{company.price}</p>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Upload Documents</h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 sm:p-12 text-center">
                    <svg className="w-10 sm:w-12 h-10 sm:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-600 mb-2 text-sm sm:text-base">Drag and drop your files here, or</p>
                    <button className="text-blue-600 font-semibold hover:underline text-sm sm:text-base">browse files</button>
                    <p className="text-gray-400 text-xs sm:text-sm mt-2">PDF, JPG, PNG up to 10MB each</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-700 text-sm sm:text-base">Required Documents:</p>
                    <ul className="text-gray-600 text-xs sm:text-sm space-y-1">
                      <li>• Bill of Lading</li>
                      <li>• Commercial Invoice</li>
                      <li>• Packing List</li>
                      <li>• Certificate of Origin (if applicable)</li>
                    </ul>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Review & Submit</h2>
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600">Port</span>
                      <span className="font-medium">Alexandria Port</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600">Service</span>
                      <span className="font-medium">Full Clearance</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600">Company</span>
                      <span className="font-medium">Nile Logistics Co.</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600">Documents</span>
                      <span className="font-medium">3 files uploaded</span>
                    </div>
                    <div className="border-t pt-3 sm:pt-4 flex justify-between">
                      <span className="font-semibold text-sm sm:text-base">Total Estimated Cost</span>
                      <span className="font-bold text-blue-600 text-lg sm:text-xl">EGP 2,500</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 text-sm sm:text-base"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                {step < 4 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 text-sm sm:text-base"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('user-dashboard')}
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 text-sm sm:text-base"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
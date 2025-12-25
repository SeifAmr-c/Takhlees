export default function CompanyRegister({ navigate }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Hidden on Mobile */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 to-green-900 p-8 xl:p-12 flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <img src="/Takhlees/logo.png" alt="Takhlees" className="h-12 xl:h-14 w-auto invert" />
            <span className="text-2xl xl:text-3xl font-bold text-white">Takhlees</span>
          </div>
          <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            🏢 Company Portal
          </span>
          <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
            Join Egypt's Leading Platform
          </h1>
          <p className="text-lg xl:text-xl text-green-200 leading-relaxed">
            Register your clearance company and connect with thousands of importers across Egyptian ports.
          </p>
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-4 text-green-200">
              <svg className="w-5 xl:w-6 h-5 xl:h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm xl:text-base">Get verified badge</span>
            </div>
            <div className="flex items-center gap-4 text-green-200">
              <svg className="w-5 xl:w-6 h-5 xl:h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm xl:text-base">Receive service requests</span>
            </div>
            <div className="flex items-center gap-4 text-green-200">
              <svg className="w-5 xl:w-6 h-5 xl:h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm xl:text-base">Grow your business</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-white overflow-y-auto min-h-screen lg:min-h-0">
        <div className="w-full max-w-md py-6 sm:py-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex flex-col items-center justify-center gap-2 mb-6 sm:mb-8">
            <img src="/Takhlees/logo.png" alt="Takhlees" className="h-10 sm:h-12 w-auto" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Takhlees</span>
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mt-2">
              🏢 Company Portal
            </span>
          </div>

          <div className="mb-6 sm:mb-8 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-2">Register Company</h2>
            <p className="text-sm sm:text-base text-gray-600">Fill in your company details to get started</p>
          </div>

          <form className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Company Email</label>
              <input
                type="email"
                placeholder="company@example.com"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+20 XX XXXX XXXX"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Tax Number</label>
              <input
                type="text"
                placeholder="Enter tax registration number"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Operating Ports</label>
              <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition text-sm sm:text-base">
                <option>Select primary port</option>
                <option>Alexandria Port</option>
                <option>Port Said</option>
                <option>Damietta Port</option>
                <option>Ain Sokhna</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">License Document</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6 text-center">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-600 text-xs sm:text-sm">Upload license document</p>
                <p className="text-gray-400 text-xs">PDF, JPG up to 5MB</p>
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Password</label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition text-sm sm:text-base"
              />
            </div>

            <div className="flex items-start gap-2 sm:gap-3">
              <input type="checkbox" className="w-4 h-4 mt-0.5 sm:mt-1 text-green-600 rounded border-gray-300" />
              <span className="text-xs sm:text-sm text-gray-600">
                I agree to the <a href="#" className="text-green-600 hover:underline">Terms of Service</a> and <a href="#" className="text-green-600 hover:underline">Partner Agreement</a>
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate('company-dashboard')}
              className="w-full py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition text-sm sm:text-base"
            >
              Submit Registration
            </button>

            <p className="text-center text-gray-500 text-xs sm:text-sm">
              Your registration will be reviewed by our team within 24-48 hours.
            </p>
          </form>

          <p className="mt-6 sm:mt-8 text-center text-sm sm:text-base text-gray-600">
            Already have an account?{' '}
            <button onClick={() => navigate('company-login')} className="text-green-600 font-semibold hover:underline">
              Sign In
            </button>
          </p>

          <p className="mt-3 sm:mt-4 text-center">
            <button onClick={() => navigate('landing')} className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm">
              ← Back to Home
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
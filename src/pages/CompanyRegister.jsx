export default function CompanyRegister({ navigate }) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 to-green-900 p-12 flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <img src="/logo.png" alt="Takhlees" className="h-14 w-auto invert" />
            <span className="text-3xl font-bold text-white">Takhlees</span>
          </div>
          <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            🏢 Company Portal
          </span>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Join Egypt's Leading Platform
          </h1>
          <p className="text-xl text-green-200 leading-relaxed">
            Register your clearance company and connect with thousands of importers across Egyptian ports.
          </p>
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-4 text-green-200">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Get verified badge</span>
            </div>
            <div className="flex items-center gap-4 text-green-200">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Receive service requests</span>
            </div>
            <div className="flex items-center gap-4 text-green-200">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Grow your business</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md py-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <img src="/logo.png" alt="Takhlees" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-gray-900">Takhlees</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-2">Register Company</h2>
            <p className="text-gray-600">Fill in your company details to get started</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Email</label>
              <input
                type="email"
                placeholder="company@example.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+20 XX XXXX XXXX"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tax Number</label>
              <input
                type="text"
                placeholder="Enter tax registration number"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Operating Ports</label>
              <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition">
                <option>Select primary port</option>
                <option>Alexandria Port</option>
                <option>Port Said</option>
                <option>Damietta Port</option>
                <option>Ain Sokhna</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">License Document</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-600 text-sm">Upload license document</p>
                <p className="text-gray-400 text-xs">PDF, JPG up to 5MB</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition"
              />
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" className="w-4 h-4 mt-1 text-green-600 rounded border-gray-300" />
              <span className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-green-600 hover:underline">Terms of Service</a> and <a href="#" className="text-green-600 hover:underline">Partner Agreement</a>
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate('company-dashboard')}
              className="w-full py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition"
            >
              Submit Registration
            </button>

            <p className="text-center text-gray-500 text-sm">
              Your registration will be reviewed by our team within 24-48 hours.
            </p>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{' '}
            <button onClick={() => navigate('company-login')} className="text-green-600 font-semibold hover:underline">
              Sign In
            </button>
          </p>

          <p className="mt-4 text-center">
            <button onClick={() => navigate('landing')} className="text-gray-500 hover:text-gray-700 text-sm">
              ← Back to Home
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

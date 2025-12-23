export default function CompanyLogin({ navigate }) {
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
            Manage Your Clearance Business
          </h1>
          <p className="text-xl text-green-200 leading-relaxed">
            Access your dashboard to manage requests, track orders, and grow your business on Egypt's leading port clearance platform.
          </p>
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-4 text-green-200">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Manage incoming service requests</span>
            </div>
            <div className="flex items-center gap-4 text-green-200">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Track revenue and analytics</span>
            </div>
            <div className="flex items-center gap-4 text-green-200">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Connect with importers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <img src="/logo.png" alt="Takhlees" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-gray-900">Takhlees</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-2">Company Sign In</h2>
            <p className="text-gray-600">Access your company dashboard</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="company@example.com"
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-green-600 rounded border-gray-300" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-green-600 font-semibold hover:underline">Forgot Password?</a>
            </div>

            <button
              type="button"
              onClick={() => navigate('company-dashboard')}
              className="w-full py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">New to Takhlees?</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-gray-600">
            Want to list your company?{' '}
            <button onClick={() => navigate('company-register')} className="text-green-600 font-semibold hover:underline">
              Register Here
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

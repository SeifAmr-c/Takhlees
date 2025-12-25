export default function UserRegister({ navigate }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Hidden on Mobile */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 to-blue-900 p-8 xl:p-12 flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <img src="/Takhlees/logo.png" alt="Takhlees" className="h-12 xl:h-14 w-auto invert" />
            <span className="text-2xl xl:text-3xl font-bold text-white">Takhlees</span>
          </div>
          <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
            Start Your Journey Today
          </h1>
          <p className="text-lg xl:text-xl text-blue-200 leading-relaxed">
            Join thousands of importers who trust Takhlees for their port clearance needs.
          </p>
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-4 text-blue-200">
              <svg className="w-5 xl:w-6 h-5 xl:h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm xl:text-base">Access to verified clearance companies</span>
            </div>
            <div className="flex items-center gap-4 text-blue-200">
              <svg className="w-5 xl:w-6 h-5 xl:h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm xl:text-base">Real-time shipment tracking</span>
            </div>
            <div className="flex items-center gap-4 text-blue-200">
              <svg className="w-5 xl:w-6 h-5 xl:h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm xl:text-base">Secure payment processing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-white overflow-y-auto min-h-screen lg:min-h-0">
        <div className="w-full max-w-md py-6 sm:py-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <img src="/Takhlees/logo.png" alt="Takhlees" className="h-10 sm:h-12 w-auto" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Takhlees</span>
          </div>

          <div className="mb-6 sm:mb-8 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
            <p className="text-sm sm:text-base text-gray-600">Fill in your details to get started</p>
          </div>

          <form className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Ahmed"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Mohamed"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Email Address</label>
              <input
                type="email"
                placeholder="ahmed@example.com"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+20 1XX XXX XXXX"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">National ID</label>
              <input
                type="text"
                placeholder="Enter your National ID"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Password</label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition text-sm sm:text-base"
              />
            </div>

            <div className="flex items-start gap-2 sm:gap-3">
              <input type="checkbox" className="w-4 h-4 mt-0.5 sm:mt-1 text-blue-600 rounded border-gray-300" />
              <span className="text-xs sm:text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate('user-dashboard')}
              className="w-full py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 sm:mt-8 text-center text-sm sm:text-base text-gray-600">
            Already have an account?{' '}
            <button onClick={() => navigate('user-login')} className="text-blue-600 font-semibold hover:underline">
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
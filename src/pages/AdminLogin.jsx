export default function AdminLogin({ navigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <img src="/Takhlees/logo.png" alt="Takhlees" className="h-10 sm:h-12 w-auto" />
          <span className="text-xl sm:text-2xl font-bold text-gray-900">Takhlees</span>
        </div>

        {/* Admin Badge */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="inline-block bg-orange-100 text-orange-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
            🔐 Admin Portal
          </span>
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Administrator Access</h2>
          <p className="text-sm sm:text-base text-gray-600">Sign in with your admin credentials</p>
        </div>

        <form className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Admin Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="admin@takhlees.com"
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-0 transition text-sm sm:text-base"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                placeholder="Enter admin password"
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-0 transition text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 text-orange-600 rounded border-gray-300" />
            <span className="text-xs sm:text-sm text-gray-600">Remember this device</span>
          </div>

          <button
            type="button"
            onClick={() => navigate('admin-dashboard')}
            className="w-full py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition shadow-lg text-sm sm:text-base"
          >
            Sign In to Admin Panel
          </button>
        </form>

        {/* Security Note */}
        <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-50 rounded-xl flex items-start gap-2 sm:gap-3">
          <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <p className="text-gray-600 text-xs sm:text-sm">
            Secure admin access. All activities are logged and monitored for security purposes.
          </p>
        </div>

        <p className="mt-4 sm:mt-6 text-center">
          <button onClick={() => navigate('landing')} className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm">
            ← Back to main website
          </button>
        </p>
      </div>
    </div>
  )
}
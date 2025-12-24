import { useState } from 'react'

export default function Landing({ navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src="/Takhlees/logo.png" alt="Takhlees" className="h-8 sm:h-10 w-auto" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Takhlees</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Companies</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => navigate('user-login')}
              className="px-3 sm:px-5 py-2 sm:py-2.5 text-blue-600 font-semibold border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition text-sm sm:text-base"
            >
              Login
            </button>
            <button
              onClick={() => navigate('user-register')}
              className="px-3 sm:px-5 py-2 sm:py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white border-t px-4 py-4">
            <nav className="flex flex-col gap-3 mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium py-2">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium py-2">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium py-2">Companies</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium py-2">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium py-2">Contact</a>
            </nav>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => { navigate('user-login'); setMenuOpen(false); }}
                className="w-full px-4 py-2.5 text-blue-600 font-semibold border-2 border-blue-600 rounded-lg"
              >
                Login
              </button>
              <button
                onClick={() => { navigate('user-register'); setMenuOpen(false); }}
                className="w-full px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg"
              >
                Register
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="inline-block bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              🚢 Egypt's #1 Port Clearance Platform
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Clear Your Imports.{' '}
              <span className="text-blue-600">Faster. Easier.</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Connect with verified clearance companies across Egyptian ports. Track your shipments in real-time and manage everything in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => navigate('user-register')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-base sm:text-lg"
              >
                Get Started Free
              </button>
              <button
                onClick={() => navigate('browse-services')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition text-base sm:text-lg"
              >
                Browse Companies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Takhlees?</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We simplify the complex world of port clearance with trusted partners and transparent processes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-7 sm:w-8 h-7 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Verified Companies</h3>
              <p className="text-sm sm:text-base text-gray-600">All clearance companies are vetted and verified for quality and reliability.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-7 sm:w-8 h-7 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Real-Time Tracking</h3>
              <p className="text-sm sm:text-base text-gray-600">Monitor your clearance progress 24/7 with live status updates.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl text-center hover:shadow-lg transition sm:col-span-2 lg:col-span-1">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-7 sm:w-8 h-7 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Secure Payments</h3>
              <p className="text-sm sm:text-base text-gray-600">Safe and transparent payment processing with full transaction history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">How It Works</h2>
            <p className="text-base sm:text-xl text-gray-400">Get your imports cleared in four simple steps</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { num: '1', title: 'Register', desc: 'Create your free account' },
              { num: '2', title: 'Submit Request', desc: 'Enter shipment details' },
              { num: '3', title: 'Get Quotes', desc: 'Compare company offers' },
              { num: '4', title: 'Track Progress', desc: 'Monitor in real-time' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 sm:w-20 h-14 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6 text-xl sm:text-3xl font-bold text-white">
                  {step.num}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-xs sm:text-base text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Ports We Cover</h2>
            <p className="text-base sm:text-xl text-gray-600">Clearance services available at all major Egyptian ports</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'Alexandria Port', desc: "Egypt's largest seaport" },
              { name: 'Port Said', desc: 'Suez Canal gateway' },
              { name: 'Damietta Port', desc: 'Mediterranean hub' },
              { name: 'Ain Sokhna', desc: 'Red Sea terminal' },
            ].map((port, i) => (
              <div key={i} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-20 sm:h-32 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <svg className="w-8 sm:w-12 h-8 sm:h-12 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1">{port.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{port.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <img src="/Takhlees/logo.png" alt="Takhlees" className="h-8 sm:h-10 w-auto invert" />
                <span className="text-xl sm:text-2xl font-bold text-white">Takhlees</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                Egypt's leading platform connecting importers with verified port clearance companies.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Companies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">For Business</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><button onClick={() => navigate('company-login')} className="text-gray-400 hover:text-white text-sm sm:text-base">Company Portal</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Partner With Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
            <p className="text-gray-500 text-sm sm:text-base">© 2024 Takhlees. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
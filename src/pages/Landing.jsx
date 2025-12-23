export default function Landing({ navigate }) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Takhlees" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-gray-900">Takhlees</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Companies</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('user-login')}
              className="px-5 py-2.5 text-blue-600 font-semibold border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Login
            </button>
            <button 
              onClick={() => navigate('user-register')}
              className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚢 Egypt's #1 Port Clearance Platform
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Clear Your Imports.{' '}
              <span className="text-blue-600">Faster. Easier.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with verified clearance companies across Egyptian ports. Track your shipments in real-time and manage everything in one place.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('user-register')}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-lg"
              >
                Get Started Free
              </button>
              <button 
                onClick={() => navigate('browse-services')}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition text-lg"
              >
                Browse Companies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Takhlees?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We simplify the complex world of port clearance with trusted partners and transparent processes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Companies</h3>
              <p className="text-gray-600">All clearance companies are vetted and verified for quality and reliability.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Tracking</h3>
              <p className="text-gray-600">Monitor your clearance progress 24/7 with live status updates.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Payments</h3>
              <p className="text-gray-600">Safe and transparent payment processing with full transaction history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Get your imports cleared in four simple steps</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Register', desc: 'Create your free account' },
              { num: '2', title: 'Submit Request', desc: 'Enter shipment details' },
              { num: '3', title: 'Get Quotes', desc: 'Compare company offers' },
              { num: '4', title: 'Track Progress', desc: 'Monitor in real-time' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ports We Cover</h2>
            <p className="text-xl text-gray-600">Clearance services available at all major Egyptian ports</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Alexandria Port', desc: "Egypt's largest seaport" },
              { name: 'Port Said', desc: 'Suez Canal gateway' },
              { name: 'Damietta Port', desc: 'Mediterranean hub' },
              { name: 'Ain Sokhna', desc: 'Red Sea terminal' },
            ].map((port, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-32 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{port.name}</h3>
                  <p className="text-gray-600 text-sm">{port.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="Takhlees" className="h-10 w-auto invert" />
                <span className="text-2xl font-bold text-white">Takhlees</span>
              </div>
              <p className="text-gray-400">
                Egypt's leading platform connecting importers with verified port clearance companies.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Companies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Business</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('company-login')} className="text-gray-400 hover:text-white">Company Portal</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Partner With Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">© 2024 Takhlees. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

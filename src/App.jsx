import { useState } from 'react'
import Landing from './pages/Landing'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import UserDashboard from './pages/UserDashboard'
import CompanyLogin from './pages/CompanyLogin'
import CompanyRegister from './pages/CompanyRegister'
import CompanyDashboard from './pages/CompanyDashboard'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import BrowseServices from './pages/BrowseServices'
import SubmitApplication from './pages/SubmitApplication'
import TrackOrder from './pages/TrackOrder'
import CompanyRequests from './pages/CompanyRequests'
import VerifyCompanies from './pages/VerifyCompanies'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const navigate = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing navigate={navigate} />
      case 'user-login':
        return <UserLogin navigate={navigate} />
      case 'user-register':
        return <UserRegister navigate={navigate} />
      case 'user-dashboard':
        return <UserDashboard navigate={navigate} />
      case 'browse-services':
        return <BrowseServices navigate={navigate} />
      case 'submit-application':
        return <SubmitApplication navigate={navigate} />
      case 'track-order':
        return <TrackOrder navigate={navigate} />
      case 'company-login':
        return <CompanyLogin navigate={navigate} />
      case 'company-register':
        return <CompanyRegister navigate={navigate} />
      case 'company-dashboard':
        return <CompanyDashboard navigate={navigate} />
      case 'company-requests':
        return <CompanyRequests navigate={navigate} />
      case 'admin-login':
        return <AdminLogin navigate={navigate} />
      case 'admin-dashboard':
        return <AdminDashboard navigate={navigate} />
      case 'verify-companies':
        return <VerifyCompanies navigate={navigate} />
      default:
        return <Landing navigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
    </div>
  )
}

export default App

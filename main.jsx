import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css'

import SplashLoading from './pages/SplashLoading';
import MainWeb from './pages/MainWeb';
import NaturalFarming from './pages/companies/NaturalFarming';
import NaturalProducts from './pages/companies/NaturalProducts';
import NFPlantationHome from './pages/nfplantation/Home';
import NFPlantationAbout from './pages/nfplantation/About';
import NFPlantationServices from './pages/nfplantation/Services';
import NFPlantationInvestment from './pages/nfplantation/InvestmentPlans';
import NFPlantationContact from './pages/nfplantation/Contact';

import NFPartners from './pages/companies/natural-farming/Partners';
import NFMembership from './pages/companies/natural-farming/Membership';
import NFUserDemand from './pages/companies/natural-farming/UserDemand';
import NFContactPage from './pages/companies/natural-farming/Contact';

import FarmingLogin from './pages/auth/farming/Login';
import FarmingRegister from './pages/auth/farming/Register';
import ProductsLogin from './pages/auth/products/Login';
import ProductsRegister from './pages/auth/products/Register';
import PlantationLogin from './pages/auth/nfplantation/Login';
import PlantationRegister from './pages/auth/nfplantation/Register';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<SplashLoading />} />
            <Route path="/home" element={<MainWeb />} />
            <Route path="/company/natural-farming" element={<NaturalFarming />} />
            <Route path="/company/natural-farming/partners" element={<NFPartners />} />
            <Route path="/company/natural-farming/membership" element={<NFMembership />} />
            <Route path="/company/natural-farming/user-demand" element={<NFUserDemand />} />
            <Route path="/company/natural-farming/contact" element={<NFContactPage />} />
            <Route path="/company/natural-products" element={<NaturalProducts />} />

            {/* NF Plantation Routes */}
            <Route path="/company/nf-plantation" element={<NFPlantationHome />} />
            <Route path="/company/nf-plantation/about" element={<NFPlantationAbout />} />
            <Route path="/company/nf-plantation/services" element={<NFPlantationServices />} />
            <Route path="/company/nf-plantation/investment-plans" element={<NFPlantationInvestment />} />
            <Route path="/company/nf-plantation/contact" element={<NFPlantationContact />} />

            {/* Alias for Finance link in MainWeb */}
            <Route path="/company/finance" element={<NFPlantationHome />} />

            {/* Auth Routes - Farming */}
            <Route path="/company/natural-farming/login" element={<FarmingLogin />} />
            <Route path="/company/natural-farming/register" element={<FarmingRegister />} />

            {/* Auth Routes - Products */}
            <Route path="/company/natural-products/login" element={<ProductsLogin />} />
            <Route path="/company/natural-products/register" element={<ProductsRegister />} />

            {/* Auth Routes - NF Plantation (Finance) */}
            <Route path="/company/nf-plantation/login" element={<PlantationLogin />} />
            <Route path="/company/nf-plantation/register" element={<PlantationRegister />} />
            {/* Aliases for Finance */}
            <Route path="/company/finance/login" element={<PlantationLogin />} />
            <Route path="/company/finance/register" element={<PlantationRegister />} />

            {/* Fallback for development */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center text-center">
                <div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                  <a href="/" className="text-blue-600 underline">Go Home</a>
                </div>
              </div>
            } />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ErrorBoundary>
  </StrictMode>,
)

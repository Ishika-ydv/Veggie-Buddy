import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LayoutDesignerPage from './pages/LayoutDesignerPage';
import PlantInfoPage from './pages/PlantInfoPage';
import GardeningTipsPage from './pages/GardeningTipsPage';
import CommunityPage from './pages/CommunityPage';
import BlogPage from './pages/BlogPage';
import FAQsPage from './pages/FAQsPage';
import TutorialsPage from './pages/TutorialsPage';
import ContactSupportPage from './pages/ContactSupportPage';
import { WeatherProvider } from './context/WeatherContext';
import DashboardPage from './pages/DashboardPage';
import SignInPage from './pages/SignInPage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <WeatherProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="layout-designer" element={<LayoutDesignerPage />} />
              <Route path="plants" element={<PlantInfoPage />} />
              <Route path="tips" element={<GardeningTipsPage />} />
              <Route path="community" element={<CommunityPage />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="faqs" element={<FAQsPage />} />
              <Route path="tutorials" element={<TutorialsPage />} />
              <Route path="contact" element={<ContactSupportPage />} />
              <Route path="signin" element={<SignInPage />} />
            </Route>
          </Routes>
        </Router>
      </WeatherProvider>
    </UserProvider>
  );
}

export default App;
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
import { useWeather } from '../../context/WeatherContext';

const Layout = () => {
  const { weather } = useWeather();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {weather && (
          <div className="bg-green-50 py-2 px-4 text-sm text-green-800 flex justify-center items-center border-b border-green-200">
            <span>{weather.location}: {weather.condition}, {weather.temperature}°C</span>
            {weather.condition === 'Sunny' && (
              <span className="ml-2">Great day for gardening!</span>
            )}
            {weather.condition === 'Rainy' && (
              <span className="ml-2">No need to water your plants today!</span>
            )}
          </div>
        )}
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Layout;
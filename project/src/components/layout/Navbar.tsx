import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sprout, Menu, X } from 'lucide-react';
import { useUser } from '../../context/UserContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mainNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/layout-designer', label: 'Layout Designer' },
    { to: '/plants', label: 'Plants' },
    { to: '/tips', label: 'Gardening Tips' },
    { to: '/community', label: 'Community' },
  ];

  const supportNavLinks = [
    { to: '/blog', label: 'Blog' },
    { to: '/tutorials', label: 'Tutorials' },
    { to: '/faqs', label: 'FAQs' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Veggie Buddy</span>
            </NavLink>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-green-700 bg-green-50'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="h-6 w-px bg-gray-200 mx-2" />
            {supportNavLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-green-700 bg-green-50'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {user ? (
              <span className="ml-4 px-4 py-2 rounded-md bg-green-100 text-green-800 font-semibold">Hey {user.name}</span>
            ) : (
              <NavLink
                to="/signin"
                className="ml-4 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
              >
                Sign In
              </NavLink>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <div className="px-3 py-2 text-sm font-medium text-gray-500">Main</div>
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-green-700 bg-green-50'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="px-3 py-2 text-sm font-medium text-gray-500">Support</div>
            {supportNavLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-green-700 bg-green-50'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            {user ? (
              <span className="mt-2 w-full px-4 py-2 rounded-md bg-green-100 text-green-800 font-semibold block text-center">Hey {user.name}</span>
            ) : (
              <NavLink
                to="/signin"
                className="mt-2 w-full px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
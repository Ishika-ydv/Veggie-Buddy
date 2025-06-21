import { Sprout, Mail, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Sprout className="h-8 w-8 text-green-300" />
              <span className="ml-2 text-xl font-bold">Veggie Buddy</span>
            </div>
            <p className="mt-2 text-sm text-green-200">
              Helping you grow fresh vegetables at home efficiently and sustainably.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="mailto:usershreyash@gmail.com" className="text-green-200 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/shreyazh" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/iamsrivastva" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Features</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/layout-designer" className="text-green-200 hover:text-white transition-colors">
                  Rooftop Layout Designer
                </Link>
              </li>
              <li>
                <Link to="/plants" className="text-green-200 hover:text-white transition-colors">
                  Plant Information
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-green-200 hover:text-white transition-colors">
                  Gardening Tips
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-green-200 hover:text-white transition-colors">
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/blog" className="text-green-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-green-200 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-green-200 hover:text-white transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-200 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="mt-2 text-sm text-green-200">
              Subscribe to get gardening tips and updates.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-500 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-green-700 text-center text-sm text-green-300">
          <p>&copy; {new Date().getFullYear()} Veggie Buddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Calendar, Bug, Droplets, HelpCircle, Video, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGardeningTips } from '../hooks/useGardeningTips';
import SeasonalTipsCard from '../components/tips/SeasonalTipsCard';
import TipArticle from '../components/tips/TipArticle';

const GardeningTipsPage = () => {
  const { tips, seasonalTips, isLoading } = useGardeningTips();
  const [expandedCategory, setExpandedCategory] = useState<string | null>('general');
  const [selectedTip, setSelectedTip] = useState<string | null>(null);
  
  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };
  
  const categories = [
    { id: 'general', name: 'General Tips', icon: <BookOpen className="h-5 w-5 text-green-700" /> },
    { id: 'seasonal', name: 'Seasonal Guide', icon: <Calendar className="h-5 w-5 text-green-700" /> },
    { id: 'pests', name: 'Pest Control', icon: <Bug className="h-5 w-5 text-green-700" /> },
    { id: 'watering', name: 'Watering Guide', icon: <Droplets className="h-5 w-5 text-green-700" /> },
  ];

  const handleSelectTip = (tipId: string) => {
    setSelectedTip(tipId);
    
    // Scroll to top on mobile
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Gardening Tips</h1>
        <p className="mt-2 text-lg text-gray-600">
          Expert advice and guidance to help your rooftop garden thrive all year round.
        </p>
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading gardening tips...</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tips Navigation */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow overflow-hidden sticky top-4">
                {categories.map((category) => (
                  <div key={category.id}>
                    <button
                      className={`w-full flex items-center justify-between p-4 text-left ${
                        expandedCategory === category.id
                          ? 'bg-green-50 text-green-800'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => toggleCategory(category.id)}
                    >
                      <div className="flex items-center gap-2">
                        {category.icon}
                        <span className="font-medium">{category.name}</span>
                      </div>
                      {expandedCategory === category.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                    
                    {expandedCategory === category.id && (
                      <div className="bg-white border-t border-gray-100">
                        {category.id === 'seasonal' ? (
                          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {seasonalTips.map((tip) => (
                              <SeasonalTipsCard 
                                key={tip.id}
                                season={tip.season}
                                tasks={tip.tasks}
                                onClick={() => handleSelectTip(tip.id)}
                                isSelected={selectedTip === tip.id}
                              />
                            ))}
                          </div>
                        ) : (
                          <ul className="divide-y divide-gray-100">
                            {tips
                              .filter((tip) => tip.category === category.id)
                              .map((tip) => (
                                <li key={tip.id}>
                                  <button
                                    className={`w-full p-4 text-left hover:bg-gray-50 ${
                                      selectedTip === tip.id ? 'bg-green-50 text-green-800' : ''
                                    }`}
                                    onClick={() => handleSelectTip(tip.id)}
                                  >
                                    {tip.title}
                                  </button>
                                </li>
                              ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Selected Tip Content */}
            <div className="w-full lg:w-2/3">
              {selectedTip ? (
                <>
                  {tips.find(t => t.id === selectedTip) && (
                    <TipArticle tip={tips.find(t => t.id === selectedTip)!} />
                  )}
                  {seasonalTips.find(t => t.id === selectedTip) && (
                    <div className="bg-white rounded-lg shadow p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {seasonalTips.find(t => t.id === selectedTip)?.season} Gardening Guide
                      </h2>
                      <div className="prose max-w-none">
                        <p className="text-gray-600 mb-6">
                          Follow these seasonal tasks to keep your garden thriving during {' '}
                          {seasonalTips.find(t => t.id === selectedTip)?.season}.
                        </p>
                        <ul className="space-y-4">
                          {seasonalTips
                            .find(t => t.id === selectedTip)
                            ?.tasks.map((task, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-sm">
                                  {index + 1}
                                </span>
                                <span>{task}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Welcome to Gardening Tips
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Select a category and topic from the menu to view detailed gardening advice.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-medium text-green-800 mb-2">Why use our tips?</h3>
                      <ul className="text-sm text-green-700 list-disc list-inside space-y-1">
                        <li>Expert advice from experienced gardeners</li>
                        <li>Tailored for rooftop and container gardening</li>
                        <li>Seasonal guidance for year-round growing</li>
                        <li>Practical solutions for common challenges</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-medium text-green-800 mb-2">Getting started</h3>
                      <ul className="text-sm text-green-700 list-disc list-inside space-y-1">
                        <li>Start with "General Tips" for the basics</li>
                        <li>Check "Seasonal Guide" for timely advice</li>
                        <li>Use "Pest Control" when you spot problems</li>
                        <li>Review "Watering Guide" for optimal plant health</li>
                      </ul>
                    </div>
                  </div>
                  <img 
                    src="https://en.idei.club/uploads/posts/2023-06/1686847869_en-idei-club-p-rooftop-farming-dizain-1.jpg" 
                    alt="Gardening" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Related Resources Section */}
          <div className="mt-12 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                to="/blog" 
                className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <BookOpen className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-medium text-green-800">Blog</h3>
                  <p className="text-sm text-green-700">Latest gardening articles and tips</p>
                </div>
              </Link>
              <Link 
                to="/tutorials" 
                className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <Video className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-medium text-green-800">Tutorials</h3>
                  <p className="text-sm text-green-700">Step-by-step gardening guides</p>
                </div>
              </Link>
              <Link 
                to="/faqs" 
                className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <HelpCircle className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-medium text-green-800">FAQs</h3>
                  <p className="text-sm text-green-700">Common gardening questions</p>
                </div>
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <Mail className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-medium text-green-800">Contact Support</h3>
                  <p className="text-sm text-green-700">Get help from our experts</p>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GardeningTipsPage;
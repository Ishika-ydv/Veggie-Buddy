import { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, HelpCircle, Video, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import PlantCard from '../components/plants/PlantCard';
import PlantFilters from '../components/plants/PlantFilters';
import { usePlants } from '../hooks/usePlants';
import { Plant } from '../types/plants';

const PlantInfoPage = () => {
  const { plants, isLoading } = usePlants();
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    difficulty: [] as string[],
    sunlight: [] as string[],
    waterNeeds: [] as string[],
    season: [] as string[],
  });

  useEffect(() => {
    if (plants) {
      let result = [...plants];
      
      // Apply search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(plant => 
          plant.name.toLowerCase().includes(query) || 
          plant.description.toLowerCase().includes(query)
        );
      }
      
      // Apply filters
      if (activeFilters.difficulty.length > 0) {
        result = result.filter(plant => activeFilters.difficulty.includes(plant.difficulty));
      }
      
      if (activeFilters.sunlight.length > 0) {
        result = result.filter(plant => activeFilters.sunlight.includes(plant.sunlight));
      }
      
      if (activeFilters.waterNeeds.length > 0) {
        result = result.filter(plant => activeFilters.waterNeeds.includes(plant.waterNeeds));
      }
      
      if (activeFilters.season.length > 0) {
        result = result.filter(plant => 
          plant.growingSeason && activeFilters.season.includes(plant.growingSeason)
        );
      }
      
      setFilteredPlants(result);
    }
  }, [plants, searchQuery, activeFilters]);

  const handleFilterChange = (filterType: string, value: string, isChecked: boolean) => {
    setActiveFilters(prev => {
      const updatedFilters = { ...prev };
      if (isChecked) {
        updatedFilters[filterType as keyof typeof activeFilters] = [
          ...updatedFilters[filterType as keyof typeof activeFilters],
          value
        ];
      } else {
        updatedFilters[filterType as keyof typeof activeFilters] = 
          updatedFilters[filterType as keyof typeof activeFilters].filter(v => v !== value);
      }
      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      difficulty: [],
      sunlight: [],
      waterNeeds: [],
      season: [],
    });
    setSearchQuery('');
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Plant Information</h1>
        <p className="mt-2 text-lg text-gray-600">
          Discover vegetables, herbs, and companion plants perfect for your rooftop garden.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters - Mobile Toggle */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={toggleFilters}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-md"
          >
            <Filter className="h-5 w-5" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {/* Filters Sidebar */}
        <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-1/4`}>
          <div className="bg-white rounded-lg shadow p-4 sticky top-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button 
                onClick={clearFilters}
                className="text-sm text-green-700 hover:text-green-800"
              >
                Clear all
              </button>
            </div>
            
            <PlantFilters 
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>
        
        {/* Plants Grid */}
        <div className="w-full lg:w-3/4">
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search plants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          {/* Results */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading plants...</p>
            </div>
          ) : filteredPlants.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-600">No plants found matching your criteria.</p>
              <button 
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlants.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Resources Section */}
      <div className="mt-12 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More About Plants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link 
            to="/blog" 
            className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <BookOpen className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-medium text-green-800">Plant Care Blog</h3>
              <p className="text-sm text-green-700">Expert articles on plant care</p>
            </div>
          </Link>
          <Link 
            to="/tutorials" 
            className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Video className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-medium text-green-800">Plant Tutorials</h3>
              <p className="text-sm text-green-700">Video guides for plant care</p>
            </div>
          </Link>
          <Link 
            to="/faqs" 
            className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <HelpCircle className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-medium text-green-800">Plant FAQs</h3>
              <p className="text-sm text-green-700">Common plant care questions</p>
            </div>
          </Link>
          <Link 
            to="/contact" 
            className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Mail className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-medium text-green-800">Plant Support</h3>
              <p className="text-sm text-green-700">Get help with your plants</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantInfoPage;
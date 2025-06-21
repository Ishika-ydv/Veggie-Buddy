import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart2, BookOpen, Droplets, Bug, Sun, Wind } from 'lucide-react';

const TutorialsPage = () => {
  const tutorials = [
    {
      id: 'planning',
      title: "Planning Your Rooftop Garden",
      description: "Learn how to assess your space and create a garden plan that works for you.",
      duration: "15 min",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      path: "https://www.youtube.com/watch?v=9z-PIX_cC-s"
    },
    {
      id: 'building',
      title: "Building Garden Beds",
      description: "Step-by-step guide to constructing raised beds for your rooftop garden.",
      duration: "30 min",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <BarChart2 className="h-6 w-6 text-green-600" />,
      path: "https://www.youtube.com/watch?v=UmMw0jPYKvs"
    },
    {
      id: 'irrigation',
      title: "Irrigation Systems",
      description: "Set up an efficient watering system for your rooftop garden.",
      duration: "45 min",
      level: "Advanced",
      image: "https://extension.okstate.edu/fact-sheets/images/managing-pressure-in-the-home-irrigation-system/hunter-irrigation-overview.png",
      icon: <Droplets className="h-6 w-6 text-green-600" />,
      path: "https://www.youtube.com/watch?v=b_ldCBnYk8M&pp=0gcJCfcAhR29_xXO"
    },
    {
      id: 'plant-selection',
      title: "Plant Selection Guide",
      description: "Choose the right plants for your specific rooftop conditions.",
      duration: "20 min",
      level: "Beginner",
      image: "https://i.pinimg.com/736x/84/d8/a1/84d8a1afc393612acc698b3543377bee.jpg",
      icon: <Sun className="h-6 w-6 text-green-600" />,
      path: "https://m.youtube.com/watch?v=BEzSrYIs7xk"
    },
    {
      id: 'pest-management',
      title: "Pest Management",
      description: "Learn effective organic methods to protect your plants from pests.",
      duration: "25 min",
      level: "Intermediate",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIASyAIaZ5P8gC1VySWGalJaAKWQ98qlAjQ&s",
      icon: <Bug className="h-6 w-6 text-green-600" />,
      path: "https://www.youtube.com/watch?v=79LQ0nOYlKU"
    },
    {
      id: 'weather-protection',
      title: "Weather Protection",
      description: "Strategies to protect your garden from extreme weather conditions.",
      duration: "20 min",
      level: "Intermediate",
      image: "https://www.greenproventures.com/wp-content/uploads/2023/07/Harnessing-Rain-Shelters-Empowering-Continuous-Farming-during-the-Monsoon-Season.jpg",
      icon: <Wind className="h-6 w-6 text-green-600" />,
      path: "https://www.youtube.com/watch?v=gk-R8qvaBOU"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Tutorials</h1>
          <p className="text-gray-600 text-lg">
            Step-by-step guides to help you build and maintain your rooftop garden
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map(tutorial => (
            <Link 
              key={tutorial.id}
              to={tutorial.path}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img 
                  src={tutorial.image} 
                  alt={tutorial.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                  {tutorial.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-green-600">{tutorial.level}</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {tutorial.duration}
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">{tutorial.title}</h2>
                <p className="text-gray-600">{tutorial.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage; 
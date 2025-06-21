import { Link } from 'react-router-dom';
import { ChevronRight, Leaf, Cloud, Users, Grid, BookOpen, HelpCircle, Video, Mail } from 'lucide-react';
import FeatureCard from '../components/home/FeatureCard';
import TestimonialCard from '../components/home/TestimonialCard';
import PlantPreview from '../components/home/PlantPreview';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6231753/pexels-photo-6231753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Grow Fresh Vegetables on Your Rooftop
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-2xl">
              Veggie Buddy helps you design, plant, and maintain your own rooftop garden — 
              even if you've never gardened before.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/dashboard" 
                className="px-6 py-3 bg-white text-green-700 rounded-md font-medium hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Check Dashboard
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/plants" 
                className="px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-500 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Explore Plants
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">How Veggie Buddy Helps You</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create a thriving rooftop garden, right at your fingertips.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard 
              icon={<Grid className="h-8 w-8 text-green-600" />}
              title="Rooftop Layout Designer"
              description="Design your garden layout with our interactive tool. Drag and drop plants to create your perfect garden."
              link="/layout-designer"
            />
            <FeatureCard 
              icon={<Leaf className="h-8 w-8 text-green-600" />}
              title="Plant Information"
              description="Detailed care instructions for a wide variety of vegetables, herbs, and companion plants."
              link="/plants"
            />
            <FeatureCard 
              icon={<Cloud className="h-8 w-8 text-green-600" />}
              title="Weather Integration"
              description="Get personalized plant care recommendations based on local weather conditions."
              link="/tips"
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-green-600" />}
              title="Community Forum"
              description="Connect with other gardeners, share experiences, and get help with your gardening challenges."
              link="/community"
            />
          </div>
        </div>
      </section>

      {/* Popular Plants Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Popular Plants for Rooftop Gardens</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              These vegetables thrive in container gardens and are perfect for beginners.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PlantPreview 
              name="Cherry Tomatoes"
              image="https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              difficulty="Easy"
              sunlight="Full Sun"
              waterNeeds="Medium"
            />
            <PlantPreview 
              name="Bell Peppers"
              image="https://images.healthshots.com/healthshots/en/uploads/2024/07/24112903/1-40.jpg"
              difficulty="Medium"
              sunlight="Full Sun"
              waterNeeds="Medium"
            />
            <PlantPreview 
              name="Lettuce"
              image="data:image/jpeg;base64,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"
              difficulty="Easy"
              sunlight="Partial Sun"
              waterNeeds="High"
            />
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/plants" 
              className="inline-flex items-center text-green-700 font-medium hover:text-green-800"
            >
              View all plants
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Gardeners Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of urban gardeners who are growing their own food with Veggie Buddy.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <TestimonialCard 
              quote="Veggie Buddy transformed my empty rooftop into a thriving garden. I'm harvesting fresh vegetables every week!"
              author="Isha Dungrani"
              location="Surat"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <TestimonialCard 
              quote="As a complete beginner, I was intimidated by gardening. The step-by-step guides made it so easy to get started."
              author="Anshumaan Kumar"
              location="Lucknow"
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <TestimonialCard 
              quote="The layout designer helped me maximize my small rooftop space. Now I grow enough vegetables to share with neighbors."
              author="Soumya"
              location="Mumbai"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Resources & Support</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in your rooftop gardening journey.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8 text-green-600" />}
              title="Blog"
              description="Stay updated with the latest gardening tips, success stories, and expert advice."
              link="/blog"
            />
            <FeatureCard 
              icon={<Video className="h-8 w-8 text-green-600" />}
              title="Tutorials"
              description="Step-by-step video guides and articles to help you master rooftop gardening."
              link="/tutorials"
            />
            <FeatureCard 
              icon={<HelpCircle className="h-8 w-8 text-green-600" />}
              title="FAQs"
              description="Find answers to common questions about rooftop gardening and plant care."
              link="/faqs"
            />
            <FeatureCard 
              icon={<Mail className="h-8 w-8 text-green-600" />}
              title="Contact Support"
              description="Get help from our gardening experts and support team."
              link="/contact"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Start Your Rooftop Garden?</h2>
          <p className="mt-4 text-xl text-green-100 max-w-2xl mx-auto">
            Join our community of urban gardeners and start growing your own fresh, sustainable produce today.
          </p>
          <div className="mt-10">
            <Link 
              to="/layout-designer" 
              className="px-8 py-4 bg-white text-green-700 rounded-md font-medium text-lg hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Design Your Garden Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
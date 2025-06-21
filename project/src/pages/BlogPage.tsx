import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Rooftop Gardening",
      excerpt: "Learn the basics of starting your own rooftop garden and transforming your urban space.",
      date: "March 15, 2024",
      author: "Sarah Green",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Best Plants for Urban Gardens",
      excerpt: "Discover which plants thrive in urban environments and how to care for them.",
      date: "March 10, 2024",
      author: "Mike Brown",
      image: "https://help.gardeningexpress.co.uk/wp-content/uploads/2023/07/1-1.png"
    },
    {
      id: 3,
      title: "Sustainable Gardening Practices",
      excerpt: "Explore eco-friendly gardening techniques that benefit both your plants and the environment.",
      date: "March 5, 2024",
      author: "Emma Wilson",
      image: "https://millcreekgardens.com/wp-content/uploads/2016/02/Sustainable-Gardening.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage; 
import React, { useState } from 'react';

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is a rooftop garden?",
      answer: "A rooftop garden is a garden that is established on the top of a building. It can be used for growing vegetables, flowers, or creating a green space for relaxation and environmental benefits."
    },
    {
      question: "What are the benefits of rooftop gardening?",
      answer: "Rooftop gardens provide numerous benefits including reducing urban heat island effect, improving air quality, reducing stormwater runoff, providing insulation, creating habitats for wildlife, and offering a space for growing food and recreation."
    },
    {
      question: "What types of plants are suitable for rooftop gardens?",
      answer: "Plants that are drought-resistant, wind-tolerant, and can thrive in full sun are ideal for rooftop gardens. Some popular choices include succulents, herbs, vegetables like tomatoes and peppers, and native plants adapted to your local climate."
    },
    {
      question: "How do I maintain my rooftop garden?",
      answer: "Regular maintenance includes watering, fertilizing, pruning, and pest control. You'll also need to check drainage systems, inspect for leaks, and ensure proper soil conditions. The specific maintenance schedule depends on your plants and local climate."
    },
    {
      question: "Do I need special permission to create a rooftop garden?",
      answer: "Yes, you typically need to check with your building management or local authorities. You'll need to ensure your roof can support the weight of the garden and comply with any relevant building codes or regulations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{faq.question}</h2>
                <span className="text-green-500">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage; 
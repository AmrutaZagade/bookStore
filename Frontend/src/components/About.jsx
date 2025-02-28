import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 relative">
      {/* Cross Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 text-gray-700 hover:text-red-600 text-3xl"
      >
        ✕
      </button>

      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold">BookStore</span>, a place where stories come to life. 
          We believe books are more than just paper and ink; they are gateways to adventure, 
          wisdom, and inspiration. Whether you love fiction, non-fiction, or self-help, 
          we have something for every reader.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Our Mission</h2>
        <p className="text-lg text-gray-700 mt-4">
          We aim to make reading more accessible by providing a diverse collection of books that 
          inspire, educate, and entertain. Our passion is to connect readers with stories that 
          spark curiosity and expand horizons.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Why Choose Us?</h2>
        <ul className="text-lg text-gray-700 mt-4 space-y-2 text-left inline-block">
          <li>📚 A carefully curated collection of books</li>
          <li>🚀 Fast and easy browsing experience</li>
          <li>🌍 Connecting book lovers globally</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

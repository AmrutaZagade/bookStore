import React from 'react';

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Contact Us</h2>
        <p className="text-center text-gray-600 mb-4">We'd love to hear from you!</p>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea placeholder="Enter your message" rows="4" className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

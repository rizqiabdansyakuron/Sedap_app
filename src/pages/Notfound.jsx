import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <img
        src="https://i.pinimg.com/originals/ca/a2/4e/caa24ef9fd5581e70ffaa71d0a4d46f6.gif"
        alt="404 Not Found"
        className="w-80 h-80 object-contain mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-700 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-500 mb-6 text-center">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

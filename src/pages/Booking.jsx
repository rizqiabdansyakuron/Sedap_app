import React from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

export default function RestaurantBookingStatic() {
  return (
    <div className="bg-white py-6 px-8 rounded-full shadow-md flex flex-wrap md:flex-nowrap items-center justify-center gap-8 max-w-6xl mx-auto">
      
      {/* Reservation Date */}
      <div className>
        <div className="flex items-center gap-2 text-gray-600">
          <FaCalendarAlt />
          <span className="font-medium">Check in</span>
        </div>
        <div className="w-full mt-1 h-[1px] bg-gray-300"></div>
      </div>

      {/* Reservation End Date */}
      <div className>
        <div className="flex items-center gap-2 text-gray-600">
          <FaCalendarAlt />
          <span className="font-medium">Check Out</span>
        </div>
        <div className="w-full mt-1 h-[1px] bg-gray-300"></div>
      </div>

      {/* Guests Info */}
      <div className>
        <div className="flex items-center gap-2 text-gray-600">
          <FaUser />
          <span className="font-medium">0 Adults • 0 Children • 0 Room</span>
          <FiChevronDown />
        </div>
        <div className="w-full mt-1 h-[1px] bg-gray-300"></div>
      </div>

      {/* Button */}
      <button className="rounded-full border border-gray-300 px-6 py-2 text-gray-700 hover:bg-red-500 hover:text-white transition">
        Check Availability
      </button>
    </div>
  );
}
import React from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function About() {
  return (
    <div className="h-screen flex flex-col">
      {/* About Section */}
      <section className="flex-1 bg-white py-16">
        {/* Restaurant Booking Static */}
        <div className="bg-white py-8 px-12 flex flex-wrap md:flex-nowrap items-center justify-center gap-10 max-w-6xl mx-auto mt-16 mb-16">
          {/* Reservation Date */}
          <div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaCalendarAlt />
              <span className="font-medium">Check in</span>
            </div>
            <div className="w-full mt-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Reservation End Date */}
          <div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaCalendarAlt />
              <span className="font-medium">Check Out</span>
            </div>
            <div className="w-full mt-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Guests Info */}
          <div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaUser />
              <span className="font-medium">
                0 Adults • 0 Children • 0 Room
              </span>
              <FiChevronDown />
            </div>
            <div className="w-full mt-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Button */}
          <button className="rounded-full border border-gray-300 px-8 py-3 text-gray-700 hover:bg-red-500 hover:text-white transition">
            Check Availability
          </button>
        </div>

        {/* About Us Section */}
        <div className="container mx-auto px-6 mt-20">
          {" "}
          {/* Mengganti mt-12 dengan mt-20 */}
          <div className="flex flex-col lg:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Gambar di sebelah kiri */}
            <div className="lg:w-1/2 w-full h-[350px] lg:h-auto">
              <img
                src="https://static.wikia.nocookie.net/48442f22-cf82-4922-b412-2870f12ecb64"
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten di sebelah kanan */}
            <div className="lg:w-1/2 w-full p-8">
              <div className="mb-6">
                <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                  Explore All Corners Of The World With Us
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure.
              </p>
              <a
                href="about.html"
                className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-200"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

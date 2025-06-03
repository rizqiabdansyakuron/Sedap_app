import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import PopularDestination from "./PopularProduct";

export default function HeroSection() {
  return (
    <div className="bg-[#f5fcff]">
      {/* Navbar */}
      <nav className="flex flex-col lg:flex-row lg:items-center justify-between px-8 lg:px-20 py-6 bg-[#f5fcff]">
        <div id="sidebar-logo" className="mb-4 lg:mb-0">
          <span
            id="logo-title"
            className="font-poppins-extra-bold text-[54px] leading-[66px] text-gray-900"
          >
            Sedap
            <b id="logo-dot" className="text-green-500">.</b>
          </span>
        </div>
        <ul className="flex flex-wrap gap-5 items-center text-gray-600 text-[20px] font-muli-rw">
          {["Dashboard", "Orders", "Produk Unggulan", "Home"].map((menu, idx) => (
            <li key={idx}>
              <Link
                to={menu === "Dashboard" ? "/" : `/${menu.replace(" ", "")}`}
                className="hover:text flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:text-red-500"
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-8 lg:p-20 min-h-[70vh] gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Savor the Taste,<br /> Cherish the Moments
          </h1>
          <p className="text-gray-600 text-lg md:text-2xl max-w-xl">
            Discover a culinary journey like no other. Fresh ingredients, traditional recipes,
            and an experience worth remembering.
          </p>
          <button className="bg-red-500 text-white px-8 py-4 text-lg md:text-xl rounded-full font-semibold hover:bg-red-600 transition duration-300">
            Book Now
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="overflow-hidden rounded-[350px_350px_0_0] w-[320px] md:w-[500px] lg:w-[700px] h-[450px] md:h-[650px] lg:h-[850px] shadow-xl">
            <img
              src="https://static.wikia.nocookie.net/48442f22-cf82-4922-b412-2870f12ecb64"
              alt="Delicious Dish"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-24">
        <About />
      </div>

       <div className="mt-24">
        <PopularDestination/>
      </div>
    </div>
  );
}

import { FaBell, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Headerb() {
  return (
    <div
      id="header-container"
      className="flex justify-between items-center p-4"
    >
      {/* Search Bar */}
      <div id="logo" className="relative w-full max-w-lg">
        <div id="sidebar-logo">
          <span
            id="logo-title"
            className="font-poppins-extra-bold text-[48px] text-gray-900"
          >
            Sedap
            <b id="logo-dot" className="text-hijau">
              .
            </b>
          </span>
          <span id="logo-subtitle" className="font-semibold text-gray-400">
            Modern Admin Dashboard
          </span>
        </div>
      </div>

      {/* Icon & Profile Section */}
      <div id="icons-container" className="flex items-center space-x-4">
        {/* Icons */}
        <div
          id="notification-icon"
          className="relative p-3 bg-blue-100 rounded-2xl text-blue-500"
        >
          <FaBell />
          <span
            id="notification-badge"
            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs"
          >
            50
          </span>
        </div>
        <div
          id="chart-icon"
          className="p-3 bg-blue-100 rounded-2xl cursor-pointer"
        >
          <FcAreaChart />
        </div>
        <div
          id="settings-icon"
          className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer"
        >
          <SlSettings />
        </div>

        {/* Profile Section */}
        <div
          id="profile-container"
          className="flex items-center space-x-4 border-l pl-4 border-gray-300"
        >
          <span id="profile-text">
            Hello, <b>Rizqi Abdan Syakuron</b>
          </span>
          <img
            id="profile-avatar"
            src="https://i.pinimg.com/564x/f2/22/93/f222939335d0ca2c7926e49c29770042.jpg"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

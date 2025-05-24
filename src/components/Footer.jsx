import React from 'react';
import '../assets/tailwind.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaPhoneAlt,
  FaPaperPlane,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2b2d42] text-white pt-14 pb-6 px-6 md:px-20 font-muli">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div id="sidebar-logo" className="mb-4 lg:mb-0">
            <span
              id="logo-title"
              className="font-muli text-[54px] leading-[66px] text-black font-extrabold"
            >
              Sedap<b id="logo-dot" className="text-green-500">.</b>
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Restoran Sedap. menyajikan hidangan autentik dengan cita rasa lokal dan internasional. Kami mengutamakan bahan segar dan pelayanan terbaik untuk pengalaman kuliner yang tak terlupakan.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
              <FaGooglePlusG />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">LAYANAN</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Menu Makanan Lezat</li>
            <li>Pesan Antar</li>
            <li>Reservasi Meja</li>
            <li>Layanan Catering</li>
            <li>Acara Khusus & Private Dining</li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">TAUTAN PENTING</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Tentang Kami</li>
            <li>Menu & Promo</li>
            <li>Testimoni Pelanggan</li>
            <li>Galeri Makanan</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">KONTAK</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              Jl. Kenangan No. 88, Jakarta Selatan, Indonesia
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt />
              +62 812 3456 7890
            </li>
            <li className="flex items-center gap-3">
              <FaPaperPlane />
              sedap.restoran@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-10 text-sm">
        &copy; 2025 Sedap. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

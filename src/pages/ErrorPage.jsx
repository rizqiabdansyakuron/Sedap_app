import React from "react";
import "../assets/tailwind.css"; // untuk font custom

const ErrorPage = ({
  errorCode = "400",
  errorDescription = "Bad Request",
  errorImage = "/img/Group 2.jpg", // path relatif ke public/
}) => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${errorImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-4 py-10">
        <div className="text-center text-white">
          <h1 className="text-[12rem] font-hacked mb-6">{errorCode}</h1> {/* 3x lebih besar dari text-6xl */}

          <p className="text-3xl mb-8 font-hacked">{errorDescription}</p> {/* Deskripsi juga lebih besar */}

          {/* <a
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Kembali ke Beranda
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

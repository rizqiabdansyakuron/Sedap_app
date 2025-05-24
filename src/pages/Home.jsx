import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import Header from "../components/Headerb";
import Headerb from "../components/Headerb";
import React from 'react';
import dataProduct from './Product.json'

export default function Home() {
  return (
    <div id="dashboard-container">
      <Headerb></Headerb>
   
      <div
        id="produkunggulan-grid"
        className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div
          id="dashboard-orders"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 "
        >
         
          <div id="orders-info" className="flex flex-col">
            <span id="orders-count" className="text-2xl font-bold">
              
            </span>
            <span id="orders-text" className="text-gray-400">
              Total Orders
            </span>
          </div>
        </div>

        <div
          id="dashboard-delivered"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
   
          
         
        </div>
      </div>
    </div>
  );
}

    

import { AiOutlineHome } from "react-icons/ai"; 
import { AiFillShopping } from "react-icons/ai"; 
import { BiErrorCircle } from "react-icons/bi"; 
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsBorderStyle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa"; // Tambahkan icon user
import { Link } from "react-router-dom";  

export default function ListMenu() {
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <Link
            id="menu-1"
            to="/"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <AiFillHome className="mr-2" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            id="menu-2"
            to="/orders"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <BsBorderStyle className="mr-2" />
            Orders
          </Link>
        </li>
        <li>
          <Link
            id="menu-3"
            to="/customers"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <BsFillPersonCheckFill className="mr-2" />
            Customers
          </Link>
        </li>
        <li>
          <Link
            id="menu-4"
            to="/user"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <FaUserFriends className="mr-2" />
            Users
          </Link>
        </li>
        <li>
          <Link
            id="menu-5"
            to="/ErrorPage"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <BiErrorCircle className="mr-2" />
            Error Page 404
          </Link>
        </li>
        <li>
          <Link
            id="menu-6"
            to="/ProdukUnggulan"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <AiFillShopping  className="mr-2" />
            Produk unggulan
          </Link>
        </li>
        <li>
          <Link
            id="menu-7"
            to="/Home"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <AiOutlineHome className="mr-2" />
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}

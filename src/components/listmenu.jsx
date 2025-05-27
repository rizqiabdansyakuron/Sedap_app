import { AiOutlineHome } from "react-icons/ai"; 
import { AiFillShopping } from "react-icons/ai"; 
import { BiErrorCircle } from "react-icons/bi"; 
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsBorderStyle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa"; // Tambahkan icon user
import { MdFastfood } from "react-icons/md"; // Import MdFastfood for Products
import { Link } from "react-router-dom";  

export default function ListMenu() {
  const menuClass = "hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold";

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <Link
            id="menu-1"
            to="/"
            className={menuClass}
          >
            <AiFillHome className="mr-2" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            id="menu-2"
            to="/orders"
            className={menuClass}
          >
            <BsBorderStyle className="mr-2" />
            Orders
          </Link>
        </li>
        <li>
          <Link
            id="menu-3"
            to="/customers"
            className={menuClass}
          >
            <BsFillPersonCheckFill className="mr-2" />
            Customers
          </Link>
        </li>
        <li>
          <Link
            id="menu-4"
            to="/user"
            className={menuClass}
          >
            <FaUserFriends className="mr-2" />
            Users
          </Link>
        </li>
        <li>
          <Link
            id="menu-5"
            to="/ErrorPage"
            className={menuClass}
          >
            <BiErrorCircle className="mr-2" />
            Error Page 404
          </Link>
        </li>
        <li>
          <Link
            id="menu-6"
            to="/products"
            className={menuClass}
          >
            <MdFastfood className="mr-4 text-xl" />
            Products
          </Link>
        </li>
        <li>
          <Link
            id="menu-7"
            to="/Home"
            className={menuClass}
          >
            <AiOutlineHome className="mr-2" />
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}

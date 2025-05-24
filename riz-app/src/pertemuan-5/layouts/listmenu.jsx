import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsBorderStyle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
export default function listmenu() {
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <div
            id="menu-1"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <AiFillHome className="mr-2" />
            Dashboard
          </div>
        </li>
        <li>
          <link
            id="menu-2"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <BsBorderStyle className="mr-2" />
            Orders
          </link>
        </li>
        <li>
          <div
            id="menu-3"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <BsFillPersonCheckFill className="mr-2" /> Customers
          </div>
        </li>
      </ul>
    </div>
  );
}

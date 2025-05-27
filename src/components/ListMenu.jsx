import { FaUsers } from "react-icons/fa"; 
import { BiError, BiErrorAlt, BiErrorCircle, BiUser } from "react-icons/bi";
import { AiOutlineOrderedList } from "react-icons/ai";
import { MdDashboard, MdFastfood } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function ListMenu() {
        const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
    return (
        <div id="sidebar-menu" className="mt-10">
            <ul id="menu-list" className="space-y-3">
                <li>
                <NavLink id="menu-1" to="/" className={menuClass}>
                    <MdDashboard className="mr-4 text-xl" />
                    Dashboard
                </NavLink>
                </li>
                <li>
                <NavLink id="menu-2" to="/orders" className={menuClass}>
                    <AiOutlineOrderedList className="mr-4 text-xl" />
                    Orders
                </NavLink>
                </li>
                <li>
                <NavLink id="menu-3" to="/customers" className={menuClass}>
                    <FaUsers className="mr-4 text-xl" />
                    Customers
                </NavLink>
                </li>
                <li>
                <NavLink id="menu-4" to="/users" className={menuClass}>
                    <BiUser className="mr-4 text-xl" />
                    User
                </NavLink>
                </li>
                <li>
                <NavLink id="menu-4" to="/products" className={menuClass}>
                    <MdFastfood className="mr-4 text-xl" />
                    Products
                </NavLink>
                </li>

                {/* <li> */}
                {/* <NavLink id="menu-4" to="/error400" className={menuClass}>
                    <BiErrorAlt className="mr-4 text-xl" />
                    ERROR 400
                </NavLink>
                </li>
                <li>
                <NavLink id="menu-5" to="/error401" className={menuClass}>
                    <BiErrorCircle className="mr-4 text-xl" />
                    ERROR 401
                </NavLink>
                </li>
                <li>
                <NavLink id="menu-6" to="/error403" className={menuClass}>
                    <BiError className="mr-4 text-xl" />
                    ERROR 403
                </NavLink>
                </li> */}
            </ul>
        </div>
  );
}

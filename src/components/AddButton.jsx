import { NavLink } from "react-router-dom";

export default function AddButton({ name, label, to, onClick }) {
    return (
      <div id="action-button">
        <NavLink
        to={to}
          name={name}
          onClick={onClick} 
          className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          {label} 
        </NavLink>
      </div>
    );
  }
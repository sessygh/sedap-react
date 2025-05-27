import { AiOutlineHome } from "react-icons/ai"; 
import { createRoot } from "react-dom/client";
import './assets/tailwind.css';
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import PageHeader from "./components/PageHeader";
import Dashboard from "./pages/Dashoard";
import Dashboard2 from "./pages/Dashboard2";

createRoot(document.getElementById("root")).render(
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
        <div id="layout-wrapper" className="flex flex-row flex-1">
		<Sidebar/>
		<div id="main-content" className="flex-1 p-4">
		      <Header />
		      <Dashboard2 />
	    </div>
        </div>
    </div>
    )
    
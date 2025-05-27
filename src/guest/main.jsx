import { createRoot } from "react-dom/client";
import './assets/tailwind.css';

import GuestLayout from "./layouts/GuestLayout";

createRoot(document.getElementById("root")).render(
    <div id="app-container" >
        <div id="layout-wrapper" >
		<GuestLayout/> 
        </div>
    </div>
    )
    
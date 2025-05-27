import GuestHeader from "../components/GuestHeader";
import GuestHero from "../components/GuestHero";
import GuestAbout from "../components/GuestAbout";
import GuestTestimoni from "../components/GuestTestimoni";
import GuestTop from "../components/GuestTop";
import GuestFooter from "../components/GuestFooter";
import LogoSedap from "../components/LogoSedap";

export default function GuestLayout () {
    return (
        <div id="app-container" className="bg-white-100 min-h-screen flex">
            <div id="main-content" className="flex-1 p-4">
                <GuestHeader/>
                <GuestHero/>
                <GuestAbout/>
                <GuestTop/>
                <GuestTestimoni/>
                <GuestFooter/>
            </div>
        </div>
    )
}
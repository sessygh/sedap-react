import GuestHeader from "../components/GuestHeader";
import GuestHero from "../components/GuestHero";
import GuestHero2 from "../components/GuestHero2";
import LogoSedap from "../components/LogoSedap";

export default function GuestLayout () {
    return (
        <div id="app-container" className="bg-white-100 min-h-screen flex">
            <div id="main-content" className="flex-1 p-4">
                <GuestHeader/>
                <GuestHero/>
                <GuestHero2/>
            </div>
        </div>
    )
}
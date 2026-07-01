import React, { useState } from "react";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoginClicked, setLoginClicked] = useState(false)

    return (
        <nav className="relative">
            {/* Main bar */}
            <div className="flex items-center justify-between px-4 py-5 sm:px-30">
                {/* Logo — always on the left */}
                <div className="font-bold text-xl text-gray-900">LOGO</div>

                {/* Desktop nav — hidden on mobile */}
                <ul className="hidden sm:flex items-center space-x-5 list-none">
                    <li>
                        <button className="py-2 text-gray-700 hover:text-gray-900">
                            Dashboard
                        </button>
                    </li>
                    <li>
                        <button className="py-2 text-gray-700 hover:text-gray-900">
                            Log In
                        </button>
                    </li>
                    <li>
                        <button
                            className="text-white bg-[#005B8B] font-medium rounded-sm text-sm px-4 py-3 hover:bg-[#005a8bf2] transition-colors"
                            onClick={() => alert("clicked")}
                        >
                            Get Started Free
                        </button>
                    </li>
                </ul>

                {/* Hamburger — mobile only, right side */}
                <button
                    className="sm:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-200 ${
                            menuOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-200 ${
                            menuOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-200 ${
                            menuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="sm:hidden border-t border-gray-100 px-4 pb-4">
                    <ul className="flex flex-col space-y-1 pt-3 list-none">
                        <li>
                            <button className="w-full text-left py-2 text-gray-700 hover:text-gray-900">
                                Dashboard
                            </button>
                        </li>
                        <li>
                            <button className="w-full text-left py-2 text-gray-700 hover:text-gray-900" onClick ={ ()=> setLoginClicked(true)}>
                                Log In
                            </button>
                        </li>
                        <li className="pt-2">
                            <button
                                className="w-full text-white bg-[#005B8B] font-medium rounded-sm text-sm px-4 py-3 hover:bg-[#005a8bf2] transition-colors"
                                onClick={() => alert("clicked")}
                            >
                                Get Started Free
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            {isLoginClicked && (
                <div className="fixed bg-gray-300/50 min-h-screen z-10 w-screen flex 
                justify-center items-center top-0 left-0">
                    <div className="block bg-white p-5 rounded-2xl w-75">
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-medium">Log in</p>
                            <p className="text-sm font-normal text-red-600"
                                onClick={() => setLoginClicked(false)}>Close</p>
                        </div>
                        
                        <p className="text-md pt-2">Email</p>
                        <input className="w-full border-[#4283A2] border-2 p-2 rounded-lg mt-2" 
                            placeholder="Email"/>
                        <p className="text-md pt-2">Password</p>
                        <input className="w-full border-[#4283A2] border-2 p-2 rounded-lg mt-2" 
                            placeholder="Password"/>
                        
                        <button className="align-middle w-full bg-[#4283A2] p-2 mt-3 rounded-md
                            text-white font-normal hover:bg-[#005a8bf2] transition-colors">Log in</button>
                    </div> 
                </div>
            )}
        </nav>
    );
};

export default Navbar;
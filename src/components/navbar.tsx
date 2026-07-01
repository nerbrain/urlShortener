import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoginClicked, setLoginClicked] = useState(false);

    return (
        <nav className="relative">
            {/* Main bar */}
            <div className="flex items-center justify-between px-4 py-5 sm:px-30">
                {/* Logo — always on the left */}
                <div className="font-bold text-xl text-gray-900">LOGO</div>

                {/* Desktop/Tablet nav — hidden on mobile */}
                <ul className="hidden sm:flex items-center space-x-5 list-none">
                    <li>
                        <button className="py-2 text-gray-700 hover:text-gray-900">
                            Dashboard
                        </button>
                    </li>
                    <li>
                        <button
                            className="py-2 text-gray-700 hover:text-gray-900"
                            onClick={() => setLoginClicked(true)}
                        >
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
                    <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
                            <button
                                className="w-full text-left py-2 text-gray-700 hover:text-gray-900"
                                onClick={() => { setLoginClicked(true); setMenuOpen(false); }}
                            >
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

            {/* Login Modal — shared across all viewpoints */}
            {isLoginClicked && (
                <div
                    className="fixed inset-0 bg-gray-300/50 z-10 flex justify-center items-center"
                    onClick={() => setLoginClicked(false)}  // close on backdrop click
                >
                    <div
                        className="bg-white p-6 rounded-2xl w-full max-w-sm mx-4 shadow-lg"
                        onClick={(e) => e.stopPropagation()}  // prevent backdrop close when clicking inside
                    >
                        {/* Modal header */}
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-xl font-medium">Log in</p>
                            <button
                                className="w-8 h-8 flex flex-col justify-center gap-1.5"
                                onClick={() => setLoginClicked(false)}
                                aria-label="Close"
                            >
                                <span className="block h-0.5 w-6 bg-gray-800 rotate-45 translate-y-[3.5px]" />
                                <span className="block h-0.5 w-6 bg-gray-800 -rotate-45 -translate-y-[3.5px]" />
                            </button>
                        </div>

                        {/* Fields */}
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm font-medium mb-1">Email</p>
                                <input
                                    className="w-full border-[#4283A2] border-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005b8b40]"
                                    placeholder="you@example.com"
                                    type="email"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-sm font-medium">Password</p>
                                    <button className="text-xs text-[#005B8B] hover:underline">Forgot password?</button>
                                </div>
                                <input
                                    className="w-full border-[#4283A2] border-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005b8b40]"
                                    placeholder="••••••••"
                                    type="password"
                                />
                            </div>
                        </div>

                        <button
                            className="w-full bg-[#005B8B] p-2.5 mt-5 rounded-md text-white font-medium hover:bg-[#005a8bf2] transition-colors"
                            onClick={() => alert("Logging in...")}
                        >
                            Log in
                        </button>

                        <p className="text-center text-sm text-gray-500 mt-4">
                            Don't have an account?{" "}
                            <button className="text-[#005B8B] font-medium hover:underline">Sign up</button>
                        </p>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
const Hero = () => {

    return(
        <div>
            <div className="bg-linear-to-tr from-[#4284a2d3] to-[#89bb9bd3] flex items-center justify-center">
                
                {/* Mobile view — up to 639px */}
                <div className="sm:hidden h-80">
                    <section className="bg-[url('../src/assets/middle-hero.png')] bg-white m-4 p-3 rounded-md space-y-2">
                        <p className="text-2xl font-semibold text-center">Connect your audience to the right information</p>
                        <p className="text-md font-light text-center">Shorten, brand, and track your links in seconds</p>
                        <div className="flex w-full justify-center">
                            <input className="w-full h-10 text-xs font-normal bg-white border-2 border-[#005B8B] p-2 rounded-md"
                                placeholder="https://www.example.com/your-long-url"/>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="w-40 text-white bg-[#005B8B] font-medium rounded-sm text-sm px-2 py-3 hover:bg-[#005a8bf2] transition-colors"
                                onClick={() => alert("Shorten Url")}>
                                Shorten Url
                            </button>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <img className="h-5 justify-center" src="../src/assets/check-mark.png"/>
                            <p className="text-xs font-medium">No Signup Required</p>
                        </div>
                    </section>
                </div>

                {/* Tablet view — 640px to 767px */}
                <div className="hidden sm:flex lg:hidden py-10 px-6 w-full justify-center">
                    <section className="bg-[url('../src/assets/middle-hero.png')] bg-white w-full max-w-2xl p-8 rounded-xl space-y-4 flex flex-col justify-center">
                        <p className="text-3xl font-semibold text-center">Connect your audience to the right information</p>
                        <p className="text-xl font-light text-center">Shorten, brand, and track your links in seconds</p>
                        <div className="flex w-full justify-center mt-4">
                            <div className="flex h-13 w-full max-w-xl bg-white border-2 border-[#005B8B] rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#005b8b26]">
                                <input
                                    className="w-full text-sm font-normal bg-transparent p-2 focus:outline-0 placeholder-gray-400"
                                    placeholder="https://www.example.com/your-long-url"
                                />
                                <button
                                    className="w-40 text-white bg-[#005B8B] font-medium text-sm px-3 py-2 border border-[#005B8B] hover:bg-[#005a8bf2] transition-colors whitespace-nowrap"
                                    onClick={() => alert("Shorten Url")}
                                >
                                    Shorten Url
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex justify-end items-center gap-1">
                            <img className="h-5" src="../src/assets/check-mark.png"/>
                            <p className="text-[12px] pr-2 font-medium">No Signup Required</p>
                        </div>
                    </section>
                </div>

                {/* Desktop view — 1024px and up */}
                <div className="hidden lg:block h-110">
                    <section className="w-auto h-80 bg-[url('../src/assets/middle-hero.png')] bg-white mt-18 rounded-xl space-y-2 flex flex-col justify-center pl-3 pr-3">
                        <p className="h-10 text-5xl font-medium text-center">Connect your audience to the right information</p>
                        <p className="h-10 mt-2 text-3xl font-light text-center">Shorten, brand, and track your links in seconds</p>
                        <div className="flex w-full justify-center mt-10">
                            <div className="flex h-17 w-full max-w-3xl bg-white border-2 border-[#005B8B] rounded-xl overflow-hidden transition-all duration-200 focus-within:border-[#005B8B] focus-within:ring-2 focus-within:ring-[#005b8b26]">
                                <input
                                    className="w-full text-lg font-normal bg-transparent p-2 focus:outline-0 placeholder-gray-400"
                                    placeholder="https://www.example.com/your-long-url"
                                />
                                <button
                                    className="w-60 text-white bg-[#005B8B] font-medium text-lg px-2 py-3 border border-[#005B8B] hover:bg-[#005a8bf2] transition-colors whitespace-nowrap"
                                    onClick={() => alert("Shorten Url")}
                                >
                                    Shorten Url
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex justify-end items-center pr-27 mt-0.5">
                            <img className="h-7 justify-center" src="../src/assets/check-mark.png"/>
                            <p className="font-medium">No Signup Required</p>
                        </div>
                    </section>
                </div>

            </div>
            <div>
                <svg viewBox="0 0 1440 120" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.25" d="M0 0V46.29C57.348 68.49 124.308 78.46 189.6 74.29C274.032 68.92 353.196 40.98 437.76 36.79C526.368 32.43 614.808 53.67 699.6 72.05C782.724
                        90.05 865.56 96.93 950.88 85.13C994.26 79.13 1034.7 67.29 1076.22 55.79C1187.39 25 1335.6 -14.29 1440 52.47V0H0Z" fill="#76A6BA"/>
                    <path opacity="0.5" d="M0 0V15.81C15.6 36.92 33.168 56.86 57.228 72.05C119.292 111.27 198 111 269.496 91.58C306.876 81.43 341.604 65.51 377.1 51.78C426.204 32.78 
                        478.776 5.78 534.096 2.11C577.608 -0.74 619.176 11.53 652.416 33.67C690.54 59.06 727.2 95.67 776.772 106.67C825.3 117.46 874.392 99.98 919.728 82.39C965.064 64.8
                        1009.92 43.39 1060.03 39.34C1131.71 33.49 1195.97 62.22 1262.71 78.18C1298.95 86.84 1333.51 84.35 1367.22 70.68C1394.14 59.79 1424.82 43.75 1440 21.44V0H0Z" fill="#76A6BA"/>
                    <path d="M0 0V5.63C179.916 59 376.908 71.32 570.996 42.57C622.596 34.93 672.072 22.45 724.128 16.11C794.928 7.48 859.104 28.35 922.8 51.51C993.516 77.22 1063.2 95.24 1141.44 
                        90C1245.28 83 1348.39 44.29 1440 5.19V0H0Z" fill="#76A6BA"/>
                </svg>
            </div>
        </div>
    )
}

export default Hero
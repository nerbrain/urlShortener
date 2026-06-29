const Details = () => {
    return (

        <div className="p-5">
            {/*Mobile view*/}
            <div className="sm:hidden flex flex-col items-center space-y-6">
                <div className="justify-center w-auto bg-white border-gray-200 p-10 space-y-2 rounded-xl shadow-xl/20">
                    <img className="h-10" src="../src/assets/bar-chart.png" />
                    <h1 className="text-2xl">Get Analytics</h1>
                    <p className="text-sm font-light">
                        Track every click, everywhere. See real-time data on who's clicking
                        your links — geographic breakdowns, device types, referral sources,
                        and peak traffic times. Turn raw clicks into actionable insights that
                        help you make smarter decisions.
                    </p>
                </div>

                <div className="justify-center w-auto bg-white border-gray-200 p-10 space-y-2 rounded-xl shadow-xl/20">
                    <img className="h-10" src="../src/assets/laptop-phone-icon.png" />
                    <h1 className="text-2xl">Digital Experience</h1>
                    <p className="text-sm font-light">
                        Short links, big impressions. Customize your shortened URLs with branded domains and custom slugs
                        (e.g. yourbrand.co/launch). Make every link feel intentional and on-brand, whether it's in an email,
                        a bio, or a billboard.
                    </p>
                </div>

                <div className="justify-center w-auto bg-white border-gray-200 p-10 space-y-2 rounded-xl shadow-xl/20">
                    <img className="h-10" src="../src/assets/target-user-icon.png" />
                    <h1 className="text-2xl">Know Your Audience</h1>
                    <p className="text-sm font-light">
                        Go beyond the click. Build audience profiles based on engagement patterns — see which content resonates,
                        when your audience is most active, and how different segments respond. Use that intelligence to refine
                        your campaigns over time.
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <h1 className="text-3xl font-regular pt-6">How It Works</h1>
                </div>

                <div className="flex flex-col w-auto justify-center space-y-6 pt-5">
                    <div className="justify-center w-auto bg-white border-gray-200 p-10 space-y-2 rounded-xl shadow-xl/20">
                        <h1 className="text-2xl">Paste Your Link</h1>
                        <p className="text-sm font-light">
                            Copy any long URL and drop it into the input field.
                            It doesn't matter how long or messy it is — we'll handle the rest.
                        </p>
                    </div>

                    <div className="justify-center w-auto bg-white border-gray-200 p-10 space-y-2 rounded-xl shadow-xl/20">
                        <h1 className="text-2xl">Shorten & Customize</h1>
                        <p className="text-sm font-light">
                            Instantly generate a clean, shortened link. Want it to feel on-brand?
                            Add a custom slug or connect your own domain to make it truly yours.
                        </p>
                    </div>

                    <div className="justify-center w-auto bg-white border-gray-200 p-10 space-y-2 rounded-xl shadow-xl/20">
                        <h1 className="text-2xl">Share & Track</h1>
                        <p className="text-sm font-light">
                            Share your link anywhere — social media, emails, SMS, or print.
                            Then watch real-time analytics roll in: who clicked, where they're from,
                            and what device they used.
                        </p>
                    </div>
                </div>


            </div>

            {/*Tablet view*/}
            <div className="hidden sm:block lg:hidden">
                <div className="flex space-x-2 space-y-6">
                    <div className="justify-center h-70 bg-white border-gray-200 p-2 space-y-2 rounded-xl shadow-xl/20">
                        <img className="h-10" src="../src/assets/bar-chart.png" />
                        <h1 className="text-xl">Get Analytics</h1>
                        <p className="text-xs font-light">
                            Track every click, everywhere. See real-time data on who's clicking
                            your links — geographic breakdowns, device types, referral sources,
                            and peak traffic times. Turn raw clicks into actionable insights that
                            help you make smarter decisions.
                        </p>
                    </div>

                    <div className="justify-center h-70 bg-white border-gray-200 p-2 space-y-2 rounded-xl shadow-xl/20">
                        <img className="h-10" src="../src/assets/laptop-phone-icon.png" />
                        <h1 className="text-xl">Digital Experience</h1>
                        <p className="text-xs font-light">
                            Short links, big impressions. Customize your shortened URLs with branded domains and custom slugs
                            (e.g. yourbrand.co/launch). Make every link feel intentional and on-brand, whether it's in an email,
                            a bio, or a billboard.
                        </p>
                    </div>

                    <div className="justify-center h-70 bg-white border-gray-200 p-2 space-y-2 rounded-xl shadow-xl/20">
                        <img className="h-10" src="../src/assets/target-user-icon.png" />
                        <h1 className="text-xl">Know Your Audience</h1>
                        <p className="text-xs font-light">
                            Go beyond the click. Build audience profiles based on engagement patterns — see which content resonates,
                            when your audience is most active, and how different segments respond. Use that intelligence to refine
                            your campaigns over time.
                        </p>
                    </div>

                </div>

                <hr className="mt-10 ml-20 mr-20 h-0.5 border-transparent bg-[#76A6BA]" />

                <div className="w-full flex justify-center">
                    <h1 className="text-3xl font-regular pt-6">How It Works</h1>
                </div>

                <div className="flex space-x-2 mt-5">
                    <div className="justify-center h-43 w-100 bg-white border-gray-200 p-2 space-y-2 rounded-xl shadow-xl/20">
                        <h1 className="text-lg mt-2">Paste Your Link</h1>
                        <p className="text-xs font-light">
                            Copy any long URL and drop it into the input field. 
                            It doesn't matter how long or messy it is — we'll handle the rest.
                        </p>
                    </div>

                    <div className="justify-center h-43 w-100 bg-white border-gray-200 p-2 space-y-2 rounded-xl shadow-xl/20">
                        <h1 className="text-lg mt-2">Shorten & Customize</h1>
                        <p className="text-xs font-light">
                            Instantly generate a clean, shortened link. Want it to feel on-brand?
                            Add a custom slug or connect your own domain to make it truly yours.
                        </p>
                    </div>

                    <div className="justify-center h-43 w-100 bg-white border-gray-200 p-2 space-y-2 rounded-xl shadow-xl/20">
                        <h1 className="text-lg mt-2">Share & Track</h1>
                        <p className="text-xs font-light">
                            Share your link anywhere — social media, emails, SMS, or print. 
                            Then watch real-time analytics roll in: who clicked, where they're from, 
                            and what device they used.
                        </p>
                    </div>

                </div>

            </div>


            {/*Desktop view*/}
            <div className="hidden lg:block">
                <div className="flex w-auto justify-center space-x-5 space-y-6">
                    <div className="justify-center h-80 bg-white border-gray-200 p-4 space-y-2 rounded-xl shadow-xl/20">
                        <img className="h-10" src="../src/assets/bar-chart.png" />
                        <h1 className="text-2xl">Get Analytics</h1>
                        <p className="w-70 font-light">
                            Track every click, everywhere. See real-time data on who's clicking
                            your links — geographic breakdowns, device types, referral sources,
                            and peak traffic times. Turn raw clicks into actionable insights that
                            help you make smarter decisions.
                        </p>
                    </div>

                    <div className="justify-center h-80 bg-white border-gray-200 p-4 space-y-2 rounded-xl shadow-xl/20">
                        <img className="h-10" src="../src/assets/laptop-phone-icon.png" />
                        <h1 className="text-2xl">Digital Experience</h1>
                        <p className="w-70 font-light">
                            Short links, big impressions. Customize your shortened URLs with branded domains and custom slugs
                            (e.g. yourbrand.co/launch). Make every link feel intentional and on-brand, whether it's in an email,
                            a bio, or a billboard.
                        </p>
                    </div>

                    <div className="justify-center h-80 bg-white border-gray-200 p-4 space-y-2 rounded-xl shadow-xl/20">
                        <img className="h-10" src="../src/assets/target-user-icon.png" />
                        <h1 className="text-2xl">Know Your Audience</h1>
                        <p className="w-70 font-light">
                            Go beyond the click. Build audience profiles based on engagement patterns — see which content resonates,
                            when your audience is most active, and how different segments respond. Use that intelligence to refine
                            your campaigns over time.
                        </p>
                    </div>

                </div>

                <hr className="mt-10 ml-20 mr-20 h-0.5 border-transparent bg-[#76A6BA]" />

                <div className="w-full flex justify-center">
                    <h1 className="text-3xl font-regular pt-6">How It Works</h1>
                </div>

                <div className="flex w-auto justify-center space-x-5 space-y-6 pt-5">
                    <div className="h-60 bg-white border-gray-200 p-4 space-y-2 rounded-xl shadow-xl/20">
                        {/* <img className="h-10" src="../src/assets/bar-chart.png"/> */}
                        <p className="text-2xl pt-5">Paste Your Link</p>
                        <p className="w-70 font-light">
                            Copy any long URL and drop it into the input field.
                            It doesn't matter how long or messy it is — we'll handle the rest.
                        </p>
                    </div>

                    <div className="h-60 bg-white border-gray-200 p-4 space-y-2 rounded-xl shadow-xl/20">
                        {/* <img className="h-10" src="../src/assets/laptop-phone-icon.png"/> */}
                        <p className="text-2xl pt-5">Shorten & Customize</p>
                        <p className="w-70 font-light">
                            Instantly generate a clean, shortened link. Want it to feel on-brand?
                            Add a custom slug or connect your own domain to make it truly yours.
                        </p>
                    </div>

                    <div className="h-60 bg-white border-gray-200 p-4 space-y-2 rounded-xl shadow-xl/20">
                        {/* <img className="h-10" src="../src/assets/target-user-icon.png"/> */}
                        <h1 className="text-2xl pt-5">Share & Track</h1>
                        <p className="w-70 font-light">
                            Share your link anywhere — social media, emails, SMS, or print.
                            Then watch real-time analytics roll in: who clicked, where they're from,
                            and what device they used.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Details
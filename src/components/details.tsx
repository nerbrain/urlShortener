const Details = () => {
    return(

        <div className="p-5">
            {/*Mobile view*/}
            <div className="sm:hidden flex flex-col items-center space-y-6">
                <div className="justify-center w-auto bg-white border-gray-200 p-10 space-y-2 rounded-xl shadow-xl/20">
                    <img className="h-10" src="../src/assets/bar-chart.png"/>
                    <h1 className="text-2xl">Get Analytics</h1>
                    <p className="text-sm font-light">
                        Track every click, everywhere. See real-time data on who's clicking 
                        your links — geographic breakdowns, device types, referral sources, 
                        and peak traffic times. Turn raw clicks into actionable insights that 
                        help you make smarter decisions.
                    </p>
                </div>

                <div className="justify-center w-auto bg-white border-gray-200 p-10 space-y-2 rounded-xl shadow-xl/20">
                    <img className="h-10" src="../src/assets/laptop-phone-icon.png"/>
                    <h1 className="text-2xl">Digital Experience</h1>
                    <p className="text-sm font-light">
                        Short links, big impressions. Customize your shortened URLs with branded domains and custom slugs 
                        (e.g. yourbrand.co/launch). Make every link feel intentional and on-brand, whether it's in an email,
                        a bio, or a billboard.
                    </p>
                </div>

                <div className="justify-center w-auto bg-white border-gray-200 p-10 space-y-2 rounded-xl shadow-xl/20">
                    <img className="h-10" src="../src/assets/target-user-icon.png"/>
                    <h1 className="text-2xl">Know Your Audience</h1>
                    <p className="text-sm font-light">
                        Go beyond the click. Build audience profiles based on engagement patterns — see which content resonates,
                        when your audience is most active, and how different segments respond. Use that intelligence to refine 
                        your campaigns over time.
                    </p>
                </div>

            </div>

            {/*Tablet view*/}
            <div className="hidden sm:flex lg:hidden space-x-2 space-y-6">
                <div className="justify-center h-70 bg-white border-gray-200 p-2 space-y-2 rounded-xl shadow-xl/20">
                    <img className="h-10" src="../src/assets/bar-chart.png"/>
                    <h1 className="text-xl">Get Analytics</h1>
                    <p className="text-xs font-light">
                        Track every click, everywhere. See real-time data on who's clicking 
                        your links — geographic breakdowns, device types, referral sources, 
                        and peak traffic times. Turn raw clicks into actionable insights that 
                        help you make smarter decisions.
                    </p>
                </div>

                <div className="justify-center h-70 bg-white border-gray-200 p-2 space-y-2 rounded-xl shadow-xl/20">
                    <img className="h-10" src="../src/assets/laptop-phone-icon.png"/>
                    <h1 className="text-xl">Digital Experience</h1>
                    <p className="text-xs font-light">
                        Short links, big impressions. Customize your shortened URLs with branded domains and custom slugs 
                        (e.g. yourbrand.co/launch). Make every link feel intentional and on-brand, whether it's in an email,
                        a bio, or a billboard.
                    </p>
                </div>

                <div className="justify-center h-70 bg-white border-gray-200 p-2 space-y-2 rounded-xl shadow-xl/20">
                    <img className="h-10" src="../src/assets/target-user-icon.png"/>
                    <h1 className="text-xl">Know Your Audience</h1>
                    <p className="text-xs font-light">
                        Go beyond the click. Build audience profiles based on engagement patterns — see which content resonates,
                        when your audience is most active, and how different segments respond. Use that intelligence to refine 
                        your campaigns over time.
                    </p>
                </div>

            </div>

            {/*Desktop view*/}
            <div className="hidden lg:block pl-25 pr-25">
                <div className="flex w-auto justify-center space-x-5 space-y-6">
                <div className="justify-center h-80 bg-white border-gray-200 p-4 space-y-2 rounded-xl shadow-xl/20">
                    <img className="h-10" src="../src/assets/bar-chart.png"/>
                    <h1 className="text-2xl">Get Analytics</h1>
                    <p className="w-70 font-light">
                        Track every click, everywhere. See real-time data on who's clicking 
                        your links — geographic breakdowns, device types, referral sources, 
                        and peak traffic times. Turn raw clicks into actionable insights that 
                        help you make smarter decisions.
                    </p>
                </div>

                <div className="justify-center h-80 bg-white border-gray-200 p-4 space-y-2 rounded-xl shadow-xl/20">
                    <img className="h-10" src="../src/assets/laptop-phone-icon.png"/>
                    <h1 className="text-2xl">Digital Experience</h1>
                    <p className="w-70 font-light">
                        Short links, big impressions. Customize your shortened URLs with branded domains and custom slugs 
                        (e.g. yourbrand.co/launch). Make every link feel intentional and on-brand, whether it's in an email,
                        a bio, or a billboard.
                    </p>
                </div>

                <div className="justify-center h-80 bg-white border-gray-200 p-4 space-y-2 rounded-xl shadow-xl/20">
                    <img className="h-10" src="../src/assets/target-user-icon.png"/>
                    <h1 className="text-2xl">Know Your Audience</h1>
                    <p className="w-70 font-light">
                        Go beyond the click. Build audience profiles based on engagement patterns — see which content resonates,
                        when your audience is most active, and how different segments respond. Use that intelligence to refine 
                        your campaigns over time.
                    </p>
                </div>

                </div>
            </div>

        </div>
        
    )
}

export default Details
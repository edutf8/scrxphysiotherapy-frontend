export default function Header() {
    return (
        <div className={"bg-white border-b-2 border-white"}>
            <div className={"max-w-7xl px-4 py-2 sm:px-6 lg:px-8 mx-auto"}>
                <div className={"flex justify-between items-center"}>

                    {/* Left Text Section */}
                    <div className={"text-left"}>
                        <p className={"mt-1 text-blue-600 font-medium"}>Portsmouth&#39;s Highest Rated Physiotherapy Clinic</p>
                    </div>

                    {/* Center Google Review Image */}
                    <div className={"flex justify-center"}>
                        <img
                            src="/googlereview.png"
                            alt="Google 5-star rating"
                            className="w-18 h-10" // Adjust size as needed
                        />
                    </div>

                    {/* Right Book Button */}
                    <div className={"text-right"}>
                        <a className={"py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium" +
                            " rounded-full border border-gray-200 bg-blue-500 text-gray-800 shadow-sm hover:bg-blue-700" +
                            " focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none text-white"}
                           href={"https://south-coast-rx-physiotherapy12.selectandbook.com/"}>
                            Book Today
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

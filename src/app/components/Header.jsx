export default function Header() {
    return (
        <div className={"bg-white border-b-2 border-white"}>
            <div className={"max-w-7xl px-4 py-2 sm:px-6 lg:px-8 mx-auto"}>
                <div className={"flex justify-between items-center"}>

                    <div className={"flex items-center gap-2"}>
                        <p className={"text-blue-600 font-medium"}>Portsmouth&#39;s Highest Rated Physiotherapy Clinic</p>
                        <img
                            src="/googlereview.png"
                            alt="Google 5-star rating"
                            className="w-18 h-10" // Adjust size as needed
                        />
                    </div>

                    <div>
                        <a className={"py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium" +
                            " rounded-full border border-gray-200 bg-blue-500 text-white shadow-sm hover:bg-blue-700" +
                            " focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"}
                           href={"https://south-coast-rx-physiotherapy12.selectandbook.com/"}>
                            Book Today
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

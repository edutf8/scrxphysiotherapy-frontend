import {BackgroundGradient} from "../ui/background-gradient";

export default function CallToAction() {
    return (
        <BackgroundGradient className={"container mx-auto justify-center items-center text-center p-5"}>
            <div className="relative flex flex-col justify-center items-center h-full text-white">
                <p className="mt-4 text-xl">South Coast Rx Physiotherapy<br/>We keep you doing the things you love</p>
                <h1 className="text-4xl sm:text-5xl font-bold uppercase pt-5">Take your next step with us <br/>Find Out
                    How
                    We Can Help You.</h1>
                <button className="mt-5 p-[3px] text-lg sm:text-xl md:text-xl relative w-1/2">
                    <div
                        className="px-8 py-2 bg-blue-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-white hover:text-black">
                        Book Today
                    </div>
                </button>
            </div>
        </BackgroundGradient>
    )
}
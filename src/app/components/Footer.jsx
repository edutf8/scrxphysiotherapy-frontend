import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="border-t-2 border-blue-500 p-3">
            <div
                className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm font-semibold text-center md:text-left">
                    <p className="uppercase">
                        &copy; {new Date().getFullYear()} South Coast Rx Physiotherapy. Designed by{" "}
                        <a href="https://www.edward-lewis.dev" className="hover:underline">
                            Edward Lewis
                        </a>.
                    </p>
                </div>
                <div className="flex space-x-4 justify-center md:justify-end">
                    <a href="mailto:southcoastrx@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                    <a href="https://instagram.com/scrxphysiotherapy">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href="/gdpr" className="hover:underline">
                        Privacy Notice
                    </a>
                    <a href="/faq" className="hover:underline">
                        FAQ
                    </a>
                    <a href="/contact" className="hover:underline">
                        Contact
                    </a>
                </div>
            </div>
        </footer>

    )
}
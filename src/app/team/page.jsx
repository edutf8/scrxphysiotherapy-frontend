import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Team() {
    return (
        <div className={"bg-white min-h-screen"}>
            <section id={"navigation"}>
                <Navbar/>
                <Header/>
            </section>
            <section id={"team"}>

            </section>
            <section id={"footer"}>
                <Footer />
            </section>
        </div>
    )
}
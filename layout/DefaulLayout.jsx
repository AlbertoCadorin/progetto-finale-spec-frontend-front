import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DefaultLayout = () => {
    return (
        <>
            <div className="d-flex flex-column min-vh-100 bg-light">
                <header>
                    <Navbar />
                </header>
                <main className="flex-grow-1">
                    <Outlet />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>

        </>
    );
};

export default DefaultLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DefaultLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <Outlet />
        </>
    );
};

export default DefaultLayout;

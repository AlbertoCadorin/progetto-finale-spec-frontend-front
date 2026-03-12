import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const Navbar = () => {

    const { wishlist } = useContext(GlobalContext);

    return (
        <nav className="navbar navbar-expand-lg nav-theme sticky-top">
            <div className="container">
                <div className="d-flex justify-content-between flex-lg-grow-0 px-2">
                    <NavLink className="navbar-brand" to="/">MyStore</NavLink>
                </div>
                <div className="d-flex justify-content-end flex-grow-1" >
                    <ul className="navbar-nav px-3">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/products" className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}>Contacts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/wishlist" className={({ isActive }) => `nav-link position-relative${isActive ? " is-active" : ""}`}>
                                Wishlist
                                {wishlist.length > 0 && (
                                    <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill wishlist-count">
                                        {wishlist.length}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

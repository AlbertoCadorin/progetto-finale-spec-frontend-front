import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand nav-color">
            <div className="container">
                <div className="d-flex justify-content-between flex-lg-grow-0 px-3">
                    <NavLink className="navbar-brand" to="/">MyStore</NavLink>
                </div>
                <div className="collapse navbar-collapse justify-content-end " >
                    <ul className="navbar-nav px-3">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/products" className="nav-link">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

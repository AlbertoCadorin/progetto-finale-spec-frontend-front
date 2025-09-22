import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ProductCard from "./ProductsCard";

const Wishlist = () => {
    // prendo la wishlist dal contesto globale
    const { wishlist } = useContext(GlobalContext);
    return (
        <div className="container mt-4">
            <h2>La mia Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>La tua wishlist è vuota.</p>
            ) : (
                <div className="row">
                    {wishlist.map(product => (
                        <div className="col-md-4" key={product.id}>
                            <ProductCard productId={product.id} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;

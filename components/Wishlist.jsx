import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ProductCard from "./ProductsCard";
import CompareBar from "./CompareBar";

const Wishlist = () => {
    const { wishlist, compare, toggleCompare } = useContext(GlobalContext);

    return (
        <div className="container py-4">
            <h2 className="mb-4">La tua Wishlist</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {wishlist.length > 0 ? (
                    wishlist.map(product => (
                        <div className="col" key={product.id}>
                            <ProductCard
                                productId={product.id}
                                isCompared={!!compare.find(p => p.id === product.id)}
                                toggleCompare={toggleCompare}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col">
                        <div className="alert alert-info text-center">
                            La wishlist è vuota.
                        </div>
                    </div>
                )}
            </div>
            <CompareBar />
        </div>
    );
};

export default Wishlist;

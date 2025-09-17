import ProductCard from "../components/ProductsCard";
import { useState, useCallback } from "react";

// funzione per il debounce
function debounce(call, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            call(value);
        }, delay);
    };
}

const ProductList = () => {

    const [searchTerm, setSearchTerm] = useState("");

    // uso useCallback per memorizzare la funzione debounce
    // in modo che non venga ricreata ad ogni render
    const debouncedSetSearchTerm = useCallback(
        debounce((value) => {
            setSearchTerm(value);
        }, 500),
        []
    );

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Product List</h1>
            <div className="d-flex mb-4 col-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                    onChange={(e) => debouncedSetSearchTerm(e.target.value)}
                />
            </div>

            <ProductCard searchTerm={searchTerm} />
        </div>
    );
};

export default ProductList;

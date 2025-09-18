import ProductCard from "../components/ProductsCard";
import { useState, useCallback } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

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

    // accedo al contesto globale per ottenere i prodotti
    const { products, loading, error } = useContext(GlobalContext);

    if (loading) return <p>Caricamento prodotto...</p>;
    if (error) return <p>Errore nel caricamento: {error.message || 'Errore sconosciuto'}</p>;

    const [searchTerm, setSearchTerm] = useState("");
    // uso useCallback per memorizzare la funzione debounce in modo che non venga ricreata ad ogni render
    const debouncedSetSearchTerm = useCallback(
        debounce((value) => {
            setSearchTerm(value);
        }, 500),
        []
    );

    // stato per l'ordinamento
    const [sortBy, setSortBy] = useState("title");
    const [sortDirection, setSortDirection] = useState("asc");

    // filtro e ordino i prodotti 
    const filteredProducts = (products || [])
        // filtro i prodotti in base al termine di ricerca
        .filter(product =>
            product.title.toLowerCase().includes((searchTerm || "").toLowerCase())
        )
        // ordino i prodotti in base alla chiave e alla direzione selezionata
        .sort((a, b) => {
            // confronto i valori in base alla direzione di ordinamento
            const aValue = a[sortBy].toLowerCase();
            const bValue = b[sortBy].toLowerCase();

            if (sortDirection === "asc") {
                return aValue.localeCompare(bValue);
            } else {
                return bValue.localeCompare(aValue);
            }
        });

    // funzione per gestire l'ordinamento
    const handleSort = (key) => {
        const newDirection = sortBy === key && sortDirection === "asc" ? "desc" : "asc";
        setSortBy(key);
        setSortDirection(newDirection);
    };


    return (
        <div className="container mt-4">
            <h1 className="mb-4">Product List</h1>
            <div className="mb-4 d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
                <div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search products..."
                        onChange={(e) => debouncedSetSearchTerm(e.target.value)}
                    />
                </div>
                <div>
                    <button className="btn btn-primary ms-2" onClick={() => handleSort("title")}>
                        Sort by Title {sortBy === "title" ? (sortDirection === "asc" ? "A-Z" : "Z-A") : ""}
                    </button>
                    <button className="btn btn-primary ms-2" onClick={() => handleSort("category")}>
                        Sort by Category {sortBy === "category" ? (sortDirection === "asc" ? "A-Z" : "Z-A") : ""}
                    </button>
                </div>

            </div>
            <ProductCard elements={filteredProducts} />
        </div>
    );
};

export default ProductList;

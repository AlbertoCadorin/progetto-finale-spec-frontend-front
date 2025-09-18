import ProductCard from "../components/ProductsCard";
import { useContext, useState, useCallback, useMemo } from "react";
import { GlobalContext } from "../context/GlobalContext";


function debounce(func, wait) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(value);
        }, wait);
    }
}

const ProductList = () => {

    // prendo i prodotti dal contesto globale
    const { products } = useContext(GlobalContext);
    // stato per la ricerca e l'ordinamento
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("name-asc");


    // funzione per gestire la ricerca con debounce
    const handleSearch = useCallback(debounce((value) => setSearchTerm(value), 500), []);
    const handleSort = (e) => {
        setSortOption(e.target.value);
    }

    // filtro e ordino i prodotti in base ai criteri di ricerca e ordinamento
    const filteredProducts = useMemo(() => {
        let filtered = products;

        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // ordino i prodotti in base all'opzione selezionata
        switch (sortOption) {
            case "name-asc":
                filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "name-desc":
                filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "category-asc":
                filtered = filtered.sort((a, b) => a.category.localeCompare(b.category));
                break;
            case "category-desc":
                filtered = filtered.sort((a, b) => b.category.localeCompare(a.category));
                break;
            default:
                break;
        }

        return filtered;
    }, [products, searchTerm, sortOption]);


    return (
        <div className="container mt-4">
            <h1>Product List</h1>
            <div>
                <input
                    type="text" placeholder="Cerca prodotto..."
                    onChange={(e) => handleSearch(e.target.value)}
                    className="form-control mb-3"
                />
            </div>
            <div>
                <select value={sortOption} onChange={handleSort} className="form-select mb-3">
                    <option value="default">Ordina</option>
                    <option value="name-asc">nome: A a Z</option>
                    <option value="name-desc">nome: Z a A</option>
                    <option value="category-asc">Categoria: A a Z</option>
                    <option value="category-desc">Categoria: Z a A</option>
                </select>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-3">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} productId={product.id} />
                    ))
                ) : (
                    <p>Nessun prodotto trovato</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;

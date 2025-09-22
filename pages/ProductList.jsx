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
    // stato per la categoria selezionata
    const [selectedCategory, setSelectedCategory] = useState("");



    // funzione per gestire la ricerca con debounce
    const handleSearch = useCallback(debounce((value) => setSearchTerm(value), 500), []);
    const handleSort = (e) => {
        setSortOption(e.target.value);
    }

    // funzione per gestire il cambiamento della categoria
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }


    // ottengo le categorie uniche dai prodotti
    const categories = useMemo(() => {
        if (!products) return [];
        return Array.from(new Set(products.map(p => p.category)));
    }, [products]);

    // filtro e ordino i prodotti in base ai criteri di ricerca e ordinamento
    const filteredProducts = useMemo(() => {
        let filtered = products;

        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory) {
            filtered = filtered.filter(product => product.category === selectedCategory);
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
    }, [products, searchTerm, sortOption, selectedCategory]);


    return (
        <div className="container mt-4">
            <h1>Product List</h1>
            <div className="mb-4">
                <input
                    type="text" placeholder="Cerca prodotto..."
                    onChange={(e) => handleSearch(e.target.value)}
                    className="form-control form-search mb-3"
                />
            </div>
            <div className="mb-4 d-flex flex-wrap gap-3">
                <div>
                    <label htmlFor="sort" className="form-label">Ordina per:</label>
                    <select value={sortOption} onChange={handleSort} className="form-select form-options mb-3">
                        <option value="name-asc">nome: A a Z</option>
                        <option value="name-desc">nome: Z a A</option>
                        <option value="category-asc">Categoria: A a Z</option>
                        <option value="category-desc">Categoria: Z a A</option>
                    </select>
                </div>
                <div>
                    <label className="form-label">Filtra per categoria:</label>
                    {categories.map(category => (
                        <div className="form-check" key={category}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="category"
                                id={`category-${category}`}
                                value={category}
                                checked={selectedCategory === category}
                                onChange={handleCategoryChange}
                            />
                            <label className="form-check-label" htmlFor={`category-${category}`}>
                                {category}
                            </label>
                        </div>
                    ))}
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            id="category-all"
                            value=""
                            checked={selectedCategory === ""}
                            onChange={handleCategoryChange}
                        />
                        <label className="form-check-label" htmlFor="category-all">
                            Tutte le categorie
                        </label>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
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

import { useState, useEffect } from "react";

export const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH;

// hook personalizzato per ottenere la lista dei prodotti
const useProducts = () => {
    // stato per i prodotti, il caricamento e l'errore
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // per fetchare la lista dei prodotti
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // inizio il caricamento
                setLoading(true);
                const response = await fetch(`${VITE_PUBLIC_PATH}/products`);
                if (!response.ok) throw new Error("Errore nel caricamento dei prodotti");
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err);
            } finally {
                // fine del caricamento
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return { products, loading, error };
}

export default useProducts;
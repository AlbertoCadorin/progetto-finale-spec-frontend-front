import { useState, useEffect } from "react";

export const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH;

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${VITE_PUBLIC_PATH}/products`);
                if (!response.ok) throw new Error("Errore nel caricamento dei prodotti");
                const data = await response.json();
                console.log(data);
                setProducts(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return { products, loading, error };
}

export default useProducts;
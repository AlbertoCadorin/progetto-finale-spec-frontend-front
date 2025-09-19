import { useState, useEffect } from "react";

const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH;

// hook personalizzato per ottenere i dettagli di un prodotto
const useProduct = (id) => {

    // stato per il prodotto, il caricamento e l'errore
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //per fetchare i dettagli del prodotto quando l'id cambia
    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                // inizio il caricamento
                setLoading(true);
                const res = await fetch(`${VITE_PUBLIC_PATH}/products/${id}`);
                if (!res.ok) throw new Error("Failed to fetch product");
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                setError(err);
            } finally {
                // fine del caricamento
                setLoading(false);
            }
        }
        fetchProduct();
    }, [id]);

    return { product, loading, error };
};

export default useProduct;
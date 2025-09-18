import { useState, useEffect } from "react";

const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH;

const useProduct = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${VITE_PUBLIC_PATH}/products/${id}`);
                if (!res.ok) throw new Error("Failed to fetch product");
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [id]);

    return { product, loading, error };
};

export default useProduct;
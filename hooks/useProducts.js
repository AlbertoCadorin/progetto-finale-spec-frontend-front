import { useState, useEffect } from "react";
export const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH;

export default function useProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`${VITE_PUBLIC_PATH}/products`);
            const data = await response.json();
            console.log(data);
            setProducts(data);
        };
        fetchProducts()
    }, []);
    return products
};

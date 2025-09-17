import { useState, useEffect } from "react";


export const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH;

// creazione hooks personalizato 
export default function useProducts() {

    // settare uno state 
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            // chiamata a l'url/products
            const response = await fetch(`${VITE_PUBLIC_PATH}/products`);
            // salvare la risposta.json in data 
            const data = await response.json();
            // controllare se ii dati che sono arrivati sono corretti
            console.log(data);
            setProducts(data);
        };
        fetchProducts()
    }, []);
    return products
};

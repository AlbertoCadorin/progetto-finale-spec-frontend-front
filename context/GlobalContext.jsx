import { createContext, useState } from "react";
import useProducts from "../hooks/useProducts";



// creo il contesto globale
export const GlobalContext = createContext();


const GlobalContextProvider = ({ children }) => {
    // utilizzo l'hook personalizzato per ottenere i prodotti
    const { products, loading, error } = useProducts();
    // stato per la wishlist
    const [wishlist, setWishlist] = useState([]);

    // funzione per aggiungere un prodotto alla wishlist
    const addToWishlist = (product) => {
        setWishlist((prev) => [...prev, product]);
    }

    // funzione per rimuovere un prodotto dalla wishlist
    const removeFromWishlist = (productId) => {
        setWishlist((prev) => prev.filter((p) => p.id !== productId));
    }

    // fornisco i prodotti a tutti i componenti figli tramite il contesto globale
    return (
        <GlobalContext.Provider value={{ products, loading, error, wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;

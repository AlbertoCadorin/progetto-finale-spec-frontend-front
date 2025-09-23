import { createContext, useState } from "react";
import useProducts from "../hooks/useProducts";



// creo il contesto globale
export const GlobalContext = createContext();


const GlobalContextProvider = ({ children }) => {

    // utilizzo l'hook personalizzato per ottenere i prodotti
    const { products, loading, error } = useProducts();
    // stato per la wishlist
    const [wishlist, setWishlist] = useState([]);
    // stato pper il confronto
    const [compare, setCompare] = useState([]);

    // funzione per aggiungere un prodotto alla wishlist
    const addToWishlist = (product) => {
        setWishlist((prev) => [...prev, product]);
    }

    // funzione per rimuovere un prodotto dalla wishlist
    const removeFromWishlist = (productId) => {
        setWishlist((prev) => prev.filter((p) => p.id !== productId));
    }

    // funzione per aggiungere un prodotto dal confronto
    const toggleCompare = (product) => {
        setCompare(prev => [...prev, product]);
    }

    // funzione per rimuovere un prodotto dal confronto
    const removeFromCompare = (id) => setCompare(prev => prev.filter(p => p.id !== id));

    // fornisco i prodotti a tutti i componenti figli tramite il contesto globale
    return (
        <GlobalContext.Provider value={{
            products,
            loading,
            error,
            wishlist,
            addToWishlist,
            removeFromWishlist,
            compare,
            toggleCompare,
            setCompare,
            removeFromCompare
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;

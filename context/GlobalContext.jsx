import { createContext } from "react";
import useProducts from "../hooks/useProducts";


// creo il contesto globale
export const GlobalContext = createContext();


const GlobalContextProvider = ({ children }) => {
    // utilizzo l'hook personalizzato per ottenere i prodotti
    const { products, loading, error } = useProducts();

    // fornisco i prodotti a tutti i componenti figli tramite il contesto globale
    return (
        <GlobalContext.Provider value={{ products, loading, error }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;

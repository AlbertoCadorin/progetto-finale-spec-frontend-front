import { createContext } from "react";
import useProducts from "../hooks/useProducts";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const products = useProducts();
    return (
        <GlobalContext.Provider value={{ ...products }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;

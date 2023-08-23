import { createContext,useContext } from "react";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products"

const AppProvider = ({children}) => {
    return(
        <AppContext.Provider value = {{API}}>
            {children}
        </AppContext.Provider>
    )

};

const useProductContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useProductContext}
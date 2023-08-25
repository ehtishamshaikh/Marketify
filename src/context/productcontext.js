import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext(); // create context

const API = "https://api.pujakaitem.com/api/products";

const initialState = { 
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); // use reducer

  const getProducts = async (url) => { //axios is like fetch but provides better formatted data
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []); //runs only once due to empty array

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>  //provide 
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);  //consume
};

export { AppProvider, useProductContext };
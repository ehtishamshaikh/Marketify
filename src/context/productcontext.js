import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext(); // create context

const API = "https://api.pujakaitem.com/api/products";

const initialState = { 
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [], //coz i all feature products hence array
  isSingleLoading: false,
  singleProduct: {},  //coz i need a single product
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); // use reducer

  const getProducts = async (url) => { 
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url); //axios is like fetch but provides better formatted data
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
      console.log(products);
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };


  // 2nd api
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
      
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });

    }
  };

  useEffect(() => {
    getProducts(API);
  }, []); //runs only once due to empty array

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct}}>
      {children}
    </AppContext.Provider>  //provide 
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);  //consume
};

export { AppProvider, useProductContext };
import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "highest",
  filters: {
    text : "",
    category: "All",
    company: "All",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },

};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };


  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  const sorting  = (event)=> {
    let userSortValue = event.target.value;
    dispatch({type: "GET_SORT_VALUE" , payload: userSortValue});
  };

  useEffect(() => {
    dispatch({type: "FILTER_PRODUCTS"})
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]) //load again as soon as sorting value is changed (by clicking it)

  const updateFilterValue =(event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({type: "UPDATE_FILTER_VALUE" , payload: {name, value}})
  };
  const clearfilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearfilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
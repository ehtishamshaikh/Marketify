const filterReducer = (state, action) => {

    switch(action.type) {

        case "LOAD_FILTER_PRODUCTS":  
        
        const priceData = action.payload.map((item) => {
            return item.price;
        })
        console.log(priceData);

        let maxPrice = Math.max(...priceData);

        return{
            ...state,
            filter_products: [...action.payload],
            all_products: [...action.payload],
            filters: {
                ...state.filters,
                maxPrice: maxPrice,
                price: maxPrice,
            }   
        }

        case "SET_GRID_VIEW":
        return{
            ...state,
            grid_view: true,
        }

        case "SET_LIST_VIEW":
            return{
                ...state,
                grid_view: false,
            }

        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            // // console.log(sort_value);

            return{
                ...state,
                sorting_value: action.payload,
            }

        case "SORTING_PRODUCTS":
            let newSortData;
            // let tempSortData = [...action.payload]; 

            const {filter_products} = state;
            let tempSortData = [...filter_products];

            const sortingProducts = (a, b) => {
                if (state.sorting_value === "lowest") {
                    return a.price - b.price;
                }

                if (state.sorting_value === "highest") {
                    return b.price - a.price;
                }
            }


            newSortData = tempSortData.sort(sortingProducts);

            return{
                ...state,
                filter_products: newSortData,
            }

            case "UPDATE_FILTER_VALUE":
                const {name, value} = action.payload;
                return{
                    ...state,
                    filters: {
                        ...state.filters,
                         [name]: value,
                    }
                }

            case "FILTER_PRODUCTS":
                let {all_products} = state;
                let tempFilterData = [...all_products];

                const {text, category, company, price} = state.filters;
                if(text) {
                    tempFilterData = tempFilterData.filter((product) => {
                        return product.name.toLowerCase().includes(text.toLowerCase())
                    })
                }

                if (category!=="All")
                {
                    tempFilterData = tempFilterData.filter((product) => {
                        return product.category === category;
                    })
                }
                if (company!=="All")
                {
                    tempFilterData = tempFilterData.filter((product) => {
                        return product.company === company;
                    })
                }
                if (price)
                {
                    tempFilterData = tempFilterData.filter((product) => {
                        return product.price <= price;
                    })
                }
                

                return{
                    ...state,
                    filter_products: tempFilterData,
                }

            case "CLEAR_FILTERS":
                return{
                    ...state,
                    filters: {
                        ...state.filters,
                        text: "",
                        category: "All",
                        company: "All",
                        price: 0,
                        
                    }
                }

        default: return state
    }

}
export default filterReducer;
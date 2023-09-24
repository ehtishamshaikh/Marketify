const cartReducer = (state, action)=> {
    switch (action.type) {

        case "ADD_TO_CART":
            let {id, color, amount, prodcut, total_item} = action.payload;
            // console.log(prodcut);
            
            let existingProduct = state.cart.find(
                (curItem) => curItem.id === id + color
              );
          
              if (existingProduct) {
                let updatedProduct = state.cart.map((curElem) => {
                  if (curElem.id === id + color) {
                    let newAmount = curElem.amount + amount;
          
                    if (newAmount >= curElem.max) {
                      newAmount = curElem.max;
                    }
                    return {
                      ...curElem,
                      amount: newAmount,
                    };
                  } else {
                    return curElem;
                  }
                });
                return {
                  ...state,
                  cart: updatedProduct,
                };
              } else {
                let cartProduct = {
                  id: id + color,
                  name: prodcut.name,
                  color,
                  amount,
                  image: prodcut.image[0].url,
                  price: prodcut.price,
                  max: prodcut.stock,
                };
          
                return {
                  ...state,
                  cart: [...state.cart, cartProduct],
                };
              }
            
        

        case "REMOVE_ITEM":
            let newCart = state.cart.filter((item)=> item.id !== action.payload)
            return {...state, cart: newCart,
                total_item: state.total_item - 1}


      default: return state
    }
}
export default cartReducer;
import React, { useContext } from 'react'
import FormatPrice from '../Helpers/FormatPrice'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context';

const CartItem = ({id, name, image , color, price , amount}) => {

  const {removeItem} =useCartContext();
  return (
    <div className='cart_heading grid grid-five-column'>
      <div className='cart-image--name'>
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className='color-div'>
            <p>Color: </p>
            <div className='color-style' style={{backgroundColor: color, color:color}}></div>
          </div>
        </div>
      </div>
      {/* price */}
      <div className='cart-hide'>
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      {/* //Quantity */}
    <div>{amount}</div>
{/* 
      subtotal */}
      <div className='cart-hide'>
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      {/* remove */}
      <FaTrash className='remove_icon' onClick={() => removeItem(id)}/>
    </div>
  )
}

export default CartItem
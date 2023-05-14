import React from 'react'
import { NavLink } from 'react-router-dom'

const CartBtn = () => {
 return (
   <>
     <NavLink to="/" className="btn btn-outline-dark ms-2" variant="warning">
       <i className="fa fa-shopping-cart me-1"></i>Cart (0)
     </NavLink>
   </>
 )
}

export default CartBtn


import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = (props) => {
    // const cartElements = [

    //     {
        
    //     title: 'Colors',
        
    //     price: 100,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
    //     quantity: 2,
        
    //     },
        
    //     {
        
    //     title: 'Black and white Colors',
        
    //     price: 50,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
    //     quantity: 3,
        
    //     },
        
    //     {
        
    //     title: 'Yellow and Black Colors',
        
    //     price: 70,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
    //     quantity: 1,
        
    //     }
        
    //     ]
  return (
    <div className='cartContainer'>
      {props.cart.map((item,index)=>(
        <div className='cart grid grid-five-column '>
            <div className='title mx-3'>Title:-{item.title}</div>
            <div className='price mx-3'>Price:-{item.price}</div>
            <img src={item.imageUrl} className='imageCart'></img>
            <div className='quantity mx-3'>Quantity:-{item.quantity}</div>
            <button className='button btn-danger mx-1 mt-1'>Remove</button>
        </div>
       
      ))}
      <div>
        <span>Total Amount:-</span>
      <span>1999/-</span>
      <button className='button btn-warning mx-1'>Confirm Order</button>
      </div>

    </div>
  )
}

export default Cart

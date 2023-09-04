import React from 'react'
import './Store.css'
import StoreHeading from './StoreHeading'
import Footer from '../../Footer'
const Store = (props) => {
    
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    
    
    
    
    
  return (
    <div>
    <StoreHeading/>
    <div className='itemcontainer'>
   {productsArr.map((item,index)=>(
    <div key={index}>
    <h5 className='title'>{item.title}</h5>
    <img src={item.imageUrl} className='image'></img>
    <div>
    <h4 className='price'>{item.price}</h4>
    <button className='btn btn-warning' onClick={()=>props.addToCart(item)}>ADD TO CART</button>
    </div>
    
    </div>
    
   ))} 
    </div>
    <Footer/>
    </div>
  )
}

export default Store

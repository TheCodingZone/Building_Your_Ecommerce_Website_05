import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = (props) => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">The Generics</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/Home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/About">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Store">Store</Link>
      </li>
     
    </ul>
  </div>
  <Link to='/Cart' className="cart">
    
    <div className='cartHeading'>YOUR CART</div>
    

    <img src="https://e7.pngegg.com/pngimages/600/348/png-clipart-shopping-cart-online-shopping-shopping-cart-text-logo.png" alt="" srcset="" className='logo'/>
    <div className='items'>{props.cart.length}</div>
    </Link>
 
</nav>
    </div>
  )
}

export default Header

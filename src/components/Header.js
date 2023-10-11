import React from 'react'
import logo from './images/logo.png'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='row'>
        <div className='col-md-2 head'>
        <img src={logo} alt='no' id="logo"/> 
        </div>
        <div className='col-md-6 menu'>
          <ul>
           <Link to='/Mobiles'> <li><b>MOBILE</b></li></Link>
            <li><b>LAPTOPS</b></li>
            <li><b>MEDICIN</b></li>
            <li><b>PERFUMES</b></li>
            <li><b>HOME</b></li>
            <li style={{color:'red'}}><b>OFFERS</b></li>
            <li style={{color:'red'}}><b>VMART</b></li>
          </ul>
        </div>
        <div className='col-md-4 icon'>
          <i className='fa fa-pencil' style={{fontSize:'150%' ,marginTop:'10px',marginLeft:'110px'}}></i>
          <i className='fa fa-search' style={{fontSize:'150%' ,margin:'10px 0px 0px 85px'}}></i>
          <i className='fa fa-shopping-cart' style={{fontSize:'150%' ,margin:'10px 0px 0px 65px'}}></i>
          <i className='fa fa-user' style={{fontSize:'150%' ,margin:'10px 0px 0px 70px'}}></i>
          <ul>
            <li>SCRAPBOOK</li>
            <li>SEARCH</li>
            <li>CART</li>
            <li>PROFILE</li>
          </ul>

          
        </div>
        </div>
  )
}
export default Header;
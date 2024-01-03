import React, { useContext } from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'
import Maincontext from '../context/context'

const Card = ({item}) => {
    const{deleteHandler,addToWishlist}=useContext(Maincontext)
  return (
    
    <div className='card'>
      <div className='img'>
        <img src={item.images} alt="" />
      </div>
      <div>
       <Link style={{color:'red',fontSize:'23px'}} to={`/${item._id}`}>{item.name}</Link> 
      </div>
      <div>
        {item.desci}
      </div>
      <div className='butt'>
        <div>
            <a onClick={()=>{
                addToWishlist(item)
            }} class="btn41-43 btn-41">
  Wishlist
</a> 
        </div>
        <div>
        <a onClick={()=>{
            deleteHandler(item._id)
        }}  class="btn41-43 btn-41">
  Delete
</a> 
        </div>
       
      </div>
      
     

    </div>
  )
}

export default Card
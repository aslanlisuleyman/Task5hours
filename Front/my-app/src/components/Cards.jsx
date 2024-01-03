import React, { useContext } from 'react'
import Maincontext from '../context/context'
import Card from './Card'
import "./Cards.css"

const Cards = () => {
const {filter,searchHandler} = useContext (Maincontext);

  return (
    <div>
        <div className='bas'>
              <h1>ABOUT OUR BIZPRO</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        </div>
       
       <div>

        
       </div>
        <div class="input__container">
  <div class="shadow__input"></div>
  <button class="input__button__shadow">
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
      <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fill-rule="evenodd" fill="#17202A"></path>
    </svg>
  </button>
  <input onChange={(e) => {
        searchHandler(e.target.value)}} type="text" name="text" class="input__search" placeholder="What do you want to search?"/>
</div>





        
       <div className='cardlar'>

         {filter.map((item, index)=>(
                <Card key={index} item={item}/>
        ))
        }
       </div>
       
    </div>
  );
}

export default Cards;
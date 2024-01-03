import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Add from "./pages/Add";
import WishList from "./pages/WishList";
import Detail from "./pages/Detail";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import axios from "axios"
import Maincontext from "./context/context";
import swal from 'sweetalert2';

function App() {

const[data,setData]=useState([])
const[error,setError]=useState("")
const[loading,setLoading]=useState(true)
const[filter,setFilter]=useState([])
const [wishListItems,setWishlistItems]=useState(localStorage.getItem("wishlistItems")?JSON.parse(localStorage.getItem("wishlistItems")):[])

const addToWishlist=(item)=>{
  const target=wishListItems.find(wishlistItem=>wishlistItem._id==item._id)
  if(target){
    swal.fire({
      title: "xəta!",
      text: "Siz bu məhsulu wishlistə əlavə etmisiniz!",
      icon: "error"
    });
  }
  else{
    setWishlistItems([...wishListItems,item])
  localStorage.setItem("wishlistItems",JSON.stringify([...wishListItems,item]))
  toast.success('Wishlistə əlavə olundu')
  }
  

}

const removeFromWishlist=(id)=>{
  const item =wishListItems.find(item=>item._id==id)
  wishListItems.splice(wishListItems.indexOf(item),1)
  setWishlistItems([...wishListItems])
  localStorage.setItem("wishlistItems",JSON.stringify([...wishListItems]))
}

const handleDelete=()=>{
  setWishlistItems([])
  localStorage.removeItem("wishlistItems")
}

const handleFilter=()=>{
  setFilter([...data.sort((a,b)=>
    b.name-a.name
  )])
}
const searchHandler=(searchValue)=>{
  if(searchValue){
    setFilter([...data.filter(item=>item.name.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
  }
  else{
    setFilter([...data])
  }
}
const deleteHandler=(id)=>{
  axios.delete(`http://localhost:8087/product/${id}`).then(res=>{
    setData([...res.data])
    setFilter([...res.data])
    toast.success('Bu məhsul APİ-dən silindi')
  })
}



useEffect(()=>{
  axios.get("http://localhost:8087/product").then(res=>{
    setData(res.data)
    setFilter(res.data)
    setLoading(false)
  }).catch(error=>{
    setLoading(false)
    setError(error)
  })

},[])

const datas ={
  data,setData,
  error,setError,
  loading,setLoading,
  filter,setFilter,
  handleFilter,searchHandler,deleteHandler,addToWishlist,removeFromWishlist,handleDelete,
  wishListItems,setWishlistItems
}


  return (
    <Maincontext.Provider value={datas} >
      <BrowserRouter>
      
      <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/add" element={<Add/>}/>
     <Route path="/wishlist" element={<WishList/>}/>
     <Route path="/:id" element={<Detail/>}/>
      </Routes>
   
      </BrowserRouter>
     
    </Maincontext.Provider>
  );
}

export default App;

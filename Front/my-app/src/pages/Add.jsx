import React from 'react'
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import axios from 'axios';
const Add = () => {
  const formik = useFormik({
    initialValues: {
      images: '',
      name: '',
      desci: '',
    },
    onSubmit:( values,{resetForm}) => {
      if(!values.images || !values.name || !values.desci){
        toast.error("Zəhmət olmasa boşluqları doldurun");
        return;
        
      }
      axios.post('http://localhost:8087/product', { ...values })
        .then(res => {
          console.log(res);
          resetForm();
          toast.success("Uğurla əlavə olundu");
        })
    },
  });
  return (
    <div style={{width:'450px',paddingBottom:'100px',paddingRight:'100px',marginLeft:"33%"}} >
      

       <form style={{display:'flex',flexDirection:"column",marginLeft:'16%',paddingTop:'45%',boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"}} onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Images</label>
      <input
        id="images"
        name="images"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.images}
        style={{width:"400px",height:'27px'}}
      />
      <label htmlFor="lastName"> Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        style={{width:"400px",height:'27px'}}
      />
      <label htmlFor="email">Description</label>
      <input
        id="desci"
        name="desci"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.desci}
        style={{width:"400px",height:'27px'}}
      />
      <button style={{width:'200px',height:"30px",marginTop:'15px',marginLeft:'100px'}} type="submit">Submit</button>
    </form>
    </div>
   
  );
}

export default Add
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import style from './Dynamicprofile.module.css'
import { Link } from 'react-router-dom'
function Dynamicprofile() { 

 
    let[state, setState]=useState({
         firstName:"", 
         lastName:"", 
         age:"",
         email:"",
         gender:"" , 
         work:"" ,
         device:"", 
         spirit:""
    }) 
    let{ firstName , lastName , age , email , gender , work , device , spirit } = state ;

   let  handleSubmit=(e)=>{
       e.preventDefault() 
       axios.post('http://localhost:3000/user' , state).then((res)=>{
                     console.log(res.data)
       }).catch(()=>{
              console.log('data is not sended to backend')
       })
   } 

   let handleChange=(e)=>{
        let{name, value}=e.target ;
        setState({...state,[name]:value})
   }
  return (
    <div className={style.mainCont}>  
           <h1 className={style.headTitle}>Create your Profile Now </h1>
        <form className={style.formCont}  onSubmit={handleSubmit}> 
         <table className={style.innerCont}>
             <tr>
                <td> <label htmlFor=""  className={style.label}> fist name</label><input type="text" className={style.inpCont} name='firstName' value={firstName} onChange={handleChange} /></td>
                 <td> <label htmlFor="" className={style.label}>last Name </label><input type="text" className={style.inpCont} name='lastName' value={lastName} onChange={handleChange} /></td>
             </tr>  
                <tr>
             <label htmlFor="" className={style.label}> email</label>  
             <input className={style.inpCont} type="email" name='email' value={email} onChange={handleChange} />
             </tr> 
             <label htmlFor="" className={style.label}>Age :-</label> 
             <input id={style.age} type="Number" className={style.inpCont} max={60} min={0} name='age' value={age} onChange={handleChange}/>
        
             <div className={style.label} onChange={handleChange} name="gender" value={gender}> gender:- <br />
            <input type="radio" name="gender" value="male"/>male  &nbsp;
            <input type="radio"  name="gender" value="female" />female &nbsp;
            <input type="radio"  name="gender" value="others"/>others  &nbsp;
        </div>  
            <div  >
                <label htmlFor="" className={style.label}> Work   </label> <input type="text" className={style.inpCont} list='gammer' name='work' value={work} onChange={handleChange} />
               <datalist id='gammer'>
               <option value="full-time">full-time</option>
               <option value="part-time">part-time</option>
               <option value="none">none</option>
              </datalist>
            </div>   
            <tr>
                 <label htmlFor="" className={style.label} >Device </label> 
                <input className={style.inpCont} type="text" name='device' value={device}   onChange={handleChange} /> 
                </tr>
           <tr>
                 <td>
                 <label htmlFor="" className={style.label}> Spirit </label>  <input type="text" className={style.inpCont} list='spirit' name='spirit' value={spirit} onChange={handleChange} /> 
                  <datalist id='spirit' > 
                 <option value="raccon"></option>
                 <option value="Gogo"></option>
                 <option value="hubertus"></option>
                 <option value="moyo"></option>
                 <option value="Tien"></option>
                 <option value="Axar"></option>
             </datalist>
                 </td>
           </tr>

             <Link to='/'> 
             <button className={style.sub_btn} >Submit</button> 
                   </Link>
              </table>
        </form>  
    </div>
  )
}

export default Dynamicprofile
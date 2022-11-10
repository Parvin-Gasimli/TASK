
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router";


const Login = () => {
    const[name,Setname]=useState()
    const [password,setPasssword]=useState()
    const navigate=useHistory()
    const URl="https://demoblog.afeagroup.com/user/register/"
    var data = new FormData();
    data.append("name", name);
    data.append("password", password);
   
    
   const handleSubmit=()=>{
    axios({
        method: "post",
        url: URl,
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(res=>
            console.log(res)
            )
        .catch( (response)=>
         
          console.log(response)
       )

       setPasssword("")
       Setname("")
       navigate.push("/home")

   }

  
  return (

    <div className='container'>
        <div className='row justify-content-center align-items-center mt-5'>
            <div className='col-lg-6'>
                <h2 style={{padding:"10px 0px",textAlign:'center'}}>Login</h2>
                <label htmlFor='name'> </label>
                <input placeholder='name' type="text" name="name" value={name} onChange={(e)=>Setname(e.target.value)}/>
                <label htmlFor='password'> </label>
                <input placeholder='password' type="password" name="password" value={password} onChange={(e)=>setPasssword(e.target.value)}/>
                <label htmlFor='cfpassword'> </label>
               
                <button onClick={handleSubmit} type="submit">Login</button>
                
            </div>
            
        </div>

    </div>
  )
}

export default Login
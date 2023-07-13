// // import React from 'react'
// // import Navbar from '../../COMPONENTS/Navbar/Navbar'
// // import {useNavigate, Link } from 'react-router-dom'
// // import './AuthPage.css';
// // import axios from "axios"
// // import { useState } from 'react';

// // // function Signup() {
// // //     const[username,setUsername]=useState('');
// // //     const[password,setPassword]=useState('');
 
// // //      async function register(event){
// // //          event.preventDefault();
// // //          const response=await fetch('http://localhost:4000/signup',{
// // //              method:'POST',
// // //              headers:{'Content-Type':'application/json'},
// // //              body:JSON.stringify({username,password})
// // //          });
// // //          if(response.status===200){
// // //              alert('register success  ')
// // //           }else{
// // //              alert('Register failed')
// // //           }
// // //      }
// // function Signup() {    
// //              const history=useNavigate();

// //     const [username,setUsername]=useState('')
// //     const [password,setPassword]=useState('')

// //     async function submit(e){
// //         e.preventDefault();

// //         try{

// //             await axios.post("http://localhost:4000/signup",{
// //             username,password
// //             })
// //             .then(res=>{
// //                 if(res.data==="exist"){
// //                     alert("User already exists")
// //                 }
// //                 else if(res.data==="notexist"){
// //                     history("/home",{state:{id:username}})
// //                 }
// //             })
// //             .catch(e=>{
// //                 alert("wrong details")
// //                 console.log(e);
// //             })

// //         }
// //         catch(e){
// //             console.log(e);

// //         }

// //     }

// // return (
// //     <div className='authpage'>
// //         <Navbar reloadnavbar={false}/>

// //         <div className='authcont'>
// //             <img src='https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60' alt='signup' />
        
// //             <form className='authform' onSubmit={submit()}>
// //                 <h1>Signup</h1>
// //                 <div className='form-group-row'>
// //                     <div className='formgroup'>
// //                         <label htmlFor='fname'>UserName</label>
// //                         <input type='text' id='fname'
// //                          value={username}
// //                         onChange={event=>setUsername(event.target.value)}
// //                         />
// //                     </div>
// //                 </div>
// //                 <div className='form-group-row'>
// //                 <div className='formgroup'>
// //                     <label htmlFor='password'>Password</label>
// //                     <input type='password' id='password'
// //                      value={password}
// //                      onChange={event=>setPassword(event.target.value)}
// //                     />
// //                 </div>
               
// //                 </div>

// //                 <Link to='/forgotpassword'
// //                     className='stylenone'>
// //                     <p>Forgot Password?</p>
// //                 </Link>
// //                 {/* <Link to='/' className='stylenone'>
// //                     <button className='btn'>Login</button>
// //                 </Link>
// //                 <h2 className='or'>OR</h2> */}
// //                 <Link to='/signup' className='stylenone'>
// //                     <button className='btn'>Signup</button>
// //                 </Link>
// //             </form>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Signup

import {useState} from "react";
import { Navigate,Link, useNavigate } from "react-router-dom";
import './signup.css'
export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
      navigate('/login');
    } else {
      alert('registration failed');
      
    }
  }
  return (
    <div className="full">
      
      <form className="authform" onSubmit={register}>
      <h1>Register</h1>
      <div className="input_area">
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
             <br/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
             <br/>
      <button className='btn'>Register</button>
      </div>
      
    </form>
    </div>
    
  );
}


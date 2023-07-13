// import { useState } from "react";
// import{Navigate} from "react-router-dom";
// import {auth} from "./firebase";
// import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
// export default function LoginPage () {
//     const[username,setUsername]=useState('');
//     const[password,setPassword]=useState('');
//     // const[redirect,setredirect]=useState(false);
    
//     // async function login(event){
//     //     event.preventDefault();
//     //     const response =await fetch('http://localhost:4000/login',{
//     //         method:'POST',
//     //         headers:{'Content-Type':'application/json'},
//     //         body:JSON.stringify({username,password}),
//     //         credentials:'include',
//     //     })
//     //     if(response.ok){
//     //         setredirect(true);
            
//     //     }
//     //     else{
//     //         alert('Invalid');
//     //     }
//     // }
//     // if(redirect){
//     //      return <Navigate to={'/'}/>
//     //    // return window.location.href = 'http://localhost:5175/'
//     // }
//     // Inside your component
//     const handleSignInWithPopup = async () => {
//       try {
//         const provider = new GoogleAuthProvider();
//         await auth().signInWithPopup(provider);
//         <Navigate to={'/'}/>
//       } catch (error) {
//         alert('not logged')
//       }
//     };
  
//     return (
//       <div>
//       <button onClick={handleSignInWithPopup}>Sign In with Google</button>
//     </div>
//     );
// }

import './login_.css'
import { useState} from "react";
import {Navigate} from "react-router-dom";
// import {UserContext} from "./UserContext";


export default function LoginPage() {
  
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  // const {setUserInfo} = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        // setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    console.log("hi")
    return <Navigate to={'/home'} />
  }
  return (
    <div className="full">
      <form className="authform" onSubmit={login}>
      <h1>Login</h1>
      <div className='input_area'>
      <br/>
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
      <button className='btn'>Login</button>
      </div>
    </form>
    </div>
    
  );
}
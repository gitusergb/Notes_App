import React from "react";
import  { useState } from 'react';
import styled from "styled-components";

export const Signup= () => {
const [username,setUsername]=useState(" ");
const [email,setEmail]=useState(" ");
const [password,setPassword]=useState(" ");
    // const [formData, setFormData] = useState({
    //     username:'',
    //     email:'',
    //     password:'',
    //   });
      // const handleInputChange = (e) => {
      //   const { name, value } = e.target;
      //   setFormData({
      //     ...formData,
      //     [name]: value,
      //   });
      // };
    
      const handleSubmit = async() => {
          const payload={
            username,email,password
          }
       // e.preventDefault();
        console.log(payload)
       //console.log()
       fetch("https://notes-server-o8j5.onrender.com/users/register",{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
     
       }).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))

   
      };
  return (

    <DIV>
        <h3>Sign Up </h3>
    <input data-testid="user-name"
    type="text" 
    name="username"
    value={username} 
    placeholder="User Name"
    onChange={(e)=>setUsername(e.target.value)}
    required/>
    <input  data-testid="user-email" 
      type="email"
      name="email"
       placeholder="Email" 
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       required/>
    <input  data-testid="user-password"
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required/>
    <button  onClick={handleSubmit} >Register</button>
    </DIV>
  );
};
const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
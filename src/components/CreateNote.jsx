import React from "react";
import  { useState } from 'react';
import styled from "styled-components";

export const CreateNote= () => {
const [title,setTitle]=useState("");
const [body,setBody]=useState("");
      const handleSubmit = async() => {
          const payload={
            title,body
          }
       // e.preventDefault();
        console.log(payload)
       //console.log()
       fetch("https://notes-server-o8j5.onrender.com/notes/create",{
        method:'POST',
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(payload)
     
       }).then(res=>res.json()).then(data=>{
        console.log(data)
       // localStorage.setItem("token",data.token)
       }).catch(err=>console.log(err))

   
      };
  return (

    <DIV>
        <h3>Create Note</h3>
 
    <input  data-testid="user-title" 
      type="text"
      name="title"
       placeholder="Title" 
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       required/>
    <input  data-testid="body"
        type="text"
        placeholder="Create Note.."
        name="body"
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        required/>
    <button  onClick={handleSubmit}>Create Note</button>
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
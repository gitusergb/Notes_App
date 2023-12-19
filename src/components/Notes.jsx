import { useEffect, useState } from "react"
import styled from "styled-components";

export const Notes=()=>{
    const [data ,setData]=useState([])
    useEffect(()=>{
        fetch("https://notes-server-o8j5.onrender.com/notes/",
        {
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            setData([...data])
           }).catch(err=>console.log(err))
    },[])
    return(
        <div>
            <h3>All Notes</h3>
            {data.map((ele)=>{
                return (
                    <DIV >
                        <h3>{ele.title}</h3>
                        <p>{ele.body}</p>
                        <LDIV >
                        <button
                        onClick={(()=>{

                        })}>Edit</button>
                        <button
                        onClick={(()=>{
                            fetch(`https://notes-server-o8j5.onrender.com/notes/delete/${ele._id}`,{
                                method:'DELETE',
                                headers:{
                                    "Content-type":"application/json",
                                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                                },
                               }).then(res=>res.json()).then(data=>{
                                // console.log(data)
                                setData([...data])
                               }).catch(err=>console.log(err))   
                            
                            
                        })}>Delete</button>
                        </LDIV>
                    </DIV>
                )
            })}
        </div>
    )
}
;
const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid gray;
  align-items: center;`;

const LDIV = styled.div`
    gap: 10px;
    font-size: larger;
    display: flex;

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
import { TextField } from '@fluentui/react';
import * as React from 'react';
import { useState,useCallback } from 'react';
const UseCallBackHooks:React.FC<{}>=()=>{
    const [name,setName]=useState<string>("");
    const [mail,setMail]=useState<string>("");

    const handleChange=useCallback((_:any,val?:string)=>{
        console.log("handle change called");
        setName(val||"");
        setMail(val||"");
    },[]);
    return(
        <>
        <p>Name:{name}</p>
        <TextField label="Name" onChange={handleChange} value={name}/>
        <p>Mail:{mail}</p>
        <TextField label="Mail" onChange={handleChange} value={mail}/>
        </>
    )
}
export default UseCallBackHooks
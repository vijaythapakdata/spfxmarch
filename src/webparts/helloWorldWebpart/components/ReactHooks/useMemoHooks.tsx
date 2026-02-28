import { TextField } from '@fluentui/react';
import * as React from 'react';
import { useMemo,useState } from 'react';

const UseMemoHooks:React.FC<{}>=()=>{
    const [name,setName]=useState<string>("");
    const greetings=useMemo(()=>{
console.log("greetings function called");
return `Hello ${name}`;
    },[name])
    return(
        <>
        <TextField label="Name" onChange={(_e,val)=>setName(val||"")} value={name}/>
        <p>{greetings}</p>
        </>
    )
}
export default UseMemoHooks;
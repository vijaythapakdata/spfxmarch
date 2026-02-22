import { PrimaryButton, TextField } from '@fluentui/react';
import * as React from 'react';
import { useState } from 'react';
const UseStateHooks:React.FC<{}>=()=>{
    const [count,setCount]=useState<number>(0);
    const [name,setName]=useState<string>("");
    const [isActive,setIsActive]=useState<boolean>(false);
const [fruits,setFruits]=useState<string[]>(["Apple","Banana","Orange"]);

    return(
        <>
        <p>Count Value:{count}</p>
        <PrimaryButton
        text='Count'
        onClick={()=>setCount(count+1)}
        />
        <p>Name:{name}</p>
        <TextField
        label='Name'
        value={name}
        onChange={(_,e)=>setName(e||"")}
        />
        <br/>
        {/* boolean state */}
        <PrimaryButton
        text={isActive?"Deactivate":"Activate"}
        onClick={()=>setIsActive(!isActive)}
        />
        <p>Status:{isActive?"Active":"Inactive"}</p>
        {/* array state */}
        <p>Fruits List</p>
        <ul>
            {fruits.map((fruit,index)=>(
                <li key={index}>{fruit}</li>
            ))}
        </ul>
        <br/>
        <PrimaryButton
        text='Add Fruit'
        onClick={()=>setFruits([...fruits,"Grapes"])}
        />
        </>
    )
}
export default UseStateHooks;
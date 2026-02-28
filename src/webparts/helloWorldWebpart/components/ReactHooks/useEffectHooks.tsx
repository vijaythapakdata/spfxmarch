import { PrimaryButton } from '@fluentui/react';
import * as React from 'react';
import { useEffect } from 'react';
const UseEffectHooks:React.FC<{}>=()=>{
    const [count,setCount]=React.useState<number>(0);

useEffect(()=>{
    console.log("Mounted or updated");

},[]);

    return(
        <>
        <p> Count:{count}</p>
        <PrimaryButton
        text='Count Number'
        onClick={()=>setCount(count+1)}
        />
        </>
    )
}
export default UseEffectHooks;
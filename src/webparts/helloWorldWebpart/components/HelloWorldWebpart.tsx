import * as React from 'react';
import styles from './HelloWorldWebpart.module.scss';
import type { IHelloWorldWebpartProps } from './IHelloWorldWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ChoiceGroup, Dropdown, PrimaryButton, TextField } from '@fluentui/react';
const  HelloWorldWebpart:React.FC<IHelloWorldWebpartProps>=(props)=>{
  return(
    <>
    <h4>Hello world</h4>
    <hr/>
    <form>
<TextField
label='Name'
placeholder='write your name here..'
iconProps={{iconName:'people'}}
required={true}
/>
<TextField 
label='Email'
placeholder='write your email here..'
iconProps={{iconName:'mail'}}
type='email'
/>
<TextField
label='Password'
canRevealPassword={true}
type="password"
/>
<TextField
label='Compensation'
prefix='$'
suffix='USD'
/>
<TextField
label='Address'
multiline
rows={5}
/>
{/* Dropdwom */}
<Dropdown
label='Department'
options={[
  {key:"IT",text:"IT"},
  {key:"HR",text:"HR"}
]}
multiSelect
/>
{/* Radio button */}
<ChoiceGroup
label='Gender'
options={[
  {key:"Male",text:"Male"},
  {key:"Female",text:"Femal"}
]}
/>
<br/>
<PrimaryButton
text="Save"
iconProps={{iconName:"save"}}
onClick={()=>alert("I am save button")}
/> &nbsp;&nbsp;&nbsp; 
<PrimaryButton
text="Cancel"
iconProps={{iconName:"cancel"}}
onClick={()=>alert("I am cancel button")}
/>
    </form>
    </>
  )
}
export default  HelloWorldWebpart;
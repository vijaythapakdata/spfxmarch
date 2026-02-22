import * as React from 'react';
import styles from './HelloWorldWebpart.module.scss';
import type { IHelloWorldWebpartProps } from './IHelloWorldWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ChoiceGroup, Dropdown, PrimaryButton, TextField } from '@fluentui/react';
import { ListName } from '../Enum/FixedValues';
import ChildComponent from './ChildComponent';
import UseStateHooks from './ReactHooks/UseStateHooks';
const  HelloWorldWebpart:React.FC<IHelloWorldWebpartProps>=(props)=>{

  //variable and their types-> in js variables are nothing but container to store data and data can be of any type like string, number, boolean, array, object etc. but in ts we have to define the type of variable at the time of declaration.
  //let -> let is volatile that can be change / reasssned after declaration.
  // modern way to decalare variable in js and ts.
  let a="Vijay" ;/// string
  console.log(a); //Vijay
  a="Vijay thapak"
  console.log(a); /// Vijay thapak

  // Const -> const is immutable that can not be change / reasssned after declaration.
  const b="vijay";
  console.log(b); //vijay;

  const childfunc=()=>{
    let num1=10;
     console.log(num1);
    num1=20;
    console.log(num1);
    // String function
    //concat
    let fname="Aman";
    let lname="Khan";
    console.log(fname+" "+lname);

    console.log(fname.concat(" ",lname));

    //toUpperCase
    let str="hello world";
    console.log(str.toUpperCase());

    //toLowerCase
    let str2="HELLO WORLD";
    console.log(str2.toLowerCase());

    //length
    let str3="My name is vijay"
console.log(str3.length);
//slice
let str4="PowerApps";
console.log(str4.slice(0,5));//Power
//alernative
// substring
let str5="PowerApps";
console.log(str5.substring(0,5)); //Power
//includes
let str6="I am SharePoint";
console.log(str6.includes("Point"));//true

//trim
let str7="   Hello world   ";
console.log(str7.trim()); //Hello world

//Array print
let arr1=["Apple","Banana","Orange","grapes","mango","kiwi"];
console.log(arr1); //["Apple","Banana","Orange","grapes","mango","kiwi"]
//foreach-> foreach loop is used to iterate over the array and perform some action on each element of the array.
arr1.forEach((value)=>{
  console.log(value);
});
console.log(arr1.length);//6

//for loop-> for loop is used to iterate over the array and perform some action on each element of the array.
for(let i=0;i<arr1.length;i++){
  console.log(arr1[i]); // 
}
 //while loop-> while loop is used to iterate over the array and perform some action on each element of the array.
  let i=0;
  while(i<arr1.length){
    console.log(arr1[i]);
    i++;
  }
  // do while loop-> do while loop is used to iterate over the array and perform some action on each element of the array.
  let j=0;
  do{
    console.log(arr1[j]);
    j++;
  }while(j<arr1.length);

  //condtional statement-> conditional statement is used to perform different actions based on different conditions.
  let age =25;
  if(age<18){
    console.log("You are a minor");
  }else if(age>=18 && age<60){
    console.log("You are an adult");
  }else{
    console.log("You are a senior citizen");
  }
//sewitch case-> switch case is used to perform different actions based on different conditions.
let day=3;
let dayName="";
switch(day){
  case 1:
    dayName="Sunday";
    break;
  case 2:
    dayName="Monday";
    break;
  case 3:
    dayName="Tuesday";
    break;
  case 4:
    dayName="Wednesday";
    break;
  case 5:
    dayName="Thursday";
    break;
  case 6:
    dayName="Friday";
    break;
  case 7:
    dayName="Saturday";
    break;
  default:
    dayName="Invalid day";
}
console.log(dayName); //Tuesday

let arr3=[1,2,3,4];
let aar4=[5,6,7,8];
//spread operator-> spread operator is used to spread the elements of an array or object into another array or object.
console.log(...arr3,...aar4);
//conversion
//array into string
 let arr3_1=["Apple","Banana","Orange","grapes","mango","kiwi"];
 console.log(arr3_1.join(","));

 //string into integer
 let number1="10";
 let number2=20;
 console.log(parseInt(number1)+number2);//30
 //number into string
 let num3=123;
 console.log(num3.toString()); // "123"
 let date=new Date();
 console.log(date.toLocaleString("en-In"));
 let amount=546789;
 console.log(amount.toLocaleString("en-In",{style:"currency",currency:"INR"})); //₹5,46,789.00
}
let arr2=["Apple","Banana","Orange","grapes","mango","kiwi"];


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

    {/* calling child function */}
    {childfunc()}
    {/* Map function */}
    <h4>Map function</h4>
    {arr2.map((value,index)=>{
      return <p key={index}>{value}</p>
    })}
  <ChildComponent/>
  {props.userDisplayName}
  {/* Counter Application */}
  <p>CounterApplication:</p>
  <UseStateHooks/>
    </>
  )
}
export default  HelloWorldWebpart;
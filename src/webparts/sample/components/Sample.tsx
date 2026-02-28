import * as React from 'react';
// import styles from './Sample.module.scss';
import type { ISampleProps } from './ISampleProps';
import { IFormState } from '../../../CommonMethods/IFormState';
import { CommonSharePointServiceApi } from '../../../Service/SharePointFormApi';
import {sp} from "@pnp/sp/presets/all";
import { Dialog } from '@microsoft/sp-dialog';
import { useState,useCallback,useEffect } from 'react';
import { PrimaryButton, Slider, TextField, Toggle } from '@fluentui/react';
const Sample:React.FC<ISampleProps>=(props)=>{
  const [formdata,setformData]=useState<IFormState>({
    Name:"",
    Email:"",
    Age:"",
    Compensation:"",
    FullAddress:"",
    Permission:false,
    Score:1
  });
  useEffect(()=>{
    sp.setup({
      spfxContext:props.context as any
    });

  },[]);

  const createForm=async()=>{
    try{
const _service=new CommonSharePointServiceApi(props.siteurl);
await _service.addItems(formdata);
Dialog.alert("Form created successfully");
//reset form
setformData({
  Name:"",
  Email:"",
  Age:"",
  Compensation:"",
  FullAddress:"",
  Permission:false,
  Score:1
});
    }
    catch(err){
      Dialog.alert("Error creating form: "+ err);
    }
  }
  //event handlers
  const handleInputChange=useCallback((field:keyof IFormState,value:string|boolean|number):void=>{
    setformData(prev=>({...prev,[field]:value}));
  },[])
  return(
    <>
    <TextField
    label='Name'
    value={formdata.Name}
    onChange={(_,event)=>handleInputChange("Name",event||"")}
    placeholder='enter your name here...'
    />
     <TextField
    label='Email Address'
    value={formdata.Email}
    onChange={(_,event)=>handleInputChange("Email",event||"")}
    placeholder='enter your email here...'
    />
     <TextField
    label='Age'
    value={formdata.Age}
    onChange={(_,event)=>handleInputChange("Age",event||"")}
    placeholder='enter your age here...'
    />
     <TextField
    label='Compensation'
    value={formdata.Compensation}
    onChange={(_,event)=>handleInputChange("Compensation",event||"")}
    placeholder='enter your compensation here...'
    />
    {/* Slider */}
    <Slider
    label='Score'
    min={1}
    max={100}
    value={formdata.Score}
    onChange={(value)=>handleInputChange("Score",value)}
    />
    {/* Boolean */}
    <Toggle
    label='Permission'
    onText='Allowed'
    offText='Denied'
    checked={formdata.Permission}
    onChange={(_,checked)=>handleInputChange("Permission",!!checked)}
    />
     <TextField
    label='Full Address'
    value={formdata.FullAddress}
    onChange={(_,event)=>handleInputChange("FullAddress",event||"")}
    placeholder='enter your full address here...'
    multiline
    rows={5}
    />
    <br/>
    <PrimaryButton
    text='Save'
    onClick={createForm}
    iconProps={{iconName:'Save'}}
    />
    </>
  )
}
export default Sample

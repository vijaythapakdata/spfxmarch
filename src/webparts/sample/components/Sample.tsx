import * as React from 'react';
// import styles from './Sample.module.scss';
import type { ISampleProps } from './ISampleProps';
import { IFormState } from '../../../CommonMethods/IFormState';
import { CommonSharePointServiceApi } from '../../../Service/SharePointFormApi';
import {sp} from "@pnp/sp/presets/all";
import { Dialog } from '@microsoft/sp-dialog';
import { useState,useCallback,useEffect } from 'react';
import { ChoiceGroup, Dropdown, PrimaryButton, Slider, TextField, Toggle } from '@fluentui/react';
import { IPeoplePickerContext, PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { handleAdminPicker, handleManagerPicker } from '../../../CommonMethods/IPeoplePicker';
import { handleSkillsChange } from '../../../CommonMethods/SkillsEvent';
const Sample:React.FC<ISampleProps>=(props)=>{
  const [formdata,setformData]=useState<IFormState>({
    Name:"",
    Email:"",
    Age:"",
    Compensation:"",
    FullAddress:"",
    Permission:false,
    Score:1,
    Admin:"",
    AdminId:0,
    Manager:[],
    ManagerId:[],
    Department:"",
    City:"",
    Gender:"",
    Skills:[]
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
  Score:1,
    Admin:"",
    AdminId:0,
    Manager:[],
    ManagerId:[],
       Department:"",
    City:"",
    Gender:"",
    Skills:[]
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
    prefix='$'
    suffix='USD'
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
    {/* Admin */}
    <PeoplePicker
    context={props.context as any}
    titleText="Admin"
    personSelectionLimit={1}
    showtooltip={true}
    defaultSelectedUsers={[formdata.Admin?formdata.Admin:""]}
    onChange={(items)=>handleAdminPicker(items,setformData)}
    
    principalTypes={[PrincipalType.User]}
    resolveDelay={1000} 
    ensureUser={true}
    webAbsoluteUrl={props.siteurl}
    />
    {/* Manager */}
    <PeoplePicker
    context={props.context as any}
    titleText="Manager"
    personSelectionLimit={2}
    showtooltip={true}
    defaultSelectedUsers={formdata.Manager}
    onChange={(items)=>handleManagerPicker(items,setformData)}
    principalTypes={[PrincipalType.User]}
    resolveDelay={1000} 
    ensureUser={true}
    webAbsoluteUrl={props.siteurl}
    />
    {/* Department */}
    <Dropdown
    label='Department'
    options={props.departmentoptions}
    selectedKey={formdata.Department}
    onChange={(_,options)=>handleInputChange("Department",options?.key as string)}
    placeholder='--select--'
    />
    {/* City */}
    <Dropdown
    label='City'
    options={props.cityoptions}
    selectedKey={formdata.City}
    onChange={(_,options)=>handleInputChange("City",options?.key as string)}
    placeholder='--select--'
    />
    {/* Skills */}
    <Dropdown
    label='Skills'
    options={props.skillsoptions}
   defaultSelectedKeys={formdata.Skills}
   multiSelect
  onChange={(_,option)=>handleSkillsChange(option!,formdata,setformData)}
    placeholder='--select--'
    />
    {/* Radio Button */}
    <ChoiceGroup
    label='Gender'
    options={props.genderoptions}
    selectedKey={formdata.Gender}
    onChange={(_,options)=>handleInputChange("Gender",options?.key as string)}
   
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

import { IFormState } from "./IFormState";
import { IDropdownOption } from "@fluentui/react";

export const handleSkillsChange=(options:IDropdownOption,formData:IFormState,setFormData:React.Dispatch<React.SetStateAction<IFormState>>)=>{
    const selectedkey=options.selected?[...formData.Skills,options?.key as string]:formData.Skills.filter((key:any)=>key!==options.key);
    setFormData(prev=>({...prev,Skills:selectedkey}));
}
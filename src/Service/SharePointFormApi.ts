import {Web} from "@pnp/sp/presets/all";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IFormState } from "../CommonMethods/IFormState";
import { ListName } from "../EnumSharePoint/ListService";
export class CommonSharePointServiceApi{
    private web;
    constructor(siteurl:string){
        this.web=Web(siteurl);

    }
public async addItems(formData:IFormState):Promise<any>{
    try{
const list=this.web.lists.getByTitle(ListName.FirstList); //this will take the list name
const items=await list.items.add({
  Title:formData.Name,
  EmailAddress:formData.Email,
  Age:parseInt(formData.Age),
  Salary:parseFloat(formData.Compensation),
  Address:formData.FullAddress,
  Permission:formData.Permission ,
  Score:formData.Score
});
return items;
    }
    catch(err){
console.log(err);
    }
}
}
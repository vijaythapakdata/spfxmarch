import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ListName } from "../EnumSharePoint/ListService";

export default class GetChoiceValueClassApi{
    private context:WebPartContext;
    constructor(context:WebPartContext){
        this.context=context
    }

    //read choice values here
    public async getDropdownValues(siteurl:string,fieldValue:string):Promise<any>{
        try{
const response=await fetch(`${siteurl}/_api/web/lists/getbytitle('${ListName.FirstList}')/fields?$filter=EntityPropertyName eq '${fieldValue}'`,{
    method:'GET',
    headers:{
        "Accept":"application/json;odata=nometadata",
    }
});
if(!response.ok){
    throw new Error(`Error fetching choice values: ${response.statusText}`);
}
//My Name =>MyName, my_20_x_name
const data=await response.json();
const choices=data.value[0].Choices;
return choices.map((choice:string)=>({key:choice,text:choice})); //{key:"",text:""}
        }
        catch(err){
            console.error(err);
            return [];
        }
    }

    public async LookuValues():Promise<any>{
        try{
const response=await fetch(`${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${ListName.Cities}')/items?$select=Id,Title`,{
    method:'GET',
    headers:{
        "Accept":"application/json;odata=nometadata",
}
        });
        if(!response.ok){
    throw new Error(`Error fetching lookup values: ${response.statusText}`);
}
const data=await response.json();
return data.value.map((city:{Title:string,ID:string})=>({
    key:city.ID,
    text:city.Title
}));

    }

        catch(err){
console.error(err);return [];
        }
    }
}
//interface in typescript -> it is nothing but defines the traits of the fields;
export interface IHelloWorldState{
    Name:string;
    Permission:boolean;
    Age:number;
    Skills:any[];
    Admin?:string;
    City:{
        Title:string;
        id:number
    }
}
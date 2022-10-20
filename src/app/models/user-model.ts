import { dateFormat } from "highcharts";

export class UserModel {
    
    SignUpDate:number = Date.now() ;
    name:string ="";
    email:string = "";
    jobTitle:string="";
    role:string = "";
    passportId:number = 0;
    Expiry:boolean = false;
    verified:boolean = false;
    status:boolean = false;

}

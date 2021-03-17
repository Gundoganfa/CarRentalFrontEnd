import { ResponseModel } from "./responseModel";

export interface Customer{
    customerId:number;
    userId:number;
    companyName:String;
}

export interface CustomerResponseModel extends ResponseModel{
    data:Customer;
}
import { ResponseModel } from "./responseModel";

export interface Brand{
    brandId:number;
    name:String;
}

export interface BrandResponseModel extends ResponseModel{
    data:Brand;
}
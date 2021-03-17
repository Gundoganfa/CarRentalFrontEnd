import { ResponseModel } from "./responseModel";

export interface Color{
    colorId:number;
    name:String;
}

export interface ColorResponseModel extends ResponseModel{
    data:Color;
}

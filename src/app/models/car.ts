import { ResponseModel } from "./responseModel";

export interface Car{
    carId:number;
    brandId:number;
    colorId:number;
    modelYear:number;
    dailyPrice:number;
    description:string;
}

export interface CarResponseModel extends ResponseModel{
    data:Car;
}

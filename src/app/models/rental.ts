import { ResponseModel } from "./responseModel";

export interface Rental{
    id:number;
    carId:number;
    customerId:number;
    rentDate:string;
    returnDate:string;
}

export interface RentalDto{
    rentalId:number;
    carId:number;

    customerId:number;
    customerName:String;
    customerSurname:String;
    
    dailyPrice:number;
    rentDate:string;
    returnDate:string;
}

export interface RentalResponseModel extends ResponseModel{
    data:Rental;
}

export interface RentalDtoResponseModel extends ResponseModel{
    data:RentalDto;
}
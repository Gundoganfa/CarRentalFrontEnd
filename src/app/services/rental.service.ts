import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental, RentalDto } from '../models/rental';

@Injectable({
  providedIn: 'root'
})

export class RentalService {
  apiUrl="https://localhost:44325/api/";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/GetAll";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  
  getRentalDetails():Observable<ListResponseModel<RentalDto>>{
    let newPath = this.apiUrl + "rentals/GetRentalDetails";
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath);
  }
}

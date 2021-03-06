import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
}) 

export class CarService {
  apiUrl="https://localhost:44325/api/";

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getAll";

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
}) 

export class CustomerService {
  apiUrl="https://localhost:44325/api/";

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl+"customers/getAll";

    return this.httpClient.get<ListResponseModel<Customer>>(newPath)
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentaldetails:RentalDto[]=[];
  dataloaded=false;

  constructor(private httpClient:HttpClient, private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentaldetails = response.data,
      this.dataloaded = true;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/ListResponseModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  dataLoaded = false;

  constructor(private httpClient:HttpClient, private brandService:BrandService) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.getBrands();
  }

  getBrands() {
    console.log("getBrands() Called!");   
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data,
      this.dataLoaded = true;
    });
  } 
}

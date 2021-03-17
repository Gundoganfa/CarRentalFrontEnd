import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})

export class ColorComponent implements OnInit {
  colors:Color[]=[];
  dataLoaded=false;

  constructor(private httpClient:HttpClient, private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  private getColors(){
    console.log("getColors() Called!");  
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data,
      this.dataLoaded = true;
    });
  }

}

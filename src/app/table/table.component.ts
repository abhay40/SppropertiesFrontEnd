import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Property } from "../property";
import { AppRoutingModule } from "../app-routing/app-routing.module";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  properties = [];

  p: Property = <any>Property;

  flag = false;






  constructor(private appService: AppService,
    
  ) { }

  ngOnInit(): void {

    this.appService.getProperties().subscribe((data) => {

      this.properties = data;
      var date = new Date(this.properties[0].timeAllotted);




    }, (err) => {

      console.log(err);

    });
  }

  OnDelete(id: number): void {
    this.appService.DeleteProperty(id)
      .subscribe(id => {
        this.appService.getProperties().subscribe((data) => {
          this.properties = data;
        }),
          err => {
            console.log(err);
          }
      })
  }


  OnEdit(property) {
    //console.log(property);
   




    this.p.Advance = property.advance;
    this.p.Commision = property.commission;
    this.p.PropertyName = property.pName;
    this.p.PropertyCost = property.pCost;
    this.p.PropertySize = property.propSize;
    this.p.EntryDate = property.entryDt;
    this.p.TimeAlloted = property.timeAllotted;
    this.p.TotalCost = property.totalCost;
    console.log('property cost is ',this.p.PropertyCost);

    if (this.p != undefined || this.p != null) {
      this.flag = true;
    } else {
      this.flag = false;
    }



    //console.log(property); 


  }




}

import { Component, OnInit } from '@angular/core';
import { Property } from "../property";
import { FormsModule } from '@angular/forms';
import { AppService } from "../app.service";

import * as $ from 'jquery';

//declare let $:any;

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})



export class PropertyFormComponent implements OnInit {

  property: Property = <any>Property;
  submitted = false;


  Back() {

    $("#addEmployeeModal").css("display", "none");
    $("#addEmployeeModal").css("padding-right", "0px");
    $("#addEmployeeModal").removeClass("show");
    //$("#addEmployeeModal").attr('aria-hidden', true);
    //$("#addEmployeeModal").attr('aria-modal', false);


  }

  properties = [];


  constructor(private appService: AppService) { }

  ngOnInit(): void {

    this.appService.getProperties().subscribe((data) => {

      this.properties = data;
      //console.log(this.properties[8].pId);



    }, (err) => {

      console.log(err);

    });
  }

  onSubmit(property: Property): void {
    //console.log('date before modify ',property.EntryDate)
    var date = new Date(property.EntryDate).getTime();
    var AllotedDate = new Date(property.TimeAlloted).getTime();
    var body = {
      pName: property.PropertyName,
      entryDt: date.toString(),
      advance: property.Advance,
      commission: property.Commision,
      propSize: property.PropertySize,
      depositamount: property.DepositAmount,
      timeAllotted: AllotedDate.toString(),
      totalCost: property.TotalCost,
      pCost: property.PropertyCost

    }
    console.log('fetched data from form in comp is ', body);

    if (!property) {
      return;
    }
    else {
      this.appService.addProperty(body)
        .subscribe(

          (data) => {
            console.log('Sucess', data)
          },
          err => {
            console.log(err)
          }
        )
    }

  }
}

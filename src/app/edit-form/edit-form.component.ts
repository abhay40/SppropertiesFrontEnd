import { CompileShallowModuleMetadata, Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../property';
import { AppService } from "../app.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  property:any = {};

  id: number;
  date: Date;

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;

    this.appService.getPropertiesById(this.id).subscribe((data) => {

      data.entryDt = new Date(+data.entryDt).getFullYear() + '-' + new Date(+data.entryDt).getMonth() + 1 + '-' + new Date(+data.entryDt).getDate();
      this.property = data;
      //console.log(this.property);
      //console.log(data); 
    }, (err) => {

      console.log(err);

    });
  }

  onEdit(property:Property)
  {
    //console.log(property);
    var today = new Date().getTime();
    var date = new Date(this.property.entryDt).getTime();
    //var AllotedDate = new Date(this.property.timeAlloted).getTime();
    var body = {
      pId: this.property.pId,
      pName: this.property.pName,
      entryDt: date.toString(),
      advance: this.property.advance,
      commission: this.property.commission,
      propSize: this.property.propSize,
      depositamount: this.property.depositamount,
      timeAllotted: this.property.timeAllotted,
      totalCost: this.property.totalCost,
      modDt: today.toString(),
      pCost: this.property.pCost
    }
    console.log('fetched data from form in comp is ', body);
    this.appService.UpdateProperty(body)
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

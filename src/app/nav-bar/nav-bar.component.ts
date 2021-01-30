import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
//import { Console } from 'console';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchText = '';
  
  

  constructor() { }

  ngOnInit(): void {

  console.log(this.searchText);
  }

  openPropertyForm() {
    $("#addEmployeeModal").css("display", "block");
    $("#addEmployeeModal").css("padding-right", "15px");
    $("#addEmployeeModal").addClass("show");
  }
   
   


}

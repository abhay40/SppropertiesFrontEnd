import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PropertyFormComponent } from "../property-form/property-form.component";
import { RouterModule, Routes } from '@angular/router';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { AppComponent } from '../app.component';
import { TableComponent } from '../table/table.component';

    const routes: Routes = [
        
        { path: 'edi',component: PropertyFormComponent},
        { path:'edit/:id',component:EditFormComponent},
        { path: 'app' , component:AppComponent},
        {path: 'table',component:TableComponent}
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
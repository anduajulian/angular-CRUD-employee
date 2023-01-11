import { NgModule } from "@angular/core";
import { EmployeeSaveComponent } from './employee-save/employee-save.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRouter } from "./employee.router";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    EmployeeSaveComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports : [
    EmployeeRouter,
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ]
})

export class EmployeeModule{}

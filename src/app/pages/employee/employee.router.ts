import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeSaveComponent } from "./employee-save/employee-save.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";

const routes : Routes = [
    {
        path : 'new',
        component : EmployeeSaveComponent
    },
    {
        path : 'list',
        component : EmployeeListComponent
    },
    {
        path : ':id',
        component : EmployeeDetailComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})

export class EmployeeRouter{}

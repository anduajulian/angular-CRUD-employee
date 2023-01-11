import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeApp';
  employee:any = {
    id: '', username : '', firstName : '', lastName : '', email : '', birthDate : '', basicSalary : '', status : '', group : '', description : '-'
  };
  dataEmployee:any []= [{
    id: 0, username : '', firstName : '', lastName : '', email : '', birthDate : '', basicSalary : '', status : '', group : '', description : ''
  }];
  randomName = [
    "Shelby",
    "Giodani",
    "Asep",
    "Agus",
    "Ahmad",
    "Putri",
    "Anisa"
  ];
  statusList = [
    "Aktif",
    "Cuti",
    "Cuti Hamil",
    "Pensiun",
    "Out"
  ];
  groupList = [
    "Front Office",
    "Back Office",
    "Supervise",
    "Group1",
    "Group2",
    "Group3",
    "Group4",
    "Group5",
    "Group6",
    "Group7",
  ];
}

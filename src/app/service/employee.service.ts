import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import * as listName from '../mock/list-name.json'
import * as listGroup from '../mock/list-group.json'
import * as listStatus from '../mock/list-status.json'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  dataEmployee: Employee[] = []
  searchValue: string = ""
  searchBy: keyof Employee = "username"

  constructor() { }

  initData(i : number): void {
    for(var x=0; x < i; x++){
      const firstName = listName[Math.floor(Math.random() * 7)];
      const lastName = Math.floor(Math.random()*16777215).toString(16);

      this.dataEmployee.push({
        id: x+1,
        username: `${firstName.toLowerCase()}${lastName}`,
        firstName: firstName,
        lastName: lastName,
        email: `${firstName}${lastName}@gmail.com`,
        birthDate: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 30) + 1}/${Math.floor(Math.random() * (2005 - 1950)) + 1950}`,
        basicSalary: +`${Math.floor(Math.random() * 20) + 5}000000`,
        status: listStatus[Math.floor(Math.random() * 5)],
        group: listGroup[Math.floor(Math.random() * 3)],
        description: '-'
      })
    }
  }

  getAll() :  Observable<Employee []> {
    const employees = of(this.dataEmployee)
    return employees
  }

  getById(index: number): Employee{
    return this.dataEmployee[index]
  }

  insert(employee: Employee): void{
    this.dataEmployee.push(employee);
  }

  setSearch(input: string){
    this.searchValue = input
  }

  setSearchBy(input: keyof Employee){
    this.searchBy = input
  }

}

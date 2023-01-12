import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, map } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';
import * as listGroup from 'src/app/mock/list-group.json'
import * as listStatus from 'src/app/mock/list-status.json'
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  dataDetail : Employee = new Employee
  listGroups : any [] = []
  listStatus : any [] = []
  idEmployee : any

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData()
    for(let i in listStatus){
      if(+i < 5 ){
        this.listStatus.push(listStatus[i])
      }
    }

    for(let i in listGroup){
      if(+i < 10 ){
        this.listGroups.push(listGroup[i])
      }
    }
  }

  async getData() : Promise<void> {
    try{
      const result = await firstValueFrom(this.activatedRoute.params.pipe(map(result => result)))
      this.idEmployee = (result as any).id
      this.dataDetail = this.employeeService.getById(this.idEmployee - 1)
    }
    catch(error){
      console.log(error);

    }
  }

}

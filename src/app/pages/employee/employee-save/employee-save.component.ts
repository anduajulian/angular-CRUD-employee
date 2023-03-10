import { Component, OnInit } from '@angular/core';
import * as listGroup from 'src/app/mock/list-group.json'
import * as listStatus from 'src/app/mock/list-status.json'
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-save',
  templateUrl: './employee-save.component.html',
  styleUrls: ['./employee-save.component.css']
})
export class EmployeeSaveComponent implements OnInit {

  newData : Employee = new Employee()
  listGroups : any [] = []
  listStatus : any [] = []
  ruleSalary : boolean = false
  ruleBirthDate : boolean = false
  ruleEmail: boolean = false
  today : any
  alertDone: boolean = false

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    for(let i in listGroup){
      if(+i < 10 ){
        this.listGroups.push(listGroup[i])
      }
    }

    for(let i in listStatus){
      if(+i < 10 ){
        this.listStatus.push(listStatus[i])
      }
    }

    this.today = new Date ()
  }

  onFocus(): void {
    if(isNaN(this.newData.basicSalary)){
      this.ruleSalary = true
    }else{
      this.ruleSalary = false
    }
  }

  submit(): void {
    const dataDateTemp = this.newData.birthDate.split("-")

    // check input basicsalary
    if(isNaN(this.newData.basicSalary)){
      this.ruleSalary = true;
    }else{
      this.ruleSalary = false
    }

    //check email  format
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.newData.email))) {
      this.ruleEmail = true
    }else{
      this.ruleEmail = false;
    }

    //check date
    if(this.today.getFullYear() >= +dataDateTemp[0]){
      if((this.today.getMonth() + 1) >= +dataDateTemp[1]){
        if(this.today.getDate() < +dataDateTemp[2]){
          this.ruleBirthDate = true;
        }else{
          this.ruleBirthDate = false;
        }
      }else{
        this.ruleBirthDate = false;
      }
    }else{
      this.ruleBirthDate = false;
    }

    if(!this.ruleSalary && !this.ruleBirthDate && !this.ruleEmail){
      this.newData.id = this.employeeService.dataEmployee.length + 1
      this.newData.status = "Aktif"
      this.employeeService.insert(this.newData)
      this.alertDone = true;
    }

  }

}

import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-employee-save',
  templateUrl: './employee-save.component.html',
  styleUrls: ['./employee-save.component.css']
})
export class EmployeeSaveComponent implements OnInit {

  newData : any
  listGroups : any [] = []
  ruleSalary : boolean = false
  ruleBirthDate : boolean = false
  ruleEmail: boolean = false
  today : any
  alertDone: boolean = false

  constructor(private base : AppComponent) { }

  ngOnInit(): void {
    this.newData = this.base.employee
    this.listGroups = this.base.groupList
    this.today = new Date ()
  }

  submit(): void {
    const checkNum = this.newData.basicSalary.split('')
    const dataDateTemp = this.newData.birthDate.split("-")

    //check input basicsalary
    if(checkNum.some(isNaN)){
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
    if(this.today.getFullYear >= dataDateTemp[2]){
      if((this.today.getMonth + 1) >= dataDateTemp[1]){
        if(this.today.getDate > dataDateTemp[0]){
          this.ruleBirthDate = true;
        }
      }
    }else{
      this.ruleBirthDate = false;
    }

    if(!this.ruleSalary && !this.ruleBirthDate && !this.ruleEmail){
      this.newData.id = this.base.dataEmployee.length + 1
      this.newData.status = "Aktif"
      this.base.dataEmployee.push(this.newData)
      this.alertDone = true;
    }

  }

}

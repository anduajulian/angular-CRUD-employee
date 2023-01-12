import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() user : any;
  dataUser : any;
  err : boolean = false;

  constructor(private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.user = {
      username:"",
      password:"",
    }
    this.dataUser = {
      username:"admin",
      password:"admin",
    }
  }

  login(): void {
    if(this.user.username == this.dataUser.username && this.user.password == this.dataUser.password){
      this.err = false;
      this.router.navigateByUrl('/employee/list')
      this.employeeService.initData(100)
    }else{
      this.err = true;
    }

  }

  // generateData(i : any){
  //   this.base.dataEmployee.length=0;

  //   for(var x=0; x < i; x++){
  //     const firstName = this.base.randomName[Math.floor(Math.random() * 7)];
  //     const lastName = Math.floor(Math.random()*16777215).toString(16);

  //     this.base.dataEmployee.push({
  //       id: x+1,
  //       username: `${firstName.toLowerCase()}${lastName}`,
  //       firstName: firstName,
  //       lastName: lastName,
  //       email: `${firstName}${lastName}@gmail.com`,
  //       birthDate: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 30) + 1}/${Math.floor(Math.random() * (2005 - 1950)) + 1950}`,
  //       basicSalary: `Rp. ${Math.floor(Math.random() * 20) + 5}.000.000,00`,
  //       status: this.base.statusList[Math.floor(Math.random() * 5)],
  //       group: this.base.groupList[Math.floor(Math.random() * 3)],
  //       description: '-'
  //     })
  //   }

  //   return this.base.dataEmployee;
  // }

}

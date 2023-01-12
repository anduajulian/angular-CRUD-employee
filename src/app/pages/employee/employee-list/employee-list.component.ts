import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/employee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  allData : Employee[] = []
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];
  searchValue : string = ""
  searchCategories :any [] = []
  searchBy: keyof Employee = "username"
  sortBy: keyof Employee = "id"
  isSearch : boolean = false;
  isSort : boolean = false;
  employeeSubs?:  Subscription

  constructor(private router : Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAll()
    this.count = this.allData.length
    if(this.employeeService.searchValue != ""){
      this.searchValue = this.employeeService.searchValue
      this.searchBy = this.employeeService.searchBy
      this.doSearch()
    }
    this.searchCategories = [
      {
        label: "Username",
        value: "username"
      },
      {
        label: "Email",
        value: "email"
      },
      {
        label: "Status",
        value: "status"
      },
    ]
  }

  getAll() {
    this.employeeSubs = this.employeeService.getAll().subscribe(employees => this.allData = employees)
  }

  handlePageChange(event: number): void {
    this.page = event;
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }

  handleSearchParam(event: any): void {
    this.searchBy = event.target.value;
  }

  handleSortParam(event: any): void {
    this.sortBy = event.target.value;
    this.allData = this.allData.sort((a, b) => {
      let fa = a[this.sortBy].toString().toLowerCase(),
          fb = b[this.sortBy].toString().toLowerCase();

      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  });
  this.isSort = true;
  }

  doSearch(): void {
    this.employeeService.setSearch(this.searchValue)
    this.employeeService.setSearchBy(this.searchBy)
    this.page = 1;
    this.allData = this.allData.filter(obj => obj[this.searchBy].toString().toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase()) );
    this.count = this.allData.length;
    this.isSearch = true;
  }

  removeSearch(): void {
    this.page = 1;
    this.employeeService.getAll().subscribe(employees => this.allData = employees)
    this.searchValue = ""
    this.searchBy = "username"
    this.count = this.allData.length;
    this.isSearch = false;
  }

  removeSort(): void {
    this.page = 1;
    this.sortBy = "username"
    this.isSort = false;
    this.allData = this.allData.sort((a, b) => {
      return a.id - b.id;
    });
  }

  detailEmployee(id: number):void {
    this.router.navigateByUrl(`employee/${id}`)
  }

  ngOnDestroy(): void {
    this.employeeSubs?.unsubscribe()
  }

}

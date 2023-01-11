import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  allData :any [] = []
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];
  searchValue : string = ""
  searchCategories :any [] = []
  searchBy : string = "username"
  isSearch : boolean = false;

  constructor(private router : Router, private base: AppComponent) { }

  ngOnInit(): void {
    this.allData = this.base.dataEmployee
    this.count = this.allData.length
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

  doSearch(): void {
    this.page = 1;
    this.allData = this.allData.filter((obj) => obj[`${this.searchBy}`] == this.searchValue );
    this.count = this.allData.length;
    this.isSearch = true;
  }

  removeSearch(): void {
    this.page = 1;
    this.allData = this.base.dataEmployee;
    this.count = this.allData.length;
    this.isSearch = false;
  }

  detailEmployee(id: string):void {
    this.router.navigateByUrl(`employee/${id}`)
  }

}

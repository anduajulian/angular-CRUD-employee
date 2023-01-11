import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, map } from 'rxjs';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  dataDetail : any
  listGroups : any [] = []
  listStatus : any [] = []
  idEmployee : any

  constructor(private base: AppComponent, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData()
    this.listGroups = this.base.groupList
    this.listStatus = this.base.statusList
  }

  async getData() : Promise<void> {
    try{
      const result = await firstValueFrom(this.activatedRoute.params.pipe(map(result => result)))
      this.idEmployee = (result as any).id
      this.dataDetail = this.base.dataEmployee[this.idEmployee - 1]
    }
    catch(error){}
  }

}

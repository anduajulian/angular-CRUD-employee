import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { NavbarModule } from "./pages/navbar/navbar.module";

const routes: Routes = [
  {
    path : 'login',
    loadChildren : () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path : 'employee',
    component : NavbarComponent,
    loadChildren : () => import('./pages/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path : '',
    redirectTo : '/login',
    pathMatch : 'full'
}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NavbarModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }

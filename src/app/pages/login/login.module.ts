import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginRouter } from "./login.router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations : [
        LoginComponent
    ],
    imports : [
        LoginRouter,
        FormsModule,
        CommonModule
    ]
})
export class LoginModule{}

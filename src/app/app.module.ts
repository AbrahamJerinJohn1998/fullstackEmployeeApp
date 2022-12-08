import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeesearchComponent } from './employeesearch/employeesearch.component';
const myRoute:Routes=[
  {
    path:"add",
    component:EmployeeaddComponent
  },
  {
    path:"view",
    component:EmployeeviewComponent
  },
  {
    path:"search",
    component:EmployeesearchComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeaddComponent,
    EmployeeviewComponent,
    NavbarComponent,
    EmployeesearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

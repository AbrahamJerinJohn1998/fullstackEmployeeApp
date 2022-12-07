import { Component } from '@angular/core';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent {
  name=""
designation=""
salary=""
PhoneNo=""
email=""
cname=""
yearOfExpereince=""
readValues=()=>
{
 let data:any={
  "name":this.name,
  "designation":this.designation,
  "salary":this.salary,
  "PhoneNo":this.PhoneNo,
  "email":this.email,
  "cname":this.cname,
  "yearOfExpereince":this.yearOfExpereince
    } 
    console.log(data)
}


}

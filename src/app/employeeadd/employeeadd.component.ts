import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent {
  name=""
designation=""
salary=""
phoneNo=""
email=""
cname=""
code=""
yearOfExpereince=""
constructor(private api:ApiService){}
readValues=()=>
{
 let data:any={
  "code":this.code,
  "name":this.name,
  "designation":this.designation,
  "salary":this.salary,
  "phoneNo":this.phoneNo,
  "email":this.email,
  "cname":this.cname,
  "yearOfExpereince":this.yearOfExpereince
    } 
    console.log(data)
    this.api.addEmployee(data).subscribe(
  
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Employee added successfully")
          this.code=""
          this.name=""
          this.designation=""
          this.salary=""
          this.phoneNo=""
          this.email=""
          this.cname=""
        } else {
          alert("Something went wrong")
        }
      }
    
  )
}


}

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.css']
})
export class EmployeesearchComponent {
  constructor(private api:ApiService){}
code=""
searchData:any=[]
readValues=()=>
{
  let data:any={"code":this.code}
  console.log(data)
  this.api.searchEmployee(data).subscribe(
  
    (response:any)=>{
      console.log(response)
      if (response.length==0) {
        alert("Invalid employee code")
      } else {
        this.searchData=response;
        
      }
    }
  
)
}
}

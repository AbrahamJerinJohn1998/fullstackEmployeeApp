import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchEmployee=()=>
  {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  addEmployee=(dataToSend:any)=>
  {
    return this.http.post("http://mylinkurcodesapp.herokuapp.com/addcourse",dataToSend)
  }
}
